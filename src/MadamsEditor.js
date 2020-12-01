"use strict";

import _ from 'lodash'
import YAML from 'yaml'
import yarrrml from '@rmlio/yarrrml-parser/lib/rml-generator'

const N3 = require('n3');
const { DataFactory } = N3;
const { namedNode, literal, defaultGraph, quad } = DataFactory;

let _GLOBAL = {};

_GLOBAL.instance = null;
_GLOBAL.config = {
    defaults: {
        dataUrl: 'example-data.json',
        mappingUrl: 'example-mapping.yml'
    },
    dataUrl: '',
    mappingUrl: ''
}
_GLOBAL.nomad = {
    defaults: {
        uploadId: 'PACv39BKSFKLtphwxzY-Og',
        calcId: 'baBkU4yx2wQ1WIQJxuEZhKWq02bS'
    },
    uploadId: '',
    calcId: ''

}
_GLOBAL.prefixes = {
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

/**
 * Material Data Mapping Editor
 *
 */
export default class MadamsEditor {

    constructor(config) {
        if (_GLOBAL.instance) {
            return _GLOBAL.instance
        }

        this.init(config)
        _GLOBAL.instance = this
    }

    init(config) {
        const self = this;

        Object.assign(_GLOBAL.config, _GLOBAL.config.defaults);

        this.yarrrmlEditor = ace.edit("yarrrml-editor")
        this.yarrrmlEditor.session.setMode("ace/mode/yaml")
        this.yarrrmlEditor.setTheme("ace/theme/tomorrow")

        this.jsonEditor = ace.edit("json-editor")
        this.jsonEditor.setTheme("ace/theme/tomorrow")
        this.jsonEditor.session.setMode("ace/mode/json")
        this.jsonEditor.setReadOnly(true);  // false to make it editable

        this.outEditor = ace.edit("out-editor")
        this.outEditor.setTheme("ace/theme/tomorrow")
        this.outEditor.session.setMode("ace/mode/turtle")
        // this.outEditor.setReadOnly(true);  // false to make it editable

        // Object.assign(_GLOBAL.nomad, _GLOBAL.nomad.defaults);
        // document.querySelector("#nomadDataUploadId").value = _GLOBAL.nomad.uploadId
        // document.querySelector("#nomadDataCalcId").value = _GLOBAL.nomad.calcId

        if (_GLOBAL.config.dataUrl != "") {
            this.loadExampleData(_GLOBAL.config.dataUrl, this.jsonEditor);
        }
        if (_GLOBAL.config.mappingUrl != "") {
            this.loadExampleData(_GLOBAL.config.mappingUrl, this.yarrrmlEditor);
        }

        // document.querySelector("#load-data").addEventListener("click", (e) => {
        //     const btn = e.target;
        //     self.cleanupMessages();
        //     btn.setAttribute("disabled", "disabled");
        //     btn.querySelector(".loader").classList.remove("d-none");

        //     self.fetchNomad()
        //     .then(result => {})
        //     .catch(e => {})
        //     .finally(result => {
        //         btn.removeAttribute("disabled");
        //         btn.querySelector(".loader").classList.add("d-none");
        //     })
        //     e.preventDefault();
        // })

        document.querySelector("#convert-btn").addEventListener("click", (e) => {
            const btn = e.target.closest("#convert-btn");
            self.cleanupMessages();
            const quads = self.yarrrml2RML()
            if (!quads) return;

            btn.classList.add('disabled')
            btn.querySelector(".loader").classList.remove("d-none");
            btn.querySelector(".bi").classList.add("d-none");

            self.runRmlMapper(quads)
            .then(result => {})
            .catch(e => {})
            .finally(result => {
                btn.classList.remove('disabled')
                btn.querySelector(".loader").classList.add("d-none");
                btn.querySelector(".bi").classList.remove("d-none");
            })
            e.preventDefault();
        })
    }

    loadExampleData(url = "", target = null) {

        fetch(url)
        .then(data => data.text())
        .then(text => {
            target.setValue(text);
            target.clearSelection();
        })
        .catch(error => {
            self.addMessage('error', 'Fetch example data failed. ' + error)
            reject(false)
        });
    }

    fetchNomad() {
        const self = this;
        let uploadId = document.querySelector("#nomadDataUploadId").value
        let calcId = document.querySelector("#nomadDataCalcId").value
        const nomadUrl = `https://nomad-lab.eu/prod/rae/api/archive/${uploadId}/${calcId}`

        return new Promise((resolve, reject) => {
            fetch(nomadUrl)
            .then(response => response.json() )
            .then(data => {
                self.jsonEditor.setValue(JSON.stringify(data, null, '\t'));
                self.jsonEditor.clearSelection();
                // editor.getSession().foldAll(4);
                // fold all at column X -> https://groups.google.com/g/ace-discuss/c/JfMdCm1K8Qc?pli=1
                resolve(true);
            })
            .catch(error => {
                self.addMessage('error', 'Fetch from Nomad failed. ' + error)
                reject(false)
            });
        })

    }

    yarrrml2RML() {
        const yaml = this.yarrrmlEditor.getValue()
        const y2r = new yarrrml();
        let quads;
        y2r.convert
        try {
            quads = y2r.convert(yaml)
        } catch (e) {
            this.addMessage('error', 'Generate the RML mapping from YARRRML failed. ' + e);
            return null
        }
        return quads;
    }

    runRmlMapper(rmlQuads) {
        const self = this;
        const writer = new N3.Writer();

        rmlQuads.forEach(q => {
            if (q.object.termType === "Literal") {
                writer.addQuad(
                    namedNode(q.subject.value),
                    namedNode(q.predicate.value),
                    literal(q.object.value)
                )
            } else {
                writer.addQuad(quad(
                    namedNode(q.subject.value),
                    namedNode(q.predicate.value),
                    namedNode(q.object.value)
                ))
            }
        });

        return new Promise((resolve, reject) => {
            writer.end( (err,rmlDoc) => {
                const inputData = self.jsonEditor.getValue();

                if (err) {
                    self.addMessage('error', err)
                    return reject(false);
                }

                fetch("https://tw06v069.ugent.be/rmlmapper/execute", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        rml: rmlDoc,
                        sources: {
                            "data.json": inputData
                        }
                    })
                }).then(response=>{
                    return response.json()
                }).then(data=>{
                    const parser = new N3.Parser();
                    const prefixes = self.getUsedPrefixes();
                    const outWriter = new N3.Writer({
                        format: "turtle",
                        prefixes: prefixes
                    });
                    parser.parse(data.output, (err, quad, prefixes) => {
                        if (quad) {
                            outWriter.addQuad(quad)
                        } else {
                            outWriter.end((err,outTtl)=>{
                                outTtl = outTtl.replace(/\.\n([\w\<])/g, ".\n\n$1");
                                document.querySelector("#out-wrapper").classList.remove("d-none")
                                document.querySelector("#out-wrapper").scrollIntoView();
                                self.outEditor.setValue(outTtl);
                                self.outEditor.clearSelection();
                            });
                            resolve(true);
                        }
                    })
                }).catch(err=>{
                    self.addMessage('error', 'RML mapper failed. ' + err);
                    reject(false);
                })
            });
        })
    }

    getUsedPrefixes() {
        const self = this;
        const yaml = this.yarrrmlEditor.getValue()
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
            self.addMessage('error', e);
        }
        return prefixes
    }

    addMessage(type, message) {
        console.log(type, message);
        const wrapper = document.querySelector("#messages-wrapper");
        const closeBtn = '<button type="button" class="close ml-2" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>'
        const alertEl = $('<div class="alert" role="alert">' + message + closeBtn + '</div>');

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