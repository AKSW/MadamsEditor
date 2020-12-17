import yarrrml from '@rmlio/yarrrml-parser/lib/rml-generator'
const N3 = require('n3');
const { DataFactory } = N3;
const { namedNode, literal, defaultGraph, quad } = DataFactory;

let _GLOBAL = {
    instance: null,
    config: {
        defaults: {
            dataUrl: 'example-data.json',
            mappingUrl: 'example-mapping.yml',
            rmlMapperUrl: 'http://localhost:3000/rmlmapper'
        }

    },
    prefixes: {
        as: "https://www.w3.org/ns/activitystreams#",
        dqv: "http://www.w3.org/ns/dqv#",
        duv: "https://www.w3.org/TR/vocab-duv#",
        cat: "http://www.w3.org/ns/dcat#",
        qb: "http://purl.org/linked-data/cube#",
        grddl: "http://www.w3.org/2003/g/data-view#",
        ldp: "http://www.w3.org/ns/ldp#",
        oa: "http://www.w3.org/ns/oa#",
        ma: "http://www.w3.org/ns/ma-ont#",
        owl: "http://www.w3.org/2002/07/owl#",
        rdf: "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
        rdfa: "http://www.w3.org/ns/rdfa#",
        rdfs: "http://www.w3.org/2000/01/rdf-schema#",
        rif: "http://www.w3.org/2007/rif#",
        rr: "http://www.w3.org/ns/r2rml#",
        skos: "http://www.w3.org/2004/02/skos/core#",
        skosxl: "http://www.w3.org/2008/05/skos-xl#",
        wdr: "http://www.w3.org/2007/05/powder#",
        void: "http://rdfs.org/ns/void#",
        wdrs: "http://www.w3.org/2007/05/powder-s#",
        xhv: "http://www.w3.org/1999/xhtml/vocab#",
        xml: "http://www.w3.org/XML/1998/namespace",
        xsd: "http://www.w3.org/2001/XMLSchema#",
        prov: "http://www.w3.org/ns/prov#",
        sd: "http://www.w3.org/ns/sparql-service-description#",
        org: "http://www.w3.org/ns/org#",
        gldp: "http://www.w3.org/ns/people#",
        cnt: "http://www.w3.org/2008/content#",
        dcat: "http://www.w3.org/ns/dcat#",
        earl: "http://www.w3.org/ns/earl#",
        ht: "http://www.w3.org/2006/http#",
        ptr: "http://www.w3.org/2009/pointers#",
        cc: "http://creativecommons.org/ns#",
        ctag: "http://commontag.org/ns#",
        dc: "http://purl.org/dc/terms/",
        dc11: "http://purl.org/dc/elements/1.1/",
        dcterms: "http://purl.org/dc/terms/",
        foaf: "http://xmlns.com/foaf/0.1/",
        gr: "http://purl.org/goodrelations/v1#",
        ical: "http://www.w3.org/2002/12/cal/icaltzd#",
        og: "http://ogp.me/ns#",
        rev: "http://purl.org/stuff/rev#",
        sioc: "http://rdfs.org/sioc/ns#",
        v: "http://rdf.data-vocabulary.org/#",
        vcard: "http://www.w3.org/2006/vcard/ns#",
        schema: "http://schema.org/",
        describedby: "http://www.w3.org/2007/05/powder-s#describedby",
        license: "http://www.w3.org/1999/xhtml/vocab#license",
        role: "http://www.w3.org/1999/xhtml/vocab#role",
        ssn: "http://www.w3.org/ns/ssn/",
        sosa: "http://www.w3.org/ns/sosa/",
        time: "http://www.w3.org/2006/time#"
    }
};

export default class MadamsEditor {

    constructor(config) {
        if (_GLOBAL.instance) {
            return _GLOBAL.instance;
        }

        this.config = Object.assign(_GLOBAL.config, _GLOBAL.config.defaults, config);
        console.log('Welcome to MadamsEditor. Config:', this.config);

        this.ui = new MadamsEditor_UI();
        this.parser = new MadamsEditor_Parser();

        this.ui.init(this);
        this.parser.init(this);
        _GLOBAL.instance = this;
    }
}

class MadamsEditor_UI {

    init(parent) {
        this.config = parent.config;
        this.parser = parent.parser;

        this.initEditors();
        if (this.config.dataUrl != "") {
            this.loadExampleData(this.config.dataUrl, this.dataEditor);
        }
        if (this.config.mappingUrl != "") {
            this.loadExampleData(this.config.mappingUrl, this.yarrrmlEditor);
        }

        // init run btn event
        document.querySelector("#convert-btn").addEventListener("click", (e) => {
            this.handleClickRunBtn(e);
            e.preventDefault();
        })
    }

