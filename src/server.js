'use strict';

const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const rmlParser = require("rocketrml");

// Constants
const { SERVER_PORT = '3000' } = process.env
const HOST = '0.0.0.0';

// App
const app = express();
const router = express.Router();

app.use(cors());

// set header
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
})

// parse json
app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', router);

// routes
app.get('/', (req, res) => {
    res.send('Howdy!');
});

/**
 * @api {post} /rmlmapper
 * @apiName RML mapper
 *
 * @apiDescription Execute the RML mapper
 * @apiParam {String} RML mapping
 * @apiParam {String} Sources
 * @apiSuccess
 */
app.post('/rmlmapper', async (req, res, next) => {
    req.accepts('application/json')

    const mapping = req.body.rml || false;
    const sources = req.body.sources || false;
    if (!mapping || !sources) {
        return res.status(500).send({ error: 'Parameter missing!' })
    }

    const options = {
        toRDF: true,
        verbose: false,
        xmlPerformanceMode: false,
        replace: false,
        functions: predefinedFunctions()
    };

    try {
        const ret = await rmlParser.parseFileLive(mapping, sources, options);
        res.send(ret)
    } catch (error) {
        res.status(500).send({ error: error.toString() });
    }
})

const predefinedFunctions = () => {
    const namespace = 'https://github.com/AKSW/MadamsEditor/functions.ttl#';

    const toUpperCase = ([str]) => str.toString().toUpperCase();

    const toLowerCase = ([str]) => str.toString().toLowerCase();

    return [toUpperCase, toLowerCase]
        .reduce((o, cur) => {
            return Object.assign(o, {[namespace + cur.name]: cur})
        }, {});
}

app.listen(SERVER_PORT, HOST);
console.log(`RML server http://${HOST}:${SERVER_PORT}`);