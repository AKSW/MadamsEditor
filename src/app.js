import MadamsEditor from "./madamseditor";

let options = {};

if (process.env.NODE_ENV === 'development') {
    options = {
        'dataUrl':      './example-data.json',
        'mappingUrl':   './example-mapping.yml',
        'rmlMapperUrl': 'http://localhost:3000/rmlmapper'
    }
} else {
    options = {
        'dataUrl':      './example-data.json',
        'mappingUrl':   './example-mapping.yml',
        'rmlMapperUrl': 'https://ledot.de/rmlmapper'
    }
}

new MadamsEditor(options);