    initEditors() {
        const self = this;
        let handleUpdateYarrmlEditorTimeout;
        this.yarrrmlEditor = ace.edit("yarrrml-editor")
        this.yarrrmlEditor.setTheme("ace/theme/tomorrow")
        this.yarrrmlEditor.session.setMode("ace/mode/yaml")
        this.yarrrmlEditor.session.on("change", () => {
            clearTimeout(handleUpdateYarrmlEditorTimeout)
            handleUpdateYarrmlEditorTimeout = setTimeout(() => {
                self.handleUpdateYarrmlEditor();
            }, 1500)
        })

        this.dataEditor = ace.edit("json-editor")
        this.dataEditor.setTheme("ace/theme/tomorrow")
        // this.jsonEditor.setReadOnly(true);  // false to make it editable
        this.dataEditor.session.setMode("ace/mode/json")

        this.outEditor = ace.edit("out-editor")
        this.outEditor.setTheme("ace/theme/tomorrow")
        this.outEditor.session.setMode("ace/mode/turtle")
        // this.outEditor.setReadOnly(true);  // false to make it editable
    }

    handleClickRunBtn(e) {
        const btn = e.target.closest("#convert-btn");
        btn.classList.add('disabled')
        btn.querySelector(".loader").classList.remove("d-none");
        btn.querySelector(".bi").classList.add("d-none");

        this.cleanupMessages();

        this.parser.runMapping()
        .then(result => {
            return this.parser.rdf2Turtle(result)
        })
        .then(result => {
            result = result.replace(/\.\n([\w\<])/g, ".\n\n$1");
            if (document.querySelector("#out-wrapper").classList.contains("d-none")) {
                document.querySelector("#out-wrapper").classList.remove("d-none");
                document.querySelector("#out-wrapper").scrollIntoView({ left: 0, block: 'start', behavior: 'smooth' });
            }
            this.outEditor.setValue(result);
            this.outEditor.clearSelection();
        })
        .catch(e => {
            this.addMessage('error', 'RML Mapper failed: ' + e);
        })
        .finally(result => {
            btn.classList.remove('disabled')
            btn.querySelector(".loader").classList.add("d-none");
            btn.querySelector(".bi").classList.remove("d-none");
        })
    }

    handleUpdateYarrmlEditor() {
        this.cleanupMessages();

        const inputData = this.dataEditor.getValue();
        let mappingStr = this.yarrrmlEditor.getValue();
        mappingStr = this.parser.yarrrmlExtend(mappingStr);
        mappingStr = this.parser.yarrrmlEncodeBrackets(mappingStr);

        this.parser.yarrrml2RML(mappingStr)
        .then(rml => {})
        .catch(e => {
            this.addMessage('error', e);
        })
    }

    loadExampleData(url = "", target = null) {
        fetch(url)
        .then(data => {
            if (!data.ok) {
                throw new Error('Network response was not ok');
            }
            return data.text()
        })
        .then(text => {
            target.setValue(text);
            target.clearSelection();
        })
        .catch(error => {
            this.addMessage('error', 'Fetch example data failed. ' + error)
        });
    }

    addMessage(type, ...message) {
        console.log(type, message);
        const wrapper = document.querySelector("#messages-wrapper");
        const closeBtn = '<button type="button" class="close ml-2" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>'
        const alertEl = $('<div class="alert" role="alert">' + message.toString() + closeBtn + '</div>');

        switch (type) {
            case 'error':
                alertEl.addClass('alert-danger')
                break;

            case 'success':
                alertEl.addClass('alert-success')
                break;

            default:
                break;
        }
        $(wrapper).append(alertEl)
    }

    cleanupMessages() {
        const wrapper = document.querySelector("#messages-wrapper");
        wrapper.innerHTML = "";
    }
}

class MadamsEditor_Parser {

    escapeTable = {
        '(': '\\$LBR',
        ')': '\\$RBR',
        '{': '\\$LCB',
        '}': '\\$RCB',
      };

    init(parent) {
        this.config = parent.config;
        this.ui = parent.ui;
    }

