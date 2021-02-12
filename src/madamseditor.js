import yarrrml from '@rmlio/yarrrml-parser/lib/rml-generator'
import jsyaml from 'js-yaml';
const N3 = require('n3');

// load ace editor, thems and modes
import 'ace-builds/src-min-noconflict/ace'
import 'ace-builds/src-min-noconflict/theme-tomorrow'
import 'ace-builds/src-min-noconflict/mode-yaml'
import 'ace-builds/src-min-noconflict/mode-turtle'
import 'ace-builds/src-min-noconflict/mode-json'
// load workers from CDN, keeps our public/dist clean...
ace.config.set('workerPath', 'https://cdn.jsdelivr.net/npm/ace-builds@1.4.12/src-min-noconflict');

// resizeable columns
import Split from 'split.js'

let _GLOBAL = {
    instance: null,
    config: {
        defaults: {
            data: {
                type: '', // string, value: url|json
                value: '', // string|json
                name: '' // string
            },
            mapping: {
                type: '', // string, value: url|yaml
                value: '', // string
                name: '' // string
            },
            rmlMapperUrl: '',
            // callback
            run: function(mapping, result) {}
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

    constructor(options = {}) {
        if (_GLOBAL.instance) {
            return _GLOBAL.instance;
        }

        this.config = Object.assign({},
            _GLOBAL.config,
            _GLOBAL.config.defaults,
            options,
            {data: Object.assign({}, _GLOBAL.config.defaults.data, typeof options.data !== 'undefined' ? options.data : {})},
            {mapping: Object.assign({}, _GLOBAL.config.defaults.mapping, typeof options.mapping !== 'undefined' ? options.mapping : {})}
            );

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
        const self = this;

        this.initEditors();

        // init run btn event
        document.querySelector("#convert-btn").addEventListener("click", (e) => {
            this.handleClickRunBtn(e);
            e.preventDefault();
        })

        // ctrl+enter shortcut
        document.addEventListener('keydown', (e) => {
            if (e.code == 'Enter' && e.ctrlKey) {
                self.handleClickRunBtn();
            }
        });

        // close status bar
        // document.querySelector("#statusBar-buttons .close").addEventListener("click", e => {
        //     this.closeStatusBar();
        //     e.preventDefault();
        // })
    }

    initEditors() {
        const self = this;
        const data = this.config.data;
        const mapping = this.config.mapping;

        // init data editor
        this.dataEditor = ace.edit("data-editor" ,{
            mode: "ace/mode/json",
            theme: "ace/theme/tomorrow",
        });

        // init mapping editor
        this.mappingEditor = ace.edit("mapping-editor", {
            mode: "ace/mode/yaml",
            theme: "ace/theme/tomorrow",
            tabSize: 2,
        });
        this.mappingEditor.focus();
        this.mappingEditor.session.on("change", () => {
            self.handleUpdateYarrmlEditor();
        });

        // init out teditor
        this.outEditor = ace.edit("out-editor", {
            mode: "ace/mode/turtle",
            theme: "ace/theme/tomorrow",
        });

        // load initial data
        if (!data.type) {
            // do nothing
        }
        else if (data.type == 'json') {
            this.editorSetValue(this.dataEditor, JSON.stringify(data.value, null, '\t'));
        }
        else if (data.type == 'url') {
            this.loadData(data.value, this.dataEditor)
            if (!data.name || data.name == "") {
                data.name = data.value.substring(data.value.lastIndexOf('/')+1);
            }
        }
        else {
            this.addMessage('error', `Undefined data type "${data.type}"`)
        }
        if (data.name && data.name != "") {
            document.querySelector('#data-filename').textContent = data.name;
        }

        // load initial mapping
        if (!mapping.type) {
            // do nothing
        }
        else if (mapping.type == 'yaml') {
            this.editorSetValue(this.mappingEditor, mapping.value);
        }
        else if (mapping.type == 'url') {
            this.loadData(mapping.value, this.mappingEditor)
            if (!mapping.name || mapping.name == "") {
                mapping.name = mapping.value.substring(mapping.value.lastIndexOf('/')+1);
            }
        }
        else {
            this.addMessage('error', `Undefined mapping type "${mapping.type}"`)
        }
        if (mapping.name && mapping.name != "") {
            document.querySelector('#mapping-filename').textContent = mapping.name;
        }

        // init resizeable columns
        Split(['#leftCol', '#rightCol'], {
            gutterSize: 5,
            onDragEnd: (sizes) => {
                this.outEditor.resize();
            }
        });
        Split(['#mapping-wrapper', '#data-wrapper'], {
            direction: 'vertical',
            gutterSize: 5,
            onDragEnd: (sizes) => {
                this.mappingEditor.resize();
                this.dataEditor.resize();
            }
        });
        // fix remove initial col/h-50 style to enable resizeable
        document.querySelector("#leftCol").classList.remove('col');
        document.querySelector("#rightCol").classList.remove('col');
        document.querySelector("#mapping-wrapper").classList.remove('h-50');
        document.querySelector("#data-wrapper").classList.remove('h-50');
    }

    handleClickRunBtn(e) {
        let result = false;
        const btn = document.querySelector("#convert-btn");
        btn.classList.add('disabled')
        btn.querySelector(".loader").classList.remove("d-none");
        btn.querySelector(".bi").classList.add("d-none");

        clearTimeout(this.currentYarrrmlValidationTimout)

        this.parser.runMapping()
        .then(res => {
            return this.parser.rdf2Turtle(res)
        })
        .then(res => {
            result = res.replace(/\.\n([\w\<])/g, ".\n\n$1");
            this.editorSetValue(this.outEditor, result)
            this.addMessage('success', 'RML mapping OK')
        })
        .catch(e => {
            this.addMessage('error', 'RML Mapper failed: ' + e);
        })
        .finally(() => {
            btn.classList.remove('disabled')
            btn.querySelector(".loader").classList.add("d-none");
            btn.querySelector(".bi").classList.remove("d-none");
            this.mappingEditor.focus(); // TODO set to last focus
            // call callback function
            this.config.run.call(
                this,
                result ? this.parser.getYarrrml() : false,
                result ? result : false
            );
        })
    }

    handleUpdateYarrmlEditor() {
        const self = this;
        this.currentYarrrmlValidationTimout = null;

        let mappingStr = this.mappingEditor.getValue();
        clearTimeout(this.currentYarrrmlValidationTimout);
        this.mappingEditor.getSession().setAnnotations([])

        // validate yaml
        try {
            jsyaml.load(mappingStr)
        } catch (error) {
            this.mappingEditor.getSession().setAnnotations([{
                row: error.mark.line,
                column: error.mark.column,
                text: error.reason,
                type: 'error'
            }])
            return
        }

        // validate yarrrml to rml
        this.currentYarrrmlValidationTimout = setTimeout(() => {
            mappingStr = self.parser.yarrrmlExtend(mappingStr);
            mappingStr = self.parser.yarrrmlEncodeBrackets(mappingStr);

            self.parser.yarrrml2RML(mappingStr)
            .catch(e => {
                self.addMessage('error', e);
            })
        }, 1500)
    }

    loadData(url = "", target = null) {
        if (url == "" ) {
            return new Promise((resolve, reject) => { resolve(true) });
        }
        return new Promise((resolve, reject) => {
            fetch(url)
            .then(data => {
                if (!data.ok) {
                    throw new Error('Network response was not ok');
                }
                return data.text()
            })
            .then(text => {
                this.editorSetValue(target, text);
                resolve(true);
            })
            .catch(error => {
                this.addMessage('error', 'Fetch example data failed. ' + error)
                reject(error);
            });
        })
    }

    editorSetValue(target = null, text = '') {
        if (!target) return;
        target.setValue(text);
        target.clearSelection();
    }

    addMessage(type, ...message) {
        const alert = document.createElement("div");
        alert.className = "alert";
        alert.textContent = message.toString();

        switch (type) {
            case 'error':
                alert.classList.add('alert-danger');
                break;
            case 'success':
                alert.classList.add('alert-success');
                break;
            case 'info':
                alert.classList.add('alert-info');
                break;
            case 'warning':
                alert.classList.add('alert-warning');
                break;
            default:
                break;
        }
        document.querySelector("#messages-wrapper").innerHTML = alert.outerHTML;

        if (document.querySelector("#statusBar").classList.contains("invisible")) {
            this.openStatusBar();
        }
        console.log(type, message);
    }

    openStatusBar() {
        // TODO: may resizeable status bar: https://jsfiddle.net/ve5dhp0L/
        document.querySelector("#statusBar").classList.remove("invisible");
        document.querySelectorAll("#leftCol, .gutter-horizontal, #rightCol").forEach(el => {
            el.style.height = "calc(100% - 24px)";
        })
        this.mappingEditor.resize();
        this.dataEditor.resize();
        this.outEditor.resize();
    }

    closeStatusBar() {
        document.querySelector("#statusBar").classList.add("invisible");
        document.querySelectorAll("#leftCol, .gutter-horizontal, #rightCol").forEach(el => {
            el.style.height = "";
        })
        this.mappingEditor.resize();
        this.dataEditor.resize();
        this.outEditor.resize();
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
        const mappingStr = this.getYarrrml();

        return new Promise((resolve, reject) => {
            this.yarrrml2RML(mappingStr)
            .then(rml => {
                const sources = {};
                sources[self.config.data.name] = inputData;
                return fetch(self.config.rmlMapperUrl, {
                    method: "POST",
                    // mode: 'no-cors',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ rml, sources })
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

    getYarrrml() {
        let mappingStr = this.ui.mappingEditor.getValue();
        mappingStr = this.yarrrmlExtend(mappingStr);
        mappingStr = this.yarrrmlEncodeBrackets(mappingStr);
        return mappingStr;
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
            return Promise.reject('Generate the RML mapping from YARRRML failed. ' + e);
        }

        writer.addQuads(quads);
        return new Promise((resolve, reject) => {
            writer.end( (err,doc) => err ? eject(e) : resolve(doc));
        });
    }

    rdf2Turtle(rdf) {
        const parser = new N3.Parser();
        const outWriter = new N3.Writer({
            format: "turtle",
            prefixes: this.getUsedPrefixes()
        });
        let resultQuads = [];

        // manually sort, to have better turtel with rdf:type first
        const sortResultFn = (a, b) => {
            const isRdfType = a.subject.id == b.subject.id && a.predicate.id == _GLOBAL.prefixes.rdf + 'type';
            return isRdfType ? -1 : 0;
        }

        return new Promise((resolve, reject) => {
            parser.parse(rdf, (err, quad, prefixes) => {
                if (err)
                    return reject('N3 parser error: ' + err);
                if (quad)
                    return resultQuads.push(quad);

                resultQuads.sort(sortResultFn);
                outWriter.addQuads(resultQuads);
                outWriter.end((err,outTtl)=>{
                    if (err) return reject('N3 parser error: ' + err);
                    resolve(outTtl);
                });
            })
        });
    }


    getUsedPrefixes() {
        const self = this;
        const yaml = this.ui.mappingEditor.getValue()
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