    runMapping() {
        const self = this;
        const inputData = this.ui.dataEditor.getValue();
        let mappingStr = this.ui.yarrrmlEditor.getValue();
        mappingStr = this.yarrrmlExtend(mappingStr);
        mappingStr = this.yarrrmlEncodeBrackets(mappingStr);

        return new Promise((resolve, reject) => {
            this.yarrrml2RML(mappingStr)
            .then(rml => {
                return fetch(self.config.rmlMapperUrl, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        rml: rml,
                        sources: { 'data.json': inputData }
                    })
                });
            })
            .then(response => {
                if (!response.ok) {
                    return response.text().then(e => {
                        e = JSON.parse(e);
                        if (e.error)
                            throw new Error(e.error);
                        else
                            throw new Error('Something went wrong');
                    })
                }
                return response.text()
            })
            .then(data => {
                data = self.decodeRMLReplacements(data);
                resolve(data);
            })
            .catch(e => {
                console.log(e);
                reject(e.toString())
            })

        })
    }


    yarrrmlExtend(yarrrml) {
        // replace function
        let str = yarrrml.replace(
            /((?:parameters|pms): *\[)([\w@^./$()"' ,[\]|=:]+)(\])/g,
            (...e) => {
            const [, cg1, cg2, cg3] = e;
            const params = cg2
                .split(',')
                .map((el, i) => `[schema:str${i}, ${el.trim()}]`)
                .join(', ');
            return cg1 + params + cg3;
            },
        );
        // replace join
        str = str.replace(
            /join: *\[ *"?([\w@^./$:\-*, ')()]+)"? *, *"?([\w@^./$:\-*, '()]+)"? *\]/g,
            'condition:{function:equal,parameters:[[str1,"$($1)"],[str2,"$($2)"]]}',
        );
        return str;
    }

    yarrrmlEncodeBrackets (str) {
        let level = 0;
        let ret = '';

        for (let i = 0; i < str.length; i += 1) {
          const c = str[i];

          if (level < 0) {
            throw new Error('failed parsing brackets');
          }

          if (level === 0) {
            switch (c) {
              case '$':
                if (str[i + 1] === '(') {
                  level += 1;
                  i += 1;
                  ret += '$(';
                } else {
                  ret += c;
                }
                break;
              case '(':
              case ')':
              default:
                ret += c;
            }
          } else {
            switch (c) {
              case '(':
                level += 1;
                ret += '$LBR';
                break;
              case ')':
                level -= 1;
                if (level === 0) {
                  ret += ')';
                } else {
                  ret += '$RBR';
                }
                break;
              default:
                ret += c;
            }
          }
        }
        return ret;
    }

    decodeRMLReplacements (rml) {
        return Object.entries(this.escapeTable).reduce(
            (str, [char, code]) => str.replace(new RegExp(code, 'g'), char),
            rml,
        );
    }

    yarrrml2RML(yaml) {
        const self = this;
        const y2r = new yarrrml();
        const writer = new N3.Writer();
        let quads;
        try {
            quads = y2r.convert(yaml)
            if(typeof y2r.getMessages !== 'undefined') {
                const messages = y2r.getMessages()
                messages.forEach(message => {
                    self.ui.addMessage(message.type, message.text);
                });
            }
        } catch (e) {
            return new Promise((resolve, reject) => {
                reject('Generate the RML mapping from YARRRML failed. ' + e)
            });
        }

        quads.forEach(q => {
            if (q.object.termType === "Literal") {
                writer.addQuad(quad(
                    namedNode(q.subject.value),
                    namedNode(q.predicate.value),
                    literal(q.object.value)
                ))
            } else {
                writer.addQuad(
                    namedNode(q.subject.value),
                    namedNode(q.predicate.value),
                    namedNode(q.object.value)
                )
            }
        });
        return new Promise((resolve, reject) => {
            writer.end( (err,doc) => {
                if (err) {
                    return reject(e);
                }
                resolve(doc)
            });
        });
    }

    rdf2Turtle(rdf) {
        const self = this;
        const parser = new N3.Parser();
        const prefixes = self.getUsedPrefixes();
        const outWriter = new N3.Writer({
            format: "turtle",
            prefixes: prefixes
        });

        return new Promise((resolve, reject) => {
            parser.parse(rdf, (err, quad, prefixes) => {
                if (err) {
                    return reject('N3 parser error: ' + err);
                }
                if (quad) {
                    outWriter.addQuad(quad)
                } else {
                    outWriter.end((err,outTtl)=>{
                        if (err) {
                            return reject('N3 parser error: ' + err);
                        }
                        resolve(outTtl);
                    });
                }
            })
        });
    }


    getUsedPrefixes() {
        const self = this;
        const yaml = this.ui.yarrrmlEditor.getValue()
        let prefixes = {};
        prefixes.rdf = _GLOBAL.prefixes.rdf;
        Object.keys(_GLOBAL.prefixes).forEach(pre=>{
            if (yaml.indexOf(`${pre}:`) >= 0) {
                prefixes[pre] = _GLOBAL.prefixes[pre]
            }
        });
        try {
            let json = YAML.parse(yaml);
            if (json.prefixes) {
                prefixes = Object.assign({}, prefixes, json.prefixes)
            }
        } catch (e) {
            self.ui.addMessage('error', e);
        }
        return prefixes
    }

}