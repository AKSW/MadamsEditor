// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/prefix-ns/data.json":[function(require,module,exports) {
module.exports = {
    "@context": {
        "madsrdf": "http://www.loc.gov/mads/rdf/v1#",
        "bflc": "http://id.loc.gov/ontologies/bflc/",
        "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
        "foaf": "http://xmlns.com/foaf/0.1/",
        "yago": "http://yago-knowledge.org/resource/",
        "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
        "dbo": "http://dbpedia.org/ontology/",
        "dbp": "http://dbpedia.org/property/",
        "ex": "http://example.org/",
        "dc": "http://purl.org/dc/elements/1.1/",
        "owl": "http://www.w3.org/2002/07/owl#",
        "gr": "http://purl.org/goodrelations/v1#",
        "spacerel": "http://data.ordnancesurvey.co.uk/ontology/spatialrelations/",
        "skos": "http://www.w3.org/2004/02/skos/core#",
        "geo": "http://www.opengis.net/ont/geosparql#",
        "schema": "http://schema.org/",
        "xsd": "http://www.w3.org/2001/XMLSchema#",
        "dcat": "http://www.w3.org/ns/dcat#",
        "bf": "http://id.loc.gov/ontologies/bibframe/",
        "sd": "http://www.w3.org/ns/sparql-service-description#",
        "search": "http://sindice.com/vocab/search#",
        "org": "http://www.w3.org/ns/org#",
        "frbr": "http://purl.org/vocab/frbr/core#",
        "qb": "http://purl.org/linked-data/cube#",
        "dcterms": "http://purl.org/dc/terms/",
        "prov": "http://www.w3.org/ns/prov#",
        "sioc": "http://rdfs.org/sioc/ns#",
        "dct": "http://purl.org/dc/terms/",
        "xtypes": "http://purl.org/xtypes/",
        "ont": "http://purl.org/net/ns/ontology-annot#",
        "commerce": "http://search.yahoo.com/searchmonkey/commerce/",
        "dbpedia": "http://dbpedia.org/resource/",
        "void": "http://rdfs.org/ns/void#",
        "onto": "http://www.ontotext.com/",
        "rss": "http://purl.org/rss/1.0/",
        "bibo": "http://purl.org/ontology/bibo/",
        "gldp": "http://www.w3.org/ns/people#",
        "geonames": "http://www.geonames.org/ontology#",
        "event": "http://purl.org/NET/c4dm/event.owl#",
        "wd": "http://www.wikidata.org/entity/",
        "fb": "http://rdf.freebase.com/ns/",
        "pto": "http://www.productontology.org/id/",
        "dbr": "http://dbpedia.org/resource/",
        "dcmit": "http://purl.org/dc/dcmitype/",
        "vcard": "http://www.w3.org/2006/vcard/ns#",
        "cc": "http://creativecommons.org/ns#",
        "md": "http://www.w3.org/ns/md#",
        "sc": "http://purl.org/science/owl/sciencecommons/",
        "oo": "http://purl.org/openorg/",
        "rr": "http://www.w3.org/ns/r2rml#",
        "doap": "http://usefulinc.com/ns/doap#",
        "prog": "http://purl.org/prog/",
        "swrc": "http://swrc.ontoware.org/ontology#",
        "vann": "http://purl.org/vocab/vann/",
        "dbpprop": "http://dbpedia.org/property/",
        "nie": "http://www.semanticdesktop.org/ontologies/2007/01/19/nie#",
        "ma": "http://www.w3.org/ns/ma-ont#",
        "content": "http://purl.org/rss/1.0/modules/content/",
        "gen": "http://purl.org/gen/0.1#",
        "http": "http://www.w3.org/2011/http#",
        "tl": "http://purl.org/NET/c4dm/timeline.owl#",
        "ov": "http://open.vocab.org/terms/",
        "akt": "http://www.aktors.org/ontology/portal#",
        "wot": "http://xmlns.com/wot/0.1/",
        "fn": "http://www.w3.org/2005/xpath-functions#",
        "aiiso": "http://purl.org/vocab/aiiso/schema#",
        "vs": "http://www.w3.org/2003/06/sw-vocab-status/ns#",
        "swc": "http://data.semanticweb.org/ns/swc/ontology#",
        "dcterm": "http://purl.org/dc/terms/",
        "marcrel": "http://id.loc.gov/vocabulary/relators/",
        "ical": "http://www.w3.org/2002/12/cal/ical#",
        "cv": "http://rdfs.org/resume-rdf/",
        "dbowl": "http://ontology.cybershare.utep.edu/dbowl/relational-to-ontology-mapping-primitive.owl#",
        "mo": "http://purl.org/ontology/mo/",
        "earl": "http://www.w3.org/ns/earl#",
        "xhtml": "http://www.w3.org/1999/xhtml#",
        "rel": "http://purl.org/vocab/relationship/",
        "prop": "http://dbpedia.org/property/",
        "dcam": "http://purl.org/dc/dcam/",
        "xmp": "http://ns.adobe.com/xap/1.0/",
        "daia": "http://purl.org/ontology/daia/",
        "bio": "http://purl.org/vocab/bio/0.1/",
        "crm": "http://www.cidoc-crm.org/cidoc-crm/",
        "ad": "http://schemas.talis.com/2005/address/schema#",
        "rdfg": "http://www.w3.org/2004/03/trix/rdfg-1/",
        "dc11": "http://purl.org/dc/elements/1.1/",
        "bill": "http://www.rdfabout.com/rdf/schema/usbill/",
        "test2": "http://this.invalid/test2#",
        "cs": "http://purl.org/vocab/changeset/schema#",
        "sio": "http://semanticscience.org/resource/",
        "factbook": "http://wifo5-04.informatik.uni-mannheim.de/factbook/ns#",
        "xhv": "http://www.w3.org/1999/xhtml/vocab#",
        "co": "http://purl.org/ontology/co/core#",
        "pc": "http://purl.org/procurement/public-contracts#",
        "dv": "http://rdf.data-vocabulary.org/#",
        "og": "http://ogp.me/ns#",
        "musim": "http://purl.org/ontology/similarity/",
        "d2rq": "http://www.wiwiss.fu-berlin.de/suhl/bizer/D2RQ/0.1#",
        "air": "http://dig.csail.mit.edu/TAMI/2007/amord/air#",
        "log": "http://www.w3.org/2000/10/swap/log#",
        "afn": "http://jena.hpl.hp.com/ARQ/function#",
        "book": "http://purl.org/NET/book/vocab#",
        "xs": "http://www.w3.org/2001/XMLSchema#",
        "obo": "http://purl.obolibrary.org/obo/",
        "media": "http://search.yahoo.com/searchmonkey/media/",
        "ctag": "http://commontag.org/ns#",
        "ir": "http://www.ontologydesignpatterns.org/cp/owl/informationrealization.owl#",
        "admin": "http://webns.net/mvcb/",
        "cyc": "http://sw.opencyc.org/concept/",
        "days": "http://ontologi.es/days#",
        "tzont": "http://www.w3.org/2006/timezone#",
        "xfn": "http://gmpg.org/xfn/11#",
        "biblio": "http://purl.org/net/biblio#",
        "mu": "http://mu.semte.ch/vocabularies/core/",
        "con": "http://www.w3.org/2000/10/swap/pim/contact#",
        "botany": "http://purl.org/NET/biol/botany#",
        "cal": "http://www.w3.org/2002/12/cal/ical#",
        "tag": "http://www.holygoat.co.uk/owl/redwood/0.1/tags/",
        "time": "http://www.w3.org/2006/time#",
        "dcq": "http://purl.org/dc/qualifiers/1.0/",
        "sism": "http://purl.oclc.org/NET/sism/0.1/",
        "xf": "http://www.w3.org/2002/xforms/",
        "reco": "http://purl.org/reco#",
        "osag": "http://www.ordnancesurvey.co.uk/ontology/AdministrativeGeography/v2.0/AdministrativeGeography.rdf#",
        "af": "http://purl.org/ontology/af/",
        "ome": "http://purl.org/ontomedia/core/expression#",
        "cld": "http://purl.org/cld/terms/",
        "dir": "http://schemas.talis.com/2005/dir/schema#",
        "sr": "http://www.openrdf.org/config/repository/sail#",
        "oa": "http://www.w3.org/ns/oa#",
        "rif": "http://www.w3.org/2007/rif#",
        "memo": "http://ontologies.smile.deri.ie/2009/02/27/memo#",
        "cmp": "http://www.ontologydesignpatterns.org/cp/owl/componency.owl#",
        "myspace": "http://purl.org/ontology/myspace#",
        "jdbc": "http://d2rq.org/terms/jdbc/",
        "ok": "http://okkam.org/terms#",
        "sdmxdim": "http://purl.org/linked-data/sdmx/2009/dimension#",
        "rev": "http://purl.org/stuff/rev#",
        "gn": "http://www.geonames.org/ontology#",
        "lomvoc": "http://ltsc.ieee.org/rdf/lomv1p0/vocabulary#",
        "math": "http://www.w3.org/2000/10/swap/math#",
        "sdmx": "http://purl.org/linked-data/sdmx#",
        "giving": "http://ontologi.es/giving#",
        "swande": "http://purl.org/swan/1.2/discourse-elements/",
        "swanq": "http://purl.org/swan/1.2/qualifiers/",
        "dcn": "http://www.w3.org/2007/uwa/context/deliverycontext.owl#",
        "owlim": "http://www.ontotext.com/trree/owlim#",
        "cfp": "http://sw.deri.org/2005/08/conf/cfp.owl#",
        "as": "https://www.w3.org/ns/activitystreams#",
        "unit": "http://qudt.org/vocab/unit#",
        "photoshop": "http://ns.adobe.com/photoshop/1.0/",
        "wfs": "http://schemas.opengis.net/wfs/",
        "exif": "http://www.w3.org/2003/12/exif/ns#",
        "sdmxa": "http://purl.org/linked-data/sdmx/2009/attribute#",
        "xsi": "http://www.w3.org/2001/XMLSchema-instance#",
        "qudt": "http://qudt.org/vocab/unit#",
        "om": "http://opendata.caceres.es/def/ontomunicipio#",
        "adms": "http://www.w3.org/ns/adms#",
        "lyou": "http://purl.org/linkingyou/",
        "dul": "http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#",
        "swrl": "http://www.w3.org/2003/11/swrl#",
        "type": "http://info.deepcarbon.net/schema/type#",
        "omn": "http://open-multinet.info/ontology/omn#",
        "swrcfe": "http://www.morelab.deusto.es/ontologies/swrcfe#",
        "cert": "http://www.w3.org/ns/auth/cert#",
        "cnt": "http://www.w3.org/2011/content#",
        "swrlb": "http://www.w3.org/2003/11/swrlb#",
        "lemon": "http://lemon-model.net/lemon#",
        "isbd": "http://iflastandards.info/ns/isbd/elements/",
        "ore": "http://www.openarchives.org/ore/terms/",
        "openlinks": "http://www.openlinksw.com/schemas/virtrdf#",
        "edm": "http://www.europeana.eu/schemas/edm/",
        "nfo": "http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#",
        "ontology": "http://dbpedia.org/ontology/",
        "eat": "http://www.eat.rl.ac.uk/#",
        "aat": "http://vocab.getty.edu/aat/",
        "sf": "http://www.opengis.net/ont/sf#",
        "voaf": "http://purl.org/vocommons/voaf#",
        "sioct": "http://rdfs.org/sioc/types#",
        "gtfs": "http://vocab.gtfs.org/terms#",
        "scovo": "http://purl.org/NET/scovo#",
        "ac": "http://umbel.org/umbel/ac/",
        "fabio": "http://purl.org/spar/fabio/",
        "db": "http://dbpedia.org/",
        "siocserv": "http://rdfs.org/sioc/services#",
        "skosxl": "http://www.w3.org/2008/05/skos-xl#",
        "geoes": "http://geo.linkeddata.es/resource/",
        "gvp": "http://vocab.getty.edu/ontology#",
        "nif": "http://persistence.uni-leipzig.org/nlp2rdf/ontologies/nif-core#",
        "eg": "http://www.example.org/",
        "coref": "http://www.rkbexplorer.com/ontologies/coref#",
        "drugbank": "http://www4.wiwiss.fu-berlin.de/drugbank/resource/drugbank/",
        "ldp": "http://www.w3.org/ns/ldp#",
        "tgn": "http://vocab.getty.edu/tgn/",
        "pmlj": "http://inference-web.org/2.0/pml-justification.owl#",
        "room": "http://vocab.deri.ie/rooms#",
        "prism": "http://prismstandard.org/namespaces/basic/2.0/",
        "ulan": "http://vocab.getty.edu/ulan/",
        "ptr": "http://www.w3.org/2009/pointers#",
        "lv": "http://purl.org/lobid/lv#",
        "test": "http://test2.example.com/",
        "gold": "http://purl.org/linguistics/gold/",
        "acc": "http://purl.org/NET/acc#",
        "uniprot": "http://purl.uniprot.org/core/",
        "core": "http://vivoweb.org/ontology/core#",
        "ssn": "http://www.w3.org/ns/ssn/",
        "nsogi": "http://prefix.cc/nsogi:",
        "georss": "http://www.georss.org/georss/",
        "go": "http://purl.org/obo/owl/GO#",
        "dbc": "http://dbpedia.org/resource/Category:",
        "doc": "http://www.w3.org/2000/10/swap/pim/doc#",
        "movie": "http://data.linkedmdb.org/resource/movie/",
        "dce": "http://purl.org/dc/elements/1.1/",
        "wn": "http://xmlns.com/wordnet/1.6/",
        "rsa": "http://www.w3.org/ns/auth/rsa#",
        "bif": "http://www.openlinksw.com/schemas/bif#",
        "whois": "http://www.kanzaki.com/ns/whois#",
        "geosparql": "http://www.opengis.net/ont/geosparql#",
        "dbprop": "http://dbpedia.org/property/",
        "akts": "http://www.aktors.org/ontology/support#",
        "space": "http://purl.org/net/schemas/space/",
        "music": "http://musicontology.com/",
        "java": "http://www.w3.org/2007/uwa/context/java.owl#",
        "rec": "http://purl.org/ontology/rec/core#",
        "loc": "http://www.w3.org/2007/uwa/context/location.owl#",
        "sider": "http://www4.wiwiss.fu-berlin.de/sider/resource/sider/",
        "po": "http://purl.org/ontology/po/",
        "lgd": "http://linkedgeodata.org/triplify/",
        "cerif": "http://spi-fm.uca.es/neologism/cerif#",
        "dblp": "http://dblp.uni-trier.de/rdf/schema-2015-01-26#",
        "am": "http://vocab.deri.ie/am#",
        "acm": "http://www.rkbexplorer.com/ontologies/acm#",
        "ti": "http://www.ontologydesignpatterns.org/cp/owl/timeinterval.owl#",
        "cito": "http://purl.org/spar/cito/",
        "acl": "http://www.w3.org/ns/auth/acl#",
        "wn20schema": "http://www.w3.org/2006/03/wn/wn20/schema/",
        "lexinfo": "http://www.lexinfo.net/ontology/2.0/lexinfo#",
        "service": "http://purl.org/ontology/service#",
        "httph": "http://www.w3.org/2007/ont/httph#",
        "sp": "http://spinrdf.org/sp#",
        "zoology": "http://purl.org/NET/biol/zoology#",
        "ceo": "https://linkeddata.cultureelerfgoed.nl/vocab/def/ceo#",
        "umbelrc": "http://umbel.org/umbel/rc/",
        "cco": "http://www.ontologyrepository.com/CommonCoreOntologies/",
        "sec": "https://w3id.org/security#",
        "organism": "http://eulersharp.sourceforge.net/2003/03swap/organism#",
        "nmo": "http://www.semanticdesktop.org/ontologies/2007/03/22/nmo#",
        "itsrdf": "http://www.w3.org/2005/11/its/rdf#",
        "imm": "http://schemas.microsoft.com/imm/",
        "lode": "http://linkedevents.org/ontology/",
        "kb": "http://deductions.sf.net/ontology/knowledge_base.owl#",
        "prv": "http://purl.org/net/provenance/ns#",
        "dbpediaowl": "http://dbpedia.org/ontology/",
        "wdrs": "http://www.w3.org/2007/05/powder-s#",
        "sparql": "http://www.w3.org/ns/sparql#",
        "atom": "http://www.w3.org/2005/Atom/",
        "swid": "http://semanticweb.org/id/",
        "pr": "http://purl.org/ontology/prv/core#",
        "formats": "http://www.w3.org/ns/formats/",
        "ignf": "http://data.ign.fr/def/ignf#",
        "ndl": "http://schemas.ogf.org/nml/2013/05/base#",
        "gndo": "http://d-nb.info/standards/elementset/gnd#",
        "pat": "http://purl.org/hpi/patchr#",
        "nao": "http://www.semanticdesktop.org/ontologies/2007/08/15/nao#",
        "cdm": "http://publications.europa.eu/ontology/cdm#",
        "gd": "http://rdf.data-vocabulary.org/#",
        "sesame": "http://www.openrdf.org/schema/sesame#",
        "nco": "http://www.semanticdesktop.org/ontologies/2007/03/22/nco#",
        "xml": "http://www.w3.org/XML/1998/namespace/",
        "cro": "http://rhizomik.net/ontologies/copyrightonto.owl#",
        "ro": "http://purl.org/obo/owl/ro#",
        "ya": "http://blogs.yandex.ru/schema/foaf/",
        "abc": "http://www.metadata.net/harmony/ABCSchemaV5Commented.rdf#",
        "bd": "http://www.bigdata.com/rdf#",
        "sh": "http://www.w3.org/ns/shacl#",
        "ecs": "http://rdf.ecs.soton.ac.uk/ontology/ecs#",
        "spin": "http://spinrdf.org/spin#",
        "irw": "http://www.ontologydesignpatterns.org/ont/web/irw.owl#",
        "daml": "http://www.daml.org/2001/03/daml+oil#",
        "opm": "https://w3id.org/opm#",
        "fise": "http://fise.iks-project.eu/ontology/",
        "resist": "http://www.rkbexplorer.com/ontologies/resist#",
        "wo": "http://purl.org/ontology/wo/",
        "mods": "http://www.loc.gov/mods/v3#",
        "sit": "http://www.ontologydesignpatterns.org/cp/owl/situation.owl#",
        "olia": "http://purl.org/olia/olia.owl#",
        "web": "http://www.w3.org/2007/uwa/context/web.owl#",
        "protege": "http://protege.stanford.edu/system#",
        "smf": "http://topbraid.org/sparqlmotionfunctions#",
        "biocore": "http://bio2rdf.org/core#",
        "granatum": "http://chem.deri.ie/granatum/",
        "pmt": "http://tipsy.googlecode.com/svn/trunk/vocab/pmt#",
        "omt": "http://purl.org/ontomedia/ext/common/trait#",
        "oc": "http://opencoinage.org/rdf/",
        "site": "http://ns.ontowiki.net/SysOnt/Site/",
        "omb": "http://purl.org/ontomedia/ext/common/being#",
        "mf": "http://www.w3.org/2001/sw/DataAccess/tests/test-manifest#",
        "ping": "https://namso-gen.com/",
        "myspo": "http://purl.org/ontology/myspace#",
        "product": "http://purl.org/commerce/product#",
        "admingeo": "http://data.ordnancesurvey.co.uk/ontology/admingeo/",
        "wdt": "http://www.wikidata.org/prop/direct/",
        "link": "http://www.w3.org/2006/link#",
        "biol": "http://purl.org/NET/biol/ns#",
        "cpa": "http://www.ontologydesignpatterns.org/schemas/cpannotationschema.owl#",
        "rnews": "http://iptc.org/std/rNews/2011-10-07#",
        "fresnel": "http://www.w3.org/2004/09/fresnel#",
        "lx": "http://purl.org/NET/lx#",
        "scot": "http://rdfs.org/scot/ns#",
        "user": "http://schemas.talis.com/2005/user/schema#",
        "climb": "http://climb.dataincubator.org/vocabs/climb/",
        "politico": "http://www.rdfabout.com/rdf/schema/politico/",
        "lfn": "http://www.dotnetrdf.org/leviathan#",
        "meta": "https://krr.triply.cc/krr/sameas-meta/def/",
        "bibtex": "http://purl.org/net/nknouf/ns/bibtex#",
        "dctype": "http://purl.org/dc/dcmitype/",
        "list": "http://www.w3.org/2000/10/swap/list#",
        "food": "http://purl.org/foodontology#",
        "mit": "http://purl.org/ontology/mo/mit#",
        "wgs84": "http://www.w3.org/2003/01/geo/wgs84_pos#",
        "cgov": "http://reference.data.gov.uk/def/central-government/",
        "label": "http://purl.org/net/vocab/2004/03/label#",
        "disco": "http://rdf-vocabulary.ddialliance.org/discovery#",
        "wv": "http://vocab.org/waiver/terms/",
        "umbel": "http://umbel.org/umbel#",
        "chebi": "http://bio2rdf.org/chebi:",
        "fec": "http://www.rdfabout.com/rdf/schema/usfec/",
        "oauth": "http://demiblog.org/vocab/oauth#",
        "video": "http://purl.org/ontology/video#",
        "ddc": "http://purl.org/NET/decimalised#",
        "atomix": "http://buzzword.org.uk/rdf/atomix#",
        "pav": "http://purl.org/pav/",
        "postcode": "http://data.ordnancesurvey.co.uk/id/postcodeunit/",
        "doac": "http://ramonantonio.net/doac/0.1/#",
        "geof": "http://www.opengis.net/def/function/geosparql/",
        "npg": "http://ns.nature.com/terms/",
        "meteo": "http://purl.org/ns/meteo#",
        "wgs": "http://www.w3.org/2003/01/geo/wgs84_pos#",
        "gso": "http://www.w3.org/2006/gen/ont#",
        "taxo": "http://purl.org/rss/1.0/modules/taxonomy/",
        "xkos": "http://rdf-vocabulary.ddialliance.org/xkos#",
        "es": "http://eulersharp.sourceforge.net/2003/03swap/log-rules#",
        "ass": "http://uptheasset.org/ontology#",
        "sdl": "http://purl.org/vocab/riro/sdl#",
        "omc": "http://purl.org/ontomedia/ext/common/bestiary#",
        "acco": "http://purl.org/acco/ns#",
        "compass": "http://purl.org/net/compass#",
        "spl": "http://spinrdf.org/spl#",
        "gnd": "http://d-nb.info/gnd/",
        "penn": "http://purl.org/olia/penn.owl#",
        "bio2rdf": "http://bio2rdf.org/",
        "ontolex": "http://www.w3.org/ns/lemon/ontolex#",
        "conv": "http://purl.org/twc/vocab/conversion/",
        "so": "http://purl.org/ontology/symbolic-music/",
        "os": "http://www.w3.org/2000/10/swap/os#",
        "opensearch": "http://a9.com/-/spec/opensearch/1.1/",
        "agg": "http://purl.org/twc/health/vocab/aggregate/",
        "efo": "http://www.ebi.ac.uk/efo/",
        "ms": "http://purl.org/obo/owl/MS#",
        "rdfsharp": "https://rdfsharp.codeplex.com/",
        "xro": "http://purl.org/xro/ns#",
        "profiling": "http://ontologi.es/profiling#",
        "ngeo": "http://geovocab.org/geometry#",
        "rdac": "http://rdaregistry.info/Elements/c/",
        "hg": "http://rdf.histograph.io/",
        "tmo": "http://www.semanticdesktop.org/ontologies/2008/05/20/tmo#",
        "interval": "http://reference.data.gov.uk/def/intervals/",
        "usgov": "http://www.rdfabout.com/rdf/schema/usgovt/",
        "lang": "http://ontologi.es/lang/core#",
        "fed": "http://www.openrdf.org/config/sail/federation#",
        "rdau": "http://rdaregistry.info/Elements/u/",
        "contact": "http://www.w3.org/2000/10/swap/pim/contact#",
        "ps": "https://w3id.org/payswarm#",
        "sv": "http://schemas.talis.com/2005/service/schema#",
        "up": "http://purl.uniprot.org/core/",
        "rdrel": "http://rdvocab.info/RDARelationshipsWEMI/",
        "ocd": "http://dati.camera.it/ocd/",
        "cidoc": "http://www.cidoc-crm.org/cidoc-crm/",
        "powder": "http://www.w3.org/2007/05/powder#",
        "prj": "http://purl.org/stuff/project/",
        "ire": "http://www.ontologydesignpatterns.org/cpont/ire.owl#",
        "bp": "http://www.biopax.org/release/biopax-level3.owl#",
        "pext": "http://www.ontotext.com/proton/protonext#",
        "xhe": "http://buzzword.org.uk/rdf/xhtml-elements#",
        "hydra": "http://www.w3.org/ns/hydra/core#",
        "gpt": "http://purl.org/vocab/riro/gpt#",
        "money": "http://purl.org/net/rdf-money/",
        "inno": "http://purl.org/innovation/ns#",
        "ref": "http://purl.org/vocab/relationship/",
        "ao": "http://purl.org/ontology/ao/core#",
        "sco": "http://purl.org/ontology/sco#",
        "awol": "http://bblfish.net/work/atom-owl/2006-06-06/#",
        "rep": "http://www.openrdf.org/config/repository#",
        "game": "http://data.totl.net/game/",
        "rei": "http://www.w3.org/2004/06/rei#",
        "tio": "http://purl.org/tio/ns#",
        "wikidata": "http://www.wikidata.org/entity/",
        "code": "http://telegraphis.net/ontology/measurement/code#",
        "omm": "http://purl.org/ontomedia/core/media#",
        "xen": "http://buzzword.org.uk/rdf/xen#",
        "omp": "http://purl.org/ontomedia/ext/common/profession#",
        "soft": "http://www.w3.org/2007/uwa/context/software.owl#",
        "hard": "http://www.w3.org/2007/uwa/context/hardware.owl#",
        "lom": "http://ltsc.ieee.org/rdf/lomv1p0/lom#",
        "sim": "http://purl.org/ontology/similarity/",
        "ct": "http://data.linkedct.org/resource/linkedct/",
        "xl": "http://langegger.at/xlwrap/vocab#",
        "tdb": "http://jena.hpl.hp.com/2008/tdb#",
        "lime": "http://www.w3.org/ns/lemon/lime#",
        "worldbank": "http://worldbank.270a.info/dataset/",
        "lfm": "http://purl.org/ontology/last-fm/",
        "doclist": "http://www.junkwork.net/xml/DocumentList#",
        "nrl": "http://www.semanticdesktop.org/ontologies/2007/08/15/nrl#",
        "nt": "http://ns.inria.fr/nicetag/2010/09/09/voc#",
        "chord": "http://purl.org/ontology/chord/",
        "swp": "http://www.w3.org/2004/03/trix/swp-2/",
        "sede": "http://eventography.org/sede/0.1/",
        "purl": "http://www.purl.org/",
        "audio": "http://purl.org/media/audio#",
        "affy": "http://www.affymetrix.com/community/publications/affymetrix/tmsplice#",
        "biopax": "http://www.biopax.org/release/biopax-level3.owl#",
        "rdagr1": "http://rdvocab.info/Elements/",
        "hlisting": "http://sindice.com/hlisting/0.1/",
        "isothes": "http://purl.org/iso25964/skos-thes#",
        "swivt": "http://semantic-mediawiki.org/swivt/1.0#",
        "courseware": "http://courseware.rkbexplorer.com/ontologies/courseware#",
        "uco": "http://purl.org/uco/ns#",
        "sysont": "http://ns.ontowiki.net/SysOnt/",
        "rdfa": "http://www.w3.org/ns/rdfa#",
        "xlink": "https://es.scribd.com/doc/79794476/05-Ejercicios-Resueltos-Caja-Negra-y-Recapitulacion/",
        "dailymed": "http://www4.wiwiss.fu-berlin.de/dailymed/resource/dailymed/",
        "push": "http://www.w3.org/2007/uwa/context/push.owl#",
        "eu": "http://eulersharp.sourceforge.net/2003/03swap/log-rules#",
        "ui": "http://www.w3.org/ns/ui#",
        "p3p": "http://www.w3.org/2002/01/p3prdfv1#",
        "lgdo": "http://linkedgeodata.org/ontology/",
        "spc": "http://purl.org/ontomedia/core/space#",
        "library": "http://purl.org/library/",
        "example": "http://www.example.org/rdf#",
        "obj": "http://www.openrdf.org/rdf/2009/object#",
        "icaltzd": "http://www.w3.org/2002/12/cal/icaltzd#",
        "name": "http://example.org/name#",
        "dwc": "http://rs.tdwg.org/dwc/terms/",
        "cycann": "http://sw.cyc.com/CycAnnotations_v1#",
        "pmlp": "http://inference-web.org/2.0/pml-provenance.owl#",
        "irrl": "http://www.ontologydesignpatterns.org/cp/owl/informationobjectsandrepresentationlanguages.owl#",
        "dbnary": "http://kaiko.getalp.org/dbnary#",
        "oat": "http://openlinksw.com/schemas/oat/",
        "custom": "http://www.openrdf.org/config/sail/custom#",
        "ne": "http://umbel.org/umbel/ne/",
        "like": "http://ontologi.es/like#",
        "dady": "http://purl.org/NET/dady#",
        "string": "http://www.w3.org/2000/10/swap/string#",
        "ero": "http://purl.obolibrary.org/obo/",
        "iswc": "http://annotation.semanticweb.org/2004/iswc#",
        "sail": "http://www.openrdf.org/config/sail#",
        "lt": "http://diplomski.nelakolundzija.org/LTontology.rdf#",
        "crypto": "http://www.w3.org/2000/10/swap/crypto#",
        "net": "http://www.w3.org/2007/uwa/context/network.owl#",
        "vote": "http://www.rdfabout.com/rdf/schema/vote/",
        "opo": "http://online-presence.net/opo/ns#",
        "pbo": "http://purl.org/ontology/pbo/core#",
        "swandr": "http://purl.org/swan/1.2/discourse-relationships/",
        "sport": "http://www.bbc.co.uk/ontologies/sport/",
        "airport": "http://www.daml.org/2001/10/html/airport-ont#",
        "hcterms": "http://purl.org/uF/hCard/terms/",
        "rov": "http://www.w3.org/ns/regorg#",
        "moat": "http://moat-project.org/ns#",
        "aifb": "http://www.aifb.kit.edu/id/",
        "resource": "http://purl.org/vocab/resourcelist/schema#",
        "rail": "http://ontologi.es/rail/vocab#",
        "scv": "http://purl.org/NET/scovo#",
        "tags": "http://www.holygoat.co.uk/owl/redwood/0.1/tags/",
        "common": "http://www.w3.org/2007/uwa/context/common.owl#",
        "copyright": "http://rhizomik.net/ontologies/copyrightonto.owl#",
        "meetup": "http://www.lotico.com/meetup/",
        "kwijibo": "http://kwijibo.talis.com/",
        "states": "http://www.w3.org/2005/07/aaa#",
        "swh": "http://plugin.org.uk/swh-plugins/",
        "ist": "http://purl.org/ontology/is/types/",
        "bib": "http://zeitkunst.org/bibtex/0.1/bibtex.owl#",
        "frir": "http://purl.org/twc/ontology/frir.owl#",
        "lastfm": "http://purl.org/ontology/last-fm/",
        "phil": "http://philosurfical.open.ac.uk/ontology/philosurfical.owl#",
        "pmlr": "http://inference-web.org/2.0/pml-relation.owl#",
        "st": "http://ns.inria.fr/sparql-template/",
        "anca": "http://users.utcluj.ro/~raluca/rdf_ontologies_ralu/ralu_modified_ontology_pizzas2_0#",
        "sm": "http://topbraid.org/sparqlmotion#",
        "cordis": "http://cordis.europa.eu/projects/",
        "puc": "http://purl.org/NET/puc#",
        "nexif": "http://www.semanticdesktop.org/ontologies/2007/05/10/nexif#",
        "swanqs": "http://purl.org/swan/1.2/qualifiers/",
        "ttl": "http://www.w3.org/2008/turtle#",
        "wordmap": "http://purl.org/net/ns/wordmap#",
        "ub": "http://www.lehigh.edu/~zhp2/2004/0401/univ-bench.owl#",
        "wdr": "http://www.w3.org/2007/05/powder#",
        "lifecycle": "http://purl.org/vocab/lifecycle/schema#",
        "gob": "http://purl.org/ontology/last-fm/",
        "nid3": "http://www.semanticdesktop.org/ontologies/2007/05/10/nid3#",
        "mysql": "http://web-semantics.org/ns/mysql/",
        "viaf": "http://viaf.org/ontology/1.1/#",
        "eztag": "http://ontologies.ezweb.morfeo-project.org/eztag/ns#",
        "lotico": "http://www.lotico.com/resource/",
        "prissma": "http://ns.inria.fr/prissma/v1#",
        "cogs": "http://vocab.deri.ie/cogs#",
        "eco": "http://www.ebusiness-unibw.org/ontologies/eclass/5.1.4/#",
        "resex": "http://resex.rkbexplorer.com/ontologies/resex#",
        "dcmitype": "http://purl.org/dc/dcmitype/",
        "lu": "http://www.ontologydesignpatterns.org/ont/framenet/abox/lu/",
        "grddl": "http://www.w3.org/2003/g/data-view#",
        "xforms": "http://www.w3.org/2002/xforms/",
        "swanco": "http://purl.org/swan/1.2/swan-commons/",
        "ddl": "http://purl.org/vocab/riro/ddl#",
        "phss": "http://ns.poundhill.com/phss/1.0/",
        "pim": "http://www.w3.org/ns/pim/space#",
        "pobo": "http://purl.obolibrary.org/obo/",
        "gsp": "http://www.opengis.net/ont/geosparql#",
        "res": "http://dbpedia.org/resource/",
        "conversion": "http://purl.org/twc/vocab/conversion/",
        "person": "http://www.w3.org/ns/person#",
        "dgtwc": "http://data-gov.tw.rpi.edu/2009/data-gov-twc.rdf#",
        "edam": "http://edamontology.org/",
        "gml": "http://www.opengis.net/ont/gml#",
        "vivo": "http://vivoweb.org/ontology/core#",
        "datafaqs": "http://purl.org/twc/vocab/datafaqs#",
        "apivc": "http://purl.org/linked-data/api/vocab#",
        "freebase": "http://rdf.freebase.com/ns/",
        "com": "http://purl.org/commerce#",
        "blt": "http://www.bl.uk/schemas/bibliographic/blterms#",
        "act": "http://www.w3.org/2007/rif-builtin-action#",
        "trackback": "http://madskills.com/public/xml/rss/module/trackback/",
        "is": "http://purl.org/ontology/is/core#",
        "pimo": "http://www.semanticdesktop.org/ontologies/2007/11/01/pimo#",
        "sml": "http://topbraid.org/sparqlmotionlib#",
        "dnr": "http://www.dotnetrdf.org/configuration#",
        "dt": "http://dbpedia.org/datatype/",
        "play": "http://uriplay.org/spec/ontology/#",
        "dummy": "http://hello.com/",
        "coin": "http://purl.org/court/def/2009/coin#",
        "smiley": "http://www.smileyontology.com/ns#",
        "seas": "https://w3id.org/seas/",
        "pom": "http://maven.apache.org/POM/4.0.0#",
        "muo": "http://purl.oclc.org/NET/muo/muo#",
        "txn": "http://lod.taxonconcept.org/ontology/txn.owl#",
        "wordnet": "http://wordnet-rdf.princeton.edu/ontology#",
        "pdo": "http://ontologies.smile.deri.ie/pdo#",
        "isq": "http://purl.org/ontology/is/quality/",
        "ibis": "http://purl.org/ibis#",
        "lingvoj": "http://www.lingvoj.org/ontology#",
        "places": "http://purl.org/ontology/places#",
        "ezcontext": "http://ontologies.ezweb.morfeo-project.org/ezcontext/ns#",
        "evset": "http://dsnotify.org/vocab/eventset/0.1/",
        "mei": "http://www.music-encoding.org/ns/mei/",
        "prot": "http://www.proteinontology.info/po.owl#",
        "asn": "http://purl.org/ASN/schema/core/",
        "httpvoc": "http://www.w3.org/2006/http#",
        "bag": "http://bag.basisregistraties.overheid.nl/def/bag#",
        "arpfo": "http://vocab.ouls.ox.ac.uk/projectfunding#",
        "muto": "http://purl.org/muto/core#",
        "c4n": "http://vocab.deri.ie/c4n#",
        "conserv": "http://conserv.deri.ie/ontology#",
        "sdo": "https://schema.org/",
        "wnschema": "http://www.cogsci.princeton.edu/~wn/schema/",
        "qdoslf": "http://foaf.qdos.com/lastfm/schema/",
        "rulz": "http://purl.org/NET/rulz#",
        "payment": "http://reference.data.gov.uk/def/payment#",
        "role": "https://w3id.org/role/",
        "psych": "http://purl.org/vocab/psychometric-profile/",
        "plink": "http://buzzword.org.uk/rdf/personal-link-types#",
        "pgterms": "http://www.gutenberg.org/2009/pgterms/",
        "iot": "http://iotschema.org/",
        "osoc": "http://web-semantics.org/ns/opensocial#",
        "posh": "http://poshrdf.org/ns/posh/",
        "lp": "http://launchpad.net/rdf/launchpad#",
        "vsr": "http://purl.org/twc/vocab/vsr#",
        "human": "http://eulersharp.sourceforge.net/2003/03swap/human#",
        "sl": "http://www.semanlink.net/2001/00/semanlink-schema#",
        "ldap": "http://purl.org/net/ldap/",
        "isi": "http://purl.org/ontology/is/inst/",
        "locn": "http://www.w3.org/ns/locn#",
        "sioca": "http://rdfs.org/sioc/actions#",
        "lvont": "http://lexvo.org/ontology#",
        "session": "http://redfoot.net/2005/session#",
        "np": "http://www.nanopub.org/nschema#",
        "rdaa": "http://rdaregistry.info/Elements/a/",
        "b2bo": "http://purl.org/b2bo#",
        "urn": "http://fliqz.com/",
        "okkam": "http://models.okkam.org/ENS-core-vocabulary#",
        "tripfs": "http://purl.org/tripfs/2010/02#",
        "overheid": "http://standaarden.overheid.nl/owms/",
        "opus": "http://lsdis.cs.uga.edu/projects/semdis/opus#",
        "leak": "http://data.ontotext.com/resource/leak/",
        "cheminf": "http://www.semanticweb.org/ontologies/cheminf.owl#",
        "bsbm": "http://www4.wiwiss.fu-berlin.de/bizer/bsbm/v01/vocabulary/",
        "h5": "http://buzzword.org.uk/rdf/h5#",
        "swanpav": "http://purl.org/swan/1.2/pav/",
        "dbpp": "http://dbpedia.org/property/",
        "kontakt": "http://richard.cyganiak.de/",
        "nsa": "http://multimedialab.elis.ugent.be/organon/ontologies/ninsuna#",
        "address": "http://schemas.talis.com/2005/address/schema#",
        "yoda": "http://purl.org/NET/yoda#",
        "pml": "http://provenanceweb.org/ns/pml#",
        "ean": "http://openean.kaufkauf.net/id/",
        "geographis": "http://telegraphis.net/ontology/geography/geography#",
        "cpv": "http://purl.org/weso/cpv/",
        "ncal": "http://www.semanticdesktop.org/ontologies/2007/04/02/ncal#",
        "bookmark": "http://www.w3.org/2002/01/bookmark#",
        "arch": "http://purl.org/archival/vocab/arch#",
        "wiki": "http://en.wikipedia.org/wiki/",
        "xhtmlvocab": "http://www.w3.org/1999/xhtml/vocab/",
        "ic": "http://imi.go.jp/ns/core/rdf#",
        "timeline": "http://purl.org/NET/c4dm/timeline.owl#",
        "enc": "http://www.w3.org/2001/04/xmlenc#",
        "geospecies": "http://rdf.geospecies.org/ont/geospecies#",
        "greg": "http://kasei.us/about/foaf.xrdf#",
        "arg": "http://rdfs.org/sioc/argument#",
        "lark1": "http://users.utcluj.ro/~raluca/ontology/Ontology1279614123500.owl#",
        "deo": "http://purl.org/spar/deo/",
        "zbwext": "http://zbw.eu/namespaces/zbw-extensions/",
        "api": "http://purl.org/linked-data/api/vocab#",
        "lr": "http://linkedrecipes.org/schema/",
        "cpm": "http://catalogus-professorum.org/cpm/2/",
        "faldo": "http://biohackathon.org/resource/faldo#",
        "osgb": "http://data.ordnancesurvey.co.uk/id/",
        "drug": "http://www.agfa.com/w3c/2009/drugTherapy#",
        "odrl": "http://www.w3.org/ns/odrl/2/",
        "bte": "http://purl.org/twc/vocab/between-the-edges/",
        "tarot": "http://data.totl.net/tarot/card/",
        "wairole": "http://www.w3.org/2005/01/wai-rdf/GUIRoleTaxonomy#",
        "oslc": "http://open-services.net/ns/core#",
        "card": "http://www.ashutosh.com/test/",
        "vso": "http://purl.org/vso/ns#",
        "coo": "http://purl.org/coo/ns#",
        "fab": "http://purl.org/fab/ns#",
        "ann": "http://www.w3.org/2000/10/annotation-ns#",
        "ludo": "http://ns.inria.fr/ludo/v1#",
        "gv": "http://rdf.data-vocabulary.org/#",
        "calli": "http://callimachusproject.org/rdf/2009/framework#",
        "eprints": "http://eprints.org/ontology/",
        "exterms": "http://www.example.org/terms/",
        "rdam": "http://rdaregistry.info/Elements/m/",
        "eli": "http://data.europa.eu/eli/ontology#",
        "olo": "http://purl.org/ontology/olo/core#",
        "pro": "http://purl.org/hpi/patchr#",
        "br": "http://vocab.deri.ie/br#",
        "uri": "http://purl.org/NET/uri#",
        "zem": "http://s.zemanta.com/ns#",
        "voag": "http://voag.linkedmodel.org/schema/voag#",
        "fd": "http://foodable.co/ns/",
        "dita": "http://purl.org/dita/ns#",
        "muni": "http://vocab.linkeddata.es/urbanismo-infraestructuras/territorio#",
        "sawsdl": "http://www.w3.org/ns/sawsdl#",
        "lex": "http://purl.org/lex#",
        "frbre": "http://purl.org/vocab/frbr/extended#",
        "agents": "http://eulersharp.sourceforge.net/2003/03swap/agent#",
        "ospost": "http://data.ordnancesurvey.co.uk/ontology/postcode/",
        "vitro": "http://vitro.mannlib.cornell.edu/ns/vitro/public#",
        "aapi": "http://rdf.alchemyapi.com/rdf/v1/s/aapi-schema#",
        "wlp": "http://weblab-project.org/core/model/property/processing/",
        "hospital": "http://www.agfa.com/w3c/2009/hospital#",
        "bing": "http://bing.com/schema/media/",
        "pmlt": "http://inference-web.org/2.0/pml-trust.owl#",
        "wikipedia": "http://wikipedia.no/rdf/",
        "prvtypes": "http://purl.org/net/provenance/types#",
        "remus": "http://www.semanticweb.org/ontologies/2010/6/Ontology1279614123500.owl#",
        "aair": "http://xmlns.notu.be/aair#",
        "wai": "http://purl.org/wai#",
        "marl": "http://www.gsi.dit.upm.es/ontologies/marl/ns#",
        "geodata": "http://sws.geonames.org/",
        "ogp": "http://ogp.me/ns#",
        "languages": "http://eulersharp.sourceforge.net/2003/03swap/languages#",
        "un": "http://www.w3.org/2007/ont/unit#",
        "mime": "https://www.iana.org/assignments/media-types/",
        "agetec": "http://www.agetec.org/",
        "status": "http://www.w3.org/2003/06/sw-vocab-status/ns#",
        "care": "http://eulersharp.sourceforge.net/2003/03swap/care#",
        "qa": "http://www.mit.jyu.fi/ai/TRUST_Ontologies/QA.owl#",
        "nndsr": "http://semanticdiet.com/schema/usda/nndsr/",
        "wisski": "http://wiss-ki.eu/",
        "dso": "http://purl.org/ontology/dso#",
        "aos": "http://rdf.muninn-project.org/ontologies/appearances#",
        "odp": "http://ontologydesignpatterns.org/",
        "dive": "http://scubadive.networld.to/dive.rdf#",
        "cube": "http://purl.org/linked-data/cube#",
        "iso": "http://purl.org/iso25964/skos-thes#",
        "cos": "http://www.inria.fr/acacia/corese#",
        "cmo": "http://purl.org/twc/ontologies/cmo.owl#",
        "re": "http://www.w3.org/2000/10/swap/reason#",
        "r2r": "http://www4.wiwiss.fu-berlin.de/bizer/r2r/",
        "webtlab": "http://webtlab.it.uc3m.es/",
        "req": "http://purl.org/req/",
        "mygrid": "http://www.mygrid.org.uk/ontology#",
        "opwn": "http://www.ontologyportal.org/WordNet.owl#",
        "tcga": "http://purl.org/tcga/core#",
        "imreg": "http://www.w3.org/2004/02/image-regions#",
        "bibframe": "http://bibframe.org/vocab/",
        "swanci": "http://purl.org/swan/1.2/citations/",
        "fea": "http://vocab.data.gov/def/fea#",
        "xesam": "http://freedesktop.org/standards/xesam/1.0/core#",
        "won": "https://w3id.org/won/core#",
        "rooms": "http://vocab.deri.ie/rooms#",
        "tr": "http://www.thomsonreuters.com/",
        "ncbitaxon": "http://purl.org/obo/owl/NCBITaxon#",
        "hemogram": "http://www.agfa.com/w3c/2009/hemogram#",
        "algo": "http://securitytoolbox.appspot.com/securityAlgorithms#",
        "pos": "http://www.w3.org/2003/01/geo/wgs84_pos#",
        "provenir": "http://knoesis.wright.edu/provenir/provenir.owl#",
        "stanford": "http://purl.org/olia/stanford.owl#",
        "linkedct": "http://data.linkedct.org/vocab/",
        "prefix": "http://prefix.cc/",
        "xds": "http://www.w3.org/2001/XMLSchema#",
        "pay": "http://reference.data.gov.uk/def/payment#",
        "gc": "http://www.oegov.org/core/owl/gc#",
        "linkedmdb": "http://data.linkedmdb.org/sparql/",
        "life": "http://life.deri.ie/schema/",
        "osn": "http://spatial.ucd.ie/lod/osn/",
        "cex": "http://purl.org/weso/computex/ontology#",
        "bne": "http://datos.bne.es/resource/",
        "wao": "http://webtlab.it.uc3m.es/2010/10/WebAppsOntology#",
        "dayta": "http://dayta.me/resource#",
        "soc": "http://purl.org/net/hdlipcores/ontology/soc#",
        "mm": "http://linkedmultimedia.org/sparql-mm/ns/2.0.0/function#",
        "dco": "http://info.deepcarbon.net/schema#",
        "aneo": "http://akonadi-project.org/ontologies/aneo#",
        "city": "http://datos.localidata.com/def/City#",
        "visit": "http://purl.org/net/vocab/2004/07/visit#",
        "toby": "http://tobyinkster.co.uk/#",
        "fls": "http://lukasblaho.sk/football_league_schema#",
        "omv": "http://omv.ontoware.org/2005/05/ontology#",
        "opmv": "http://purl.org/net/opmv/ns#",
        "teach": "http://linkedscience.org/teach/ns#",
        "dbpo": "http://dbpedia.org/ontology/",
        "dnb": "http://d-nb.info/gnd/",
        "quak": "http://dev.w3.org/cvsweb/2000/quacken/vocab#",
        "xfnv": "http://vocab.sindice.com/xfn#",
        "rda": "http://www.rdaregistry.info/",
        "rdo": "http://purl.org/rdo/ns#",
        "oboe": "http://ecoinformatics.org/oboe/oboe.1.0/oboe-core.owl#",
        "xsl": "http://www.w3.org/1999/XSL/Transform#",
        "wp": "http://vocabularies.wikipathways.org/wp#",
        "derecho": "http://purl.org/derecho#",
        "sindice": "http://vocab.sindice.net/",
        "oad": "http://lod.xdams.org/reload/oad/",
        "ppo": "http://vocab.deri.ie/ppo#",
        "prf": "http://www.openmobilealliance.org/tech/profiles/UAPROF/ccppschema-20021212#",
        "skip": "http://skipforward.net/skipforward/resource/",
        "pf": "http://jena.hpl.hp.com/ARQ/property#",
        "wi": "http://purl.org/ontology/wi/core#",
        "out": "http://ontologies.hypios.com/out#",
        "jita": "http://aims.fao.org/aos/jita/",
        "atomowl": "http://bblfish.net/work/atom-owl/2006-06-06/#",
        "fowl": "http://www.w3.org/TR/2003/PR-owl-guide-20031209/food#",
        "protons": "http://proton.semanticweb.org/2005/04/protons#",
        "gelo": "http://krauthammerlab.med.yale.edu/ontologies/gelo#",
        "dgfoaf": "http://west.uni-koblenz.de/ontologies/2010/07/dgfoaf.owl#",
        "span": "http://www.ifomis.org/bfo/1.1/span#",
        "dcr": "http://www.isocat.org/ns/dcr.rdf#",
        "organiz": "http://eulersharp.sourceforge.net/2003/03swap/organization#",
        "gridworks": "http://purl.org/net/opmv/types/gridworks#",
        "esd": "http://def.esd.org.uk/",
        "rlog": "http://persistence.uni-leipzig.org/nlp2rdf/ontologies/rlog#",
        "evopat": "http://ns.aksw.org/Evolution/",
        "c4o": "http://purl.org/spar/c4o/",
        "govtrackus": "http://www.rdfabout.com/rdf/usgov/geo/us/",
        "metalex": "http://www.metalex.eu/schema/1.0#",
        "comm": "http://vocab.resc.info/communication#",
        "countries": "http://eulersharp.sourceforge.net/2003/03swap/countries#",
        "emotion": "http://ns.inria.fr/emoca#",
        "dsp": "http://purl.org/metainfo/terms/dsp#",
        "ccom": "http://purl.org/ontology/cco/mappings#",
        "bioskos": "http://eulersharp.sourceforge.net/2003/03swap/bioSKOSSchemes#",
        "oboro": "http://obofoundry.org/ro/ro.owl#",
        "rv": "http://wifo-ravensburg.de/semanticweb.rdf#",
        "eclap": "http://www.eclap.eu/schema/eclap/",
        "hxl": "http://hxl.humanitarianresponse.info/ns/#",
        "theatre": "http://purl.org/theatre#",
        "agent": "http://eulersharp.sourceforge.net/2003/03swap/agent#",
        "prvr": "http://purl.org/ontology/prv/rules#",
        "scsv": "http://purl.org/NET/schema-org-csv#",
        "kdo": "http://kdo.render-project.eu/kdo#",
        "gazetteer": "http://data.ordnancesurvey.co.uk/ontology/50kGazetteer/",
        "san": "http://www.irit.fr/recherches/MELODI/ontologies/SAN#",
        "arecipe": "http://purl.org/amicroformat/arecipe/",
        "wbp": "http://worldbank.270a.info/property/",
        "iao": "http://purl.obolibrary.org/obo/iao.owl#",
        "spatial": "http://geovocab.org/spatial#",
        "igeo": "http://rdf.insee.fr/def/geo#",
        "sql": "http://ns.inria.fr/ast/sql#",
        "wbc": "http://worldbank.270a.info/classification/",
        "ple": "http://pleiades.stoa.org/places/",
        "elog": "http://eulersharp.sourceforge.net/2003/03swap/log-rules#",
        "decl": "http://www.linkedmodel.org/1.0/schema/decl#",
        "cao": "http://purl.org/makolab/caont/",
        "agrelon": "http://d-nb.info/standards/elementset/agrelon#",
        "nocal": "http://vocab.deri.ie/nocal#",
        "cb": "http://cbasewrap.ontologycentral.com/vocab#",
        "swanag": "http://purl.org/swan/1.2/agents/",
        "loticoowl": "http://www.lotico.com/ontology/",
        "xbrli": "http://www.xbrl.org/2003/instance#",
        "commons": "http://commons.psi.enakting.org/def/",
        "dis": "http://stanbol.apache.org/ontology/disambiguation/disambiguation#",
        "sig": "http://purl.org/signature#",
        "xt": "http://purl.org/twc/vocab/cross-topix#",
        "vaem": "http://www.linkedmodel.org/schema/vaem#",
        "uni": "http://purl.org/weso/uni/uni.html#",
        "enhancer": "http://stanbol.apache.org/ontology/enhancer/enhancer#",
        "ens": "http://models.okkam.org/ENS-core-vocabulary.owl#",
        "units": "http://eulersharp.sourceforge.net/2003/03swap/units#",
        "oboso": "http://purl.org/obo/owl/SO#",
        "xch": "http://oanda2rdf.appspot.com/xch/",
        "events": "http://eulersharp.sourceforge.net/2003/03swap/event#",
        "tmpl": "http://purl.org/restdesc/http-template#",
        "premis": "http://www.loc.gov/premis/rdf/v1#",
        "rad": "http://www.w3.org/ns/rad#",
        "htir": "http://www.w3.org/2011/http#",
        "reve": "http://data.eurecom.fr/ontology/reve#",
        "nuts": "http://dd.eionet.europa.eu/vocabulary/common/nuts/",
        "aims": "http://aims.fao.org/aos/common/",
        "idemo": "http://rdf.insee.fr/def/demo#",
        "health": "http://purl.org/twc/health/vocab/",
        "bbc": "http://www.bbc.co.uk/ontologies/news/",
        "cidoccrm": "http://purl.org/NET/cidoc-crm/core#",
        "pna": "http://data.press.net/ontology/asset/",
        "swpo": "http://sw-portal.deri.org/ontologies/swportal#",
        "w3p": "http://prov4j.org/w3p/",
        "shv": "http://ns.aksw.org/spatialHierarchy/",
        "recipe": "http://linkedrecipes.org/schema/",
        "dbt": "http://dbpedia.org/resource/Template:",
        "fc": "http://www.freeclass.eu/freeclass_v1#",
        "admssw": "http://purl.org/adms/sw/",
        "wgspos": "http://www.w3.org/2003/01/geo/wgs84_pos#",
        "clineva": "http://www.agfa.com/w3c/2009/clinicalEvaluation#",
        "mte": "http://nl.ijs.si/ME/owl/",
        "oper": "http://sweet.jpl.nasa.gov/2.0/mathOperation.owl#",
        "sem": "http://semanticweb.cs.vu.nl/2009/11/sem/",
        "pccz": "http://purl.org/procurement/public-contracts-czech#",
        "mp": "http://jicamaro.info/mp#",
        "ufmedia": "http://purl.org/microformat/hmedia/",
        "aigp": "http://swat.cse.lehigh.edu/resources/onto/aigp.owl#",
        "italy": "http://data.kasabi.com/dataset/italy/schema/",
        "wl": "http://www.wsmo.org/ns/wsmo-lite#",
        "genab": "http://eulersharp.sourceforge.net/2003/03swap/genomeAbnormality#",
        "ends": "http://labs.mondeca.com/vocab/endpointStatus#",
        "orca": "http://geni-orca.renci.org/owl/topology.owl#",
        "dcm": "http://purl.org/dc/dcmitype/",
        "kw": "http://kwantu.net/kw/",
        "oax": "http://www.w3.org/ns/openannotation/extensions/",
        "rlno": "http://rdflivenews.aksw.org/ontology/",
        "infosys": "http://www.infosys.com/",
        "doco": "http://purl.org/spar/doco/",
        "oj": "http://ontojob.at/",
        "set": "http://www.w3.org/2000/10/swap/set#",
        "transit": "http://vocab.org/transit/terms/",
        "wf": "http://www.w3.org/2005/01/wf/flow#",
        "httpm": "http://www.w3.org/2011/http-methods#",
        "owls": "http://www.daml.org/services/owl-s/1.2/Service.owl#",
        "sdgp": "http://stats.data-gov.ie/property/",
        "fcm": "http://eulersharp.sourceforge.net/2006/02swap/fcm#",
        "ogorg": "http://opengraph.org/schema/",
        "pol": "http://escience.rpi.edu/ontology/semanteco/2/0/pollution.owl#",
        "visko": "http://trust.utep.edu/visko/ontology/visko-operator-v3.owl#",
        "pns": "http://data.press.net/ontology/stuff/",
        "tei": "http://www.tei-c.org/ns/1.0/",
        "vocab": "http://rdf.ontology2.com/vocab#",
        "dtype": "http://www.linkedmodel.org/schema/dtype#",
        "carfo": "http://purl.org/carfo#",
        "humanbody": "http://eulersharp.sourceforge.net/2003/03swap/humanBody#",
        "fl": "http://eulersharp.sourceforge.net/2003/03swap/fl-rules#",
        "pne": "http://data.press.net/ontology/event/",
        "coun": "http://www.daml.org/2001/09/countries/iso-3166-ont#",
        "eseduc": "http://www.purl.org/ontologia/eseduc#",
        "myprefix": "http://myprefix.org/",
        "itsmo": "http://ontology.it/itsmo/v1#",
        "semtweet": "http://semantictweet.com/",
        "kupkb": "http://www.e-lico.eu/data/kupkb/",
        "wapp": "http://ns.rww.io/wapp#",
        "open": "http://open.vocab.org/terms/",
        "owltime": "http://www.w3.org/TR/owl-time#",
        "scowt": "http://purl.org/weso/ontologies/scowt#",
        "npgd": "http://ns.nature.com/datasets/",
        "hgnc": "http://bio2rdf.org/hgnc:",
        "prolog": "http://eulersharp.sourceforge.net/2003/03swap/prolog#",
        "intervals": "http://reference.data.gov.uk/def/intervals/",
        "sgv": "http://www.w3.org/TR/SVG/",
        "nyt": "http://data.nytimes.com/",
        "healthcare": "http://www.agfa.com/w3c/2009/healthCare#",
        "wfdesc": "http://purl.org/wf4ever/wfdesc#",
        "aersv": "http://aers.data2semantics.org/vocab/",
        "place": "http://purl.org/ontology/places/",
        "ccard": "http://purl.org/commerce/creditcard#",
        "artstor": "http://simile.mit.edu/2003/10/ontologies/artstor#",
        "ipad": "http://www.padinthecity.com/",
        "wfm": "http://purl.org/net/wf-motifs#",
        "geom": "http://data.ign.fr/def/geometrie#",
        "spif": "http://spinrdf.org/spif#",
        "dctypes": "http://purl.org/dc/dcmitype/",
        "gxa": "http://www.ebi.ac.uk/gxa/",
        "coeus": "http://bioinformatics.ua.pt/coeus/",
        "nytimes": "http://data.nytimes.com/elements/",
        "rdfdf": "http://www.openlinksw.com/virtrdf-data-formats#",
        "npgg": "http://ns.nature.com/graphs/",
        "func": "http://www.w3.org/2007/rif-builtin-function#",
        "dl": "http://ontology.ip.rm.cnr.it/ontologies/DOLCE-Lite#",
        "oboinowl": "http://www.geneontology.org/formats/oboInOwl#",
        "bsb": "http://opacplus.bsb-muenchen.de/title/",
        "rating": "http://www.tvblob.com/ratings/#",
        "lctr": "http://data.linkedct.org/vocab/resource/",
        "ecb": "http://ecb.270a.info/class/1.0/",
        "xmls": "http://www.w3.org/2001/XMLSchema#",
        "flow": "http://www.w3.org/2005/01/wf/flow#",
        "eye": "http://jena.hpl.hp.com/Eyeball#",
        "pronom": "http://reference.data.gov.uk/technical-registry/",
        "vra": "http://purl.org/vra/",
        "saxon": "http://saxon.sf.net/",
        "osmsemnet": "http://spatial.ucd.ie/2012/08/osmsemnet/",
        "wm": "http://ns.inria.fr/webmarks#",
        "nxp": "http://purl.org/nxp/schema/v1/",
        "pkmn": "http://pokedex.dataincubator.org/pkm/",
        "vcardx": "http://buzzword.org.uk/rdf/vcardx#",
        "goef": "http://purl.org/twc/vocab/goef#",
        "dssn": "http://purl.org/net/dssn/",
        "cold": "http://purl.org/configurationontology#",
        "penis": "http://penis.to/#",
        "malignneo": "http://www.agfa.com/w3c/2009/malignantNeoplasm#",
        "frapo": "http://purl.org/cerif/frapo/",
        "rdaw": "http://rdaregistry.info/Elements/w/",
        "centrifuge": "http://purl.org/twc/vocab/centrifuge#",
        "wsc": "http://www.openk.org/wscaim.owl#",
        "soap": "http://www.w3.org/2003/05/soap-envelope/",
        "osr": "http://dati.senato.it/osr/",
        "aerols": "http://xmlns.com/aerols/0.1/",
        "govwild": "http://govwild.org/0.6/GWOntology.rdf/",
        "rpubl": "http://rinfo.lagrummet.se/ns/2008/11/rinfo/publ#",
        "ql": "http://www.w3.org/2004/ql#",
        "ngeoi": "http://vocab.lenka.no/geo-deling#",
        "bm": "http://bio2rdf.org/",
        "lh": "http://vocab.inf.ed.ac.uk/library/holdings#",
        "ecpo": "http://purl.org/ontology/ecpo#",
        "telix": "http://purl.org/telix#",
        "emp": "http://purl.org/ctic/empleo/oferta#",
        "crtv": "http://open-services.net/ns/crtv#",
        "str": "http://nlp2rdf.lod2.eu/schema/string/",
        "s4ac": "http://ns.inria.fr/s4ac/v2#",
        "article": "http://ogp.me/ns/article#",
        "mtecore": "http://purl.org/olia/mte/multext-east.owl#",
        "bmo": "http://collection.britishmuseum.org/id/ontology/",
        "lod2": "http://lod2.eu/schema/",
        "fct": "http://openlinksw.com/services/facets/1.0/",
        "daiaserv": "http://purl.org/ontology/daia/Service/",
        "ec": "http://eulergui.sourceforge.net/contacts.owl.n3#",
        "openskos": "http://openskos.org/xmlns#",
        "moby": "http://www.mygrid.org.uk/mygrid-moby-service#",
        "nsl": "http://purl.org/ontology/storyline/",
        "oac": "http://www.openannotation.org/ns/",
        "poder": "http://poderopedia.com/vocab/",
        "cf": "http://mmisw.org/ont/cf/parameter/",
        "genea": "http://www.owl-ontologies.com/generations.owl#",
        "rso": "http://www.researchspace.org/ontology/",
        "diseasome": "http://www4.wiwiss.fu-berlin.de/diseasome/resource/diseasome/",
        "mil": "http://rdf.muninn-project.org/ontologies/military#",
        "ekaw": "http://data.semanticweb.org/conference/ekaw/2012/complete/",
        "meb": "http://rdf.myexperiment.org/ontologies/base/",
        "skos08": "http://www.w3.org/2008/05/skos#",
        "osp": "http://data.lirmm.fr/ontologies/osp#",
        "va": "http://code-research.eu/ontology/visual-analytics#",
        "p20": "http://zbw.eu/beta/p20/vocab/",
        "wfprov": "http://purl.org/wf4ever/wfprov#",
        "mohammad": "http://manesht.ir/",
        "te": "http://www.w3.org/2006/time-entry#",
        "category": "http://dbpedia.org/resource/Category:",
        "lgv": "http://linkedgeodata.org/ontology/",
        "ling": "http://purl.org/voc/ling/",
        "gbv": "http://purl.org/ontology/gbv/",
        "grs": "http://www.georss.org/georss/",
        "pam": "http://prismstandard.org/namespaces/pam/2.0/",
        "identity": "http://purl.org/twc/ontologies/identity.owl#",
        "atomrdf": "http://atomowl.org/ontologies/atomrdf#",
        "environ": "http://eulersharp.sourceforge.net/2003/03swap/environment#",
        "hp": "http://purl.org/voc/hp/",
        "okg": "http://openknowledgegraph.org/ontology/",
        "clinproc": "http://www.agfa.com/w3c/2009/clinicalProcedure#",
        "geofla": "http://data.ign.fr/ontologies/geofla#",
        "vsto": "http://escience.rpi.edu/ontology/vsto/2/0/vsto.owl#",
        "cis": "http://purl.org/NET/cloudisus#",
        "sad": "http://vocab.deri.ie/sad#",
        "msr": "http://www.telegraphis.net/ontology/measurement/measurement#",
        "namespaces": "https://vg.no/",
        "no": "http://km.aifb.kit.edu/projects/numbers/number#",
        "archdesc": "http://archdesc.info/archEvent#",
        "leaks": "https://cuzin.com/",
        "fingal": "http://vocab.deri.ie/fingal#",
        "fbgeo": "http://rdf.freebase.com/ns/location/geocode/",
        "wkd": "http://schema.wolterskluwer.de/",
        "oecd": "http://oecd.270a.info/dataset/",
        "camelot": "http://vocab.ox.ac.uk/camelot#",
        "hartigprov": "http://purl.org/net/provenance/ns#",
        "marshall": "http://sites.google.com/site/xgmaitc/",
        "tvc": "http://www.essepuntato.it/2012/04/tvc/",
        "rich": "http://rdf.data-vocabulary.org/",
        "mpeg7": "http://rhizomik.net/ontologies/2005/03/Mpeg7-2001.owl#",
        "gfo": "http://www.onto-med.de/ontologies/gfo.owl#",
        "tisc": "http://observedchange.com/tisc/ns#",
        "frad": "http://iflastandards.info/ns/fr/frad/",
        "biordf": "http://purl.org/net/biordfmicroarray/ns#",
        "dpl": "http://dbpedialite.org/things/",
        "stac": "http://securitytoolbox.appspot.com/stac#",
        "d2r": "http://sites.wiwiss.fu-berlin.de/suhl/bizer/d2r-server/config.rdf#",
        "psh": "http://psh.techlib.cz/skos/",
        "puelia": "http://kwijibo.talis.com/vocabs/puelia#",
        "geovocab": "http://geovocab.org/",
        "qu": "http://purl.oclc.org/NET/ssnx/qu/qu#",
        "wscaim": "http://www.openk.org/wscaim.owl#",
        "qvoc": "http://mlode.nlp2rdf.org/quranvocab#",
        "oarj": "http://opendepot.org/reference/linked/1.0/",
        "scms": "http://ns.aksw.org/scms/annotations/",
        "gesis": "http://lod.gesis.org/lodpilot/ALLBUS/vocab.rdf#",
        "tripfs2": "http://purl.org/tripfs/2010/06#",
        "c4dm": "http://purl.org/NET/c4dm/event.owl#",
        "opmw": "http://www.opmw.org/ontology/",
        "occult": "http://data.totl.net/occult/",
        "iron": "http://purl.org/ontology/iron#",
        "opl": "http://openlinksw.com/schema/attribution#",
        "protegedc": "http://protege.stanford.edu/plugins/owl/dc/protege-dc.owl#",
        "bcnnorms": "http://datos.bcn.cl/ontologies/bcn-norms#",
        "gastro": "http://www.ebsemantics.net/gastro#",
        "l4a": "http://labels4all.info/ns/",
        "hcard": "http://purl.org/uF/hCard/terms/",
        "s2s": "http://escience.rpi.edu/ontology/sesf/s2s/4/0/",
        "dbyago": "http://dbpedia.org/class/yago/",
        "curr": "https://w3id.org/cc#",
        "kbp": "http://tackbp.org/2013/ontology#",
        "cdtype": "http://purl.org/cld/cdtype/",
        "csm": "http://purl.org/csm/1.0#",
        "ebu": "http://semantic.eurobau.com/eurobau-utility.owl#",
        "ptop": "http://www.ontotext.com/proton/protontop#",
        "osukdt": "http://www.ordnancesurvey.co.uk/ontology/Datatypes.owl#",
        "bfo": "http://purl.obolibrary.org/obo/",
        "ru": "http://purl.org/imbi/ru-meta.owl#",
        "skiresort": "http://www.openlinksw.com/ski_resorts/schema#",
        "bcncon": "http://datos.bcn.cl/ontologies/bcn-congress#",
        "campsite": "http://www.openlinksw.com/campsites/schema#",
        "taxon": "http://purl.org/biodiversity/taxon/",
        "zoomaterms": "http://rdf.ebi.ac.uk/vocabulary/zooma/",
        "laposte": "http://data.lirmm.fr/ontologies/laposte#",
        "fos": "http://futurios.org/fos/spec/",
        "dcndl": "http://ndl.go.jp/dcndl/terms/",
        "dawgt": "http://www.w3.org/2001/sw/DataAccess/tests/test-dawg#",
        "l4lod": "http://ns.inria.fr/l4lod/v2/",
        "rssynd": "http://web.resource.org/rss/1.0/modules/syndication/",
        "osspr": "http://data.ordnancesurvey.co.uk/ontology/spatialrelations/",
        "sci": "http://data.scientology.org/ns/",
        "transmed": "http://www.w3.org/2001/sw/hcls/ns/transmed/",
        "mads": "http://www.loc.gov/mads/rdf/v1#",
        "paia": "http://purl.org/ontology/paia#",
        "qrl": "http://www.aifb.kit.edu/project/ld-retriever/qrl#",
        "ds": "http://purl.org/ctic/dcat#",
        "frbrcore": "http://purl.org/vocab/frbr/core#",
        "hifm": "http://purl.org/net/hifm/data#",
        "cmd": "http://clarin.eu/cmd#",
        "rec54": "http://www.w3.org/2001/02pd/rec54.rdf#",
        "seq": "http://www.ontologydesignpatterns.org/cp/owl/sequence.owl#",
        "prvt": "http://purl.org/net/provenance/types#",
        "geop": "http://aims.fao.org/aos/geopolitical.owl#",
        "prism21": "http://prismstandard.org/namespaces/basic/2.1/",
        "odcs": "http://opendata.cz/infrastructure/odcleanstore/",
        "pso": "http://purl.org/spar/pso/",
        "sso": "http://nlp2rdf.lod2.eu/schema/sso/",
        "onyx": "http://www.gsi.dit.upm.es/ontologies/onyx/ns#",
        "bihap": "http://bihap.kb.gov.tr/ontology/",
        "tblcard": "http://www.w3.org/People/Berners-Lee/card#",
        "eumida": "http://data.kasabi.com/dataset/eumida/terms/",
        "b2rpubchem": "http://bio2rdf.org/ns/ns/ns/pubchem#",
        "dcite": "http://purl.org/spar/datacite/",
        "steel": "http://ontorule-project.eu/resources/steel-30#",
        "refe": "http://orion.tw.rpi.edu/~xgmatwc/refe/",
        "pubmed": "http://bio2rdf.org/pubmed_vocabulary:",
        "harrisons": "http://harrisons.cc/",
        "elec": "http://purl.org/ctic/sector-publico/elecciones#",
        "infor": "http://www.ontologydesignpatterns.org/cp/owl/informationrealization.owl#",
        "vsw": "http://verticalsearchworks.com/ontology/",
        "dbkwik": "http://dbkwik.webdatacommons.org/",
        "crv": "http://purl.org/twc/vocab/datacarver#",
        "parl": "https://id.parliament.uk/schema/",
        "qud": "http://qudt.org/1.1/schema/qudt#",
        "wsl": "http://www.wsmo.org/ns/wsmo-lite#",
        "quantities": "http://eulersharp.sourceforge.net/2003/03swap/quantitiesExtension#",
        "part": "http://purl.org/vocab/participation/schema#",
        "spt": "http://spitfire-project.eu/ontology/ns/",
        "bwb": "http://doc.metalex.eu/bwb/ontology/",
        "bridge": "http://purl.org/vocommons/bridge#",
        "li": "http://def.seegrid.csiro.au/isotc211/iso19115/2003/lineage#",
        "bcnbio": "http://datos.bcn.cl/ontologies/bcn-biographies#",
        "telmap": "http://purl.org/telmap/",
        "sioctypes": "http://rdfs.org/sioc/types#",
        "mrel": "http://id.loc.gov/vocabulary/relators/",
        "conf": "http://richard.cyganiak.de/2007/pubby/config.rdf#",
        "alchemy": "http://rdf.alchemyapi.com/rdf/v1/s/aapi-schema#",
        "aers": "http://aers.data2semantics.org/resource/",
        "rdae": "http://rdaregistry.info/Elements/e/",
        "daisy": "http://www.daisy.org/z3998/2012/vocab/",
        "osgeom": "http://data.ordnancesurvey.co.uk/ontology/geometry/",
        "vsws": "http://verticalsearchworks.com/ontology/synset#",
        "hints2005": "http://purl.org/twc/cabig/model/HINTS2005-1.owl#",
        "sdmxd": "http://purl.org/linked-data/sdmx/2009/dimension#",
        "lldr": "http://purl.oclc.org/NET/lldr/ns#",
        "pizza": "http://www.co-ode.org/ontologies/pizza/pizza.owl#",
        "germplasm": "http://purl.org/germplasm/terms#",
        "ep": "http://eprints.org/ontology/",
        "stream": "http://dbpedia.org/ontology/Stream/",
        "webbox": "http://webbox.ecs.soton.ac.uk/ns#",
        "lexvo": "http://lexvo.org/ontology#",
        "lodac": "http://lod.ac/ns/lodac#",
        "dvia": "http://data.eurecom.fr/ontology/dvia#",
        "orges": "http://datos.gob.es/def/sector-publico/organizacion#",
        "jjd": "http://www.joshuajeeson.com/",
        "cts2": "http://schema.omg.org/spec/CTS2/1.0/",
        "rdamedia": "http://rdvocab.info/termList/RDAMediaType/",
        "od": "http://purl.org/twc/vocab/opendap#",
        "water": "http://escience.rpi.edu/ontology/semanteco/2/0/water.owl#",
        "strdf": "http://strdf.di.uoa.gr/ontology#",
        "eui": "http://institutions.publicdata.eu/#",
        "situ": "http://www.ontologydesignpatterns.org/cp/owl/situation.owl#",
        "vrank": "http://purl.org/voc/vrank#",
        "w3con": "http://www.w3.org/2000/10/swap/pim/contact#",
        "iol": "http://www.ontologydesignpatterns.org/ont/dul/IOLite.owl#",
        "omapi": "http://purl.org/omapi/0.2/#",
        "wikterms": "http://wiktionary.dbpedia.org/terms/",
        "eunis": "http://eunis.eea.europa.eu/rdf/species-schema.rdf#",
        "lcy": "http://purl.org/vocab/lifecycle/schema#",
        "roevo": "http://purl.org/wf4ever/roevo#",
        "mged": "http://mged.sourceforge.net/ontologies/MGEDOntology.owl#",
        "ecos": "http://kmm.lboro.ac.uk/ecos/1.0#",
        "wlo": "http://purl.org/ontology/wo/",
        "quty": "http://www.telegraphis.net/ontology/measurement/quantity#",
        "npgx": "http://ns.nature.com/extensions/",
        "ox": "http://vocab.ox.ac.uk/projectfunding#",
        "opmo": "http://openprovenance.org/model/opmo#",
        "swperson": "http://data.semanticweb.org/person/",
        "moac": "http://observedchange.com/moac/ns#",
        "graffle": "http://purl.org/twc/vocab/vsr/graffle#",
        "mb": "http://dbtune.org/musicbrainz/resource/instrument/",
        "nidm": "http://nidm.nidash.org/",
        "prviv": "http://purl.org/net/provenance/integrity#",
        "biro": "http://purl.org/spar/biro/",
        "pingback": "http://purl.org/net/pingback/",
        "vdpp": "http://data.lirmm.fr/ontologies/vdpp#",
        "rdacarrier": "http://rdvocab.info/termList/RDACarrierType/",
        "cosmo": "http://purl.org/ontology/cosmo#",
        "op": "http://environment.data.gov.au/def/op#",
        "fincaselaw": "http://purl.org/finlex/schema/oikeus/",
        "viskoo": "http://trust.utep.edu/visko/ontology/visko-operator-v3.owl#",
        "who": "http://www.who.int/vocab/ontology#",
        "turismo": "http://idi.fundacionctic.org/cruzar/turismo#",
        "emoca": "http://ns.inria.fr/emoca#",
        "rdarel": "http://rdvocab.info/RDARelationshipsWEMI/",
        "dcoid": "http://dx.deepcarbon.net/",
        "luc": "http://www.ontotext.com/owlim/lucene#",
        "r4ta": "http://ns.inria.fr/ratio4ta/v1#",
        "cbase": "http://ontologycentral.com/2010/05/cb/vocab#",
        "infection": "http://www.agfa.com/w3c/2009/infectiousDisorder#",
        "semio": "http://www.lingvoj.org/semio#",
        "twaapi": "http://purl.org/twc/vocab/aapi-schema#",
        "swpatho": "http://swpatho.ag-nbi.de/context/meta.owl#",
        "fma": "http://sig.uw.edu/fma#",
        "mt": "http://www.w3.org/2001/sw/DataAccess/tests/test-manifest#",
        "pkgsrc": "http://pkgsrc.co/schema#",
        "lsc": "http://linkedscience.org/lsc/ns#",
        "wno": "http://wordnet-rdf.princeton.edu/ontology#",
        "rlnr": "http://rdflivenews.aksw.org/resource/",
        "disease": "http://www.agfa.com/w3c/2009/humanDisorder#",
        "odv": "http://reference.data.gov.uk/def/organogram/",
        "ctorg": "http://purl.org/ctic/infraestructuras/organizacion#",
        "onssprel": "http://www.ordnancesurvey.co.uk/ontology/SpatialRelations/v0.2/SpatialRelations.owl#",
        "fcp": "http://www.newmedialab.at/fcp/",
        "ordf": "http://purl.org/NET/ordf/",
        "omnlife": "http://open-multinet.info/ontology/omn-lifecycle#",
        "bv": "http://purl.org/vocommons/bv#",
        "ssso": "http://purl.org/ontology/ssso#",
        "my": "http://www.mobile.com/model/",
        "agls": "http://www.agls.gov.au/agls/terms/",
        "particip": "http://purl.org/vocab/participation/schema#",
        "saif": "http://wwwiti.cs.uni-magdeburg.de/~srahman/",
        "odapp": "http://vocab.deri.ie/odapp#",
        "tsioc": "http://rdfs.org/sioc/types#",
        "cvbase": "http://purl.org/captsolo/resume-rdf/0.2/base#",
        "dogont": "http://elite.polito.it/ontologies/dogont.owl#",
        "lingvo": "http://www.lingvoj.org/ontology#",
        "vin": "http://www.w3.org/TR/2003/PR-owl-guide-20031209/wine#",
        "r2rml": "http://www.w3.org/ns/r2rml#",
        "vvo": "http://purl.org/vvo/ns#",
        "rdarole": "http://rdvocab.info/roles/",
        "radion": "http://www.w3.org/ns/radion#",
        "dr": "http://purl.org/swan/2.0/discourse-relationships/",
        "rs": "http://spektrum.ctu.cz/ontologies/radio-spectrum#",
        "accom": "http://purl.org/acco/ns#",
        "frame": "http://www.ontologydesignpatterns.org/ont/framenet/abox/frame/",
        "asgv": "http://aims.fao.org/aos/agrovoc/",
        "mvco": "http://purl.oclc.org/NET/mvco.owl#",
        "roterms": "http://purl.org/wf4ever/roterms#",
        "gawd": "http://gawd.atlantides.org/terms/",
        "finlaw": "http://purl.org/finlex/schema/laki/",
        "qb4o": "http://purl.org/olap#",
        "frbrer": "http://iflastandards.info/ns/fr/frbr/frbrer/",
        "oecc": "http://www.oegov.org/core/owl/cc#",
        "w3po": "http://purl.org/provenance/w3p/w3po#",
        "coll": "http://purl.org/co/",
        "geocontext": "http://www.geocontext.org/publ/2013/vocab#",
        "dn": "http://purl.org/datanode/ns/",
        "sw": "http://linkedwidgets.org/statisticalwidget/ontology/",
        "rdacontent": "http://rdvocab.info/termList/RDAContentType/",
        "tis": "http://www.ontologydesignpatterns.org/cp/owl/timeindexedsituation.owl#",
        "vgo": "http://purl.org/net/VideoGameOntology#",
        "vapour": "http://vapour.sourceforge.net/vocab.rdf#",
        "olad": "http://openlad.org/vocab#",
        "dbpr": "http://dbpedia.org/resource/",
        "dqm": "http://purl.org/dqm-vocabulary/v1/dqm#",
        "viskov": "http://trust.utep.edu/visko/ontology/visko-view-v3.owl#",
        "gcis": "http://data.globalchange.gov/gcis.owl#",
        "locwd": "http://purl.org/locwd/schema#",
        "voidp": "http://www.enakting.org/provenance/voidp/",
        "of": "http://owlrep.eu01.aws.af.cm/fridge#",
        "gadm": "http://gadm.geovocab.org/ontology#",
        "icane": "http://www.icane.es/opendata/vocab#",
        "poste": "http://data.lirmm.fr/ontologies/poste#",
        "hlygt": "http://www.holygoat.co.uk/owl/redwood/0.1/tags/",
        "frsad": "http://iflastandards.info/ns/fr/frsad/",
        "abs": "http://abs.270a.info/dataset/",
        "ebucore": "http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#",
        "csp": "http://vocab.deri.ie/csp#",
        "nex": "http://www.nexml.org/2009/",
        "evident": "http://purl.org/net/evident#",
        "uta": "http://uptheasset.org/ontology#",
        "pwo": "http://purl.org/spar/pwo/",
        "lexcz": "http://purl.org/lex/cz#",
        "graves": "http://rdf.muninn-project.org/ontologies/graves#",
        "dbtont": "http://dbtropes.org/ont/",
        "geosp": "http://rdf.geospecies.org/ont/geospecies#",
        "ntag": "http://ns.inria.fr/nicetag/2010/09/09/voc#",
        "biotop": "http://purl.org/biotop/biotop.owl#",
        "estrn": "http://vocab.linkeddata.es/datosabiertos/def/urbanismo-infraestructuras/transporte#",
        "obsm": "http://rdf.geospecies.org/methods/observationMethod#",
        "ecrm": "http://erlangen-crm.org/current/",
        "fe": "http://www.ontologydesignpatterns.org/ont/framenet/abox/fe/",
        "wf4ever": "http://purl.org/wf4ever/wf4ever#",
        "ses": "http://lod.taxonconcept.org/ses/",
        "gnm": "http://www.geonames.org/ontology/mappings/",
        "rdai": "http://rdaregistry.info/Elements/i/",
        "ostop": "http://www.ordnancesurvey.co.uk/ontology/Topography/v0.1/Topography.owl#",
        "lc": "http://semweb.mmlab.be/ns/linkedconnections#",
        "oplprod": "http://www.openlinksw.com/ontology/products#",
        "scufl2": "http://ns.taverna.org.uk/2010/scufl2#",
        "ogbd": "http://www.ogbd.fr/2012/ontologie#",
        "viso": "http://purl.org/viso/",
        "drm": "http://vocab.data.gov/def/drm#",
        "mammal": "http://lod.taxonconcept.org/ontology/p01/Mammalia/index.owl#",
        "vcard2006": "http://www.w3.org/2006/vcard/ns#",
        "ontopic": "http://www.ontologydesignpatterns.org/ont/dul/ontopic.owl#",
        "kai": "http://kai.uni-kiel.de/",
        "delta": "http://www.w3.org/2004/delta#",
        "wn20": "http://www.w3.org/2006/03/wn/wn20/",
        "rdafrbr": "http://rdvocab.info/uri/schema/FRBRentitiesRDA/",
        "gnvc": "http://purl.org/gc/",
        "daq": "http://purl.org/eis/vocab/daq#",
        "stats": "http://purl.org/rdfstats/stats#",
        "fao": "http://fao.270a.info/dataset/",
        "owlse": "http://www.daml.org/services/owl-s/1.2/generic/Expression.owl#",
        "rdf123": "http://rdf123.umbc.edu/ns/",
        "bcngeo": "http://datos.bcn.cl/ontologies/bcn-geographics#",
        "amalgame": "http://purl.org/vocabularies/amalgame#",
        "fam": "http://vocab.fusepool.info/fam#",
        "trait": "http://contextus.net/ontology/ontomedia/ext/common/trait#",
        "lmm1": "http://www.ontologydesignpatterns.org/ont/lmm/LMM_L1.owl#",
        "snarm": "http://rdf.myexperiment.org/ontologies/snarm/",
        "ldr": "http://purl.oclc.org/NET/ldr/ns#",
        "frb": "http://frb.270a.info/dataset/",
        "gov": "http://gov.genealogy.net/ontology.owl#",
        "provone": "http://purl.org/provone#",
        "esdir": "http://vocab.linkeddata.es/datosabiertos/def/urbanismo-infraestructuras/direccion-postal#",
        "lmm2": "http://www.ontologydesignpatterns.org/ont/lmm/LMM_L2.owl#",
        "bk": "http://www.provbook.org/ns/#",
        "rdl": "http://data.posccaesar.org/rdl/",
        "guo": "http://purl.org/hpi/guo#",
        "call": "http://webofcode.org/wfn/call:",
        "dbptmpl": "http://dbpedia.org/resource/Template:",
        "pois": "http://purl.oclc.org/POIS/vcblr#",
        "gf": "http://def.seegrid.csiro.au/isotc211/iso19109/2005/feature#",
        "limoo": "http://purl.org/LiMo/0.1/",
        "odo": "http://ocean-data.org/schema/",
        "tw": "http://tw.rpi.edu/schema/",
        "bco": "http://purl.obolibrary.org/obo/bco.owl#",
        "gq": "http://genomequest.com/",
        "doas": "http://deductions.github.io/doas.owl.ttl#",
        "lso": "http://linkedspending.aksw.org/ontology/",
        "cjr": "http://vocab.linkeddata.es/datosabiertos/def/urbanismo-infraestructuras/callejero#",
        "gist": "https://ontologies.semanticarts.com/gist/",
        "raul": "http://vocab.deri.ie/raul#",
        "plo": "http://purl.org/net/po#",
        "muldicat": "http://iflastandards.info/ns/muldicat#",
        "sro": "http://salt.semanticauthoring.org/ontologies/sro#",
        "crsw": "http://courseware.rkbexplorer.com/ontologies/courseware#",
        "rdag1": "http://rdvocab.info/Elements/",
        "fcs": "http://clarin.eu/fcs/resource#",
        "nxs": "http://www.neclimateus.org/",
        "pvcs": "http://purl.org/twc/vocab/pvcs#",
        "onc": "http://www.ics.forth.gr/isl/oncm/core#",
        "app": "http://jmvanel.free.fr/ontology/software_applications.n3#",
        "oprovo": "http://openprovenance.org/ontology#",
        "pproc": "http://contsem.unizar.es/def/sector-publico/pproc#",
        "location": "http://sw.deri.org/2006/07/location/loc#",
        "cart": "http://purl.org/net/cartCoord#",
        "s3db": "http://www.s3db.org/core#",
        "gm": "http://def.seegrid.csiro.au/isotc211/iso19107/2003/geometry#",
        "smg": "http://ns.cerise-project.nl/energy/def/cim-smartgrid#",
        "pnt": "http://data.press.net/ontology/tag/",
        "geod": "http://vocab.lenka.no/geo-deling#",
        "eurlex": "http://eur-lex.publicdata.eu/ontology/",
        "ecc": "https://ns.eccenca.com/",
        "dpc": "http://hospee.org/ontologies/dpc/",
        "cdt": "http://w3id.org/lindt/custom_datatypes#",
        "dpd": "http://www.kanzaki.com/ns/dpd#",
        "cpant": "http://purl.org/NET/cpan-uri/terms#",
        "ops": "https://w3id.org/ops#",
        "uis": "http://uis.270a.info/dataset/",
        "odpart": "http://www.ontologydesignpatterns.org/cp/owl/participation.owl#",
        "agro": "http://agrinepaldata.com/vocab/",
        "defns": "http://www.openarchives.org/OAI/2.0/",
        "edgar": "http://edgarwrap.ontologycentral.com/vocab/edgar#",
        "cl": "http://advene.org/ns/cinelab/",
        "wikim": "http://spi-fm.uca.es/spdef/models/genericTools/wikim/1.0#",
        "ipo": "http://purl.org/ipo/core#",
        "tac": "http://ns.bergnet.org/tac/0.1/triple-access-control#",
        "oh": "http://semweb.mmlab.be/ns/oh#",
        "pod": "https://project-open-data.cio.gov/v1.1/schema/#",
        "rdag3": "http://rdvocab.info/ElementsGr3/",
        "lio": "http://purl.org/net/lio#",
        "opllic": "http://www.openlinksw.com/ontology/licenses#",
        "topo": "http://data.ign.fr/def/topo#",
        "imf": "http://imf.270a.info/dataset/",
        "msm": "http://iserve.kmi.open.ac.uk/ns/msm#",
        "shw": "http://paul.staroch.name/thesis/SmartHomeWeather.owl#",
        "osadm": "http://data.ordnancesurvey.co.uk/ontology/admingeo/",
        "solid": "http://www.w3.org/ns/solid/terms#",
        "tao": "http://vocab.deri.ie/tao#",
        "limo": "http://www.purl.org/limo-ontology/limo#",
        "oss": "http://opendata.caceres.es/def/ontosemanasanta#",
        "rdfdata": "http://rdf.data-vocabulary.org/rdf.xml#",
        "mds": "http://doc.metalex.eu/id/",
        "passim": "http://data.lirmm.fr/ontologies/passim#",
        "lda": "http://purl.org/linked-data/api/vocab#",
        "dbpedia2": "http://dbpedia.org/property/",
        "thors": "http://resource.geosciml.org/ontology/timescale/thors#",
        "tddo": "http://databugger.aksw.org/ns/core#",
        "cmdm": "http://infra.clarin.eu/cmd/",
        "gl": "http://schema.geolink.org/",
        "mocanal": "http://www.semanticweb.org/asow/ontologies/2013/9/untitled-ontology-36#",
        "pnc": "http://data.press.net/ontology/classification/",
        "being": "http://purl.org/ontomedia/ext/common/being#",
        "oliasystem": "http://purl.org/olia/system.owl#",
        "bis": "http://bis.270a.info/dataset/",
        "csvw": "http://www.w3.org/ns/csvw#",
        "aws": "http://purl.oclc.org/NET/ssnx/meteo/aws#",
        "cmdi": "http://www.clarin.eu/cmd/",
        "form": "http://deductions-software.com/ontologies/forms.owl.ttl#",
        "sam": "http://def.seegrid.csiro.au/isotc211/iso19156/2011/sampling#",
        "laabs": "http://dbpedia.org/resource/",
        "tm": "http://def.seegrid.csiro.au/isotc211/iso19108/2002/temporal#",
        "bgn": "http://bibliograph.net/schemas/",
        "deps": "http://ontologi.es/doap-deps#",
        "opencyc": "http://sw.opencyc.org/concept/",
        "sor": "http://purl.org/net/soron/",
        "mico": "http://www.mico-project.eu/ns/platform/1.0/schema#",
        "pattern": "http://www.essepuntato.it/2008/12/pattern#",
        "chembl": "http://rdf.ebi.ac.uk/terms/chembl#",
        "esco": "http://data.europa.eu/esco/model#",
        "oslo": "http://purl.org/oslo/ns/localgov#",
        "ftcontent": "http://www.ft.com/ontology/content/",
        "ost": "http://w3id.org/ost/ns#",
        "hr": "http://iserve.kmi.open.ac.uk/ns/hrests#",
        "saref": "https://saref.etsi.org/core/",
        "cdc": "http://www.contextdatacloud.org/resource/",
        "lofv": "http://purl.org/legal_form/vocab#",
        "lindt": "https://w3id.org/lindt/voc#",
        "maso": "http://securitytoolbox.appspot.com/MASO#",
        "bgcat": "http://bg.dbpedia.org/resource/?????????:",
        "static": "http://vocab-ld.org/vocab/static-ld#",
        "rdarel2": "http://metadataregistry.org/uri/schema/RDARelationshipsGR2/",
        "sru": "http://www.loc.gov/zing/srw/",
        "dq": "http://def.seegrid.csiro.au/isotc211/iso19115/2003/dataquality#",
        "rmo": "http://eatld.et.tu-dresden.de/rmo#",
        "ext": "http://def.seegrid.csiro.au/isotc211/iso19115/2003/extent#",
        "vext": "http://ldf.fi/void-ext#",
        "xlime": "http://xlime-project.org/vocab/",
        "agrd": "http://agrinepaldata.com/",
        "verb": "https://w3id.org/verb/",
        "pco": "http://purl.org/procurement/public-contracts#",
        "latitude": "https://www.w3.org/2006/vcard/ns#latitude#",
        "mv": "http://schema.mobivoc.org/",
        "contsem": "http://contsem.unizar.es/def/sector-publico/contratacion#",
        "ruto": "http://rdfunit.aksw.org/ns/core#",
        "csv": "http://vocab.sindice.net/csv/",
        "goog": "http://schema.googleapis.com/",
        "omdoc": "http://omdoc.org/ontology/",
        "dbcat": "http://dbpedia.org/resource/Category:",
        "shoah": "http://dati.cdec.it/lod/shoah/",
        "vmm": "http://spi-fm.uca.es/spdef/models/genericTools/vmm/1.0#",
        "dannet": "http://www.wordnet.dk/owl/instance/2009/03/instances/",
        "emtr": "http://purl.org/NET/ssnext/electricmeters#",
        "mmd": "http://musicbrainz.org/ns/mmd-1.0#",
        "bbcprov": "http://www.bbc.co.uk/ontologies/provenance/",
        "bevon": "http://rdfs.co/bevon/",
        "pni": "http://data.press.net/ontology/identifier/",
        "employee": "http://www.employee.com/data#",
        "spdx": "http://spdx.org/rdf/terms#",
        "oplcert": "http://www.openlinksw.com/schemas/cert#",
        "cpsv": "http://purl.org/vocab/cpsv#",
        "gaf": "http://groundedannotationframework.org/",
        "wro": "http://purl.org/net/wf4ever/ro#",
        "isocat": "http://www.isocat.org/datcat/",
        "jp1": "http://rdf.muninn-project.org/ontologies/jp1/",
        "geos": "http://www.telegraphis.net/ontology/geography/geography#",
        "videogame": "http://purl.org/net/vgo#",
        "rdapo": "http://rdaregistry.info/termList/RDAPolarity/",
        "date": "http://contextus.net/ontology/ontomedia/misc/date#",
        "physo": "http://merlin.phys.uni.lodz.pl/onto/physo/physo.owl#",
        "lden": "http://www.linklion.org/lden/",
        "shex": "http://www.w3.org/2013/ShEx/ns#",
        "citof": "http://www.essepuntato.it/2013/03/cito-functions#",
        "olac": "http://www.language-archives.org/OLAC/1.0/",
        "wfn": "http://webofcode.org/wfn/",
        "bner": "http://datos.bne.es/resource/",
        "pic": "http://www.ipaw.info/ns/picaso#",
        "oan": "http://data.lirmm.fr/ontologies/oan/",
        "xapi": "http://purl.org/xapi/ontology#",
        "psys": "http://www.ontotext.com/proton/protonsys#",
        "dsn": "http://purl.org/dsnotify/vocab/eventset/",
        "rdagw": "http://rdaregistry.info/termList/grooveWidth/",
        "fo": "http://www.w3.org/1999/XSL/Format#",
        "acrt": "http://privatealpha.com/ontology/certification/1#",
        "insdc": "http://ddbj.nig.ac.jp/ontologies/sequence#",
        "xrd": "http://docs.oasis-open.org/ns/xri/xrd-1.0#",
        "erce": "http://xxefe.de/",
        "oplres": "http://www.openlinksw.com/ontology/restrictions#",
        "trig": "http://www.w3.org/2004/03/trix/rdfg-1/",
        "ldvm": "http://linked.opendata.cz/ontology/ldvm/",
        "dbug": "http://ontologi.es/doap-bugs#",
        "rdafnm": "http://rdaregistry.info/termList/FormNoteMus/",
        "kml": "http://www.opengis.net/kml/2.2#",
        "lfov": "https://w3id.org/legal_form#",
        "c9d": "http://purl.org/twc/vocab/conversion/",
        "pkm": "http://www.ontotext.com/proton/protonkm#",
        "dbrc": "http://dbpedia.org/resource/Category:",
        "roadmap": "http://mappings.roadmap.org/",
        "yo": "http://yovisto.com/",
        "gts": "http://resource.geosciml.org/ontology/timescale/gts#",
        "origins": "http://origins.link/",
        "ljkl": "http://teste.com/",
        "esequip": "http://vocab.linkeddata.es/datosabiertos/def/urbanismo-infraestructuras/equipamiento#",
        "onisep": "http://rdf.onisep.fr/resource/",
        "dicom": "http://purl.org/healthcarevocab/v1#",
        "itm": "http://spi-fm.uca.es/spdef/models/genericTools/itm/1.0#",
        "language": "http://id.loc.gov/vocabulary/iso639-1/",
        "voidext": "http://rdfs.org/ns/void-ext#",
        "whisky": "http://vocab.org/whisky/terms/",
        "diag": "http://www.loc.gov/zing/srw/diagnostic/",
        "sbench": "http://swat.cse.lehigh.edu/onto/univ-bench.owl#",
        "bbccms": "http://www.bbc.co.uk/ontologies/cms/",
        "ccrel": "http://creativecommons.org/ns#",
        "oils": "http://lemon-model.net/oils#",
        "esadm": "http://vocab.linkeddata.es/datosabiertos/def/sector-publico/territorio#",
        "babelnet": "http://babelnet.org/2.0/",
        "sao": "http://salt.semanticauthoring.org/ontologies/sao#",
        "holding": "http://purl.org/ontology/holding#",
        "stories": "http://purl.org/ontology/stories/",
        "mmt": "http://linkedmultimedia.org/sparql-mm/functions/temporal#",
        "esaloj": "http://vocab.linkeddata.es/datosabiertos/def/turismo/alojamiento#",
        "bn": "http://babelnet.org/rdf/",
        "odapps": "http://semweb.mmlab.be/ns/odapps#",
        "odrs": "http://schema.theodi.org/odrs#",
        "basic": "http://def.seegrid.csiro.au/isotc211/iso19103/2005/basic#",
        "hdo": "http://www.samos.gr/ontologies/helpdeskOnto.owl#",
        "rdafr": "http://rdaregistry.info/termList/frequency/",
        "rdamt": "http://rdaregistry.info/termList/RDAMediaType/",
        "h2o": "http://def.seegrid.csiro.au/isotc211/iso19150/-2/2012/basic#",
        "vf": "https://w3id.org/valueflows#",
        "art": "http://w3id.org/art/terms/1.0/",
        "mmf": "http://linkedmultimedia.org/sparql-mm/ns/1.0.0/function#",
        "keys": "http://purl.org/NET/c4dm/keys.owl#",
        "ls": "http://linkedspending.aksw.org/instance/",
        "llo": "http://lodlaundromat.org/ontology/",
        "clinic": "http://example.com/clinic#",
        "locah": "http://data.archiveshub.ac.uk/def/",
        "scoro": "http://purl.org/spar/scoro/",
        "nerd": "http://nerd.eurecom.fr/ontology#",
        "scip": "http://lod.taxonconcept.org/ontology/sci_people.owl#",
        "olac11": "http://www.language-archives.org/OLAC/1.1/",
        "tavprov": "http://ns.taverna.org.uk/2012/tavernaprov/",
        "lexicon": "http://www.example.org/lexicon#",
        "faq": "http://www.openlinksw.com/ontology/faq#",
        "rdagd": "http://rdaregistry.info/termList/gender/",
        "travel": "http://www.co-ode.org/roberts/travel.owl#",
        "rdasoi": "http://rdaregistry.info/termList/statIdentification/",
        "uri4uri": "http://uri4uri.net/vocab#",
        "kees": "http://linkeddata.center/kees/v1#",
        "ramon": "http://rdfdata.eionet.europa.eu/ramon/ontology/",
        "html": "http://www.w3.org/1999/xhtml/",
        "wn31": "http://wordnet-rdf.princeton.edu/wn31/",
        "eurostat": "http://wifo5-04.informatik.uni-mannheim.de/eurostat/resource/eurostat/",
        "irsteaont": "http://ontology.irstea.fr/weather/ontology#",
        "data": "http://data.odw.tw/",
        "security": "http://securitytoolbox.appspot.com/securityMain#",
        "scor": "http://purl.org/eis/vocab/scor#",
        "phdd": "http://rdf-vocabulary.ddialliance.org/phdd#",
        "navm": "https://w3id.org/navigation_menu#",
        "rdacct": "http://rdaregistry.info/termList/CollTitle/",
        "oplacl": "http://www.openlinksw.com/ontology/acl#",
        "naval": "http://rdf.muninn-project.org/ontologies/naval#",
        "rdatc": "http://rdaregistry.info/termList/trackConfig/",
        "l2sp": "http://www.linked2safety-project.eu/properties/",
        "fp3": "http://vocab.fusepool.info/fp3#",
        "ll": "http://lodlaundromat.org/resource/",
        "dcs": "http://ontologi.es/doap-changeset#",
        "wikibase": "http://wikiba.se/ontology#",
        "galaksiya": "http://ontoloji.galaksiya.com/vocab/",
        "oml": "http://def.seegrid.csiro.au/ontology/om/om-lite#",
        "decision": "https://decision-ontology.googlecode.com/svn/trunk/decision.owl#",
        "npdv": "http://sws.ifi.uio.no/vocab/npd#",
        "rvl": "http://purl.org/rvl/",
        "d2d": "http://rdfns.org/d2d/",
        "ecgl": "http://schema.geolink.org/",
        "bgdbr": "http://bg.dbpedia.org/resource/",
        "koly": "http://www.ensias.ma/",
        "rvdata": "http://data.rvdata.us/",
        "bbccore": "http://www.bbc.co.uk/ontologies/coreconcepts/",
        "rdabm": "http://rdaregistry.info/termList/RDABaseMaterial/",
        "rdami": "http://rdaregistry.info/termList/modeIssue/",
        "metadata": "http://purl.oreilly.com/ns/meta/",
        "pcdt": "http://purl.org/procurement/public-contracts-datatypes#",
        "lsd": "http://linkedwidgets.org/statisticaldata/ontology/",
        "lcdr": "http://ns.lucid-project.org/revision/",
        "wb": "http://data.worldbank.org/",
        "xcql": "http://docs.oasis-open.org/ns/search-ws/xcql#",
        "lpeu": "http://purl.org/linkedpolitics/vocabulary/eu/plenary/",
        "spfood": "http://kmi.open.ac.uk/projects/smartproducts/ontologies/food.owl#",
        "bgdbp": "http://bg.dbpedia.org/property/",
        "sdm": "https://w3id.org/okn/o/sdm#",
        "foo": "http://filmontology.org/ontology/1.0/",
        "friends": "http://www.openarchives.org/OAI/2.0/friends/",
        "lw": "http://linkedwidgets.org/ontologies/",
        "mtlo": "http://www.ics.forth.gr/isl/MarineTLO/v4/marinetlo.owl#",
        "allot": "https://w3id.org/akn/ontology/allot#",
        "rml": "http://semweb.mmlab.be/ns/rml#",
        "crmdig": "http://www.ics.forth.gr/isl/CRMdig/",
        "bnf": "http://www.w3.org/2000/10/swap/grammar/bnf#",
        "affymetrix": "http://bio2rdf.org/affymetrix_vocabulary:",
        "cbo": "http://comicmeta.org/cbo/",
        "lmf": "http://www.lexinfo.net/lmf#",
        "auto": "http://auto.schema.org/",
        "irstea": "http://ontology.irstea.fr/",
        "json": "https://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf#",
        "zr": "http://explain.z3950.org/dtd/2.0/",
        "rdagrp": "http://rdaregistry.info/termList/groovePitch/",
        "oplecrm": "http://www.openlinksw.com/ontology/ecrm#",
        "ha": "http://sensormeasurement.appspot.com/ont/home/homeActivity#",
        "eccrev": "https://vocab.eccenca.com/revision/",
        "xslopm": "http://purl.org/net/opmv/types/xslt#",
        "rdaftn": "http://rdaregistry.info/termList/TacNotation/",
        "fno": "https://w3id.org/function/ontology#",
        "rdacc": "http://rdaregistry.info/termList/RDAColourContent/",
        "merge": "http://jazz.net/ns/lqe/merge/",
        "llm": "http://lodlaundromat.org/metrics/ontology/",
        "sg": "http://www.springernature.com/scigraph/ontologies/core/",
        "oae": "http://www.ics.forth.gr/isl/oae/core#",
        "rdaco": "http://rdaregistry.info/termList/RDAContentType/",
        "ogc": "http://www.opengis.net/def/",
        "oplmkt": "http://www.openlinksw.com/ontology/market#",
        "rdarr": "http://rdaregistry.info/termList/RDAReductionRatio/",
        "geovoid": "http://purl.org/geovocamp/ontology/geovoid/",
        "condition": "http://www.kinjal.com/condition:",
        "saws": "http://purl.org/saws/ontology#",
        "beth": "http://www.google.com/",
        "rdag2": "http://rdvocab.info/ElementsGr2/",
        "ncit": "http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#",
        "estatwrap": "http://ontologycentral.com/2009/01/eurostat/ns#",
        "vstoi": "http://hadatac.org/ont/vstoi#",
        "dqv": "http://www.w3.org/ns/dqv#",
        "tp": "http://tour-pedia.org/download/tp.owl#",
        "sakthi": "http://infotech.nitk.ac.in/research-scholars/sakthi-murugan-r/",
        "oplcb": "http://www.openlinksw.com/schemas/crunchbase#",
        "ilap": "http://data.posccaesar.org/ilap/",
        "d0": "http://ontologydesignpatterns.org/ont/wikipedia/d0.owl#",
        "glview": "http://schema.geolink.org/dev/view/",
        "opengov": "http://www.w3.org/opengov#",
        "shacl": "http://www.w3.org/ns/shacl#",
        "atlas": "http://rdf.ebi.ac.uk/resource/atlas/",
        "clirio": "http://clirio.kaerle.com/clirio.owl#",
        "lsmap": "http://ontology.cybershare.utep.edu/ELSEWeb/elseweb-data.owl#",
        "sosa": "http://www.w3.org/ns/sosa/",
        "bibrm": "http://vocab.ub.uni-leipzig.de/bibrm/",
        "rdatr": "http://rdaregistry.info/termList/typeRec/",
        "religion": "http://rdf.muninn-project.org/ontologies/religion#",
        "samfl": "http://def.seegrid.csiro.au/ontology/om/sam-lite#",
        "dio": "https://w3id.org/dio#",
        "omnfed": "http://open-multinet.info/ontology/omn-federation#",
        "orth": "http://purl.org/net/orth#",
        "rdarm": "http://registry.info/termList/recMedium/",
        "td5": "http://td5.org/#",
        "wn30": "http://purl.org/vocabularies/princeton/wn30/",
        "quantity": "http://qudt.org/schema/quantity#",
        "dcatapit": "http://dati.gov.it/onto/dcatapit#",
        "ontosec": "http://www.semanticweb.org/ontologies/2008/11/OntologySecurity.owl#",
        "rdact": "http://rdaregistry.info/termList/RDACarrierType/",
        "voidwh": "http://www.ics.forth.gr/isl/VoIDWarehouse/VoID_Extension_Schema.owl#",
        "swpm": "http://spi-fm.uca.es/spdef/models/deployment/swpm/1.0#",
        "odbc": "http://www.openlinksw.com/ontology/odbc#",
        "ubiq": "http://server.ubiqore.com/ubiq/core#",
        "kegg": "http://bio2rdf.org/ns/kegg#",
        "company": "http://intellimind.io/ns/company#",
        "vidont": "http://vidont.org/",
        "escjr": "http://vocab.linkeddata.es/datosabiertos/def/urbanismo-infraestructuras/callejero#",
        "vag": "http://www.essepuntato.it/2013/10/vagueness/",
        "jolux": "http://data.legilux.public.lu/resource/ontology/jolux#",
        "rofch": "http://rdaregistry.info/termList/rofch/",
        "rdaemm": "http://rdaregistry.info/termList/emulsionMicro/",
        "salad": "https://w3id.org/cwl/salad#",
        "reegle": "http://reegle.info/schema#",
        "lmx": "http://www.w3.org/XML/1998/namespace/",
        "mesh": "http://id.nlm.nih.gov/mesh/",
        "espresup": "http://vocab.linkeddata.es/datosabiertos/def/hacienda/presupuestos#",
        "gpml": "http://vocabularies.wikipathways.org/gpml#",
        "moo": "http://www.movieontology.org/2009/11/09/movieontology.owl#",
        "driver": "http://deductions.github.io/drivers.owl.ttl#",
        "rkd": "http://data.rkd.nl/def#",
        "demlab": "http://www.demcare.eu/ontologies/demlab.owl#",
        "uby": "http://purl.org/olia/ubyCat.owl#",
        "caplibacl": "http://schemas.capita-libraries.co.uk/2015/acl/schema#",
        "unspsc": "http://ontoview.org/schema/unspsc/1#",
        "escom": "http://vocab.linkeddata.es/datosabiertos/def/comercio/tejidoComercial#",
        "rut": "http://rdfunit.aksw.org/ns/core#",
        "rdabf": "http://rdaregistry.info/termList/bookFormat/",
        "olca": "http://www.lingvoj.org/olca#",
        "grel": "http://users.ugent.be/~bjdmeest/function/grel.ttl#",
        "efrbroo": "http://erlangen-crm.org/efrbroo/",
        "rdasco": "http://rdaregistry.info/termList/soundCont/",
        "loted": "http://loted.eu/ontology#",
        "hasneto": "http://hadatac.org/ont/hasneto#",
        "dicera": "http://semweb.mmlab.be/ns/dicera#",
        "im": "http://imgpedia.dcc.uchile.cl/resource/",
        "rdafmn": "http://rdaregistry.info/termList/MusNotation/",
        "lsqv": "http://lsq.aksw.org/vocab#",
        "cwl": "https://w3id.org/cwl/cwl#",
        "rdafs": "http://rdaregistry.info/termList/fontSize/",
        "pp": "http://peoplesplaces.de/ontology#",
        "airs": "https://raw.githubusercontent.com/airs-linked-data/lov/latest/src/airs_vocabulary.ttl#",
        "hasco": "http://hadatac.org/ont/hasco/",
        "proms": "http://promsns.org/def/proms#",
        "lawd": "http://lawd.info/ontology/",
        "lemonuby": "http://lemon-model.net/lexica/uby/",
        "oxi": "http://omerxi.com/ontologies/core.owl.ttl#",
        "owsom": "https://onlinesocialmeasures.wordpress.com/",
        "mod": "http://www.isibang.ac.in/ns/mod#",
        "puml": "http://plantuml.com/ontology#",
        "wikimedia": "http://upload.wikimedia.org/wikipedia/commons/f/f6/",
        "crowd": "http://purl.org/crowd/",
        "traffic": "http://www.sensormeasurement.appspot.com/ont/transport/traffic#",
        "tadirah": "http://tadirah.dariah.eu/vocab/",
        "rdapmt": "http://rdaregistry.info/termList/prodTactile/",
        "mexv": "http://mex.aksw.org/mex-algo#",
        "incident": "http://vocab.resc.info/incident#",
        "lsweb": "http://ontology.cybershare.utep.edu/ELSEWeb/elseweb-data.owl#",
        "bb": "http://www.snik.eu/ontology/bb/",
        "figigii": "http://www.omg.org/spec/FIGI/GlobalInstrumentIdentifiers/",
        "ns1": "http://www.w3.org/1999/xhtml/vocab#",
        "rankrage": "https://rankrage.de/",
        "hto": "http://project-haystack.org/hto#",
        "jerm": "http://jermontology.org/ontology/JERMOntology#",
        "td": "https://www.w3.org/2019/wot/td#",
        "spcm": "http://spi-fm.uca.es/spdef/models/deployment/spcm/1.0#",
        "gont": "https://gont.ch/",
        "fdbp": "http://fr.dbpedia.org/property/",
        "ofrd": "http://purl.org/opdm/refrigerator#",
        "cwrc": "http://sparql.cwrc.ca/ontology/cwrc#",
        "rofrr": "http://rdaregistry.info/termList/rofrr/",
        "bsym": "http://bsym.bloomberg.com/sym/",
        "dash": "http://datashapes.org/dash#",
        "uneskos": "http://purl.org/voc/uneskos#",
        "ev": "http://www.w3.org/2001/xml-events/",
        "text": "http://jena.apache.org/text#",
        "hello": "https://www.youtube.com/user/SuperTellAFriend/featured/",
        "cpack": "http://cliopatria.swi-prolog.org/schema/cpack#",
        "tix": "http://toptix.com/2010/esro/",
        "ssno": "http://www.w3.org/ns/ssn/",
        "rdaz": "http://rdaregistry.info/Elements/z/",
        "step": "http://purl.org/net/step#",
        "sdshare": "http://www.sdshare.org/2012/extension/",
        "newsevents": "http://www.aifb.uni-karlsruhe.de/WBS/uhe/ontologies#",
        "aktivesa": "http://sa.aktivespace.org/ontologies/aktivesa#",
        "rofer": "http://rdaregistry.info/termList/rofer/",
        "ws": "http://www.w3.org/ns/pim/space#",
        "ecglview": "http://schema.geolink.org/view/",
        "regorg": "http://www.w3.org/ns/regorg#",
        "gci": "http://ontology.eil.utoronto.ca/GCI/Foundation/GCI-Foundation.owl#",
        "mdi": "http://w3id.org/multidimensional-interface/ontology#",
        "sx": "http://shex.io/ns/shex#",
        "obeu": "http://data.openbudgets.eu/ontology/",
        "jpo": "http://rdf.jpostdb.org/ontology/jpost.owl#",
        "teamwork": "http://topbraid.org/teamwork#",
        "bdd": "https://api.bloomberg.com/eap/catalogs/bbg/fields/",
        "gs1": "http://gs1.org/voc/",
        "meat": "http://example.com/",
        "ttla": "https://w3id.org/ttla/",
        "sgg": "http://www.springernature.com/scigraph/graphs/",
        "ttp": "http://eample.com/test#",
        "webservice": "http://www.openlinksw.com/ontology/webservices#",
        "pv": "http://ns.inria.fr/provoc#",
        "esapar": "http://vocab.linkeddata.es/datosabiertos/def/urbanismo-infraestructuras/aparcamiento#",
        "rofit": "http://rdaregistry.info/termList/rofit/",
        "ndnp": "http://chroniclingamerica.loc.gov/terms#",
        "ruian": "https://data.cssz.cz/ontology/ruian/",
        "datex": "http://vocab.datex.org/terms#",
        "rofem": "http://rdaregistry.info/termList/rofem/",
        "bioc": "http://deductions.github.io/biological-collections.owl.ttl#",
        "lswmo": "http://ontology.cybershare.utep.edu/ELSEWeb/elseweb-modelling.owl#",
        "yd": "https://yodata.io/",
        "essglobal": "http://purl.org/essglobal/vocab/v1.0/",
        "dm2e": "http://onto.dm2e.eu/schemas/dm2e/",
        "um": "http://intelleo.eu/ontologies/user-model/ns/",
        "ottr": "http://ns.ottr.xyz/templates#",
        "rdafnv": "http://rdaregistry.info/termList/noteForm/",
        "eccauth": "https://vocab.eccenca.com/auth/",
        "oplweb": "http://www.openlinksw.com/schemas/oplweb#",
        "fnabox": "http://www.ontologydesignpatterns.org/ont/framenet/abox/",
        "nlon": "http://lod.nl.go.kr/ontology/",
        "output": "http://volt-name.space/vocab/output#",
        "geojson": "http://ld.geojson.org/vocab#",
        "vartrans": "http://www.w3.org/ns/lemon/vartrans#",
        "lswpm": "http://ontology.cybershare.utep.edu/ELSEWeb/elseweb-lifemapper-parameters.owl#",
        "antenne": "https://data.zendantennes.omgeving.vlaanderen.be/ns/zendantenne#",
        "mbgd": "http://mbgd.genome.ad.jp/owl/mbgd.owl#",
        "ou": "http://opendata.unex.es/def/ontouniversidad#",
        "agr": "http://promsns.org/def/agr#",
        "opllog": "http://www.openlinksw.com/ontology/logging#",
        "markus": "http://www.markus.com/",
        "rofsm": "http://rdaregistry.info/termList/rofsm/",
        "literal": "http://www.essepuntato.it/2010/06/literalreification/",
        "tsn": "http://purl.org/net/tsn#",
        "mexcore": "http://mex.aksw.org/mex-core#",
        "vacseen1": "http://www.semanticweb.org/parthasb/ontologies/2014/6/vacseen1/",
        "glycan": "http://purl.jp/bio/12/glyco/glycan#",
        "iana": "http://www.iana.org/assignments/relation/",
        "hva": "http://www.ebusiness-unibw.org/ontologies/hva/ontology#",
        "piero": "http://reactionontology.org/piero/",
        "imind": "http://schema.intellimind.ns/symbology#",
        "lheo": "http://www.conjecto.com/ontology/2015/lheo#",
        "ethc": "http://ethoinformatics.org/ethocore/",
        "tgm": "http://id.loc.gov/vocabulary/graphicMaterials/",
        "uom": "http://www.opengis.net/def/uom/OGC/1.0/",
        "ianarel": "http://www.iana.org/assignments/relation/",
        "owl2xml": "http://www.w3.org/2006/12/owl2-xml#",
        "vsso": "http://automotive.eurecom.fr/vsso#",
        "pmc": "http://identifiers.org/pmc/",
        "duv": "http://www.w3.org/ns/duv#",
        "dpn": "http://purl.org/dpn#",
        "lgt": "http://linkedgadget.com/wiki/Property:",
        "amsl": "http://vocab.ub.uni-leipzig.de/amsl/",
        "pmhb": "http://pmhb.org/",
        "gns": "http://sws.geonames.org/",
        "pid": "http://permid.org/ontology/organization/",
        "cd": "http://citydata.wu.ac.at/ns#",
        "doi": "https://doi.org/",
        "frgeo": "http://rdf.insee.fr/geo/",
        "fntbox": "http://www.ontologydesignpatterns.org/ont/framenet/tbox/",
        "soch": "http://kulturarvsdata.se/ksamsok#",
        "rdaar": "http://rdaregistry.info/termList/AspectRatio/",
        "si": "http://sisteminformasi.com/",
        "edgarcik": "http://edgarwrap.ontologycentral.com/cik/",
        "fire": "http://tldp.org/HOWTO/XML-RPC-HOWTO/xmlrpc-howto-java.html#",
        "door": "http://kannel.open.ac.uk/ontology#",
        "rdaterm": "http://rdaregistry.info/termList/RDATerms/",
        "llont": "http://www.linklion.org/ontology#",
        "lslife": "http://ontology.cybershare.utep.edu/ELSEWeb/elseweb-lifemapper.owl#",
        "rdapm": "http://rdaregistry.info/termList/RDAproductionMethod/",
        "umls": "http://bioportal.bioontology.org/ontologies/umls/",
        "iiif": "http://iiif.io/api/image/2#",
        "remetca": "http://www.purl.org/net/remetca#",
        "lgdm": "http://linkedgeodata.org/meta/",
        "pmd": "http://publishmydata.com/def/dataset#",
        "wde": "http://www.wikidata.org/entity/",
        "vam": "http://www.metmuseum.org/",
        "cwork": "http://www.bbc.co.uk/ontologies/creativework/",
        "b3kat": "http://lod.b3kat.de/title/",
        "itcat": "http://th-brandenburg.de/ns/itcat#",
        "alethio": "http://aleth.io/",
        "mexalgo": "http://mex.aksw.org/mex-algo#",
        "rofid": "http://rdaregistry.info/termList/rofid/",
        "pmo": "http://premon.fbk.eu/ontology/core#",
        "pcit": "http://public-contracts.nexacenter.org/id/propertiesRole/",
        "esair": "http://vocab.linkeddata.es/datosabiertos/def/medio-ambiente/calidad-aire#",
        "gg": "http://www.gemeentegeschiedenis.nl/gg-schema#",
        "dossier": "https://data.omgeving.vlaanderen.be/ns/dossier#",
        "bdc": "http://dbpedia.org/resource/Category:",
        "ipsv": "http://id.esd.org.uk/list/",
        "tarql": "http://tarql.github.io/tarql#",
        "mls": "http://www.w3.org/ns/mls#",
        "minim": "http://purl.org/minim/minim#",
        "huto": "http://ns.inria.fr/huto/",
        "wimpo": "http://rdfex.org/withImports?uri=",
        "ifc": "http://ifcowl.openbimstandards.org/IFC2X3_Final#",
        "planet": "http://dbpedia.org/",
        "open311": "http://ontology.eil.utoronto.ca/open311#",
        "year": "http://www.w3.org/year/",
        "tui": "http://data.ifs.tuwien.ac.at/study/resource/",
        "ensembl": "http://rdf.ebi.ac.uk/resource/ensembl/",
        "crml": "http://semweb.mmlab.be/ns/rml/condition#",
        "lsq": "http://lsq.aksw.org/vocab#",
        "rofrm": "http://rdaregistry.info/termList/rofrm/",
        "memento": "http://mementoweb.org/ns#",
        "dwciri": "http://rs.tdwg.org/dwc/iri/",
        "rpath": "https://w3id.org/lodsight/rdf-path#",
        "bot": "https://w3id.org/bot#",
        "property": "http://fr.dbpedia.org/property/",
        "sdt": "http://statisticaldata.linkedwidgets.org/terms/",
        "dbfo": "http://dbpedia.org/facts/ontology#",
        "jpost": "http://rdf.jpostdb.org/ontology/jpost.owl#",
        "dcosample": "http://info.deepcarbon.net/sample/schema#",
        "composer": "http://dbpedia.org/ontology/composer/",
        "lyon": "http://dbpedia.org/resource/Lyon/",
        "eccdi": "https://vocab.eccenca.com/di/",
        "pmovn": "http://premon.fbk.eu/ontology/vn#",
        "mmo": "http://purl.org/momayo/mmo/",
        "kbv": "https://id.kb.se/vocab/",
        "nobel": "http://data.nobelprize.org/terms/",
        "mmoon": "http://mmoon.org/mmoon/",
        "sto": "https://w3id.org/i40/sto#",
        "vocnet": "http://schema.vocnet.org/",
        "biml": "http://schemas.varigence.com/biml.xsd#",
        "pmonb": "http://premon.fbk.eu/ontology/nb#",
        "task": "http://deductions.github.io/task-management.owl.ttl#",
        "alice": "http://example.org/",
        "semiot": "http://w3id.org/semiot/ontologies/semiot#",
        "mmm": "http://www.mico-project.eu/ns/mmm/2.0/schema#",
        "sdmxm": "http://purl.org/linked-data/sdmx/2009/measure#",
        "pdf": "http://ns.adobe.com/pdf/1.3/",
        "crime": "http://purl.org/vocab/reloc/",
        "webac": "http://fedora.info/definitions/v4/webac#",
        "cff": "http://purl.oclc.org/NET/ssnx/cf/cf-feature#",
        "dataid": "http://dataid.dbpedia.org/ns/core#",
        "rgml": "http://purl.org/puninj/2001/05/rgml-schema#",
        "meshv": "http://id.nlm.nih.gov/mesh/vocab#",
        "cpov": "http://data.europa.eu/m8g/",
        "aprov": "http://purl.org/a-proc#",
        "ioto": "http://www.irit.fr/recherches/MELODI/ontologies/IoT-O#",
        "customer": "http://www.valuelabs.com/",
        "maet": "http://edg.topbraid.solutions/taxonomy/macroeconomics/",
        "rdaft": "http://rdaregistry.info/termList/fileType/",
        "fuseki": "http://jena.apache.org/fuseki#",
        "or": "http://openresearch.org/vocab/",
        "swcomp": "https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#",
        "studiop": "http://purl.org/resource/pilatesstudio/",
        "neotec": "http://neotec.rc.unesp.br/resource/Neotectonics/",
        "apf": "http://jena.apache.org/ARQ/property#",
        "eol": "http://purl.org/biodiversity/eol/",
        "isbdu": "http://iflastandards.info/ns/isbd/unc/elements/",
        "eame": "http://www.semanticweb.org/ontologia_EA#",
        "qms": "http://data.europa.eu/esco/qms#",
        "wdv": "http://www.wikidata.org/value/",
        "dsfv": "http://sws.ifi.uio.no/vocab/dsf/henriwi/dsf#",
        "pm": "http://premon.fbk.eu/resource/",
        "ncicp": "http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#",
        "yso": "http://www.yso.fi/onto/yso/",
        "sorg": "http://schema.org/",
        "cue": "http://www.clarin.eu/cmdi/cues/display/1.0#",
        "bblfish": "http://bblfish.net/people/henry/card#",
        "voc": "http://voc.odw.tw/",
        "system": "http://www.univalle.edu.co/ontologies/System#",
        "datacite": "http://purl.org/spar/datacite/",
        "rofsf": "http://rdaregistry.info/termList/rofsf/",
        "rdfp": "https://w3id.org/rdfp/",
        "changeset": "http://purl.org/vocab/changeset/schema#",
        "volt": "http://volt-name.space/ontology/",
        "scholl": "http://menemeneml.com/school#",
        "lgdt": "http://linkedgeodata.org/triplify/",
        "voidex": "http://www.swi-prolog.org/rdf/library/",
        "rdacarx": "http://rdaregistry.info/termList/RDACarrierEU/",
        "dcodt": "http://info.deepcarbon.net/datatype/schema#",
        "dcap": "http://purl.org/ws-mmi-dc/terms/",
        "brt": "http://brt.basisregistraties.overheid.nl/def/top10nl#",
        "ago": "http://awesemantic-geo.link/ontology/",
        "esproc": "http://vocab.linkeddata.es/datosabiertos/def/sector-publico/procedimientos#",
        "rofhf": "http://rdaregistry.info/termList/rofhf/",
        "spv": "http://completeness.inf.unibz.it/sp-vocab#",
        "fr": "https://w3id.org/fr/def/core#",
        "opa": "https://w3id.org/laas-iot/adream#",
        "pcdm": "http://pcdm.org/models#",
        "ldl": "https://w3id.org/ldpdl/ns#",
        "pbody": "http://reference.data.gov.uk/def/public-body/",
        "rdalay": "http://rdaregistry.info/termList/layout/",
        "asawoo": "http://liris.cnrs.fr/asawoo/",
        "undata": "http://citydata.wu.ac.at/Linked-UNData/data/",
        "pmofn": "http://premon.fbk.eu/ontology/fn#",
        "ali": "http://www.niso.org/schemas/ali/1.0/",
        "organ": "http://www.univalle.edu.co/ontologies/Organ#",
        "scco": "http://rdf.ebi.ac.uk/terms/surechembl#",
        "rdax": "http://rdaregistry.info/Elements/x/",
        "owms": "http://standaarden.overheid.nl/owms/terms/",
        "sdterms": "http://statisticaldata.linkedwidgets.org/terms/",
        "dk": "http://www.data-knowledge.org/dk/schema/rdf/latest/",
        "isidore": "http://www.rechercheisidore.fr/class/",
        "pato": "http://purl.obolibrary.org/obo/",
        "smxm": "http://smxm.ga/",
        "ppr": "http://purl.org/datanode/ppr/ns/",
        "vplan": "http://www.ifs.tuwien.ac.at/~miksa/ontologies/VPlan.owl#",
        "vogd": "http://ogd.ifs.tuwien.ac.at/vienna/geo/",
        "nature": "http://deductions.github.io/nature_observation.owl.ttl#",
        "rdacdt": "http://rdaregistry.info/termList/RDACartoDT/",
        "sgfn": "http://w3id.org/sparql-generate/fn/",
        "dcodata": "http://info.deepcarbon.net/data/schema#",
        "imo": "http://imgpedia.dcc.uchile.cl/ontology#",
        "provoc": "http://ns.inria.fr/provoc/",
        "tx": "http://swtmp.gitlab.io/vocabulary/templates.owl#",
        "dsw": "http://purl.org/dsw/",
        "marcrole": "http://id.loc.gov/vocabulary/relators/",
        "juso": "http://rdfs.co/juso/",
        "ecoll": "http://purl.org/ceu/eco/1.0#",
        "ver": "https://w3id.org/version/ontology#",
        "ldqm": "http://linkeddata.es/resource/ldqm/",
        "doacc": "http://purl.org/net/bel-epa/doacc#",
        "pmopb": "http://premon.fbk.eu/ontology/pb#",
        "llr": "http://lodlaundromat.org/resource/",
        "rofrt": "http://rdaregistry.info/termList/rofrt/",
        "rofim": "http://rdaregistry.info/termList/rofim/",
        "rdapf": "http://rdaregistry.info/termList/presFormat/",
        "provinsi": "http://provinsi.com/",
        "maeco": "http://edg.topbraid.solutions/maeco/",
        "audit": "http://fedora.info/definitions/v4/audit#",
        "eccpubsub": "https://vocab.eccenca.com/pubsub/",
        "eem": "http://purl.org/eem#",
        "rdacpc": "http://rdaregistry.info/termList/configPlayback/",
        "rofin": "http://rdaregistry.info/termList/rofin/",
        "csdbp": "http://cs.dbpedia.org/",
        "adr": "https://w3id.org/laas-iot/adream#",
        "clapit": "http://dati.gov.it/onto/clapit/",
        "sct": "http://snomed.info/sct/",
        "it": "http://www.influencetracker.com/ontology#",
        "persee": "http://data.persee.fr/ontology/persee_ontology/",
        "ispra": "http://dati.isprambiente.it/ontology/core#",
        "wail": "http://www.eyrie.org/~zednenem/2002/wail/",
        "svcs": "http://rdfs.org/sioc/services#",
        "aozora": "http://purl.org/net/aozora/",
        "srx": "http://www.w3.org/2005/sparql-results#",
        "dto": "http://www.datatourisme.fr/ontology/core/1.0#",
        "tissue": "http://www.univalle.edu.co/ontologies/Tissue#",
        "geoloc": "http://deductions.github.io/geoloc.owl.ttl#",
        "gobierno": "http://www.gobierno.es/gobierno/",
        "rdaspc": "http://rdaregistry.info/termList/specPlayback/",
        "pand": "http://bag.basisregistraties.overheid.nl/bag/id/pand/",
        "swo": "http://www.ebi.ac.uk/swo/",
        "fluidops": "http://www.fluidops.com/",
        "connard": "https://mail.google.com/mail/u/1/#",
        "sdmxcode": "http://purl.org/linked-data/sdmx/2009/code#",
        "neotecbib": "http://neotec.rc.unesp.br/resource/NeotectonicsBibliography/",
        "waarde": "https://lod.milieuinfo.be/ns/waarde#",
        "tosh": "http://topbraid.org/tosh#",
        "sdmxc": "http://purl.org/linked-data/sdmx/2009/concept#",
        "rdabs": "http://rdaregistry.info/termList/broadcastStand/",
        "ja": "http://jena.hpl.hp.com/2005/11/Assembler#",
        "r4r": "http://guava.iis.sinica.edu.tw/r4r/",
        "rdagen": "http://rdaregistry.info/termList/RDAGeneration/",
        "rdaad": "http://rdaregistry.info/Elements/a/datatype/",
        "ldq": "http://www.linkeddata.es/ontology/ldq#",
        "pep": "https://w3id.org/pep/",
        "oplbenefit": "http://www.openlinksw.com/ontology/benefits#",
        "gvoith": "http://assemblee-virtuelle.github.io/grands-voisins-v2/thesaurus.ttl#",
        "orcid": "http://orcid.org/",
        "seeds": "http://deductions.github.io/seeds.owl.ttl#",
        "nkos": "http://w3id.org/nkos#",
        "meeting": "http://www.w3.org/2002/07/meeting#",
        "amt": "http://academic-meta-tool.xyz/vocab#",
        "elod": "http://linkedeconomy.org/ontology#",
        "sgiter": "http://w3id.org/sparql-generate/iter/",
        "qbe": "http://citydata.wu.ac.at/qb-equations#",
        "gdc": "https://portal.gdc.cancer.gov/cases/",
        "rdaill": "http://rdaregistry.info/termList/IllusContent/",
        "sfn": "http://semweb.datasciencelab.be/ns/sfn#",
        "ideotalex": "http://www.ideotalex.eu/datos/recurso/",
        "brk": "http://brk.basisregistraties.overheid.nl/def/brk#",
        "rm": "http://jazz.net/ns/rm#",
        "edac": "http://ontology.cybershare.utep.edu/ELSEWeb/elseweb-edac.owl#",
        "efd": "http://data.foodanddrinkeurope.eu/ontology#",
        "rfd": "http://com.intrinsec//ontology#",
        "add": "http://www.datatourisme.fr/ontology/core/1.0#",
        "assoc": "https://w3id.org/associations/vocab#",
        "rofet": "http://rdaregistry.info/termList/rofet/",
        "estatgph": "http://estatwrap.ontologycentral.com/id/nama_aux_gph#",
        "ldn": "https://www.w3.org/TR/ldn/#",
        "wsdl": "http://www.w3.org/ns/wsdl-rdf#",
        "emergelm": "http://purl.org/emergel/modules#",
        "dsv": "http://purl.org/iso25964/DataSet/Versioning#",
        "vort": "http://rockets.topbraid.solutions/vort/",
        "km4c": "http://www.disit.org/km4city/schema#",
        "ncbigene": "http://identifiers.org/ncbigene/",
        "ctxdesc": "http://www.demcare.eu/ontologies/contextdescriptor.owl#",
        "oplp": "http://www.openlinksw.com/ontology/purchases#",
        "tg": "http://www.turnguard.com/turnguard#",
        "its": "http://www.w3.org/2005/11/its/rdf#",
        "prohow": "https://w3id.org/prohow#",
        "d3s": "http://vocbench.solidaridad.cloud/taxonomies#",
        "bds": "http://www.bigdata.com/rdf/search#",
        "oplwebsrv": "http://www.openlinksw.com/ontology/webservices#",
        "id": "http://identifiers.org/",
        "geor": "http://www.opengis.net/def/rule/geosparql/",
        "master1": "http://idl.u-grenoble3.fr/",
        "psv": "http://www.wikidata.org/prop/statement/value/",
        "vehma": "http://deductions.github.io/vehicule-management.owl.ttl#",
        "rdavf": "http://rdaregistry.info/termList/videoFormat/",
        "oplstocks": "http://www.openlinksw.com/ontology/stocks#",
        "wab": "http://wab.uib.no/cost-a32_philospace/wittgenstein.owl#",
        "llalg": "http://www.linklion.org/algorithm/",
        "oplangel": "http://www.openlinksw.com/schemas/angel#",
        "pair": "http://virtual-assembly.org/pair/PAIR_LOD_V3.owl/",
        "ns2": "http://ogp.me/ns#video:",
        "euvoc": "http://publications.europa.eu/ontology/euvoc#",
        "sciprov": "http://sweetontology.net/reprSciProvenance/",
        "fun": "http://w3id.org/sparql-generate/fn/",
        "s4envi": "https://w3id.org/def/saref4envi#",
        "ifcowl": "http://www.buildingsmart-tech.org/ifcOWL/IFC4_ADD2#",
        "dao": "http://purl.org/dao#",
        "ogdl4m": "https://github.com/martynui/OGDL4M/",
        "ceterms": "http://purl.org/ctdl/terms/",
        "odw": "http://odw.tw/",
        "mexperf": "http://mex.aksw.org/mex-perf#",
        "gvoi": "http://assemblee-virtuelle.github.io/grands-voisins-v2/gv.owl.ttl#",
        "oplli": "http://www.openlinksw.com/schemas/linkedin#",
        "bdo": "http://purl.bdrc.io/ontology/core/",
        "scra": "http://purl.org/net/schemarama#",
        "dcatnl": "http://standaarden.overheid.nl/dcatnl/terms/",
        "ontop": "https://w3id.org/ontop/",
        "osd": "http://a9.com/-/spec/opensearch/1.1/",
        "w3cgeo": "http://www.w3.org/2003/01/geo/wgs84_pos#",
        "uc": "http://ucuenca.edu.ec/ontology#",
        "emergel": "http://purl.org/emergel/core#",
        "activity": "http://activitystrea.ms/specs/atom/1.0/",
        "bgt": "https://bgt.basisregistraties.overheid.nl/bgt/def/",
        "ims": "http://www.imsglobal.org/xsd/imsmd_v1p2/",
        "eustd": "http://eurostat.linked-statistics.org/data#",
        "iso37120": "http://ontology.eil.utoronto.ca/ISO37120.owl#",
        "halyard": "http://merck.github.io/Halyard/ns#",
        "lmdb": "http://data.linkedmdb.org/movie/",
        "estrf": "http://vocab.linkeddata.es/datosabiertos/def/transporte/trafico#",
        "cpi": "http://www.ebusiness-unibw.org/ontologies/cpi/ns#",
        "fhir": "http://hl7.org/fhir/",
        "ido": "http://purl.obolibrary.org/obo/ido.owl#",
        "dgfr": "http://colin.maudry.com/ontologies/dgfr#",
        "iter": "http://w3id.org/sparql-generate/iter/",
        "orgesv2": "http://datos.gob.es/sites/default/files/OntologiaDIR3/orges.owl#",
        "aseonto": "http://requirement.ase.ru/requirements_ontology#",
        "aml": "https://w3id.org/i40/aml#",
        "ondc": "http://www.semanticweb.org/ontologies/2012/1/Ontology1329913965202.owl#",
        "s3n": "http://w3id.org/s3n/",
        "input": "http://volt-name.space/vocab/input#",
        "dqc": "http://semwebquality.org/ontologies/dq-constraints#",
        "globalcube": "http://kalmar32.fzi.de/triples/global-cube.ttl#",
        "sfd": "http://semantic-forms.cc:9112/ldp/",
        "rdare": "http://rdaregistry.info/termList/RDARegionalEncoding/",
        "vsearch": "http://vocab.sti2.at/vsearch#",
        "lcsh": "http://id.loc.gov/authorities/subjects/",
        "da": "https://www.wowman.org/index.php?id=1&type=get#",
        "nih": "http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#",
        "valueflows": "https://w3id.org/valueflows/",
        "frappe": "http://streamreasoning.org/ontologies/frappe#",
        "edg": "http://edg.topbraid.solutions/model/",
        "cubeont": "http://ontology.cube.global/",
        "besluit": "http://data.vlaanderen.be/ns/besluit#",
        "tsnchange": "http://purl.org/net/tsnchange#",
        "bob": "http://good.dad/meaning/bob#",
        "shui": "https://vocab.eccenca.com/shui/",
        "gt": "https://vocab.eccenca.com/geniustex/",
        "ppn": "http://parliament.uk/ontologies/person-name/",
        "dpla": "http://dp.la/info/developers/map/",
        "rimmf": "http://rimmf.com/vocab/",
        "bdr": "http://purl.bdrc.io/resource/",
        "bci": "https://w3id.org/BCI-ontology#",
        "fssp": "http://linkeddata.fssprus.ru/resource/",
        "pop": "http://wiki.dbpedia.org/",
        "fnml": "http://semweb.mmlab.be/ns/fnml#",
        "imas": "https://sparql.crssnky.xyz/imasrdf/URIs/imas-schema.ttl#",
        "lido": "http://www.lido-schema.org/",
        "nrv": "http://ns.inria.fr/nrv#",
        "docker": "http://www.w3.org/ns/bde/docker/",
        "decprov": "http://promsns.org/def/decprov#",
        "iotlite": "http://purl.oclc.org/NET/UNIS/fiware/iot-lite#",
        "datacron": "http://www.datacron-project.eu/datAcron#",
        "sylld": "http://www.semanticweb.org/syllabus/data/",
        "bl": "https://w3id.org/biolink/vocab/",
        "mandaat": "http://data.vlaanderen.be/ns/mandaat#",
        "seokoeln": "http://rankrage.de/",
        "dead": "http://utpl.edu.ec/sbc/data/",
        "cocoon": "https://w3id.org/cocoon/v1.0#",
        "mml": "http://www.w3.org/1998/Math/MathML/",
        "literature": "http://purl.org/net/cnyt-literature#",
        "dcx": "http://dublincore.org/dcx/",
        "gbol": "http://gbol.life/0.1#",
        "iab": "https://www.iab.com/guidelines/taxonomy/",
        "isaterms": "http://purl.org/isaterms/",
        "s4bldg": "https://w3id.org/def/saref4bldg#",
        "led": "http://led.kmi.open.ac.uk/term/",
        "plg": "http://parliament.uk/ontologies/legislation/",
        "theme": "http://voc.odw.tw/theme/",
        "seo": "http://sda.tech/SEOontology/SEO/",
        "snac": "http://socialarchive.iath.virginia.edu/",
        "nosql": "http://purl.org/db/nosql#",
        "numbers": "http://km.aifb.kit.edu/projects/numbers/",
        "loupe": "http://ont-loupe.linkeddata.es/def/core/",
        "ids": "https://w3id.org/idsa/core/",
        "ddb": "http://www.deutsche-digitale-bibliothek.de/edm/",
        "mydb": "http://mydb.org/",
        "mdont": "http://ont.matchdeck.com/",
        "gdpr": "https://vocab.eccenca.com/gdpr/",
        "logies": "https://data.vlaanderen.be/ns/logies#",
        "linkrel": "https://www.w3.org/ns/iana/link-relations/relation#",
        "medred": "http://w3id.org/medred/medred#",
        "ecowlim": "http://ecowlim.tfri.gov.tw/lode/resource/",
        "ecore": "http://www.eclipse.org/emf/2002/Ecore#",
        "foam": "https://www.koerperfettwaage-test.de/",
        "geo7": "https://www.geo7.ch/",
        "foaffff": "http://gogl.com/",
        "timex": "http://data.wu.ac.at/ns/timex#",
        "legal": "http://www.w3.org/ns/legal#",
        "number": "http://km.aifb.kit.edu/projects/numbers/number#",
        "vehman": "http://deductions.github.io/vehicule-management.owl.ttl#",
        "agrovoc": "http://aims.fao.org/aos/agrovoc/",
        "cwlgit": "https://w3id.org/cwl/view/git/",
        "m3": "http://sensormeasurement.appspot.com/m3#",
        "fog": "https://w3id.org/fog#",
        "cdao": "http://purl.obolibrary.org/obo/",
        "kmgeo": "http://km.aifb.kit.edu/services/geo/ontology#",
        "sirene": "https://sireneld.io/vocab/sirene#",
        "faostat": "http://reference.eionet.europa.eu/faostat/schema/",
        "atlasterms": "http://rdf.ebi.ac.uk/terms/atlas/",
        "mobivoc": "http://schema.mobivoc.org/",
        "az": "https://w3id.org/people/az/",
        "ontoneo": "http://purl.obolibrary.org/obo/ontoneo/",
        "smartapi": "http://smart-api.io/ontology/1.0/smartapi#",
        "prof": "http://www.w3.org/ns/dx/prof/",
        "dnbt": "http://d-nb.info/standards/elementset/dnb#",
        "cwlprov": "https://w3id.org/cwl/prov#",
        "lmo": "http://linkedmultimedia.org/sparql-mm/ns/2.0.0/ontology#",
        "vss": "http://automotive.eurecom.fr/vsso#",
        "radar": "http://www.radar-projekt.org/display/",
        "tikag": "https://www.tikag.com/",
        "r3d": "http://www.re3data.org/schema/3-0#",
        "swrc2": "https://www.cs.vu.nl/~mcaklein/onto/swrc_ext/2005/05#",
        "frbroo": "http://iflastandards.info/ns/fr/frbr/frbroo/",
        "pcdmuse": "http://pcdm.org/use#",
        "eepsa": "https://w3id.org/eepsa#",
        "rvz": "http://rdfvizler.dyreriket.xyz/vocabulary/core#",
        "dot": "https://w3id.org/dot#",
        "hico": "http://purl.org/emmedi/hico/",
        "physics": "http://www.astro.umd.edu/~eshaya/astro-onto/owl/physics.owl#",
        "ldt": "https://www.w3.org/ns/ldt#",
        "brick": "https://brickschema.org/schema/1.1/Brick#",
        "omg": "https://w3id.org/omg#",
        "munc": "http://ns.inria.fr/munc#",
        "lovc": "https://w3id.org/lovcube/ns/lovcube#",
        "afr": "http://purl.allotrope.org/ontologies/result#",
        "mem": "http://mementoweb.org/ns#",
        "goaf": "http://goaf.fr/goaf#",
        "cbim": "http://www.coinsweb.nl/cbim-2.0.rdf#",
        "fred": "http://www.ontologydesignpatterns.org/ont/fred/domain.owl#",
        "rls": "https://w3id.org/lovcube/ns/relovstats#",
        "scho": "http://www.scholarlydata.org/ontology/conference-ontology.owl#",
        "ln": "https://w3id.org/ln#",
        "pfeepsa": "https://w3id.org/pfeepsa#",
        "bioentity": "http://bioentity.io/vocab/",
        "aksw": "http://aksw.org/",
        "yaco": "https://www.irit.fr/recherches/MELODI/ontologies/cinema#",
        "iati": "http://purl.org/collections/iati/",
        "drk": "http://drakon.su/",
        "genre": "http://sparql.cwrc.ca/ontologies/genre#",
        "mwapi": "https://www.mediawiki.org/ontology#API/",
        "lmu": "https://w3id.org/laas-iot/lmu#",
        "adf": "http://purl.allotrope.org/ontologies/datapackage#",
        "bpo": "https://w3id.org/bpo#",
        "url": "http://schema.org/",
        "afm": "http://purl.allotrope.org/ontologies/material/",
        "vir": "http://w3id.org/vir#",
        "chear": "http://hadatac.org/ont/chear#",
        "roar": "https://w3id.org/roar#",
        "odf": "http://docs.oasis-open.org/ns/office/1.2/meta/odf#",
        "refexo": "http://purl.jp/bio/01/refexo#",
        "reg": "http://purl.org/linked-data/registry#",
        "ul": "http://underlay.mit.edu/ns/",
        "fnom": "https://w3id.org/function/vocabulary/mapping#",
        "devuan": "https://devuan.net.br/",
        "nno": "https://w3id.org/nno/ontology#",
        "beer": "http://beer.com/",
        "dpv": "http://www.w3.org/ns/dpv#",
        "one": "https://bioportal.bioontology.org/ontologies/ONE/",
        "conference": "https://w3id.org/scholarlydata/ontology/conference-ontology.owl#",
        "cim": "http://iec.ch/TC57/2013/CIM-schema-cim16#",
        "county": "http://myexample.org/county#",
        "ucum": "http://purl.oclc.org/NET/muo/ucum/",
        "alg": "http://drakon.su/ADF#",
        "edr": "https://w3id.org/laas-iot/edr#",
        "swa": "http://topbraid.org/swa#",
        "obws": "http://delicias.dia.fi.upm.es/ontologies/ObjectWithStates.owl#",
        "roc": "https://w3id.org/ro/curate#",
        "trao": "http://linkeddata.finki.ukim.mk/lod/ontology/tao#",
        "pham": "https://w3id.org/skgo/pham#",
        "semsur": "http://purl.org/SemSur/",
        "nas": "https://data.nasa.gov/ontologies/atmonto/NAS#",
        "crmeh": "http://purl.org/crmeh#",
        "sohukd": "http://sweetontology.net/humanKnowledgeDomain/",
        "summa": "http://purl.org/voc/summa/",
        "ocds": "http://purl.org/onto-ocds/ocds#",
        "noise": "http://vocab.linkeddata.es/datosabiertos/def/medio-ambiente/contaminacion-acustica#",
        "rami": "http://iais.fraunhofer.de/vocabs/rami#",
        "idot": "http://identifiers.org/idot/",
        "ca": "http://complyadvantage.com/",
        "esservicio": "http://vocab.linkeddata.es/datosabiertos/def/sector-publico/servicio#",
        "esdbpr": "http://es.dbpedia.org/resource/",
        "s4ee": "https://w3id.org/saref4ee#",
        "sirext": "https://sireneld.io/vocab/sirext#",
        "tb": "https://w3id.org/timebank#",
        "rsctx": "http://softeng.polito.it/rsctx#",
        "otl": "https://w3id.org/opentrafficlights#",
        "cog": "http://purl.org/ontology/cco/core#",
        "powla": "http://purl.org/powla/powla.owl#",
        "spvqa": "https://bmake.th-brandenburg.de/spv#",
        "ermrk": "http://www.essepuntato.it/2008/12/earmark#",
        "vocals": "http://w3id.org/rsp/vocals#",
        "conll": "http://ufal.mff.cuni.cz/conll2009-st/task-description.html#",
        "qkdv": "http://qudt.org/vocab/dimensionvector/",
        "phy": "https://w3id.org/skgo/phy#",
        "mus": "http://data.doremus.org/ontology#",
        "dby": "http://dbpedia.org/class/yago/",
        "veo": "http://linkeddata.finki.ukim.mk/lod/ontology/veo#",
        "ctrl": "https://w3id.org/ibp/CTRLont#",
        "cbb": "https://data.cbb.omgeving.vlaanderen.be/ns/cbb#",
        "ksam": "http://kulturarvsdata.se/ksamsok#",
        "dbms": "http://www.openlinksw.com/ontology/dbms-app-ontology#",
        "gdprov": "https://w3id.org/GDPRov#",
        "occ": "http://w3id.org/occ#",
        "bkb": "https://budayakb.cs.ui.ac.id/ns#",
        "m3lite": "http://purl.org/iot/vocab/m3-lite#",
        "oop": "http://w3id.org/oop#",
        "cska": "http://pfclitex.com/",
        "gdprtext": "https://w3id.org/GDPRtEXT#",
        "xbrll": "https://w3id.org/vocab/xbrll#",
        "omnlc": "http://open-multinet.info/ontology/omn-lifecycle#",
        "s4syst": "https://saref.etsi.org/saref4syst/",
        "bld": "http://biglinkeddata.com/",
        "lg": "https://purl.org/lg/",
        "loci": "http://linked.data.gov.au/def/loci#",
        "rdb": "http://www.dbs.cs.uni-duesseldorf.de/RDF/relational#",
        "ii": "http://sparql.cwrc.ca/ontologies/ii#",
        "oup": "http://purl.org/ontology-use-patterns#",
        "gnaf": "http://linked.data.gov.au/def/gnaf#",
        "crminf": "http://www.cidoc-crm.org/cidoc-crm/CRMinf/",
        "wdtn": "http://www.wikidata.org/prop/direct-normalized/",
        "geofabric": "http://linked.data.gov.au/def/geofabric#",
        "imjv": "https://data.imjv.omgeving.vlaanderen.be/ns/imjv#",
        "iospress": "http://ld.iospress.nl/rdf/ontology/",
        "isoadr": "http://reference.data.gov.au/def/ont/iso19160-1-address#",
        "lblodlg": "http://data.lblod.info/vocabularies/leidinggevenden/",
        "hosp": "http://health.data.gov/def/hospital/",
        "jup": "http://w3id.org/charta77/jup/",
        "tree": "https://w3id.org/tree#",
        "losp": "http://sparql.sstu.ru:3030/speciality/",
        "eproc": "http://10.0.3.120/download/eproc_FORN_v02.owl#",
        "dm": "http://datamusee.givingsense.eu/onto/",
        "terms": "http://purl.org/dc/terms/",
        "earth": "http://linked.earth/ontology#",
        "gmo": "http://purl.jp/bio/10/gmo/",
        "foio": "https://w3id.org/seas/FeatureOfInterestOntology/",
        "manto": "http://com.vortic3.MANTO/",
        "esagen": "http://vocab.ciudadesabiertas.es/def/sector-publico/agenda-municipal#",
        "dave": "http://theme-e.adaptcentre.ie/dave#",
        "gcon": "https://w3id.org/GConsent#",
        "constant": "http://qudt.org/vocab/constant/",
        "eqp": "https://data.nasa.gov/ontologies/atmonto/equipment#",
        "fel": "http://w3id.org/vcb/fel#",
        "dprov": "http://promsns.org/def/do#",
        "asgs": "http://linked.data.gov.au/def/asgs#",
        "sopropsp": "http://sweetontology.net/propSpeed/",
        "daap": "http://daap.eu/wiki/",
        "eppl": "https://w3id.org/ep-plan#",
        "bitl": "http://lib.bit.edu.cn/ontology/1.0/",
        "biolink": "https://w3id.org/biolink/vocab/",
        "sopropsh": "http://sweetontology.net/propSpaceHeight/",
        "eproc2": "http://10.0.3.120/download/eproc_FORN_v04.owl#",
        "lesa": "http://hadatac.org/ont/lesa#",
        "eupont": "http://elite.polito.it/ontologies/eupont.owl#",
        "modsci": "https://w3id.org/skgo/modsci#",
        "sophatmowm": "https://sweetontology.net/phenAtmoWindMesoscale/",
        "sopropsl": "http://sweetontology.net/propSpaceLocation/",
        "sopropr": "http://sweetontology.net/propRotation/",
        "soma": "http://sweetontology.net/matr/",
        "sopropsdis": "http://sweetontology.net/propSpaceDistance/",
        "esgs": "https://w3id.org/edwin/ontology/",
        "sfl": "http://data.finlex.fi/schema/sfl/",
        "ods": "http://lod.xdams.org/ontologies/ods/",
        "donto": "http://reference.data.gov.au/def/ont/dataset#",
        "bsh": "https://brickschema.org/schema/1.1.0/BrickShape#",
        "sopropsdir": "http://sweetontology.net/propSpaceDirection/",
        "sorealc": "http://sweetontology.net/realmLandCoastal/",
        "sohues": "http://sweetontology.net/humanEnvirStandards/",
        "istex": "https://data.istex.fr/ontology/istex#",
        "sopropti": "http://sweetontology.net/propTime/",
        "cwmo": "http://purl.org/cwmo/#",
        "soproptg": "http://sweetontology.net/propTemperatureGradient/",
        "osys": "http://purl.org/olia/system.owl#",
        "iaph": "http://www.juntadeandalucia.es/datosabiertos/portal/iaph/dataset/dataset/6c199ca2-8d2e-4c12-833c-f28",
        "sohur": "http://sweetontology.net/humanResearch/",
        "somaae": "http://sweetontology.net/matrAerosol/",
        "skoslex": "https://bp4mc2.org/def/skos-lex#",
        "soreaa": "http://sweetontology.net/realmAtmo/",
        "soreao": "http://sweetontology.net/realmOcean/",
        "sostso": "http://sweetontology.net/stateSolid/",
        "sohut": "http://sweetontology.net/humanTransportation/",
        "eccf": "http://data.europa.eu/54i/",
        "apb": "http://www.analysispartners.org/businessmodel/",
        "wild": "http://purl.org/wild/vocab#",
        "sorelt": "http://sweetontology.net/relaTime/",
        "sopropi": "http://sweetontology.net/propIndex/",
        "ei2a": "http://opendata.aragon.es/def/ei2a#",
        "edupro": "http://ns.inria.fr/semed/eduprogression#",
        "qk": "http://qudt.org/vocab/quantitykind/",
        "epplan": "https://w3id.org/ep-plan#",
        "sosttg": "http://sweetontology.net/stateTimeGeologic/",
        "sopropmf": "http://sweetontology.net/propMassFlux/",
        "sopropsm": "http://sweetontology.net/propSpaceMultidimensional/",
        "sostst": "http://sweetontology.net/stateStorm/",
        "sostv": "http://sweetontology.net/stateVisibility/",
        "sorelh": "http://sweetontology.net/relaHuman/",
        "twitter": "http://stocktwits.com/",
        "sohutr": "http://sweetontology.net/humanTechReadiness/",
        "sosttc": "http://sweetontology.net/stateTimeCycle/",
        "somaoc": "http://sweetontology.net/matrOrganicCompound/",
        "somarock": "http://sweetontology.net/matrRock/",
        "sopropo": "http://sweetontology.net/propOrdinal/",
        "sopropp": "http://sweetontology.net/propPressure/",
        "somamin": "http://sweetontology.net/matrMineral/",
        "sostth": "http://sweetontology.net/stateThermodynamic/",
        "sopropq": "http://sweetontology.net/propQuantity/",
        "sopropst": "http://sweetontology.net/propSpaceThickness/",
        "sopropt": "http://sweetontology.net/propTemperature/",
        "sophatmopc": "http://sweetontology.net/phenAtmoPrecipitation/",
        "dentsci": "https://w3id.org/skgo/dentsci#",
        "inchikey": "https://identifiers.org/inchikey:",
        "shema": "http://schema.org/",
        "sosttf": "http://sweetontology.net/stateTimeFrequency/",
        "sorear": "http://sweetontology.net/realmRegion/",
        "soprops": "http://sweetontology.net/propSpace/",
        "stencila": "http://schema.stenci.la/",
        "extech": "https://w3id.org/executionTechnique/ontology/",
        "sohuj": "http://sweetontology.net/humanJurisdiction/",
        "sorelm": "http://sweetontology.net/relaMath/",
        "sorelsp": "http://sweetontology.net/relaSpace/",
        "sostsy": "http://sweetontology.net/stateSystem/",
        "soreaas": "http://sweetontology.net/realmAstroStar/",
        "sostri": "http://sweetontology.net/stateRoleImpact/",
        "somaen": "http://sweetontology.net/matrEnergy/",
        "sopropcha": "http://sweetontology.net/propCharge/",
        "sorelpr": "http://sweetontology.net/relaProvenance/",
        "esagm": "http://vocab.ciudadesabiertas.es/def/sector-publico/agenda-municipal#",
        "soproptf": "http://sweetontology.net/propTimeFrequency/",
        "sorelch": "http://sweetontology.net/relaChemical/",
        "probont": "http://www.probonto.org/ontology#",
        "sorepmo": "http://sweetontology.net/reprMathOperation/",
        "dbm": "http://purl.org/net/dbm/ontology#",
        "sorepsc": "http://sweetontology.net/reprSciComponent/",
        "soreac": "http://sweetontology.net/realmCryo/",
        "sopropb": "http://sweetontology.net/propBinary/",
        "sorel": "http://sweetontology.net/rela/",
        "soreabb": "http://sweetontology.net/realmBiolBiome/",
        "sophcr": "http://sweetontology.net/phenCryo/",
        "ci": "https://privatealpha.com/ontology/content-inventory/1#",
        "somaem": "http://sweetontology.net/matrElementalMolecule/",
        "sohuecons": "http://sweetontology.net/humanEnvirConservation/",
        "sostrr": "http://sweetontology.net/stateRoleRepresentative/",
        "sophst": "http://sweetontology.net/phenStar/",
        "sostrt": "http://sweetontology.net/stateRoleTrust/",
        "soprocsc": "http://sweetontology.net/procStateChange/",
        "somael": "http://sweetontology.net/matrElement/",
        "sopropdifu": "http://sweetontology.net/propDiffusivity/",
        "mccv": "http://purl.jp/bio/10/mccv#",
        "soprocc": "http://sweetontology.net/procChemical/",
        "pplan": "http://purl.org/net/p-plan#",
        "cfrl": "http://linkeddata.finki.ukim.mk/lod/ontology/cfrl#",
        "sorepdsg": "http://sweetontology.net/reprDataServiceGeospatial/",
        "sorealp": "http://sweetontology.net/realmLandProtected/",
        "sorepdm": "http://sweetontology.net/reprDataModel/",
        "soproc": "http://sweetontology.net/proc/",
        "somais": "http://sweetontology.net/matrIsotope/",
        "sorepdsv": "http://sweetontology.net/reprDataServiceValidation/",
        "sorepmso": "http://sweetontology.net/reprMathSolution/",
        "sophsy": "http://sweetontology.net/phenSystem/",
        "sorepsl": "http://sweetontology.net/reprSciLaw/",
        "soreaofe": "http://sweetontology.net/realmOceanFeature/",
        "pineapple": "http://hexananas.com/pineapple#",
        "soreas": "http://sweetontology.net/realmSoil/",
        "somapl": "http://sweetontology.net/matrPlant/",
        "lib": "http://purl.org/library/",
        "sophec": "http://sweetontology.net/phenEcology/",
        "atts": "https://data.nasa.gov/ontologies/atmonto/general#",
        "chemsci": "https://w3id.org/skgo/chemsci#",
        "cci": "http://cookingbigdata.com/linkeddata/ccinstances#",
        "sophatmofr": "http://sweetontology.net/phenAtmoFront/",
        "wotsec": "https://www.w3.org/2019/wot/security#",
        "soreacz": "http://sweetontology.net/realmClimateZone/",
        "sophatmow": "http://sweetontology.net/phenAtmoWind/",
        "somaind": "http://sweetontology.net/matrIndustrial/",
        "sopropm": "http://sweetontology.net/propMass/",
        "soreahb": "http://sweetontology.net/realmHydroBody/",
        "sorepdp": "http://sweetontology.net/reprDataProduct/",
        "ccp": "http://cookingbigdata.com/linkeddata/ccpricing#",
        "sorepscd": "http://sweetontology.net/reprSpaceCoordinate/",
        "sohueccont": "http://sweetontology.net/humanEnvirControl/",
        "sorelsc": "http://sweetontology.net/relaSci/",
        "soreaaw": "http://sweetontology.net/realmAtmoWeather/",
        "soman": "http://sweetontology.net/matrAnimal/",
        "yandex": "http://yandex.ru/",
        "somas": "http://sweetontology.net/matrSediment/",
        "soprope": "http://sweetontology.net/propEnergy/",
        "soreaabl": "http://sweetontology.net/realmAtmoBoundaryLayer/",
        "sostti": "http://sweetontology.net/stateTime/",
        "sophatmofo": "http://sweetontology.net/phenAtmoFog/",
        "sopropdr": "http://sweetontology.net/propDimensionlessRatio/",
        "sorelph": "http://sweetontology.net/relaPhysical/",
        "somab": "http://sweetontology.net/matrBiomass/",
        "sorelcl": "http://sweetontology.net/relaClimate/",
        "soreaofl": "http://sweetontology.net/realmOceanFloor/",
        "somanr": "http://sweetontology.net/matrNaturalResource/",
        "sopropfr": "http://sweetontology.net/propFraction/",
        "sorepmg": "http://sweetontology.net/reprMathGraph/",
        "soprocp": "http://sweetontology.net/procPhysical/",
        "soph": "http://sweetontology.net/phen/",
        "sophel": "http://sweetontology.net/phenElecMag/",
        "sorepmfo": "http://sweetontology.net/reprMathFunctionOrthogonal/",
        "pq": "http://www.wikidata.org/prop/qualifier/",
        "sorepm": "http://sweetontology.net/reprMath/",
        "sorepmst": "http://sweetontology.net/reprMathStatistics/",
        "soreaah": "http://sweetontology.net/realmAstroHelio/",
        "somarocki": "http://sweetontology.net/matrRockIgneous/",
        "sorepsrs": "http://sweetontology.net/reprSpaceReferenceSystem/",
        "sorepdsa": "http://sweetontology.net/reprDataServiceAnalysis/",
        "sophatmot": "http://sweetontology.net/phenAtmoTransport/",
        "sopropcap": "http://sweetontology.net/propCapacity/",
        "sorep": "http://sweetontology.net/repr/",
        "dmp": "http://www.sysresearch.org/rda-common-dmp#",
        "sophod": "http://sweetontology.net/phenOceanDynamics/",
        "sopropcon": "http://sweetontology.net/propConductivity/",
        "sopropef": "http://sweetontology.net/propEnergyFlux/",
        "sophatmol": "http://sweetontology.net/phenAtmoLightning/",
        "sost": "http://sweetontology.net/state/",
        "sorepts": "http://sweetontology.net/reprTimeSeason/",
        "sophm": "http://sweetontology.net/phenMixing/",
        "misp": "http://purl.org/cyber/misp#",
        "sorealo": "http://sweetontology.net/realmLandOrographic/",
        "sorepds": "http://sweetontology.net/reprDataService/",
        "sorept": "http://sweetontology.net/reprTime/",
        "somaf": "http://sweetontology.net/matrFacility/",
        "d2s": "https://w3id.org/d2s/",
        "sophatmoc": "http://sweetontology.net/phenAtmoCloud/",
        "sweet": "http://sweetontology.net/",
        "sorepdsr": "http://sweetontology.net/reprDataServiceReduction/",
        "soprop": "http://sweetontology.net/prop/",
        "sophatmo": "http://sweetontology.net/phenAtmo/",
        "hctl": "https://www.w3.org/2019/wot/hypermedia#",
        "sophr": "http://sweetontology.net/phenReaction/",
        "sopropdife": "http://sweetontology.net/propDifference/",
        "sopropcou": "http://sweetontology.net/propCount/",
        "arp": "http://www.arpenteur.org/ontology/Arpenteur.owl#",
        "somains": "http://sweetontology.net/matrInstrument/",
        "somaw": "http://sweetontology.net/matrWater/",
        "sophso": "http://sweetontology.net/phenSolid/",
        "sopropcat": "http://sweetontology.net/propCategorical/",
        "sophcy": "http://sweetontology.net/phenCycle/",
        "sophsyc": "http://sweetontology.net/phenSystemComplexity/",
        "sopropfu": "http://sweetontology.net/propFunction/",
        "somac": "http://sweetontology.net/matrCompound/",
        "sophoc": "http://sweetontology.net/phenOceanCoastal/",
        "sophpc": "http://sweetontology.net/phenPlanetClimate/",
        "sopropche": "http://sweetontology.net/propChemical/",
        "sophhy": "http://sweetontology.net/phenHydro/",
        "sophatmos": "http://sweetontology.net/phenAtmoSky/",
        "sorepdf": "http://sweetontology.net/reprDataFormat/",
        "somaio": "http://sweetontology.net/matrIon/",
        "sophei": "http://sweetontology.net/phenEnvirImpact/",
        "sorepsd": "http://sweetontology.net/reprSpaceDirection/",
        "somaeq": "http://sweetontology.net/matrEquipment/",
        "sophfi": "http://sweetontology.net/phenFluidInstability/",
        "ccr": "http://cookingbigdata.com/linkeddata/ccregions#",
        "atd": "https://data.nasa.gov/ontologies/atmonto/data#",
        "sophcm": "http://sweetontology.net/phenCycleMaterial/",
        "atm": "https://data.nasa.gov/ontologies/atmonto/ATM#",
        "cbs": "http://betalinkeddata.cbs.nl/def/cbs#",
        "ccsla": "http://cookingbigdata.com/linkeddata/ccsla#",
        "sorepmf": "http://sweetontology.net/reprMathFunction/",
        "sophb": "http://sweetontology.net/phenBiol/",
        "soprocw": "http://sweetontology.net/procWave/",
        "sopho": "http://sweetontology.net/phenOcean/",
        "sorepsu": "http://sweetontology.net/reprSciUnits/",
        "sophhe": "http://sweetontology.net/phenHelio/",
        "sorepsf": "http://sweetontology.net/reprSciFunction/",
        "sorepsme": "http://sweetontology.net/reprSciMethodology/",
        "rico": "https://www.ica.org/standards/RiC/ontology#",
        "sophfd": "http://sweetontology.net/phenFluidDynamics/",
        "sophft": "http://sweetontology.net/phenFluidTransport/",
        "sorepsg3": "http://sweetontology.net/reprSpaceGeometry3D/",
        "soreps": "http://sweetontology.net/reprSpace/",
        "sophwn": "http://sweetontology.net/phenWaveNoise/",
        "soreptd": "http://sweetontology.net/reprTimeDay/",
        "sophen": "http://sweetontology.net/phenEnergy/",
        "sophw": "http://sweetontology.net/phenWave/",
        "soreal": "http://sweetontology.net/realmLandform/",
        "somapa": "http://sweetontology.net/matrParticle/",
        "sosto": "http://sweetontology.net/stateOrdinal/",
        "stx": "http://purl.org/cyber/stix#",
        "sophatmops": "http://sweetontology.net/phenAtmoPressure/",
        "sostc": "http://sweetontology.net/stateChemical/",
        "jsonschema": "https://www.w3.org/2019/wot/json-schema#",
        "somamic": "http://sweetontology.net/matrMicrobiota/",
        "proton": "http://www.ontotext.com/proton/",
        "sostrg": "http://sweetontology.net/stateRoleGeographic/",
        "sohua": "http://sweetontology.net/humanAgriculture/",
        "bperson": "http://data.vlaanderen.be/ns/persoon#",
        "trek": "https://w3id.org/trek/",
        "sostrb": "http://sweetontology.net/stateRoleBiological/",
        "sostb": "http://sweetontology.net/stateBiological/",
        "sostro": "http://sweetontology.net/stateRole/",
        "phto": "http://rhizomik.net/ontologies/PlantHealthThreats.owl.ttl#",
        "sostre": "http://sweetontology.net/stateRealm/",
        "snomedct": "http://purl.bioontology.org/ontology/SNOMEDCT/",
        "sorepsp": "http://sweetontology.net/reprSciProvenance/",
        "exo": "https://w3id.org/example#",
        "ciao": "http://ciao.it/",
        "sostf": "http://sweetontology.net/stateFluid/",
        "sostef": "http://sweetontology.net/stateEnergyFlux/",
        "sostdp": "http://sweetontology.net/stateDataProcessing/",
        "sostrc": "http://sweetontology.net/stateRoleChemical/",
        "sohu": "http://sweetontology.net/human/",
        "ldc": "https://tac.nist.gov/tracks/SM-KBP/2018/ontologies/SeedlingOntology#",
        "sorealv": "http://sweetontology.net/realmLandVolcanic/",
        "ocsw": "http://data.diekb.org/def/ocsw#",
        "malaka": "http://george.gr/",
        "skosthes": "http://purl.org/iso25964/skos-thes#",
        "ingredient": "http://www.owl-ontologies.com/test.owl/ingredient/",
        "omop": "http://api.ohdsi.org/WebAPI/vocabulary/concept/",
        "mbkeys": "https://pastebin.com/ThBfphb8#",
        "sorepsmo": "http://sweetontology.net/reprSciModel/",
        "sostp": "http://sweetontology.net/statePhysical/",
        "sostss": "http://sweetontology.net/stateSpaceScale/",
        "sohuea": "http://sweetontology.net/humanEnvirAssessment/",
        "sohud": "http://sweetontology.net/humanDecision/",
        "pnv": "https://w3id.org/pnv#",
        "lv2": "http://lv2plug.in/ns/lv2core/",
        "beo": "http://pi.pauwel.be/voc/buildingelement#",
        "lprov": "http://id.learning-provider.data.ac.uk/terms#",
        "soall": "http://sweetontology.net/sweetAll/",
        "sostsb": "http://sweetontology.net/stateSpectralBand/",
        "capes": "http://vocab.capes.gov.br/def/vcav#",
        "soreaab": "http://sweetontology.net/realmAstroBody/",
        "ccomid": "http://www.ontologyrepository.com/CommonCoreOntologies/Mid/",
        "sorealg": "http://sweetontology.net/realmLandGlacial/",
        "sorealt": "http://sweetontology.net/realmLandTectonic/",
        "sophgt": "http://sweetontology.net/phenGeolTectonic/",
        "soreaer": "http://sweetontology.net/realmEarthReference/",
        "mmms": "http://ldf.fi/schema/mmm/",
        "sophg": "http://sweetontology.net/phenGeol/",
        "ordo": "http://www.orpha.net/ORDO/",
        "sorealf": "http://sweetontology.net/realmLandFluvial/",
        "esbici": "http://vocab.ciudadesabiertas.es/def/transporte/bicicleta-publica#",
        "sophgv": "http://sweetontology.net/phenGeolVolcano/",
        "wds": "http://www.wikidata.org/entity/statement/",
        "soreala": "http://sweetontology.net/realmLandAeolian/",
        "gleio": "http://lei.info/gleio/",
        "sostsl": "http://sweetontology.net/stateSpectralLine/",
        "bldont": "http://ont.biglinkeddata.com/",
        "sophgg": "http://sweetontology.net/phenGeolGeomorphology/",
        "matvoc": "http://stream-ontology.com/matvoc/",
        "sostsp": "http://sweetontology.net/stateSpace/",
        "sophgs": "http://sweetontology.net/phenGeolSeismicity/",
        "ggbn": "http://data.ggbn.org/schemas/ggbn/terms/",
        "sophgf": "http://sweetontology.net/phenGeolFault/",
        "sostsc": "http://sweetontology.net/stateSpaceConfiguration/",
        "dfcb": "http://datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#",
        "sohuc": "http://sweetontology.net/humanCommerce/",
        "schoi": "https://w3id.org/scholarlydata/ontology/indicators-ontology.owl#",
        "birthdate": "http://schema.org/birthDate/",
        "hdgi": "https://w3id.org/hdgi#",
        "idsc": "https://w3id.org/idsa/code/",
        "sorea": "http://sweetontology.net/realm/",
        "biogrid": "http://thebiogrid.org/",
        "dfc": "http://datafoodconsortium.org/ontologies/DFC_FullModel.owl#",
        "she": "http://shacleditor.org/",
        "compub": "https://sireneld.io/vocab/compub#",
        "mpg123": "https://devuan.net.br/wiki/mpg123/",
        "omim": "http://purl.bioontology.org/ontology/OMIM/",
        "docam": "https://www.docam.ca/glossaurus/",
        "taxref": "http://taxref.mnhn.fr/lod/taxon/",
        "oplsoft": "http://www.openlinksw.com/ontology/software#",
        "rank": "http://www.ontotext.com/owlim/RDFRank#",
        "brot": "https://w3id.org/brot#",
        "gx": "https://graphite.synaptica.net/extension/",
        "mobiliteit": "https://data.vlaanderen.be/ns/mobiliteit#",
        "wasa": "http://vocab.sti2.at/wasa/",
        "country": "http://eulersharp.sourceforge.net/2003/03swap/countries#",
        "uimo": "http://vocab.sti2.at/uimo/",
        "saref4envi": "https://saref.etsi.org/saref4envi/",
        "fernanda": "http://fernanda.nl/",
        "dd": "http://example.org/dummydata/",
        "say": "http://example.org/say/",
        "osmm": "https://www.openstreetmap.org/meta/",
        "s4city": "https://saref.etsi.org/saref4city/",
        "wotc": "http://purl.org/wot-catalogue#",
        "mgv": "http://mangaview.fr/mgv#",
        "s4agri": "https://saref.etsi.org/saref4agri/",
        "s4ener": "https://saref.etsi.org/saref4ener/",
        "osmrel": "https://www.openstreetmap.org/relation/",
        "iaco": "https://iaco.me/",
        "osmway": "https://www.openstreetmap.org/way/",
        "io": "https://iaco.me/",
        "osmt": "https://wiki.openstreetmap.org/wiki/Key:",
        "asio": "http://purl.org/hercules/asio/core#",
        "knows": "http://semantic.komc/usu/2020/knows#",
        "gas": "http://www.bigdata.com/rdf/gas#",
        "osmnode": "https://www.openstreetmap.org/node/",
        "taxrefprop": "http://taxref.mnhn.fr/lod/property/",
        "lexicog": "http://www.w3.org/ns/lemon/lexicog#",
        "oplfeat": "http://www.openlinksw.com/ontology/features#",
        "dbonto": "http://dbepedia.org/ontology/",
        "ld": "http://linkeddata.ru/",
        "cts": "http://rdf.cdisc.org/sdtm-terminology#",
        "gco": "http://purl.jp/bio/12/glyco/conjugate#",
        "persoon": "http://data.vlaanderen.be/ns/persoon#",
        "esconv": "http://vocab.ciudadesabiertas.es/def/sector-publico/convenio#",
        "rl": "http://rl.com/resources/",
        "bao": "http://www.bioassayontology.org/bao#",
        "srv": "http://www.daml.org/services/owl-s/1.2/Service.owl#",
        "movieo": "http://movie.com/ontology/",
        "pgxo": "http://pgxo.loria.fr/",
        "toaru": "https://metadata.moe/toaru-sparql/elements/",
        "jur": "http://sweet.jpl.nasa.gov/2.3/humanJurisdiction.owl#",
        "kko": "http://kbpedia.org/kko/rc/",
        "mltd": "https://mltd.pikopikopla.net/mltd-schema#",
        "bs": "https://w3id.org/def/basicsemantics-owl#",
        "prismdb": "https://prismdb.takanakahiko.me/prism-schema.ttl#",
        "ogura": "https://sparql.crssnky.xyz/Ogura_Hyakunin_Isshu_LinkedRDF/URIs/Ogura_Hyakunin_Isshu_schema.ttl#",
        "estraf": "http://vocab.ciudadesabiertas.es/def/transporte/trafico#",
        "vlueprint": "https://vlueprint.org/schema/",
        "hola": "https://moodle.insa-lyon.fr/course/view.php?id=",
        "ebg": "http://data.businessgraph.io/ontology#",
        "eppo": "https://gd.eppo.int/taxon/",
        "oco": "https://w3id.org/oc/ontology/#",
        "esautob": "http://vocab.ciudadesabiertas.es/def/transporte/autobus#",
        "maroc": "http://fr.dbpedia.org/page/Maroc/",
        "trak": "https://trakmetamodel.sourceforge.io/vocab/rdf-schema.rdf#",
        "karstlink": "https://ontology.uis-speleo.org/ontology/#",
        "marcgt": "https://id.loc.gov/vocabulary/marcgt/",
        "melding": "http://lblod.data.gift/vocabularies/automatische-melding/",
        "accid": "http://pid.accurids.com/",
        "ibeacon": "http://vocab.rapidthings.eu/ns/apple/ibeacon.ttl#",
        "mr": "http://marineregions.org/mrgid/",
        "ams": "http://data.amadeus.com/",
        "ble": "http://vocab.rapidthings.eu/ns/ble.ttl#",
        "motogp": "http://www.motogp.com/",
        "nsg": "https://neuroshapes.org/",
        "fibo": "https://spec.edmcouncil.org/fibo/ontology/master/latest/",
        "ssnx": "http://purl.oclc.org/NET/ssnx/ssn#",
        "w3geo": "http://www.w3.org/2003/01/geo/wgs84_pos#",
        "i18n": "https://www.w3.org/ns/i18n#",
        "contry": "http://dbpedia.org/resource/Lyon#",
        "w3id": "https://w3id.org/",
        "contax": "https://w3id.org/con-tax#",
        "bleadapter": "http://vocab.rapidthings.eu/ns/ble/adapter.ttl#",
        "esempleo": "http://vocab.ciudadesabiertas.es/def/sector-publico/empleo#",
        "mnx": "https://rdf.metanetx.org/schema/",
        "cso": "http://cso.kmi.open.ac.uk/schema/cso/"
    }
};
},{}],"../node_modules/prefix-ns/index.js":[function(require,module,exports) {
/**
 * Created by pheyvaer on 18.04.17.
 */

let data = require('./data.json')["@context"];

function getPrefixes(){
  return Object.keys(data);
}

function asMap() {
  return data;
}

function getNamespaceViaPrefix(prefix) {
  return data[prefix];
}

function getPrefixViaNamespace(namespace) {
  let prefixes = Object.keys(data);
  let i = 0;

  while (i < prefixes.length && data[prefixes[i]] !== namespace) {
    i ++;
  }

  if (i < prefixes.length) {
    return prefixes[i];
  } else {
    return null;
  }
}

module.exports = {
  getPrefixes: getPrefixes,
  getNamespaceViaPrefix: getNamespaceViaPrefix,
  getPrefixViaNamespace: getPrefixViaNamespace,
  asMap: asMap
};
},{"./data.json":"../node_modules/prefix-ns/data.json"}],"../node_modules/yamljs/lib/Pattern.js":[function(require,module,exports) {
// Generated by CoffeeScript 1.12.4
var Pattern;

Pattern = (function() {
  Pattern.prototype.regex = null;

  Pattern.prototype.rawRegex = null;

  Pattern.prototype.cleanedRegex = null;

  Pattern.prototype.mapping = null;

  function Pattern(rawRegex, modifiers) {
    var _char, capturingBracketNumber, cleanedRegex, i, len, mapping, name, part, subChar;
    if (modifiers == null) {
      modifiers = '';
    }
    cleanedRegex = '';
    len = rawRegex.length;
    mapping = null;
    capturingBracketNumber = 0;
    i = 0;
    while (i < len) {
      _char = rawRegex.charAt(i);
      if (_char === '\\') {
        cleanedRegex += rawRegex.slice(i, +(i + 1) + 1 || 9e9);
        i++;
      } else if (_char === '(') {
        if (i < len - 2) {
          part = rawRegex.slice(i, +(i + 2) + 1 || 9e9);
          if (part === '(?:') {
            i += 2;
            cleanedRegex += part;
          } else if (part === '(?<') {
            capturingBracketNumber++;
            i += 2;
            name = '';
            while (i + 1 < len) {
              subChar = rawRegex.charAt(i + 1);
              if (subChar === '>') {
                cleanedRegex += '(';
                i++;
                if (name.length > 0) {
                  if (mapping == null) {
                    mapping = {};
                  }
                  mapping[name] = capturingBracketNumber;
                }
                break;
              } else {
                name += subChar;
              }
              i++;
            }
          } else {
            cleanedRegex += _char;
            capturingBracketNumber++;
          }
        } else {
          cleanedRegex += _char;
        }
      } else {
        cleanedRegex += _char;
      }
      i++;
    }
    this.rawRegex = rawRegex;
    this.cleanedRegex = cleanedRegex;
    this.regex = new RegExp(this.cleanedRegex, 'g' + modifiers.replace('g', ''));
    this.mapping = mapping;
  }

  Pattern.prototype.exec = function(str) {
    var index, matches, name, ref;
    this.regex.lastIndex = 0;
    matches = this.regex.exec(str);
    if (matches == null) {
      return null;
    }
    if (this.mapping != null) {
      ref = this.mapping;
      for (name in ref) {
        index = ref[name];
        matches[name] = matches[index];
      }
    }
    return matches;
  };

  Pattern.prototype.test = function(str) {
    this.regex.lastIndex = 0;
    return this.regex.test(str);
  };

  Pattern.prototype.replace = function(str, replacement) {
    this.regex.lastIndex = 0;
    return str.replace(this.regex, replacement);
  };

  Pattern.prototype.replaceAll = function(str, replacement, limit) {
    var count;
    if (limit == null) {
      limit = 0;
    }
    this.regex.lastIndex = 0;
    count = 0;
    while (this.regex.test(str) && (limit === 0 || count < limit)) {
      this.regex.lastIndex = 0;
      str = str.replace(this.regex, replacement);
      count++;
    }
    return [str, count];
  };

  return Pattern;

})();

module.exports = Pattern;

},{}],"../node_modules/yamljs/lib/Utils.js":[function(require,module,exports) {
// Generated by CoffeeScript 1.12.4
var Pattern, Utils,
  hasProp = {}.hasOwnProperty;

Pattern = require('./Pattern');

Utils = (function() {
  function Utils() {}

  Utils.REGEX_LEFT_TRIM_BY_CHAR = {};

  Utils.REGEX_RIGHT_TRIM_BY_CHAR = {};

  Utils.REGEX_SPACES = /\s+/g;

  Utils.REGEX_DIGITS = /^\d+$/;

  Utils.REGEX_OCTAL = /[^0-7]/gi;

  Utils.REGEX_HEXADECIMAL = /[^a-f0-9]/gi;

  Utils.PATTERN_DATE = new Pattern('^' + '(?<year>[0-9][0-9][0-9][0-9])' + '-(?<month>[0-9][0-9]?)' + '-(?<day>[0-9][0-9]?)' + '(?:(?:[Tt]|[ \t]+)' + '(?<hour>[0-9][0-9]?)' + ':(?<minute>[0-9][0-9])' + ':(?<second>[0-9][0-9])' + '(?:\.(?<fraction>[0-9]*))?' + '(?:[ \t]*(?<tz>Z|(?<tz_sign>[-+])(?<tz_hour>[0-9][0-9]?)' + '(?::(?<tz_minute>[0-9][0-9]))?))?)?' + '$', 'i');

  Utils.LOCAL_TIMEZONE_OFFSET = new Date().getTimezoneOffset() * 60 * 1000;

  Utils.trim = function(str, _char) {
    var regexLeft, regexRight;
    if (_char == null) {
      _char = '\\s';
    }
    regexLeft = this.REGEX_LEFT_TRIM_BY_CHAR[_char];
    if (regexLeft == null) {
      this.REGEX_LEFT_TRIM_BY_CHAR[_char] = regexLeft = new RegExp('^' + _char + '' + _char + '*');
    }
    regexLeft.lastIndex = 0;
    regexRight = this.REGEX_RIGHT_TRIM_BY_CHAR[_char];
    if (regexRight == null) {
      this.REGEX_RIGHT_TRIM_BY_CHAR[_char] = regexRight = new RegExp(_char + '' + _char + '*$');
    }
    regexRight.lastIndex = 0;
    return str.replace(regexLeft, '').replace(regexRight, '');
  };

  Utils.ltrim = function(str, _char) {
    var regexLeft;
    if (_char == null) {
      _char = '\\s';
    }
    regexLeft = this.REGEX_LEFT_TRIM_BY_CHAR[_char];
    if (regexLeft == null) {
      this.REGEX_LEFT_TRIM_BY_CHAR[_char] = regexLeft = new RegExp('^' + _char + '' + _char + '*');
    }
    regexLeft.lastIndex = 0;
    return str.replace(regexLeft, '');
  };

  Utils.rtrim = function(str, _char) {
    var regexRight;
    if (_char == null) {
      _char = '\\s';
    }
    regexRight = this.REGEX_RIGHT_TRIM_BY_CHAR[_char];
    if (regexRight == null) {
      this.REGEX_RIGHT_TRIM_BY_CHAR[_char] = regexRight = new RegExp(_char + '' + _char + '*$');
    }
    regexRight.lastIndex = 0;
    return str.replace(regexRight, '');
  };

  Utils.isEmpty = function(value) {
    return !value || value === '' || value === '0' || (value instanceof Array && value.length === 0) || this.isEmptyObject(value);
  };

  Utils.isEmptyObject = function(value) {
    var k;
    return value instanceof Object && ((function() {
      var results;
      results = [];
      for (k in value) {
        if (!hasProp.call(value, k)) continue;
        results.push(k);
      }
      return results;
    })()).length === 0;
  };

  Utils.subStrCount = function(string, subString, start, length) {
    var c, i, j, len, ref, sublen;
    c = 0;
    string = '' + string;
    subString = '' + subString;
    if (start != null) {
      string = string.slice(start);
    }
    if (length != null) {
      string = string.slice(0, length);
    }
    len = string.length;
    sublen = subString.length;
    for (i = j = 0, ref = len; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
      if (subString === string.slice(i, sublen)) {
        c++;
        i += sublen - 1;
      }
    }
    return c;
  };

  Utils.isDigits = function(input) {
    this.REGEX_DIGITS.lastIndex = 0;
    return this.REGEX_DIGITS.test(input);
  };

  Utils.octDec = function(input) {
    this.REGEX_OCTAL.lastIndex = 0;
    return parseInt((input + '').replace(this.REGEX_OCTAL, ''), 8);
  };

  Utils.hexDec = function(input) {
    this.REGEX_HEXADECIMAL.lastIndex = 0;
    input = this.trim(input);
    if ((input + '').slice(0, 2) === '0x') {
      input = (input + '').slice(2);
    }
    return parseInt((input + '').replace(this.REGEX_HEXADECIMAL, ''), 16);
  };

  Utils.utf8chr = function(c) {
    var ch;
    ch = String.fromCharCode;
    if (0x80 > (c %= 0x200000)) {
      return ch(c);
    }
    if (0x800 > c) {
      return ch(0xC0 | c >> 6) + ch(0x80 | c & 0x3F);
    }
    if (0x10000 > c) {
      return ch(0xE0 | c >> 12) + ch(0x80 | c >> 6 & 0x3F) + ch(0x80 | c & 0x3F);
    }
    return ch(0xF0 | c >> 18) + ch(0x80 | c >> 12 & 0x3F) + ch(0x80 | c >> 6 & 0x3F) + ch(0x80 | c & 0x3F);
  };

  Utils.parseBoolean = function(input, strict) {
    var lowerInput;
    if (strict == null) {
      strict = true;
    }
    if (typeof input === 'string') {
      lowerInput = input.toLowerCase();
      if (!strict) {
        if (lowerInput === 'no') {
          return false;
        }
      }
      if (lowerInput === '0') {
        return false;
      }
      if (lowerInput === 'false') {
        return false;
      }
      if (lowerInput === '') {
        return false;
      }
      return true;
    }
    return !!input;
  };

  Utils.isNumeric = function(input) {
    this.REGEX_SPACES.lastIndex = 0;
    return typeof input === 'number' || typeof input === 'string' && !isNaN(input) && input.replace(this.REGEX_SPACES, '') !== '';
  };

  Utils.stringToDate = function(str) {
    var date, day, fraction, hour, info, minute, month, second, tz_hour, tz_minute, tz_offset, year;
    if (!(str != null ? str.length : void 0)) {
      return null;
    }
    info = this.PATTERN_DATE.exec(str);
    if (!info) {
      return null;
    }
    year = parseInt(info.year, 10);
    month = parseInt(info.month, 10) - 1;
    day = parseInt(info.day, 10);
    if (info.hour == null) {
      date = new Date(Date.UTC(year, month, day));
      return date;
    }
    hour = parseInt(info.hour, 10);
    minute = parseInt(info.minute, 10);
    second = parseInt(info.second, 10);
    if (info.fraction != null) {
      fraction = info.fraction.slice(0, 3);
      while (fraction.length < 3) {
        fraction += '0';
      }
      fraction = parseInt(fraction, 10);
    } else {
      fraction = 0;
    }
    if (info.tz != null) {
      tz_hour = parseInt(info.tz_hour, 10);
      if (info.tz_minute != null) {
        tz_minute = parseInt(info.tz_minute, 10);
      } else {
        tz_minute = 0;
      }
      tz_offset = (tz_hour * 60 + tz_minute) * 60000;
      if ('-' === info.tz_sign) {
        tz_offset *= -1;
      }
    }
    date = new Date(Date.UTC(year, month, day, hour, minute, second, fraction));
    if (tz_offset) {
      date.setTime(date.getTime() - tz_offset);
    }
    return date;
  };

  Utils.strRepeat = function(str, number) {
    var i, res;
    res = '';
    i = 0;
    while (i < number) {
      res += str;
      i++;
    }
    return res;
  };

  Utils.getStringFromFile = function(path, callback) {
    var data, fs, j, len1, name, ref, req, xhr;
    if (callback == null) {
      callback = null;
    }
    xhr = null;
    if (typeof window !== "undefined" && window !== null) {
      if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
      } else if (window.ActiveXObject) {
        ref = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0", "Msxml2.XMLHTTP", "Microsoft.XMLHTTP"];
        for (j = 0, len1 = ref.length; j < len1; j++) {
          name = ref[j];
          try {
            xhr = new ActiveXObject(name);
          } catch (error) {}
        }
      }
    }
    if (xhr != null) {
      if (callback != null) {
        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
              return callback(xhr.responseText);
            } else {
              return callback(null);
            }
          }
        };
        xhr.open('GET', path, true);
        return xhr.send(null);
      } else {
        xhr.open('GET', path, false);
        xhr.send(null);
        if (xhr.status === 200 || xhr.status === 0) {
          return xhr.responseText;
        }
        return null;
      }
    } else {
      req = require;
      fs = req('fs');
      if (callback != null) {
        return fs.readFile(path, function(err, data) {
          if (err) {
            return callback(null);
          } else {
            return callback(String(data));
          }
        });
      } else {
        data = fs.readFileSync(path);
        if (data != null) {
          return String(data);
        }
        return null;
      }
    }
  };

  return Utils;

})();

module.exports = Utils;

},{"./Pattern":"../node_modules/yamljs/lib/Pattern.js"}],"../node_modules/yamljs/lib/Unescaper.js":[function(require,module,exports) {
// Generated by CoffeeScript 1.12.4
var Pattern, Unescaper, Utils;

Utils = require('./Utils');

Pattern = require('./Pattern');

Unescaper = (function() {
  function Unescaper() {}

  Unescaper.PATTERN_ESCAPED_CHARACTER = new Pattern('\\\\([0abt\tnvfre "\\/\\\\N_LP]|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})');

  Unescaper.unescapeSingleQuotedString = function(value) {
    return value.replace(/\'\'/g, '\'');
  };

  Unescaper.unescapeDoubleQuotedString = function(value) {
    if (this._unescapeCallback == null) {
      this._unescapeCallback = (function(_this) {
        return function(str) {
          return _this.unescapeCharacter(str);
        };
      })(this);
    }
    return this.PATTERN_ESCAPED_CHARACTER.replace(value, this._unescapeCallback);
  };

  Unescaper.unescapeCharacter = function(value) {
    var ch;
    ch = String.fromCharCode;
    switch (value.charAt(1)) {
      case '0':
        return ch(0);
      case 'a':
        return ch(7);
      case 'b':
        return ch(8);
      case 't':
        return "\t";
      case "\t":
        return "\t";
      case 'n':
        return "\n";
      case 'v':
        return ch(11);
      case 'f':
        return ch(12);
      case 'r':
        return ch(13);
      case 'e':
        return ch(27);
      case ' ':
        return ' ';
      case '"':
        return '"';
      case '/':
        return '/';
      case '\\':
        return '\\';
      case 'N':
        return ch(0x0085);
      case '_':
        return ch(0x00A0);
      case 'L':
        return ch(0x2028);
      case 'P':
        return ch(0x2029);
      case 'x':
        return Utils.utf8chr(Utils.hexDec(value.substr(2, 2)));
      case 'u':
        return Utils.utf8chr(Utils.hexDec(value.substr(2, 4)));
      case 'U':
        return Utils.utf8chr(Utils.hexDec(value.substr(2, 8)));
      default:
        return '';
    }
  };

  return Unescaper;

})();

module.exports = Unescaper;

},{"./Utils":"../node_modules/yamljs/lib/Utils.js","./Pattern":"../node_modules/yamljs/lib/Pattern.js"}],"../node_modules/yamljs/lib/Escaper.js":[function(require,module,exports) {
// Generated by CoffeeScript 1.12.4
var Escaper, Pattern;

Pattern = require('./Pattern');

Escaper = (function() {
  var ch;

  function Escaper() {}

  Escaper.LIST_ESCAPEES = ['\\', '\\\\', '\\"', '"', "\x00", "\x01", "\x02", "\x03", "\x04", "\x05", "\x06", "\x07", "\x08", "\x09", "\x0a", "\x0b", "\x0c", "\x0d", "\x0e", "\x0f", "\x10", "\x11", "\x12", "\x13", "\x14", "\x15", "\x16", "\x17", "\x18", "\x19", "\x1a", "\x1b", "\x1c", "\x1d", "\x1e", "\x1f", (ch = String.fromCharCode)(0x0085), ch(0x00A0), ch(0x2028), ch(0x2029)];

  Escaper.LIST_ESCAPED = ['\\\\', '\\"', '\\"', '\\"', "\\0", "\\x01", "\\x02", "\\x03", "\\x04", "\\x05", "\\x06", "\\a", "\\b", "\\t", "\\n", "\\v", "\\f", "\\r", "\\x0e", "\\x0f", "\\x10", "\\x11", "\\x12", "\\x13", "\\x14", "\\x15", "\\x16", "\\x17", "\\x18", "\\x19", "\\x1a", "\\e", "\\x1c", "\\x1d", "\\x1e", "\\x1f", "\\N", "\\_", "\\L", "\\P"];

  Escaper.MAPPING_ESCAPEES_TO_ESCAPED = (function() {
    var i, j, mapping, ref;
    mapping = {};
    for (i = j = 0, ref = Escaper.LIST_ESCAPEES.length; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
      mapping[Escaper.LIST_ESCAPEES[i]] = Escaper.LIST_ESCAPED[i];
    }
    return mapping;
  })();

  Escaper.PATTERN_CHARACTERS_TO_ESCAPE = new Pattern('[\\x00-\\x1f]|\xc2\x85|\xc2\xa0|\xe2\x80\xa8|\xe2\x80\xa9');

  Escaper.PATTERN_MAPPING_ESCAPEES = new Pattern(Escaper.LIST_ESCAPEES.join('|').split('\\').join('\\\\'));

  Escaper.PATTERN_SINGLE_QUOTING = new Pattern('[\\s\'":{}[\\],&*#?]|^[-?|<>=!%@`]');

  Escaper.requiresDoubleQuoting = function(value) {
    return this.PATTERN_CHARACTERS_TO_ESCAPE.test(value);
  };

  Escaper.escapeWithDoubleQuotes = function(value) {
    var result;
    result = this.PATTERN_MAPPING_ESCAPEES.replace(value, (function(_this) {
      return function(str) {
        return _this.MAPPING_ESCAPEES_TO_ESCAPED[str];
      };
    })(this));
    return '"' + result + '"';
  };

  Escaper.requiresSingleQuoting = function(value) {
    return this.PATTERN_SINGLE_QUOTING.test(value);
  };

  Escaper.escapeWithSingleQuotes = function(value) {
    return "'" + value.replace(/'/g, "''") + "'";
  };

  return Escaper;

})();

module.exports = Escaper;

},{"./Pattern":"../node_modules/yamljs/lib/Pattern.js"}],"../node_modules/yamljs/lib/Exception/ParseException.js":[function(require,module,exports) {
// Generated by CoffeeScript 1.12.4
var ParseException,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

ParseException = (function(superClass) {
  extend(ParseException, superClass);

  function ParseException(message, parsedLine, snippet) {
    this.message = message;
    this.parsedLine = parsedLine;
    this.snippet = snippet;
  }

  ParseException.prototype.toString = function() {
    if ((this.parsedLine != null) && (this.snippet != null)) {
      return '<ParseException> ' + this.message + ' (line ' + this.parsedLine + ': \'' + this.snippet + '\')';
    } else {
      return '<ParseException> ' + this.message;
    }
  };

  return ParseException;

})(Error);

module.exports = ParseException;

},{}],"../node_modules/yamljs/lib/Exception/ParseMore.js":[function(require,module,exports) {
// Generated by CoffeeScript 1.12.4
var ParseMore,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

ParseMore = (function(superClass) {
  extend(ParseMore, superClass);

  function ParseMore(message, parsedLine, snippet) {
    this.message = message;
    this.parsedLine = parsedLine;
    this.snippet = snippet;
  }

  ParseMore.prototype.toString = function() {
    if ((this.parsedLine != null) && (this.snippet != null)) {
      return '<ParseMore> ' + this.message + ' (line ' + this.parsedLine + ': \'' + this.snippet + '\')';
    } else {
      return '<ParseMore> ' + this.message;
    }
  };

  return ParseMore;

})(Error);

module.exports = ParseMore;

},{}],"../node_modules/yamljs/lib/Exception/DumpException.js":[function(require,module,exports) {
// Generated by CoffeeScript 1.12.4
var DumpException,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

DumpException = (function(superClass) {
  extend(DumpException, superClass);

  function DumpException(message, parsedLine, snippet) {
    this.message = message;
    this.parsedLine = parsedLine;
    this.snippet = snippet;
  }

  DumpException.prototype.toString = function() {
    if ((this.parsedLine != null) && (this.snippet != null)) {
      return '<DumpException> ' + this.message + ' (line ' + this.parsedLine + ': \'' + this.snippet + '\')';
    } else {
      return '<DumpException> ' + this.message;
    }
  };

  return DumpException;

})(Error);

module.exports = DumpException;

},{}],"../node_modules/yamljs/lib/Inline.js":[function(require,module,exports) {
// Generated by CoffeeScript 1.12.4
var DumpException, Escaper, Inline, ParseException, ParseMore, Pattern, Unescaper, Utils,
  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

Pattern = require('./Pattern');

Unescaper = require('./Unescaper');

Escaper = require('./Escaper');

Utils = require('./Utils');

ParseException = require('./Exception/ParseException');

ParseMore = require('./Exception/ParseMore');

DumpException = require('./Exception/DumpException');

Inline = (function() {
  function Inline() {}

  Inline.REGEX_QUOTED_STRING = '(?:"(?:[^"\\\\]*(?:\\\\.[^"\\\\]*)*)"|\'(?:[^\']*(?:\'\'[^\']*)*)\')';

  Inline.PATTERN_TRAILING_COMMENTS = new Pattern('^\\s*#.*$');

  Inline.PATTERN_QUOTED_SCALAR = new Pattern('^' + Inline.REGEX_QUOTED_STRING);

  Inline.PATTERN_THOUSAND_NUMERIC_SCALAR = new Pattern('^(-|\\+)?[0-9,]+(\\.[0-9]+)?$');

  Inline.PATTERN_SCALAR_BY_DELIMITERS = {};

  Inline.settings = {};

  Inline.configure = function(exceptionOnInvalidType, objectDecoder) {
    if (exceptionOnInvalidType == null) {
      exceptionOnInvalidType = null;
    }
    if (objectDecoder == null) {
      objectDecoder = null;
    }
    this.settings.exceptionOnInvalidType = exceptionOnInvalidType;
    this.settings.objectDecoder = objectDecoder;
  };

  Inline.parse = function(value, exceptionOnInvalidType, objectDecoder) {
    var context, result;
    if (exceptionOnInvalidType == null) {
      exceptionOnInvalidType = false;
    }
    if (objectDecoder == null) {
      objectDecoder = null;
    }
    this.settings.exceptionOnInvalidType = exceptionOnInvalidType;
    this.settings.objectDecoder = objectDecoder;
    if (value == null) {
      return '';
    }
    value = Utils.trim(value);
    if (0 === value.length) {
      return '';
    }
    context = {
      exceptionOnInvalidType: exceptionOnInvalidType,
      objectDecoder: objectDecoder,
      i: 0
    };
    switch (value.charAt(0)) {
      case '[':
        result = this.parseSequence(value, context);
        ++context.i;
        break;
      case '{':
        result = this.parseMapping(value, context);
        ++context.i;
        break;
      default:
        result = this.parseScalar(value, null, ['"', "'"], context);
    }
    if (this.PATTERN_TRAILING_COMMENTS.replace(value.slice(context.i), '') !== '') {
      throw new ParseException('Unexpected characters near "' + value.slice(context.i) + '".');
    }
    return result;
  };

  Inline.dump = function(value, exceptionOnInvalidType, objectEncoder) {
    var ref, result, type;
    if (exceptionOnInvalidType == null) {
      exceptionOnInvalidType = false;
    }
    if (objectEncoder == null) {
      objectEncoder = null;
    }
    if (value == null) {
      return 'null';
    }
    type = typeof value;
    if (type === 'object') {
      if (value instanceof Date) {
        return value.toISOString();
      } else if (objectEncoder != null) {
        result = objectEncoder(value);
        if (typeof result === 'string' || (result != null)) {
          return result;
        }
      }
      return this.dumpObject(value);
    }
    if (type === 'boolean') {
      return (value ? 'true' : 'false');
    }
    if (Utils.isDigits(value)) {
      return (type === 'string' ? "'" + value + "'" : String(parseInt(value)));
    }
    if (Utils.isNumeric(value)) {
      return (type === 'string' ? "'" + value + "'" : String(parseFloat(value)));
    }
    if (type === 'number') {
      return (value === 2e308 ? '.Inf' : (value === -2e308 ? '-.Inf' : (isNaN(value) ? '.NaN' : value)));
    }
    if (Escaper.requiresDoubleQuoting(value)) {
      return Escaper.escapeWithDoubleQuotes(value);
    }
    if (Escaper.requiresSingleQuoting(value)) {
      return Escaper.escapeWithSingleQuotes(value);
    }
    if ('' === value) {
      return '""';
    }
    if (Utils.PATTERN_DATE.test(value)) {
      return "'" + value + "'";
    }
    if ((ref = value.toLowerCase()) === 'null' || ref === '~' || ref === 'true' || ref === 'false') {
      return "'" + value + "'";
    }
    return value;
  };

  Inline.dumpObject = function(value, exceptionOnInvalidType, objectSupport) {
    var j, key, len1, output, val;
    if (objectSupport == null) {
      objectSupport = null;
    }
    if (value instanceof Array) {
      output = [];
      for (j = 0, len1 = value.length; j < len1; j++) {
        val = value[j];
        output.push(this.dump(val));
      }
      return '[' + output.join(', ') + ']';
    } else {
      output = [];
      for (key in value) {
        val = value[key];
        output.push(this.dump(key) + ': ' + this.dump(val));
      }
      return '{' + output.join(', ') + '}';
    }
  };

  Inline.parseScalar = function(scalar, delimiters, stringDelimiters, context, evaluate) {
    var i, joinedDelimiters, match, output, pattern, ref, ref1, strpos, tmp;
    if (delimiters == null) {
      delimiters = null;
    }
    if (stringDelimiters == null) {
      stringDelimiters = ['"', "'"];
    }
    if (context == null) {
      context = null;
    }
    if (evaluate == null) {
      evaluate = true;
    }
    if (context == null) {
      context = {
        exceptionOnInvalidType: this.settings.exceptionOnInvalidType,
        objectDecoder: this.settings.objectDecoder,
        i: 0
      };
    }
    i = context.i;
    if (ref = scalar.charAt(i), indexOf.call(stringDelimiters, ref) >= 0) {
      output = this.parseQuotedScalar(scalar, context);
      i = context.i;
      if (delimiters != null) {
        tmp = Utils.ltrim(scalar.slice(i), ' ');
        if (!(ref1 = tmp.charAt(0), indexOf.call(delimiters, ref1) >= 0)) {
          throw new ParseException('Unexpected characters (' + scalar.slice(i) + ').');
        }
      }
    } else {
      if (!delimiters) {
        output = scalar.slice(i);
        i += output.length;
        strpos = output.indexOf(' #');
        if (strpos !== -1) {
          output = Utils.rtrim(output.slice(0, strpos));
        }
      } else {
        joinedDelimiters = delimiters.join('|');
        pattern = this.PATTERN_SCALAR_BY_DELIMITERS[joinedDelimiters];
        if (pattern == null) {
          pattern = new Pattern('^(.+?)(' + joinedDelimiters + ')');
          this.PATTERN_SCALAR_BY_DELIMITERS[joinedDelimiters] = pattern;
        }
        if (match = pattern.exec(scalar.slice(i))) {
          output = match[1];
          i += output.length;
        } else {
          throw new ParseException('Malformed inline YAML string (' + scalar + ').');
        }
      }
      if (evaluate) {
        output = this.evaluateScalar(output, context);
      }
    }
    context.i = i;
    return output;
  };

  Inline.parseQuotedScalar = function(scalar, context) {
    var i, match, output;
    i = context.i;
    if (!(match = this.PATTERN_QUOTED_SCALAR.exec(scalar.slice(i)))) {
      throw new ParseMore('Malformed inline YAML string (' + scalar.slice(i) + ').');
    }
    output = match[0].substr(1, match[0].length - 2);
    if ('"' === scalar.charAt(i)) {
      output = Unescaper.unescapeDoubleQuotedString(output);
    } else {
      output = Unescaper.unescapeSingleQuotedString(output);
    }
    i += match[0].length;
    context.i = i;
    return output;
  };

  Inline.parseSequence = function(sequence, context) {
    var e, i, isQuoted, len, output, ref, value;
    output = [];
    len = sequence.length;
    i = context.i;
    i += 1;
    while (i < len) {
      context.i = i;
      switch (sequence.charAt(i)) {
        case '[':
          output.push(this.parseSequence(sequence, context));
          i = context.i;
          break;
        case '{':
          output.push(this.parseMapping(sequence, context));
          i = context.i;
          break;
        case ']':
          return output;
        case ',':
        case ' ':
        case "\n":
          break;
        default:
          isQuoted = ((ref = sequence.charAt(i)) === '"' || ref === "'");
          value = this.parseScalar(sequence, [',', ']'], ['"', "'"], context);
          i = context.i;
          if (!isQuoted && typeof value === 'string' && (value.indexOf(': ') !== -1 || value.indexOf(":\n") !== -1)) {
            try {
              value = this.parseMapping('{' + value + '}');
            } catch (error) {
              e = error;
            }
          }
          output.push(value);
          --i;
      }
      ++i;
    }
    throw new ParseMore('Malformed inline YAML string ' + sequence);
  };

  Inline.parseMapping = function(mapping, context) {
    var done, i, key, len, output, shouldContinueWhileLoop, value;
    output = {};
    len = mapping.length;
    i = context.i;
    i += 1;
    shouldContinueWhileLoop = false;
    while (i < len) {
      context.i = i;
      switch (mapping.charAt(i)) {
        case ' ':
        case ',':
        case "\n":
          ++i;
          context.i = i;
          shouldContinueWhileLoop = true;
          break;
        case '}':
          return output;
      }
      if (shouldContinueWhileLoop) {
        shouldContinueWhileLoop = false;
        continue;
      }
      key = this.parseScalar(mapping, [':', ' ', "\n"], ['"', "'"], context, false);
      i = context.i;
      done = false;
      while (i < len) {
        context.i = i;
        switch (mapping.charAt(i)) {
          case '[':
            value = this.parseSequence(mapping, context);
            i = context.i;
            if (output[key] === void 0) {
              output[key] = value;
            }
            done = true;
            break;
          case '{':
            value = this.parseMapping(mapping, context);
            i = context.i;
            if (output[key] === void 0) {
              output[key] = value;
            }
            done = true;
            break;
          case ':':
          case ' ':
          case "\n":
            break;
          default:
            value = this.parseScalar(mapping, [',', '}'], ['"', "'"], context);
            i = context.i;
            if (output[key] === void 0) {
              output[key] = value;
            }
            done = true;
            --i;
        }
        ++i;
        if (done) {
          break;
        }
      }
    }
    throw new ParseMore('Malformed inline YAML string ' + mapping);
  };

  Inline.evaluateScalar = function(scalar, context) {
    var cast, date, exceptionOnInvalidType, firstChar, firstSpace, firstWord, objectDecoder, raw, scalarLower, subValue, trimmedScalar;
    scalar = Utils.trim(scalar);
    scalarLower = scalar.toLowerCase();
    switch (scalarLower) {
      case 'null':
      case '':
      case '~':
        return null;
      case 'true':
        return true;
      case 'false':
        return false;
      case '.inf':
        return 2e308;
      case '.nan':
        return 0/0;
      case '-.inf':
        return 2e308;
      default:
        firstChar = scalarLower.charAt(0);
        switch (firstChar) {
          case '!':
            firstSpace = scalar.indexOf(' ');
            if (firstSpace === -1) {
              firstWord = scalarLower;
            } else {
              firstWord = scalarLower.slice(0, firstSpace);
            }
            switch (firstWord) {
              case '!':
                if (firstSpace !== -1) {
                  return parseInt(this.parseScalar(scalar.slice(2)));
                }
                return null;
              case '!str':
                return Utils.ltrim(scalar.slice(4));
              case '!!str':
                return Utils.ltrim(scalar.slice(5));
              case '!!int':
                return parseInt(this.parseScalar(scalar.slice(5)));
              case '!!bool':
                return Utils.parseBoolean(this.parseScalar(scalar.slice(6)), false);
              case '!!float':
                return parseFloat(this.parseScalar(scalar.slice(7)));
              case '!!timestamp':
                return Utils.stringToDate(Utils.ltrim(scalar.slice(11)));
              default:
                if (context == null) {
                  context = {
                    exceptionOnInvalidType: this.settings.exceptionOnInvalidType,
                    objectDecoder: this.settings.objectDecoder,
                    i: 0
                  };
                }
                objectDecoder = context.objectDecoder, exceptionOnInvalidType = context.exceptionOnInvalidType;
                if (objectDecoder) {
                  trimmedScalar = Utils.rtrim(scalar);
                  firstSpace = trimmedScalar.indexOf(' ');
                  if (firstSpace === -1) {
                    return objectDecoder(trimmedScalar, null);
                  } else {
                    subValue = Utils.ltrim(trimmedScalar.slice(firstSpace + 1));
                    if (!(subValue.length > 0)) {
                      subValue = null;
                    }
                    return objectDecoder(trimmedScalar.slice(0, firstSpace), subValue);
                  }
                }
                if (exceptionOnInvalidType) {
                  throw new ParseException('Custom object support when parsing a YAML file has been disabled.');
                }
                return null;
            }
            break;
          case '0':
            if ('0x' === scalar.slice(0, 2)) {
              return Utils.hexDec(scalar);
            } else if (Utils.isDigits(scalar)) {
              return Utils.octDec(scalar);
            } else if (Utils.isNumeric(scalar)) {
              return parseFloat(scalar);
            } else {
              return scalar;
            }
            break;
          case '+':
            if (Utils.isDigits(scalar)) {
              raw = scalar;
              cast = parseInt(raw);
              if (raw === String(cast)) {
                return cast;
              } else {
                return raw;
              }
            } else if (Utils.isNumeric(scalar)) {
              return parseFloat(scalar);
            } else if (this.PATTERN_THOUSAND_NUMERIC_SCALAR.test(scalar)) {
              return parseFloat(scalar.replace(',', ''));
            }
            return scalar;
          case '-':
            if (Utils.isDigits(scalar.slice(1))) {
              if ('0' === scalar.charAt(1)) {
                return -Utils.octDec(scalar.slice(1));
              } else {
                raw = scalar.slice(1);
                cast = parseInt(raw);
                if (raw === String(cast)) {
                  return -cast;
                } else {
                  return -raw;
                }
              }
            } else if (Utils.isNumeric(scalar)) {
              return parseFloat(scalar);
            } else if (this.PATTERN_THOUSAND_NUMERIC_SCALAR.test(scalar)) {
              return parseFloat(scalar.replace(',', ''));
            }
            return scalar;
          default:
            if (date = Utils.stringToDate(scalar)) {
              return date;
            } else if (Utils.isNumeric(scalar)) {
              return parseFloat(scalar);
            } else if (this.PATTERN_THOUSAND_NUMERIC_SCALAR.test(scalar)) {
              return parseFloat(scalar.replace(',', ''));
            }
            return scalar;
        }
    }
  };

  return Inline;

})();

module.exports = Inline;

},{"./Pattern":"../node_modules/yamljs/lib/Pattern.js","./Unescaper":"../node_modules/yamljs/lib/Unescaper.js","./Escaper":"../node_modules/yamljs/lib/Escaper.js","./Utils":"../node_modules/yamljs/lib/Utils.js","./Exception/ParseException":"../node_modules/yamljs/lib/Exception/ParseException.js","./Exception/ParseMore":"../node_modules/yamljs/lib/Exception/ParseMore.js","./Exception/DumpException":"../node_modules/yamljs/lib/Exception/DumpException.js"}],"../node_modules/yamljs/lib/Parser.js":[function(require,module,exports) {
// Generated by CoffeeScript 1.12.4
var Inline, ParseException, ParseMore, Parser, Pattern, Utils;

Inline = require('./Inline');

Pattern = require('./Pattern');

Utils = require('./Utils');

ParseException = require('./Exception/ParseException');

ParseMore = require('./Exception/ParseMore');

Parser = (function() {
  Parser.prototype.PATTERN_FOLDED_SCALAR_ALL = new Pattern('^(?:(?<type>![^\\|>]*)\\s+)?(?<separator>\\||>)(?<modifiers>\\+|\\-|\\d+|\\+\\d+|\\-\\d+|\\d+\\+|\\d+\\-)?(?<comments> +#.*)?$');

  Parser.prototype.PATTERN_FOLDED_SCALAR_END = new Pattern('(?<separator>\\||>)(?<modifiers>\\+|\\-|\\d+|\\+\\d+|\\-\\d+|\\d+\\+|\\d+\\-)?(?<comments> +#.*)?$');

  Parser.prototype.PATTERN_SEQUENCE_ITEM = new Pattern('^\\-((?<leadspaces>\\s+)(?<value>.+?))?\\s*$');

  Parser.prototype.PATTERN_ANCHOR_VALUE = new Pattern('^&(?<ref>[^ ]+) *(?<value>.*)');

  Parser.prototype.PATTERN_COMPACT_NOTATION = new Pattern('^(?<key>' + Inline.REGEX_QUOTED_STRING + '|[^ \'"\\{\\[].*?) *\\:(\\s+(?<value>.+?))?\\s*$');

  Parser.prototype.PATTERN_MAPPING_ITEM = new Pattern('^(?<key>' + Inline.REGEX_QUOTED_STRING + '|[^ \'"\\[\\{].*?) *\\:(\\s+(?<value>.+?))?\\s*$');

  Parser.prototype.PATTERN_DECIMAL = new Pattern('\\d+');

  Parser.prototype.PATTERN_INDENT_SPACES = new Pattern('^ +');

  Parser.prototype.PATTERN_TRAILING_LINES = new Pattern('(\n*)$');

  Parser.prototype.PATTERN_YAML_HEADER = new Pattern('^\\%YAML[: ][\\d\\.]+.*\n', 'm');

  Parser.prototype.PATTERN_LEADING_COMMENTS = new Pattern('^(\\#.*?\n)+', 'm');

  Parser.prototype.PATTERN_DOCUMENT_MARKER_START = new Pattern('^\\-\\-\\-.*?\n', 'm');

  Parser.prototype.PATTERN_DOCUMENT_MARKER_END = new Pattern('^\\.\\.\\.\\s*$', 'm');

  Parser.prototype.PATTERN_FOLDED_SCALAR_BY_INDENTATION = {};

  Parser.prototype.CONTEXT_NONE = 0;

  Parser.prototype.CONTEXT_SEQUENCE = 1;

  Parser.prototype.CONTEXT_MAPPING = 2;

  function Parser(offset) {
    this.offset = offset != null ? offset : 0;
    this.lines = [];
    this.currentLineNb = -1;
    this.currentLine = '';
    this.refs = {};
  }

  Parser.prototype.parse = function(value, exceptionOnInvalidType, objectDecoder) {
    var alias, allowOverwrite, block, c, context, data, e, first, i, indent, isRef, j, k, key, l, lastKey, len, len1, len2, len3, lineCount, m, matches, mergeNode, n, name, parsed, parsedItem, parser, ref, ref1, ref2, refName, refValue, val, values;
    if (exceptionOnInvalidType == null) {
      exceptionOnInvalidType = false;
    }
    if (objectDecoder == null) {
      objectDecoder = null;
    }
    this.currentLineNb = -1;
    this.currentLine = '';
    this.lines = this.cleanup(value).split("\n");
    data = null;
    context = this.CONTEXT_NONE;
    allowOverwrite = false;
    while (this.moveToNextLine()) {
      if (this.isCurrentLineEmpty()) {
        continue;
      }
      if ("\t" === this.currentLine[0]) {
        throw new ParseException('A YAML file cannot contain tabs as indentation.', this.getRealCurrentLineNb() + 1, this.currentLine);
      }
      isRef = mergeNode = false;
      if (values = this.PATTERN_SEQUENCE_ITEM.exec(this.currentLine)) {
        if (this.CONTEXT_MAPPING === context) {
          throw new ParseException('You cannot define a sequence item when in a mapping');
        }
        context = this.CONTEXT_SEQUENCE;
        if (data == null) {
          data = [];
        }
        if ((values.value != null) && (matches = this.PATTERN_ANCHOR_VALUE.exec(values.value))) {
          isRef = matches.ref;
          values.value = matches.value;
        }
        if (!(values.value != null) || '' === Utils.trim(values.value, ' ') || Utils.ltrim(values.value, ' ').indexOf('#') === 0) {
          if (this.currentLineNb < this.lines.length - 1 && !this.isNextLineUnIndentedCollection()) {
            c = this.getRealCurrentLineNb() + 1;
            parser = new Parser(c);
            parser.refs = this.refs;
            data.push(parser.parse(this.getNextEmbedBlock(null, true), exceptionOnInvalidType, objectDecoder));
          } else {
            data.push(null);
          }
        } else {
          if (((ref = values.leadspaces) != null ? ref.length : void 0) && (matches = this.PATTERN_COMPACT_NOTATION.exec(values.value))) {
            c = this.getRealCurrentLineNb();
            parser = new Parser(c);
            parser.refs = this.refs;
            block = values.value;
            indent = this.getCurrentLineIndentation();
            if (this.isNextLineIndented(false)) {
              block += "\n" + this.getNextEmbedBlock(indent + values.leadspaces.length + 1, true);
            }
            data.push(parser.parse(block, exceptionOnInvalidType, objectDecoder));
          } else {
            data.push(this.parseValue(values.value, exceptionOnInvalidType, objectDecoder));
          }
        }
      } else if ((values = this.PATTERN_MAPPING_ITEM.exec(this.currentLine)) && values.key.indexOf(' #') === -1) {
        if (this.CONTEXT_SEQUENCE === context) {
          throw new ParseException('You cannot define a mapping item when in a sequence');
        }
        context = this.CONTEXT_MAPPING;
        if (data == null) {
          data = {};
        }
        Inline.configure(exceptionOnInvalidType, objectDecoder);
        try {
          key = Inline.parseScalar(values.key);
        } catch (error) {
          e = error;
          e.parsedLine = this.getRealCurrentLineNb() + 1;
          e.snippet = this.currentLine;
          throw e;
        }
        if ('<<' === key) {
          mergeNode = true;
          allowOverwrite = true;
          if (((ref1 = values.value) != null ? ref1.indexOf('*') : void 0) === 0) {
            refName = values.value.slice(1);
            if (this.refs[refName] == null) {
              throw new ParseException('Reference "' + refName + '" does not exist.', this.getRealCurrentLineNb() + 1, this.currentLine);
            }
            refValue = this.refs[refName];
            if (typeof refValue !== 'object') {
              throw new ParseException('YAML merge keys used with a scalar value instead of an object.', this.getRealCurrentLineNb() + 1, this.currentLine);
            }
            if (refValue instanceof Array) {
              for (i = j = 0, len = refValue.length; j < len; i = ++j) {
                value = refValue[i];
                if (data[name = String(i)] == null) {
                  data[name] = value;
                }
              }
            } else {
              for (key in refValue) {
                value = refValue[key];
                if (data[key] == null) {
                  data[key] = value;
                }
              }
            }
          } else {
            if ((values.value != null) && values.value !== '') {
              value = values.value;
            } else {
              value = this.getNextEmbedBlock();
            }
            c = this.getRealCurrentLineNb() + 1;
            parser = new Parser(c);
            parser.refs = this.refs;
            parsed = parser.parse(value, exceptionOnInvalidType);
            if (typeof parsed !== 'object') {
              throw new ParseException('YAML merge keys used with a scalar value instead of an object.', this.getRealCurrentLineNb() + 1, this.currentLine);
            }
            if (parsed instanceof Array) {
              for (l = 0, len1 = parsed.length; l < len1; l++) {
                parsedItem = parsed[l];
                if (typeof parsedItem !== 'object') {
                  throw new ParseException('Merge items must be objects.', this.getRealCurrentLineNb() + 1, parsedItem);
                }
                if (parsedItem instanceof Array) {
                  for (i = m = 0, len2 = parsedItem.length; m < len2; i = ++m) {
                    value = parsedItem[i];
                    k = String(i);
                    if (!data.hasOwnProperty(k)) {
                      data[k] = value;
                    }
                  }
                } else {
                  for (key in parsedItem) {
                    value = parsedItem[key];
                    if (!data.hasOwnProperty(key)) {
                      data[key] = value;
                    }
                  }
                }
              }
            } else {
              for (key in parsed) {
                value = parsed[key];
                if (!data.hasOwnProperty(key)) {
                  data[key] = value;
                }
              }
            }
          }
        } else if ((values.value != null) && (matches = this.PATTERN_ANCHOR_VALUE.exec(values.value))) {
          isRef = matches.ref;
          values.value = matches.value;
        }
        if (mergeNode) {

        } else if (!(values.value != null) || '' === Utils.trim(values.value, ' ') || Utils.ltrim(values.value, ' ').indexOf('#') === 0) {
          if (!(this.isNextLineIndented()) && !(this.isNextLineUnIndentedCollection())) {
            if (allowOverwrite || data[key] === void 0) {
              data[key] = null;
            }
          } else {
            c = this.getRealCurrentLineNb() + 1;
            parser = new Parser(c);
            parser.refs = this.refs;
            val = parser.parse(this.getNextEmbedBlock(), exceptionOnInvalidType, objectDecoder);
            if (allowOverwrite || data[key] === void 0) {
              data[key] = val;
            }
          }
        } else {
          val = this.parseValue(values.value, exceptionOnInvalidType, objectDecoder);
          if (allowOverwrite || data[key] === void 0) {
            data[key] = val;
          }
        }
      } else {
        lineCount = this.lines.length;
        if (1 === lineCount || (2 === lineCount && Utils.isEmpty(this.lines[1]))) {
          try {
            value = Inline.parse(this.lines[0], exceptionOnInvalidType, objectDecoder);
          } catch (error) {
            e = error;
            e.parsedLine = this.getRealCurrentLineNb() + 1;
            e.snippet = this.currentLine;
            throw e;
          }
          if (typeof value === 'object') {
            if (value instanceof Array) {
              first = value[0];
            } else {
              for (key in value) {
                first = value[key];
                break;
              }
            }
            if (typeof first === 'string' && first.indexOf('*') === 0) {
              data = [];
              for (n = 0, len3 = value.length; n < len3; n++) {
                alias = value[n];
                data.push(this.refs[alias.slice(1)]);
              }
              value = data;
            }
          }
          return value;
        } else if ((ref2 = Utils.ltrim(value).charAt(0)) === '[' || ref2 === '{') {
          try {
            return Inline.parse(value, exceptionOnInvalidType, objectDecoder);
          } catch (error) {
            e = error;
            e.parsedLine = this.getRealCurrentLineNb() + 1;
            e.snippet = this.currentLine;
            throw e;
          }
        }
        throw new ParseException('Unable to parse.', this.getRealCurrentLineNb() + 1, this.currentLine);
      }
      if (isRef) {
        if (data instanceof Array) {
          this.refs[isRef] = data[data.length - 1];
        } else {
          lastKey = null;
          for (key in data) {
            lastKey = key;
          }
          this.refs[isRef] = data[lastKey];
        }
      }
    }
    if (Utils.isEmpty(data)) {
      return null;
    } else {
      return data;
    }
  };

  Parser.prototype.getRealCurrentLineNb = function() {
    return this.currentLineNb + this.offset;
  };

  Parser.prototype.getCurrentLineIndentation = function() {
    return this.currentLine.length - Utils.ltrim(this.currentLine, ' ').length;
  };

  Parser.prototype.getNextEmbedBlock = function(indentation, includeUnindentedCollection) {
    var data, indent, isItUnindentedCollection, newIndent, removeComments, removeCommentsPattern, unindentedEmbedBlock;
    if (indentation == null) {
      indentation = null;
    }
    if (includeUnindentedCollection == null) {
      includeUnindentedCollection = false;
    }
    this.moveToNextLine();
    if (indentation == null) {
      newIndent = this.getCurrentLineIndentation();
      unindentedEmbedBlock = this.isStringUnIndentedCollectionItem(this.currentLine);
      if (!(this.isCurrentLineEmpty()) && 0 === newIndent && !unindentedEmbedBlock) {
        throw new ParseException('Indentation problem.', this.getRealCurrentLineNb() + 1, this.currentLine);
      }
    } else {
      newIndent = indentation;
    }
    data = [this.currentLine.slice(newIndent)];
    if (!includeUnindentedCollection) {
      isItUnindentedCollection = this.isStringUnIndentedCollectionItem(this.currentLine);
    }
    removeCommentsPattern = this.PATTERN_FOLDED_SCALAR_END;
    removeComments = !removeCommentsPattern.test(this.currentLine);
    while (this.moveToNextLine()) {
      indent = this.getCurrentLineIndentation();
      if (indent === newIndent) {
        removeComments = !removeCommentsPattern.test(this.currentLine);
      }
      if (removeComments && this.isCurrentLineComment()) {
        continue;
      }
      if (this.isCurrentLineBlank()) {
        data.push(this.currentLine.slice(newIndent));
        continue;
      }
      if (isItUnindentedCollection && !this.isStringUnIndentedCollectionItem(this.currentLine) && indent === newIndent) {
        this.moveToPreviousLine();
        break;
      }
      if (indent >= newIndent) {
        data.push(this.currentLine.slice(newIndent));
      } else if (Utils.ltrim(this.currentLine).charAt(0) === '#') {

      } else if (0 === indent) {
        this.moveToPreviousLine();
        break;
      } else {
        throw new ParseException('Indentation problem.', this.getRealCurrentLineNb() + 1, this.currentLine);
      }
    }
    return data.join("\n");
  };

  Parser.prototype.moveToNextLine = function() {
    if (this.currentLineNb >= this.lines.length - 1) {
      return false;
    }
    this.currentLine = this.lines[++this.currentLineNb];
    return true;
  };

  Parser.prototype.moveToPreviousLine = function() {
    this.currentLine = this.lines[--this.currentLineNb];
  };

  Parser.prototype.parseValue = function(value, exceptionOnInvalidType, objectDecoder) {
    var e, foldedIndent, matches, modifiers, pos, ref, ref1, val;
    if (0 === value.indexOf('*')) {
      pos = value.indexOf('#');
      if (pos !== -1) {
        value = value.substr(1, pos - 2);
      } else {
        value = value.slice(1);
      }
      if (this.refs[value] === void 0) {
        throw new ParseException('Reference "' + value + '" does not exist.', this.currentLine);
      }
      return this.refs[value];
    }
    if (matches = this.PATTERN_FOLDED_SCALAR_ALL.exec(value)) {
      modifiers = (ref = matches.modifiers) != null ? ref : '';
      foldedIndent = Math.abs(parseInt(modifiers));
      if (isNaN(foldedIndent)) {
        foldedIndent = 0;
      }
      val = this.parseFoldedScalar(matches.separator, this.PATTERN_DECIMAL.replace(modifiers, ''), foldedIndent);
      if (matches.type != null) {
        Inline.configure(exceptionOnInvalidType, objectDecoder);
        return Inline.parseScalar(matches.type + ' ' + val);
      } else {
        return val;
      }
    }
    if ((ref1 = value.charAt(0)) === '[' || ref1 === '{' || ref1 === '"' || ref1 === "'") {
      while (true) {
        try {
          return Inline.parse(value, exceptionOnInvalidType, objectDecoder);
        } catch (error) {
          e = error;
          if (e instanceof ParseMore && this.moveToNextLine()) {
            value += "\n" + Utils.trim(this.currentLine, ' ');
          } else {
            e.parsedLine = this.getRealCurrentLineNb() + 1;
            e.snippet = this.currentLine;
            throw e;
          }
        }
      }
    } else {
      if (this.isNextLineIndented()) {
        value += "\n" + this.getNextEmbedBlock();
      }
      return Inline.parse(value, exceptionOnInvalidType, objectDecoder);
    }
  };

  Parser.prototype.parseFoldedScalar = function(separator, indicator, indentation) {
    var isCurrentLineBlank, j, len, line, matches, newText, notEOF, pattern, ref, text;
    if (indicator == null) {
      indicator = '';
    }
    if (indentation == null) {
      indentation = 0;
    }
    notEOF = this.moveToNextLine();
    if (!notEOF) {
      return '';
    }
    isCurrentLineBlank = this.isCurrentLineBlank();
    text = '';
    while (notEOF && isCurrentLineBlank) {
      if (notEOF = this.moveToNextLine()) {
        text += "\n";
        isCurrentLineBlank = this.isCurrentLineBlank();
      }
    }
    if (0 === indentation) {
      if (matches = this.PATTERN_INDENT_SPACES.exec(this.currentLine)) {
        indentation = matches[0].length;
      }
    }
    if (indentation > 0) {
      pattern = this.PATTERN_FOLDED_SCALAR_BY_INDENTATION[indentation];
      if (pattern == null) {
        pattern = new Pattern('^ {' + indentation + '}(.*)$');
        Parser.prototype.PATTERN_FOLDED_SCALAR_BY_INDENTATION[indentation] = pattern;
      }
      while (notEOF && (isCurrentLineBlank || (matches = pattern.exec(this.currentLine)))) {
        if (isCurrentLineBlank) {
          text += this.currentLine.slice(indentation);
        } else {
          text += matches[1];
        }
        if (notEOF = this.moveToNextLine()) {
          text += "\n";
          isCurrentLineBlank = this.isCurrentLineBlank();
        }
      }
    } else if (notEOF) {
      text += "\n";
    }
    if (notEOF) {
      this.moveToPreviousLine();
    }
    if ('>' === separator) {
      newText = '';
      ref = text.split("\n");
      for (j = 0, len = ref.length; j < len; j++) {
        line = ref[j];
        if (line.length === 0 || line.charAt(0) === ' ') {
          newText = Utils.rtrim(newText, ' ') + line + "\n";
        } else {
          newText += line + ' ';
        }
      }
      text = newText;
    }
    if ('+' !== indicator) {
      text = Utils.rtrim(text);
    }
    if ('' === indicator) {
      text = this.PATTERN_TRAILING_LINES.replace(text, "\n");
    } else if ('-' === indicator) {
      text = this.PATTERN_TRAILING_LINES.replace(text, '');
    }
    return text;
  };

  Parser.prototype.isNextLineIndented = function(ignoreComments) {
    var EOF, currentIndentation, ret;
    if (ignoreComments == null) {
      ignoreComments = true;
    }
    currentIndentation = this.getCurrentLineIndentation();
    EOF = !this.moveToNextLine();
    if (ignoreComments) {
      while (!EOF && this.isCurrentLineEmpty()) {
        EOF = !this.moveToNextLine();
      }
    } else {
      while (!EOF && this.isCurrentLineBlank()) {
        EOF = !this.moveToNextLine();
      }
    }
    if (EOF) {
      return false;
    }
    ret = false;
    if (this.getCurrentLineIndentation() > currentIndentation) {
      ret = true;
    }
    this.moveToPreviousLine();
    return ret;
  };

  Parser.prototype.isCurrentLineEmpty = function() {
    var trimmedLine;
    trimmedLine = Utils.trim(this.currentLine, ' ');
    return trimmedLine.length === 0 || trimmedLine.charAt(0) === '#';
  };

  Parser.prototype.isCurrentLineBlank = function() {
    return '' === Utils.trim(this.currentLine, ' ');
  };

  Parser.prototype.isCurrentLineComment = function() {
    var ltrimmedLine;
    ltrimmedLine = Utils.ltrim(this.currentLine, ' ');
    return ltrimmedLine.charAt(0) === '#';
  };

  Parser.prototype.cleanup = function(value) {
    var count, i, indent, j, l, len, len1, line, lines, ref, ref1, ref2, smallestIndent, trimmedValue;
    if (value.indexOf("\r") !== -1) {
      value = value.split("\r\n").join("\n").split("\r").join("\n");
    }
    count = 0;
    ref = this.PATTERN_YAML_HEADER.replaceAll(value, ''), value = ref[0], count = ref[1];
    this.offset += count;
    ref1 = this.PATTERN_LEADING_COMMENTS.replaceAll(value, '', 1), trimmedValue = ref1[0], count = ref1[1];
    if (count === 1) {
      this.offset += Utils.subStrCount(value, "\n") - Utils.subStrCount(trimmedValue, "\n");
      value = trimmedValue;
    }
    ref2 = this.PATTERN_DOCUMENT_MARKER_START.replaceAll(value, '', 1), trimmedValue = ref2[0], count = ref2[1];
    if (count === 1) {
      this.offset += Utils.subStrCount(value, "\n") - Utils.subStrCount(trimmedValue, "\n");
      value = trimmedValue;
      value = this.PATTERN_DOCUMENT_MARKER_END.replace(value, '');
    }
    lines = value.split("\n");
    smallestIndent = -1;
    for (j = 0, len = lines.length; j < len; j++) {
      line = lines[j];
      if (Utils.trim(line, ' ').length === 0) {
        continue;
      }
      indent = line.length - Utils.ltrim(line).length;
      if (smallestIndent === -1 || indent < smallestIndent) {
        smallestIndent = indent;
      }
    }
    if (smallestIndent > 0) {
      for (i = l = 0, len1 = lines.length; l < len1; i = ++l) {
        line = lines[i];
        lines[i] = line.slice(smallestIndent);
      }
      value = lines.join("\n");
    }
    return value;
  };

  Parser.prototype.isNextLineUnIndentedCollection = function(currentIndentation) {
    var notEOF, ret;
    if (currentIndentation == null) {
      currentIndentation = null;
    }
    if (currentIndentation == null) {
      currentIndentation = this.getCurrentLineIndentation();
    }
    notEOF = this.moveToNextLine();
    while (notEOF && this.isCurrentLineEmpty()) {
      notEOF = this.moveToNextLine();
    }
    if (false === notEOF) {
      return false;
    }
    ret = false;
    if (this.getCurrentLineIndentation() === currentIndentation && this.isStringUnIndentedCollectionItem(this.currentLine)) {
      ret = true;
    }
    this.moveToPreviousLine();
    return ret;
  };

  Parser.prototype.isStringUnIndentedCollectionItem = function() {
    return this.currentLine === '-' || this.currentLine.slice(0, 2) === '- ';
  };

  return Parser;

})();

module.exports = Parser;

},{"./Inline":"../node_modules/yamljs/lib/Inline.js","./Pattern":"../node_modules/yamljs/lib/Pattern.js","./Utils":"../node_modules/yamljs/lib/Utils.js","./Exception/ParseException":"../node_modules/yamljs/lib/Exception/ParseException.js","./Exception/ParseMore":"../node_modules/yamljs/lib/Exception/ParseMore.js"}],"../node_modules/yamljs/lib/Dumper.js":[function(require,module,exports) {
// Generated by CoffeeScript 1.12.4
var Dumper, Inline, Utils;

Utils = require('./Utils');

Inline = require('./Inline');

Dumper = (function() {
  function Dumper() {}

  Dumper.indentation = 4;

  Dumper.prototype.dump = function(input, inline, indent, exceptionOnInvalidType, objectEncoder) {
    var i, key, len, output, prefix, value, willBeInlined;
    if (inline == null) {
      inline = 0;
    }
    if (indent == null) {
      indent = 0;
    }
    if (exceptionOnInvalidType == null) {
      exceptionOnInvalidType = false;
    }
    if (objectEncoder == null) {
      objectEncoder = null;
    }
    output = '';
    prefix = (indent ? Utils.strRepeat(' ', indent) : '');
    if (inline <= 0 || typeof input !== 'object' || input instanceof Date || Utils.isEmpty(input)) {
      output += prefix + Inline.dump(input, exceptionOnInvalidType, objectEncoder);
    } else {
      if (input instanceof Array) {
        for (i = 0, len = input.length; i < len; i++) {
          value = input[i];
          willBeInlined = inline - 1 <= 0 || typeof value !== 'object' || Utils.isEmpty(value);
          output += prefix + '-' + (willBeInlined ? ' ' : "\n") + this.dump(value, inline - 1, (willBeInlined ? 0 : indent + this.indentation), exceptionOnInvalidType, objectEncoder) + (willBeInlined ? "\n" : '');
        }
      } else {
        for (key in input) {
          value = input[key];
          willBeInlined = inline - 1 <= 0 || typeof value !== 'object' || Utils.isEmpty(value);
          output += prefix + Inline.dump(key, exceptionOnInvalidType, objectEncoder) + ':' + (willBeInlined ? ' ' : "\n") + this.dump(value, inline - 1, (willBeInlined ? 0 : indent + this.indentation), exceptionOnInvalidType, objectEncoder) + (willBeInlined ? "\n" : '');
        }
      }
    }
    return output;
  };

  return Dumper;

})();

module.exports = Dumper;

},{"./Utils":"../node_modules/yamljs/lib/Utils.js","./Inline":"../node_modules/yamljs/lib/Inline.js"}],"../node_modules/yamljs/lib/Yaml.js":[function(require,module,exports) {
// Generated by CoffeeScript 1.12.4
var Dumper, Parser, Utils, Yaml;

Parser = require('./Parser');

Dumper = require('./Dumper');

Utils = require('./Utils');

Yaml = (function() {
  function Yaml() {}

  Yaml.parse = function(input, exceptionOnInvalidType, objectDecoder) {
    if (exceptionOnInvalidType == null) {
      exceptionOnInvalidType = false;
    }
    if (objectDecoder == null) {
      objectDecoder = null;
    }
    return new Parser().parse(input, exceptionOnInvalidType, objectDecoder);
  };

  Yaml.parseFile = function(path, callback, exceptionOnInvalidType, objectDecoder) {
    var input;
    if (callback == null) {
      callback = null;
    }
    if (exceptionOnInvalidType == null) {
      exceptionOnInvalidType = false;
    }
    if (objectDecoder == null) {
      objectDecoder = null;
    }
    if (callback != null) {
      return Utils.getStringFromFile(path, (function(_this) {
        return function(input) {
          var result;
          result = null;
          if (input != null) {
            result = _this.parse(input, exceptionOnInvalidType, objectDecoder);
          }
          callback(result);
        };
      })(this));
    } else {
      input = Utils.getStringFromFile(path);
      if (input != null) {
        return this.parse(input, exceptionOnInvalidType, objectDecoder);
      }
      return null;
    }
  };

  Yaml.dump = function(input, inline, indent, exceptionOnInvalidType, objectEncoder) {
    var yaml;
    if (inline == null) {
      inline = 2;
    }
    if (indent == null) {
      indent = 4;
    }
    if (exceptionOnInvalidType == null) {
      exceptionOnInvalidType = false;
    }
    if (objectEncoder == null) {
      objectEncoder = null;
    }
    yaml = new Dumper();
    yaml.indentation = indent;
    return yaml.dump(input, inline, 0, exceptionOnInvalidType, objectEncoder);
  };

  Yaml.stringify = function(input, inline, indent, exceptionOnInvalidType, objectEncoder) {
    return this.dump(input, inline, indent, exceptionOnInvalidType, objectEncoder);
  };

  Yaml.load = function(path, callback, exceptionOnInvalidType, objectDecoder) {
    return this.parseFile(path, callback, exceptionOnInvalidType, objectDecoder);
  };

  return Yaml;

})();

if (typeof window !== "undefined" && window !== null) {
  window.YAML = Yaml;
}

if (typeof window === "undefined" || window === null) {
  this.YAML = Yaml;
}

module.exports = Yaml;

},{"./Parser":"../node_modules/yamljs/lib/Parser.js","./Dumper":"../node_modules/yamljs/lib/Dumper.js","./Utils":"../node_modules/yamljs/lib/Utils.js"}],"../node_modules/extend/index.js":[function(require,module,exports) {
'use strict';

var hasOwn = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;
var defineProperty = Object.defineProperty;
var gOPD = Object.getOwnPropertyDescriptor;

var isArray = function isArray(arr) {
	if (typeof Array.isArray === 'function') {
		return Array.isArray(arr);
	}

	return toStr.call(arr) === '[object Array]';
};

var isPlainObject = function isPlainObject(obj) {
	if (!obj || toStr.call(obj) !== '[object Object]') {
		return false;
	}

	var hasOwnConstructor = hasOwn.call(obj, 'constructor');
	var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
	// Not own constructor property must be Object
	if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
		return false;
	}

	// Own properties are enumerated firstly, so to speed up,
	// if last one is own, then all properties are own.
	var key;
	for (key in obj) { /**/ }

	return typeof key === 'undefined' || hasOwn.call(obj, key);
};

// If name is '__proto__', and Object.defineProperty is available, define __proto__ as an own property on target
var setProperty = function setProperty(target, options) {
	if (defineProperty && options.name === '__proto__') {
		defineProperty(target, options.name, {
			enumerable: true,
			configurable: true,
			value: options.newValue,
			writable: true
		});
	} else {
		target[options.name] = options.newValue;
	}
};

// Return undefined instead of __proto__ if '__proto__' is not an own property
var getProperty = function getProperty(obj, name) {
	if (name === '__proto__') {
		if (!hasOwn.call(obj, name)) {
			return void 0;
		} else if (gOPD) {
			// In early versions of node, obj['__proto__'] is buggy when obj has
			// __proto__ as an own property. Object.getOwnPropertyDescriptor() works.
			return gOPD(obj, name).value;
		}
	}

	return obj[name];
};

module.exports = function extend() {
	var options, name, src, copy, copyIsArray, clone;
	var target = arguments[0];
	var i = 1;
	var length = arguments.length;
	var deep = false;

	// Handle a deep copy situation
	if (typeof target === 'boolean') {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}
	if (target == null || (typeof target !== 'object' && typeof target !== 'function')) {
		target = {};
	}

	for (; i < length; ++i) {
		options = arguments[i];
		// Only deal with non-null/undefined values
		if (options != null) {
			// Extend the base object
			for (name in options) {
				src = getProperty(target, name);
				copy = getProperty(options, name);

				// Prevent never-ending loop
				if (target !== copy) {
					// Recurse if we're merging plain objects or arrays
					if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
						if (copyIsArray) {
							copyIsArray = false;
							clone = src && isArray(src) ? src : [];
						} else {
							clone = src && isPlainObject(src) ? src : {};
						}

						// Never move original objects, clone them
						setProperty(target, { name: name, newValue: extend(deep, clone, copy) });

					// Don't bring in undefined values
					} else if (typeof copy !== 'undefined') {
						setProperty(target, { name: name, newValue: copy });
					}
				}
			}
		}
	}

	// Return the modified object
	return target;
};

},{}],"../node_modules/author-regex/index.js":[function(require,module,exports) {
/*!
 * author-regex <https://github.com/jonschlinkert/author-regex>
 *
 * Copyright (c) 2014, 2017, Jon Schlinkert.
 * Released under the MIT License.
 */
'use strict';

module.exports = function () {
  return /^\s*([^<(]*?)\s*([<(]([^>)]*?)[>)])?\s*([<(]([^>)]*?)[>)])*\s*$/;
};
},{}],"../node_modules/parse-author/index.js":[function(require,module,exports) {
/*!
 * parse-author <https://github.com/jonschlinkert/parse-author>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
'use strict';

var regex = require('author-regex');

module.exports = function (str) {
  if (typeof str !== 'string') {
    throw new TypeError('expected author to be a string');
  }

  if (!str || !/\w/.test(str)) {
    return {};
  }

  var match = [].concat.apply([], regex().exec(str));
  var author = {};

  if (match[1]) {
    author.name = match[1];
  }

  for (var i = 2; i < match.length; i++) {
    var val = match[i];

    if (i % 2 === 0 && val && match[i + 1]) {
      if (val.charAt(0) === '<') {
        author.email = match[i + 1];
        i++;
      } else if (val.charAt(0) === '(') {
        author.url = match[i + 1];
        i++;
      }
    }
  }

  return author;
};
},{"author-regex":"../node_modules/author-regex/index.js"}],"../node_modules/@rmlio/yarrrml-parser/lib/expander.js":[function(require,module,exports) {
/**
 * author: Pieter Heyvaert (pheyvaer.heyvaert@ugent.be)
 * Ghent University - imec - IDLab
 */

const extend = require('extend');
const parseAuthor = require('parse-author');

const shortcuts = {
  subjects: ['s', 'subject'],
  predicates: ['p', 'predicate'],
  objects: ['o', 'object'],
  predicateobjects: ['po', 'predicateobject'],
  inversepredicates: ['iv', 'inversepredicate'],
  value: ['v'],
  function: ['f', 'fn'],
  parameters: ['pms'],
  parameter: ['pm'],
  sources: ['source', 's'],
  conditions: ['c', 'condition'],
  graphs: ['g', 'graph'],
  mappings: ['m', 'mapping']
};

const idlabfn = 'http://example.com/idlab/function/';


function expand(input) {
  const output = {};

  extend(true, output, input);

  replaceAll('mappings', output);
  expandMappings(output);
  expandAuthors(output);
  expandSourcesInDocument(output);

  return output;
}

function expandMappings(input) {
  if (input.mappings) {
    const mappings = Object.keys(input.mappings);

    for (let i = 0; i < mappings.length; i++) {
      const mappingKey = mappings[i];
      const mapping = input.mappings[mappingKey];

      if (mapping) {
        expandSubjects(mapping, mappingKey);
        expandSourcesInMapping(mapping, mappingKey);
        expandPredicateObjects(mapping, mappingKey);
        expandGraphs(mapping);
      } else {
        console.error(`mapping "${mappingKey}": no rules are provided. Skipping.`);
        delete input.mappings[mappingKey];
      }
    }
  } else {
    console.error('A YARRRML document should have at least the key "mappings".');
  }
}

function expandSubjects(mapping, mappingKey) {
  replaceAll('subjects', mapping);

  if (mapping.subjects) {
    if (typeof mapping.subjects === 'string') {
      mapping.subjects = [mapping.subjects]
    } else if (Array.isArray(mapping.subjects)) {
      for (let i = 0; i < mapping.subjects.length; i++) {
        if (typeof mapping.subjects[i] === 'object') {
          expandFunction(mapping.subjects[i]);

          if (!mapping.subjects[i].type) {
            mapping.subjects[i].type = 'iri'
          }
        }
      }
    } else {
      expandFunction(mapping.subjects);

      if (!mapping.subjects.type) {
        mapping.subjects.type = 'iri'
      }

      mapping.subjects = [mapping.subjects];
    }
  } else {
    mapping.subjects = [{type: 'blank'}];
  }

  replaceAll('conditions', mapping);

  if (mapping.conditions) {
    expandFunction(mapping.conditions);

    for (let i = 0; i < mapping.subjects.length; i++) {
      const subject = mapping.subjects[i];
      mapping.subjects[i] = {
        function: idlabfn + 'trueCondition',
        parameters: [
          {
            parameter: idlabfn + 'strBoolean',
            value: mapping.conditions,
            from: 'function'
          }, {
            parameter: idlabfn + 'str',
            value: subject.type === 'blank' ? null : subject,
            from: subject.function !== undefined ? 'function' : 'subject',
            type: subject.type ? subject.type : 'iri'
          }
        ],
        type: subject.type ? subject.type : 'iri'
      };
      delete mapping.conditions;
    }
  }
}

function expandSourcesInMapping(mapping, mappingKey) {
  replaceAll('sources', mapping);

  if (mapping.sources) {
    if (Array.isArray(mapping.sources)) {
      for (let i = 0; i < mapping.sources.length; i++) {
        const source = mapping.sources[i];

        if (Array.isArray(source)) {
          mapping.sources[i] = convertArraySourceInObject(source);
        }
      }
    } else if (typeof mapping.sources === "string") {
      mapping.sources = [mapping.sources];
    } else {
      console.error(`mapping "${mappingKey}": no (valid) source is defined.`);
    }
  } else {
    console.error(`mapping "${mappingKey}": no source is defined.`);
  }
}

function expandSourcesInDocument(document) {
  replaceAll('sources', document);

  if (document.sources) {
    const sourceKeys = Object.keys(document.sources);

    for (let i = 0; i < sourceKeys.length; i++) {
      const source = document.sources[sourceKeys[i]];

      if (Array.isArray(source)) {
        document.sources[sourceKeys[i]] = convertArraySourceInObject(source);
      }
    }
  }
}

function expandPredicateObjects(mapping, mappingKey) {
  replaceAll('predicateobjects', mapping);

  if (mapping.predicateobjects) {
    for (let i = 0; i < mapping.predicateobjects.length; i++) {
      const po = mapping.predicateobjects[i];

      if (Array.isArray(po)) {
        const newPO = {
          predicates: po[0],
          objects: po[1],
        };

        if (po.length === 3) {
          if (po[2].indexOf('~lang') !== -1) {
            newPO.language = po[2].replace('~lang', '');
          } else {
            newPO.datatype = po[2];
          }
        }

        mapping.predicateobjects[i] = newPO;
      }
    }

    mapping.predicateobjects.forEach(po => {
      expandGraphs(po);
    });

    expandPredicates(mapping.predicateobjects);
    expandObjects(mapping.predicateobjects, mappingKey);
    expandConditionsOfPOs(mapping.predicateobjects);
  } else {
    console.error(`mapping "${mappingKey}": no pos are defined.`)
  }
}

function expandPredicates(predicateobjects) {
  predicateobjects.forEach(po => {
    replaceAll('predicates', po);

    if (typeof po.predicates === 'string') {
      po.predicates = [po.predicates];
    }
  });
}

function expandObjects(predicateobjects, mappingKey) {
  for (let i = 0; i < predicateobjects.length; i++) {
    const po = predicateobjects[i];
    replaceAll('objects', po);

    if (typeof po.objects === 'string' || typeof po.objects === 'number') {
      po.objects = ['' + po.objects];
    } else if (typeof po.objects === 'object' && !Array.isArray(po.objects)) {
      po.objects = [po.objects]
    }

    if (!po.objects || po.objects.length === 0) {
      console.error(`mapping "${mappingKey}": po with predicate(s) "${po.predicates}" does not have an object defined. Skipping.`);
      predicateobjects.splice(i, 1);
      i--;
    } else {
      for (let j = 0; j < po.objects.length; j++) {
        if (typeof po.objects[j] === 'string') {
          if (po.predicates.indexOf('a') === -1 && po.objects[j].indexOf('~iri') === -1) {
            po.objects[j] = {
              value: po.objects[j],
              type: 'literal'
            }
          } else {
            po.objects[j] = {
              value: po.objects[j].replace('~iri', ''),
              type: 'iri'
            }
          }
        } else if (Array.isArray(po.objects[j])) {
          let newPO;
          if (po.objects[j][0].indexOf('~iri') === -1) {
            newPO = {
              value: po.objects[j][0],
              type: 'literal'
            }
          } else {
            newPO = {
              value: po.objects[j][0].replace('~iri', ''),
              type: 'iri'
            }
          }

          if (po.objects[j].length > 1) {
            if (po.objects[j][1].indexOf('~lang') === -1) {
              newPO.datatype = po.objects[j][1];
            } else {
              newPO.language = po.objects[j][1].replace('~lang', '');
            }
          }

          po.objects[j] = newPO;
        }

        if (!po.objects[j].datatype && po.datatype) {
          po.objects[j].datatype = po.datatype;
        }

        if (!po.objects[j].language && po.language) {
          po.objects[j].language = po.language;
        }

        replaceAll('value', po.objects[j]);
        replaceAll('inversepredicates', po.objects[j]);

        expandFunction(po.objects[j]);

        //condition
        replaceAll('conditions', po.objects[j]);

        if (po.objects[j].conditions) {

          if (typeof po.objects[j].conditions === 'object' && !Array.isArray(po.objects[j].conditions)) {
            po.objects[j].conditions = [po.objects[j].conditions];
          }

          po.objects[j].conditions.forEach(c => {
            expandFunction(c);
          });

          if (po.objects[j].value && !po.objects[j].mapping) {
            po.objects[j] = expandConditionsOfObject(po.objects[j]);
          }
        }

        if (po.objects[j].mapping && Array.isArray(po.objects[j].mapping)) {
          po.objects[j].mapping.forEach(m => {
            const anotherObject = JSON.parse(JSON.stringify(po.objects[j]));
            anotherObject.mapping = m;
            po.objects.push(anotherObject);
          });

          po.objects.splice(j, 1);
        }
      }

      delete po.datatype;
      delete po.language;
    }
  }
}

function expandFunction(input) {
  replaceAll('function', input);
  replaceAll('parameters', input);

  if (input.function && isFunctionShortcut(input.function)) {
    const result = expandFunctionShortcut(input.function);
    input.function = result.function;
    input.parameters = result.parameters;
  }

  if (input.parameters) {
    for (let i = 0; i < input.parameters.length; i++) {
      const e = input.parameters[i];

      if (Array.isArray(e)) {
        input.parameters[i] = {
          parameter: e[0],
          value: '' + e[1] // turn ints into strings
        };

        if (input.parameters[i].value.indexOf('~iri') === -1) {
          input.parameters[i].type = 'literal';
        } else {
          input.parameters[i].type = 'iri';
          input.parameters[i].value = input.parameters[i].value.replace('~iri', '');
        }

        if (e.length > 2) {
          if (e[2] === "s") {
            e[2] = "subject";
          } else if (e[2] === "o") {
            e[2] = "object";
          }

          if (e[2] === "subject" || e[2] === "object") {
            input.parameters[i].from = e[2];
          } else {
            const e = new Error(`\`from\` has to have the value "s", "subject", "o", or "object`);
            e.code = 'INVALID_YAML';
            throw e;
          }
        } else {
          input.parameters[i].from = "subject"
        }
      } else {
        replaceAll('parameter', e);
        replaceAll('value', e);
      }

      if (e.value instanceof Object) {
        expandFunction(e.value);
        e.from = 'function';
      }
    }
  }
}

function isFunctionShortcut(str) {
  return str.indexOf('(') !== -1 && str.indexOf(')') > str.indexOf('(');
}

function expandFunctionShortcut(functionStr) {
  const fn = functionStr.substr(0, functionStr.indexOf('('));
  const prefix = fn.substr(0, fn.indexOf(':'));
  const parameterStr = functionStr.substr(functionStr.indexOf('(')+1, functionStr.length -  functionStr.indexOf('(') - 2);
  const parameters = parameterStr.split(',');
  const temp = [];

  parameters.forEach(p => {
    const split = p.split('=');
    let parameter = split[0].trim();
    if (parameter.indexOf(':') === -1) {
      parameter = prefix + ':' + parameter;
    }

    let value = split[1].trim();

    if (value[0] === '"' && value[value.length - 1] === '"') {
      value = value.substr(1, value.length - 2);
    }

    temp.push({value, parameter, from: 'subject', type: 'literal'});
  });

  return {function: fn, parameters: temp};
}

function expandGraphs(mapping) {
  replaceAll('graphs', mapping);

  if (mapping.graphs) {
    if (typeof mapping.graphs === 'string') {
      mapping.graphs = [mapping.graphs]
    } else if (Array.isArray(mapping.graphs)) {
      for (let i = 0; i < mapping.graphs.length; i++) {
        if (typeof mapping.graphs[i] === 'object') {
          expandFunction(mapping.graphs[i]);
        }
      }
    }
  }
}

function expandConditionsOfPOs(predicateobjects) {
  for (let i = 0; i < predicateobjects.length; i++) {
    const po = predicateobjects[i];
    replaceAll('conditions', po);

    if (po.conditions) {
      expandFunction(po.conditions);

      for (let j = 0; j < po.objects.length; j++) {
        const o = po.objects[j];
        // TODO same as in expandSubjects function
        po.objects[j] = {
          function: idlabfn + 'trueCondition',
          parameters: [
            {
              parameter: idlabfn + 'strBoolean',
              value: po.conditions,
              from: 'function'
            }, {
              parameter: idlabfn + 'str',
              value: o.function ? o : o.value,
              type: o.type,
              from: o.function ? 'function' : 'subject'
            }
          ],
          type: o.type
        };

        if (o.datatype) {
          po.objects[j].datatype = o.datatype;
        }
      }

      delete po.conditions;
    }
  }
}

/**
 * This method returns a new object with the conditions expanded.
 * @param o An object of a Predicate Object.
 */
function expandConditionsOfObject(o) {
  if (o.conditions) {

    // TODO same as in expandSubjects function
    const newObj = {
      function: idlabfn + 'trueCondition',
      parameters: [
        {
          parameter: idlabfn + 'strBoolean',
          value: o.conditions[0],
          from: 'function'
        }, {
          parameter: idlabfn + 'str',
          value: o.function ? o : o.value,
          type: o.type,
          from: o.function ? 'function' : 'subject'
        }
      ],
      type: o.type
    };

    if (o.datatype) {
      newObj.datatype = o.datatype;
    }

    return newObj;
  } else {
    return o;
  }
}

function convertArraySourceInObject(source) {
  const splits = source[0].split('~');
  let result;

  if (splits.length > 1) {
    result = {
      access: splits[0],
      referenceFormulation: splits[1],
      iterator: source[1]
    };
  } else {
    console.log('reference formulation not specified');
  }

  return result;
}

function replaceAll(wanted, value) {
  //console.log(wanted);
  shortcuts[wanted].forEach(shortcut => {
    //console.log(shortcut);

    if (value[shortcut]) {
      replace(shortcut, wanted, value);
    }
  });
}

function replace(oldName, newName, value) {
  value[newName] = value[oldName];
  delete value[oldName];
}

/**
 * This method expands authors.
 * @param input - The JSON object of the YARRRML rules.
 */
function expandAuthors(input) {
  if (input.authors) {
    let authors = input.authors;

    if (typeof authors === 'string' || authors instanceof String) {
      authors = [authors];
      input.authors = authors;
    }

    for (let i = 0; i < authors.length; i ++) {
      const author = authors[i];

      if (typeof author === 'string' || author instanceof String) {
        const parsedAuthor = parseAuthor(author);

        // This is a WebID.
        if (parsedAuthor.name && parsedAuthor.name.includes('://')) {
          authors[i] = {webid: author};
        } else {
          if (parsedAuthor.url) {
            parsedAuthor.website = parsedAuthor.url;
          }

          delete parsedAuthor.url;
          authors[i] = parsedAuthor;
        }
      }
    }
  }
}

module.exports = expand;

},{"extend":"../node_modules/extend/index.js","parse-author":"../node_modules/parse-author/index.js"}],"../node_modules/@rmlio/yarrrml-parser/lib/rdfa-context.json":[function(require,module,exports) {
module.exports = {
  "@context": {
    "as": "https://www.w3.org/ns/activitystreams#",
    "dqv": "http://www.w3.org/ns/dqv#",
    "duv": "https://www.w3.org/TR/vocab-duv#",
    "cat": "http://www.w3.org/ns/dcat#",
    "qb": "http://purl.org/linked-data/cube#",
    "grddl": "http://www.w3.org/2003/g/data-view#",
    "ldp": "http://www.w3.org/ns/ldp#",
    "oa": "http://www.w3.org/ns/oa#",
    "ma": "http://www.w3.org/ns/ma-ont#",
    "owl": "http://www.w3.org/2002/07/owl#",
    "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
    "rdfa": "http://www.w3.org/ns/rdfa#",
    "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
    "rif": "http://www.w3.org/2007/rif#",
    "rr": "http://www.w3.org/ns/r2rml#",
    "skos": "http://www.w3.org/2004/02/skos/core#",
    "skosxl": "http://www.w3.org/2008/05/skos-xl#",
    "wdr": "http://www.w3.org/2007/05/powder#",
    "void": "http://rdfs.org/ns/void#",
    "wdrs": "http://www.w3.org/2007/05/powder-s#",
    "xhv": "http://www.w3.org/1999/xhtml/vocab#",
    "xml": "http://www.w3.org/XML/1998/namespace",
    "xsd": "http://www.w3.org/2001/XMLSchema#",
    "prov": "http://www.w3.org/ns/prov#",
    "sd": "http://www.w3.org/ns/sparql-service-description#",
    "org": "http://www.w3.org/ns/org#",
    "gldp": "http://www.w3.org/ns/people#",
    "cnt": "http://www.w3.org/2008/content#",
    "dcat": "http://www.w3.org/ns/dcat#",
    "earl": "http://www.w3.org/ns/earl#",
    "ht": "http://www.w3.org/2006/http#",
    "ptr": "http://www.w3.org/2009/pointers#",
    "cc": "http://creativecommons.org/ns#",
    "ctag": "http://commontag.org/ns#",
    "dc": "http://purl.org/dc/terms/",
    "dc11": "http://purl.org/dc/elements/1.1/",
    "dcterms": "http://purl.org/dc/terms/",
    "foaf": "http://xmlns.com/foaf/0.1/",
    "gr": "http://purl.org/goodrelations/v1#",
    "ical": "http://www.w3.org/2002/12/cal/icaltzd#",
    "og": "http://ogp.me/ns#",
    "rev": "http://purl.org/stuff/rev#",
    "sioc": "http://rdfs.org/sioc/ns#",
    "v": "http://rdf.data-vocabulary.org/#",
    "vcard": "http://www.w3.org/2006/vcard/ns#",
    "schema": "http://schema.org/",
    "describedby": "http://www.w3.org/2007/05/powder-s#describedby",
    "license": "http://www.w3.org/1999/xhtml/vocab#license",
    "role": "http://www.w3.org/1999/xhtml/vocab#role",
    "ssn": "http://www.w3.org/ns/ssn/",
    "sosa":"http://www.w3.org/ns/sosa/",
    "time":"http://www.w3.org/2006/time#"
  }
};
},{}],"../node_modules/n3/src/IRIs.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const RDF = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
      XSD = 'http://www.w3.org/2001/XMLSchema#',
      SWAP = 'http://www.w3.org/2000/10/swap/';
var _default = {
  xsd: {
    decimal: "".concat(XSD, "decimal"),
    boolean: "".concat(XSD, "boolean"),
    double: "".concat(XSD, "double"),
    integer: "".concat(XSD, "integer"),
    string: "".concat(XSD, "string")
  },
  rdf: {
    type: "".concat(RDF, "type"),
    nil: "".concat(RDF, "nil"),
    first: "".concat(RDF, "first"),
    rest: "".concat(RDF, "rest"),
    langString: "".concat(RDF, "langString")
  },
  owl: {
    sameAs: 'http://www.w3.org/2002/07/owl#sameAs'
  },
  r: {
    forSome: "".concat(SWAP, "reify#forSome"),
    forAll: "".concat(SWAP, "reify#forAll")
  },
  log: {
    implies: "".concat(SWAP, "log#implies")
  }
};
exports.default = _default;
},{}],"../node_modules/queue-microtask/index.js":[function(require,module,exports) {
/*! queue-microtask. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
let promise

module.exports = typeof queueMicrotask === 'function'
  ? queueMicrotask.bind(globalThis)
  // reuse resolved promise, and allocate it lazily
  : cb => (promise || (promise = Promise.resolve()))
    .then(cb)
    .catch(err => setTimeout(() => { throw err }, 0))

},{}],"../node_modules/base64-js/index.js":[function(require,module,exports) {
'use strict'

exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}

},{}],"../node_modules/ieee754/index.js":[function(require,module,exports) {
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

},{}],"../node_modules/isarray/index.js":[function(require,module,exports) {
var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

},{}],"../node_modules/buffer/index.js":[function(require,module,exports) {

var global = arguments[3];
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */

'use strict'

var base64 = require('base64-js')
var ieee754 = require('ieee754')
var isArray = require('isarray')

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

},{"base64-js":"../node_modules/base64-js/index.js","ieee754":"../node_modules/ieee754/index.js","isarray":"../node_modules/isarray/index.js","buffer":"../node_modules/buffer/index.js"}],"../node_modules/n3/src/N3Lexer.js":[function(require,module,exports) {
var Buffer = require("buffer").Buffer;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _IRIs = _interopRequireDefault(require("./IRIs"));

var _queueMicrotask = _interopRequireDefault(require("queue-microtask"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// **N3Lexer** tokenizes N3 documents.
const {
  xsd
} = _IRIs.default; // Regular expression and replacement string to escape N3 strings

const escapeSequence = /\\u([a-fA-F0-9]{4})|\\U([a-fA-F0-9]{8})|\\([^])/g;
const escapeReplacements = {
  '\\': '\\',
  "'": "'",
  '"': '"',
  'n': '\n',
  'r': '\r',
  't': '\t',
  'f': '\f',
  'b': '\b',
  '_': '_',
  '~': '~',
  '.': '.',
  '-': '-',
  '!': '!',
  '$': '$',
  '&': '&',
  '(': '(',
  ')': ')',
  '*': '*',
  '+': '+',
  ',': ',',
  ';': ';',
  '=': '=',
  '/': '/',
  '?': '?',
  '#': '#',
  '@': '@',
  '%': '%'
};
const illegalIriChars = /[\x00-\x20<>\\"\{\}\|\^\`]/;
const lineModeRegExps = {
  _iri: true,
  _unescapedIri: true,
  _simpleQuotedString: true,
  _langcode: true,
  _blank: true,
  _newline: true,
  _comment: true,
  _whitespace: true,
  _endOfFile: true
};
const invalidRegExp = /$0^/; // ## Constructor

class N3Lexer {
  constructor(options) {
    // ## Regular expressions
    // It's slightly faster to have these as properties than as in-scope variables
    this._iri = /^<((?:[^ <>{}\\]|\\[uU])+)>[ \t]*/; // IRI with escape sequences; needs sanity check after unescaping

    this._unescapedIri = /^<([^\x00-\x20<>\\"\{\}\|\^\`]*)>[ \t]*/; // IRI without escape sequences; no unescaping

    this._simpleQuotedString = /^"([^"\\\r\n]*)"(?=[^"])/; // string without escape sequences

    this._simpleApostropheString = /^'([^'\\\r\n]*)'(?=[^'])/;
    this._langcode = /^@([a-z]+(?:-[a-z0-9]+)*)(?=[^a-z0-9\-])/i;
    this._prefix = /^((?:[A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u02ff\u0370-\u037d\u037f-\u1fff\u200c\u200d\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff])(?:\.?[\-0-9A-Z_a-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u037f-\u1fff\u200c\u200d\u203f\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff])*)?:(?=[#\s<])/;
    this._prefixed = /^((?:[A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u02ff\u0370-\u037d\u037f-\u1fff\u200c\u200d\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff])(?:\.?[\-0-9A-Z_a-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u037f-\u1fff\u200c\u200d\u203f\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff])*)?:((?:(?:[0-:A-Z_a-z\xc0-\xd6\xd8-\xf6\xf8-\u02ff\u0370-\u037d\u037f-\u1fff\u200c\u200d\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff]|%[0-9a-fA-F]{2}|\\[!#-\/;=?\-@_~])(?:(?:[\.\-0-:A-Z_a-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u037f-\u1fff\u200c\u200d\u203f\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff]|%[0-9a-fA-F]{2}|\\[!#-\/;=?\-@_~])*(?:[\-0-:A-Z_a-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u037f-\u1fff\u200c\u200d\u203f\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff]|%[0-9a-fA-F]{2}|\\[!#-\/;=?\-@_~]))?)?)(?:[ \t]+|(?=\.?[,;!\^\s#()\[\]\{\}"'<>]))/;
    this._variable = /^\?(?:(?:[A-Z_a-z\xc0-\xd6\xd8-\xf6\xf8-\u02ff\u0370-\u037d\u037f-\u1fff\u200c\u200d\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff])(?:[\-0-:A-Z_a-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u037f-\u1fff\u200c\u200d\u203f\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff])*)(?=[.,;!\^\s#()\[\]\{\}"'<>])/;
    this._blank = /^_:((?:[0-9A-Z_a-z\xc0-\xd6\xd8-\xf6\xf8-\u02ff\u0370-\u037d\u037f-\u1fff\u200c\u200d\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff])(?:\.?[\-0-9A-Z_a-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u037f-\u1fff\u200c\u200d\u203f\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff])*)(?:[ \t]+|(?=\.?[,;:\s#()\[\]\{\}"'<>]))/;
    this._number = /^[\-+]?(?:(\d+\.\d*|\.?\d+)[eE][\-+]?|\d*(\.)?)\d+(?=\.?[,;:\s#()\[\]\{\}"'<>])/;
    this._boolean = /^(?:true|false)(?=[.,;\s#()\[\]\{\}"'<>])/;
    this._keyword = /^@[a-z]+(?=[\s#<:])/i;
    this._sparqlKeyword = /^(?:PREFIX|BASE|GRAPH)(?=[\s#<])/i;
    this._shortPredicates = /^a(?=[\s()\[\]\{\}"'<>])/;
    this._newline = /^[ \t]*(?:#[^\n\r]*)?(?:\r\n|\n|\r)[ \t]*/;
    this._comment = /#([^\n\r]*)/;
    this._whitespace = /^[ \t]+/;
    this._endOfFile = /^(?:#[^\n\r]*)?$/;
    options = options || {}; // In line mode (N-Triples or N-Quads), only simple features may be parsed

    if (this._lineMode = !!options.lineMode) {
      this._n3Mode = false; // Don't tokenize special literals

      for (const key in this) {
        if (!(key in lineModeRegExps) && this[key] instanceof RegExp) this[key] = invalidRegExp;
      }
    } // When not in line mode, enable N3 functionality by default
    else {
        this._n3Mode = options.n3 !== false;
      } // Don't output comment tokens by default


    this._comments = !!options.comments; // Cache the last tested closing position of long literals

    this._literalClosingPos = 0;
  } // ## Private methods
  // ### `_tokenizeToEnd` tokenizes as for as possible, emitting tokens through the callback


  _tokenizeToEnd(callback, inputFinished) {
    // Continue parsing as far as possible; the loop will return eventually
    let input = this._input;
    const outputComments = this._comments;

    while (true) {
      // Count and skip whitespace lines
      let whiteSpaceMatch, comment;

      while (whiteSpaceMatch = this._newline.exec(input)) {
        // Try to find a comment
        if (outputComments && (comment = this._comment.exec(whiteSpaceMatch[0]))) callback(null, {
          line: this._line,
          type: 'comment',
          value: comment[1],
          prefix: ''
        }); // Advance the input

        input = input.substr(whiteSpaceMatch[0].length, input.length);
        this._line++;
      } // Skip whitespace on current line


      if (!whiteSpaceMatch && (whiteSpaceMatch = this._whitespace.exec(input))) input = input.substr(whiteSpaceMatch[0].length, input.length); // Stop for now if we're at the end

      if (this._endOfFile.test(input)) {
        // If the input is finished, emit EOF
        if (inputFinished) {
          // Try to find a final comment
          if (outputComments && (comment = this._comment.exec(input))) callback(null, {
            line: this._line,
            type: 'comment',
            value: comment[1],
            prefix: ''
          });
          callback(input = null, {
            line: this._line,
            type: 'eof',
            value: '',
            prefix: ''
          });
        }

        return this._input = input;
      } // Look for specific token types based on the first character


      const line = this._line,
            firstChar = input[0];
      let type = '',
          value = '',
          prefix = '',
          match = null,
          matchLength = 0,
          inconclusive = false;

      switch (firstChar) {
        case '^':
          // We need at least 3 tokens lookahead to distinguish ^^<IRI> and ^^pre:fixed
          if (input.length < 3) break; // Try to match a type
          else if (input[1] === '^') {
              this._previousMarker = '^^'; // Move to type IRI or prefixed name

              input = input.substr(2);

              if (input[0] !== '<') {
                inconclusive = true;
                break;
              }
            } // If no type, it must be a path expression
            else {
                if (this._n3Mode) {
                  matchLength = 1;
                  type = '^';
                }

                break;
              }
        // Fall through in case the type is an IRI

        case '<':
          // Try to find a full IRI without escape sequences
          if (match = this._unescapedIri.exec(input)) type = 'IRI', value = match[1]; // Try to find a full IRI with escape sequences
          else if (match = this._iri.exec(input)) {
              value = this._unescape(match[1]);
              if (value === null || illegalIriChars.test(value)) return reportSyntaxError(this);
              type = 'IRI';
            } // Try to find a nested triple
            else if (input.length > 1 && input[1] === '<') type = '<<', matchLength = 2; // Try to find a backwards implication arrow
              else if (this._n3Mode && input.length > 1 && input[1] === '=') type = 'inverse', matchLength = 2, value = '>';
          break;

        case '>':
          if (input.length > 1 && input[1] === '>') type = '>>', matchLength = 2;
          break;

        case '_':
          // Try to find a blank node. Since it can contain (but not end with) a dot,
          // we always need a non-dot character before deciding it is a blank node.
          // Therefore, try inserting a space if we're at the end of the input.
          if ((match = this._blank.exec(input)) || inputFinished && (match = this._blank.exec("".concat(input, " ")))) type = 'blank', prefix = '_', value = match[1];
          break;

        case '"':
          // Try to find a literal without escape sequences
          if (match = this._simpleQuotedString.exec(input)) value = match[1]; // Try to find a literal wrapped in three pairs of quotes
          else {
              ({
                value,
                matchLength
              } = this._parseLiteral(input));
              if (value === null) return reportSyntaxError(this);
            }

          if (match !== null || matchLength !== 0) {
            type = 'literal';
            this._literalClosingPos = 0;
          }

          break;

        case "'":
          if (!this._lineMode) {
            // Try to find a literal without escape sequences
            if (match = this._simpleApostropheString.exec(input)) value = match[1]; // Try to find a literal wrapped in three pairs of quotes
            else {
                ({
                  value,
                  matchLength
                } = this._parseLiteral(input));
                if (value === null) return reportSyntaxError(this);
              }

            if (match !== null || matchLength !== 0) {
              type = 'literal';
              this._literalClosingPos = 0;
            }
          }

          break;

        case '?':
          // Try to find a variable
          if (this._n3Mode && (match = this._variable.exec(input))) type = 'var', value = match[0];
          break;

        case '@':
          // Try to find a language code
          if (this._previousMarker === 'literal' && (match = this._langcode.exec(input))) type = 'langcode', value = match[1]; // Try to find a keyword
          else if (match = this._keyword.exec(input)) type = match[0];
          break;

        case '.':
          // Try to find a dot as punctuation
          if (input.length === 1 ? inputFinished : input[1] < '0' || input[1] > '9') {
            type = '.';
            matchLength = 1;
            break;
          }

        // Fall through to numerical case (could be a decimal dot)

        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '+':
        case '-':
          // Try to find a number. Since it can contain (but not end with) a dot,
          // we always need a non-dot character before deciding it is a number.
          // Therefore, try inserting a space if we're at the end of the input.
          if (match = this._number.exec(input) || inputFinished && (match = this._number.exec("".concat(input, " ")))) {
            type = 'literal', value = match[0];
            prefix = typeof match[1] === 'string' ? xsd.double : typeof match[2] === 'string' ? xsd.decimal : xsd.integer;
          }

          break;

        case 'B':
        case 'b':
        case 'p':
        case 'P':
        case 'G':
        case 'g':
          // Try to find a SPARQL-style keyword
          if (match = this._sparqlKeyword.exec(input)) type = match[0].toUpperCase();else inconclusive = true;
          break;

        case 'f':
        case 't':
          // Try to match a boolean
          if (match = this._boolean.exec(input)) type = 'literal', value = match[0], prefix = xsd.boolean;else inconclusive = true;
          break;

        case 'a':
          // Try to find an abbreviated predicate
          if (match = this._shortPredicates.exec(input)) type = 'abbreviation', value = 'a';else inconclusive = true;
          break;

        case '=':
          // Try to find an implication arrow or equals sign
          if (this._n3Mode && input.length > 1) {
            type = 'abbreviation';
            if (input[1] !== '>') matchLength = 1, value = '=';else matchLength = 2, value = '>';
          }

          break;

        case '!':
          if (!this._n3Mode) break;

        case ',':
        case ';':
        case '[':
        case ']':
        case '(':
        case ')':
        case '{':
        case '}':
          if (!this._lineMode) {
            matchLength = 1;
            type = firstChar;
          }

          break;

        default:
          inconclusive = true;
      } // Some first characters do not allow an immediate decision, so inspect more


      if (inconclusive) {
        // Try to find a prefix
        if ((this._previousMarker === '@prefix' || this._previousMarker === 'PREFIX') && (match = this._prefix.exec(input))) type = 'prefix', value = match[1] || ''; // Try to find a prefixed name. Since it can contain (but not end with) a dot,
        // we always need a non-dot character before deciding it is a prefixed name.
        // Therefore, try inserting a space if we're at the end of the input.
        else if ((match = this._prefixed.exec(input)) || inputFinished && (match = this._prefixed.exec("".concat(input, " ")))) type = 'prefixed', prefix = match[1] || '', value = this._unescape(match[2]);
      } // A type token is special: it can only be emitted after an IRI or prefixed name is read


      if (this._previousMarker === '^^') {
        switch (type) {
          case 'prefixed':
            type = 'type';
            break;

          case 'IRI':
            type = 'typeIRI';
            break;

          default:
            type = '';
        }
      } // What if nothing of the above was found?


      if (!type) {
        // We could be in streaming mode, and then we just wait for more input to arrive.
        // Otherwise, a syntax error has occurred in the input.
        // One exception: error on an unaccounted linebreak (= not inside a triple-quoted literal).
        if (inputFinished || !/^'''|^"""/.test(input) && /\n|\r/.test(input)) return reportSyntaxError(this);else return this._input = input;
      } // Emit the parsed token


      const token = {
        line: line,
        type: type,
        value: value,
        prefix: prefix
      };
      callback(null, token);
      this.previousToken = token;
      this._previousMarker = type; // Advance to next part to tokenize

      input = input.substr(matchLength || match[0].length, input.length);
    } // Signals the syntax error through the callback


    function reportSyntaxError(self) {
      callback(self._syntaxError(/^\S*/.exec(input)[0]));
    }
  } // ### `_unescape` replaces N3 escape codes by their corresponding characters


  _unescape(item) {
    let invalid = false;
    const replaced = item.replace(escapeSequence, (sequence, unicode4, unicode8, escapedChar) => {
      // 4-digit unicode character
      if (typeof unicode4 === 'string') return String.fromCharCode(Number.parseInt(unicode4, 16)); // 8-digit unicode character

      if (typeof unicode8 === 'string') {
        let charCode = Number.parseInt(unicode8, 16);
        return charCode <= 0xFFFF ? String.fromCharCode(Number.parseInt(unicode8, 16)) : String.fromCharCode(0xD800 + ((charCode -= 0x10000) >> 10), 0xDC00 + (charCode & 0x3FF));
      } // fixed escape sequence


      if (escapedChar in escapeReplacements) return escapeReplacements[escapedChar]; // invalid escape sequence

      invalid = true;
      return '';
    });
    return invalid ? null : replaced;
  } // ### `_parseLiteral` parses a literal into an unescaped value


  _parseLiteral(input) {
    // Ensure we have enough lookahead to identify triple-quoted strings
    if (input.length >= 3) {
      // Identify the opening quote(s)
      const opening = input.match(/^(?:"""|"|'''|'|)/)[0];
      const openingLength = opening.length; // Find the next candidate closing quotes

      let closingPos = Math.max(this._literalClosingPos, openingLength);

      while ((closingPos = input.indexOf(opening, closingPos)) > 0) {
        // Count backslashes right before the closing quotes
        let backslashCount = 0;

        while (input[closingPos - backslashCount - 1] === '\\') backslashCount++; // An even number of backslashes (in particular 0)
        // means these are actual, non-escaped closing quotes


        if (backslashCount % 2 === 0) {
          // Extract and unescape the value
          const raw = input.substring(openingLength, closingPos);
          const lines = raw.split(/\r\n|\r|\n/).length - 1;
          const matchLength = closingPos + openingLength; // Only triple-quoted strings can be multi-line

          if (openingLength === 1 && lines !== 0 || openingLength === 3 && this._lineMode) break;
          this._line += lines;
          return {
            value: this._unescape(raw),
            matchLength
          };
        }

        closingPos++;
      }

      this._literalClosingPos = input.length - openingLength + 1;
    }

    return {
      value: '',
      matchLength: 0
    };
  } // ### `_syntaxError` creates a syntax error for the given issue


  _syntaxError(issue) {
    this._input = null;
    const err = new Error("Unexpected \"".concat(issue, "\" on line ").concat(this._line, "."));
    err.context = {
      token: undefined,
      line: this._line,
      previousToken: this.previousToken
    };
    return err;
  } // ## Public methods
  // ### `tokenize` starts the transformation of an N3 document into an array of tokens.
  // The input can be a string or a stream.


  tokenize(input, callback) {
    this._line = 1; // If the input is a string, continuously emit tokens through the callback until the end

    if (typeof input === 'string') {
      this._input = input; // If a callback was passed, asynchronously call it

      if (typeof callback === 'function') (0, _queueMicrotask.default)(() => this._tokenizeToEnd(callback, true)); // If no callback was passed, tokenize synchronously and return
      else {
          const tokens = [];
          let error;

          this._tokenizeToEnd((e, t) => e ? error = e : tokens.push(t), true);

          if (error) throw error;
          return tokens;
        }
    } // Otherwise, the input must be a stream
    else {
        this._input = '';
        this._pendingBuffer = null;
        if (typeof input.setEncoding === 'function') input.setEncoding('utf8'); // Adds the data chunk to the buffer and parses as far as possible

        input.on('data', data => {
          if (this._input !== null && data.length !== 0) {
            // Prepend any previous pending writes
            if (this._pendingBuffer) {
              data = Buffer.concat([this._pendingBuffer, data]);
              this._pendingBuffer = null;
            } // Hold if the buffer ends in an incomplete unicode sequence


            if (data[data.length - 1] & 0x80) {
              this._pendingBuffer = data;
            } // Otherwise, tokenize as far as possible
            else {
                this._input += data;

                this._tokenizeToEnd(callback, false);
              }
          }
        }); // Parses until the end

        input.on('end', () => {
          if (this._input !== null) this._tokenizeToEnd(callback, true);
        });
        input.on('error', callback);
      }
  }

}

exports.default = N3Lexer;
},{"./IRIs":"../node_modules/n3/src/IRIs.js","queue-microtask":"../node_modules/queue-microtask/index.js","buffer":"../node_modules/buffer/index.js"}],"../node_modules/n3/src/N3Util.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNamedNode = isNamedNode;
exports.isBlankNode = isBlankNode;
exports.isLiteral = isLiteral;
exports.isVariable = isVariable;
exports.isDefaultGraph = isDefaultGraph;
exports.inDefaultGraph = inDefaultGraph;
exports.prefix = prefix;
exports.prefixes = prefixes;

var _N3DataFactory = _interopRequireDefault(require("./N3DataFactory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// **N3Util** provides N3 utility functions.
// Tests whether the given term represents an IRI
function isNamedNode(term) {
  return !!term && term.termType === 'NamedNode';
} // Tests whether the given term represents a blank node


function isBlankNode(term) {
  return !!term && term.termType === 'BlankNode';
} // Tests whether the given term represents a literal


function isLiteral(term) {
  return !!term && term.termType === 'Literal';
} // Tests whether the given term represents a variable


function isVariable(term) {
  return !!term && term.termType === 'Variable';
} // Tests whether the given term represents the default graph


function isDefaultGraph(term) {
  return !!term && term.termType === 'DefaultGraph';
} // Tests whether the given quad is in the default graph


function inDefaultGraph(quad) {
  return isDefaultGraph(quad.graph);
} // Creates a function that prepends the given IRI to a local name


function prefix(iri, factory) {
  return prefixes({
    '': iri
  }, factory)('');
} // Creates a function that allows registering and expanding prefixes


function prefixes(defaultPrefixes, factory) {
  // Add all of the default prefixes
  const prefixes = Object.create(null);

  for (const prefix in defaultPrefixes) processPrefix(prefix, defaultPrefixes[prefix]); // Set the default factory if none was specified


  factory = factory || _N3DataFactory.default; // Registers a new prefix (if an IRI was specified)
  // or retrieves a function that expands an existing prefix (if no IRI was specified)

  function processPrefix(prefix, iri) {
    // Create a new prefix if an IRI is specified or the prefix doesn't exist
    if (typeof iri === 'string') {
      // Create a function that expands the prefix
      const cache = Object.create(null);

      prefixes[prefix] = local => {
        return cache[local] || (cache[local] = factory.namedNode(iri + local));
      };
    } else if (!(prefix in prefixes)) {
      throw new Error("Unknown prefix: ".concat(prefix));
    }

    return prefixes[prefix];
  }

  return processPrefix;
}
},{"./N3DataFactory":"../node_modules/n3/src/N3DataFactory.js"}],"../node_modules/n3/src/N3DataFactory.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.termFromId = termFromId;
exports.termToId = termToId;
exports.escapeQuotes = escapeQuotes;
exports.unescapeQuotes = unescapeQuotes;
exports.Triple = exports.Quad = exports.DefaultGraph = exports.Variable = exports.BlankNode = exports.Literal = exports.NamedNode = exports.Term = exports.default = void 0;

var _IRIs = _interopRequireDefault(require("./IRIs"));

var _N3Util = require("./N3Util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// N3.js implementations of the RDF/JS core data types
// See https://github.com/rdfjs/representation-task-force/blob/master/interface-spec.md
const {
  rdf,
  xsd
} = _IRIs.default; // eslint-disable-next-line prefer-const

let DEFAULTGRAPH;
let _blankNodeCounter = 0;
const escapedLiteral = /^"(.*".*)(?="[^"]*$)/;
const quadId = /^<<("(?:""|[^"])*"[^ ]*|[^ ]+) ("(?:""|[^"])*"[^ ]*|[^ ]+) ("(?:""|[^"])*"[^ ]*|[^ ]+) ?("(?:""|[^"])*"[^ ]*|[^ ]+)?>>$/; // ## DataFactory singleton

const DataFactory = {
  namedNode,
  blankNode,
  variable,
  literal,
  defaultGraph,
  quad,
  triple: quad
};
var _default = DataFactory; // ## Term constructor

exports.default = _default;

class Term {
  constructor(id) {
    this.id = id;
  } // ### The value of this term


  get value() {
    return this.id;
  } // ### Returns whether this object represents the same term as the other


  equals(other) {
    // If both terms were created by this library,
    // equality can be computed through ids
    if (other instanceof Term) return this.id === other.id; // Otherwise, compare term type and value

    return !!other && this.termType === other.termType && this.value === other.value;
  } // ### Returns a plain object representation of this term


  toJSON() {
    return {
      termType: this.termType,
      value: this.value
    };
  }

} // ## NamedNode constructor


exports.Term = Term;

class NamedNode extends Term {
  // ### The term type of this term
  get termType() {
    return 'NamedNode';
  }

} // ## Literal constructor


exports.NamedNode = NamedNode;

class Literal extends Term {
  // ### The term type of this term
  get termType() {
    return 'Literal';
  } // ### The text value of this literal


  get value() {
    return this.id.substring(1, this.id.lastIndexOf('"'));
  } // ### The language of this literal


  get language() {
    // Find the last quotation mark (e.g., '"abc"@en-us')
    const id = this.id;
    let atPos = id.lastIndexOf('"') + 1; // If "@" it follows, return the remaining substring; empty otherwise

    return atPos < id.length && id[atPos++] === '@' ? id.substr(atPos).toLowerCase() : '';
  } // ### The datatype IRI of this literal


  get datatype() {
    return new NamedNode(this.datatypeString);
  } // ### The datatype string of this literal


  get datatypeString() {
    // Find the last quotation mark (e.g., '"abc"^^http://ex.org/types#t')
    const id = this.id,
          dtPos = id.lastIndexOf('"') + 1;
    const char = dtPos < id.length ? id[dtPos] : ''; // If "^" it follows, return the remaining substring

    return char === '^' ? id.substr(dtPos + 2) : // If "@" follows, return rdf:langString; xsd:string otherwise
    char !== '@' ? xsd.string : rdf.langString;
  } // ### Returns whether this object represents the same term as the other


  equals(other) {
    // If both literals were created by this library,
    // equality can be computed through ids
    if (other instanceof Literal) return this.id === other.id; // Otherwise, compare term type, value, language, and datatype

    return !!other && !!other.datatype && this.termType === other.termType && this.value === other.value && this.language === other.language && this.datatype.value === other.datatype.value;
  }

  toJSON() {
    return {
      termType: this.termType,
      value: this.value,
      language: this.language,
      datatype: {
        termType: 'NamedNode',
        value: this.datatypeString
      }
    };
  }

} // ## BlankNode constructor


exports.Literal = Literal;

class BlankNode extends Term {
  constructor(name) {
    super("_:".concat(name));
  } // ### The term type of this term


  get termType() {
    return 'BlankNode';
  } // ### The name of this blank node


  get value() {
    return this.id.substr(2);
  }

}

exports.BlankNode = BlankNode;

class Variable extends Term {
  constructor(name) {
    super("?".concat(name));
  } // ### The term type of this term


  get termType() {
    return 'Variable';
  } // ### The name of this variable


  get value() {
    return this.id.substr(1);
  }

} // ## DefaultGraph constructor


exports.Variable = Variable;

class DefaultGraph extends Term {
  constructor() {
    super('');
    return DEFAULTGRAPH || this;
  } // ### The term type of this term


  get termType() {
    return 'DefaultGraph';
  } // ### Returns whether this object represents the same term as the other


  equals(other) {
    // If both terms were created by this library,
    // equality can be computed through strict equality;
    // otherwise, compare term types.
    return this === other || !!other && this.termType === other.termType;
  }

} // ## DefaultGraph singleton


exports.DefaultGraph = DefaultGraph;
DEFAULTGRAPH = new DefaultGraph(); // ### Constructs a term from the given internal string ID

function termFromId(id, factory) {
  factory = factory || DataFactory; // Falsy value or empty string indicate the default graph

  if (!id) return factory.defaultGraph(); // Identify the term type based on the first character

  switch (id[0]) {
    case '?':
      return factory.variable(id.substr(1));

    case '_':
      return factory.blankNode(id.substr(2));

    case '"':
      // Shortcut for internal literals
      if (factory === DataFactory) return new Literal(id); // Literal without datatype or language

      if (id[id.length - 1] === '"') return factory.literal(id.substr(1, id.length - 2)); // Literal with datatype or language

      const endPos = id.lastIndexOf('"', id.length - 1);
      return factory.literal(id.substr(1, endPos - 1), id[endPos + 1] === '@' ? id.substr(endPos + 2) : factory.namedNode(id.substr(endPos + 3)));

    case '<':
      const components = quadId.exec(id);
      return factory.quad(termFromId(unescapeQuotes(components[1]), factory), termFromId(unescapeQuotes(components[2]), factory), termFromId(unescapeQuotes(components[3]), factory), components[4] && termFromId(unescapeQuotes(components[4]), factory));

    default:
      return factory.namedNode(id);
  }
} // ### Constructs an internal string ID from the given term or ID string


function termToId(term) {
  if (typeof term === 'string') return term;
  if (term instanceof Term && term.termType !== 'Quad') return term.id;
  if (!term) return DEFAULTGRAPH.id; // Term instantiated with another library

  switch (term.termType) {
    case 'NamedNode':
      return term.value;

    case 'BlankNode':
      return "_:".concat(term.value);

    case 'Variable':
      return "?".concat(term.value);

    case 'DefaultGraph':
      return '';

    case 'Literal':
      return "\"".concat(term.value, "\"").concat(term.language ? "@".concat(term.language) : term.datatype && term.datatype.value !== xsd.string ? "^^".concat(term.datatype.value) : '');

    case 'Quad':
      // To identify RDF* quad components, we escape quotes by doubling them.
      // This avoids the overhead of backslash parsing of Turtle-like syntaxes.
      return "<<".concat(escapeQuotes(termToId(term.subject)), " ").concat(escapeQuotes(termToId(term.predicate)), " ").concat(escapeQuotes(termToId(term.object))).concat((0, _N3Util.isDefaultGraph)(term.graph) ? '' : " ".concat(termToId(term.graph)), ">>");

    default:
      throw new Error("Unexpected termType: ".concat(term.termType));
  }
} // ## Quad constructor


class Quad extends Term {
  constructor(subject, predicate, object, graph) {
    super('');
    this.subject = subject;
    this.predicate = predicate;
    this.object = object;
    this.graph = graph || DEFAULTGRAPH;
  } // ### The term type of this term


  get termType() {
    return 'Quad';
  } // ### Returns a plain object representation of this quad


  toJSON() {
    return {
      termType: this.termType,
      subject: this.subject.toJSON(),
      predicate: this.predicate.toJSON(),
      object: this.object.toJSON(),
      graph: this.graph.toJSON()
    };
  } // ### Returns whether this object represents the same quad as the other


  equals(other) {
    return !!other && this.subject.equals(other.subject) && this.predicate.equals(other.predicate) && this.object.equals(other.object) && this.graph.equals(other.graph);
  }

}

exports.Triple = exports.Quad = Quad;

// ### Escapes the quotes within the given literal
function escapeQuotes(id) {
  return id.replace(escapedLiteral, (_, quoted) => "\"".concat(quoted.replace(/"/g, '""')));
} // ### Unescapes the quotes within the given literal


function unescapeQuotes(id) {
  return id.replace(escapedLiteral, (_, quoted) => "\"".concat(quoted.replace(/""/g, '"')));
} // ### Creates an IRI


function namedNode(iri) {
  return new NamedNode(iri);
} // ### Creates a blank node


function blankNode(name) {
  return new BlankNode(name || "n3-".concat(_blankNodeCounter++));
} // ### Creates a literal


function literal(value, languageOrDataType) {
  // Create a language-tagged string
  if (typeof languageOrDataType === 'string') return new Literal("\"".concat(value, "\"@").concat(languageOrDataType.toLowerCase())); // Automatically determine datatype for booleans and numbers

  let datatype = languageOrDataType ? languageOrDataType.value : '';

  if (datatype === '') {
    // Convert a boolean
    if (typeof value === 'boolean') datatype = xsd.boolean; // Convert an integer or double
    else if (typeof value === 'number') {
        if (Number.isFinite(value)) datatype = Number.isInteger(value) ? xsd.integer : xsd.double;else {
          datatype = xsd.double;
          if (!Number.isNaN(value)) value = value > 0 ? 'INF' : '-INF';
        }
      }
  } // Create a datatyped literal


  return datatype === '' || datatype === xsd.string ? new Literal("\"".concat(value, "\"")) : new Literal("\"".concat(value, "\"^^").concat(datatype));
} // ### Creates a variable


function variable(name) {
  return new Variable(name);
} // ### Returns the default graph


function defaultGraph() {
  return DEFAULTGRAPH;
} // ### Creates a quad


function quad(subject, predicate, object, graph) {
  return new Quad(subject, predicate, object, graph);
}
},{"./IRIs":"../node_modules/n3/src/IRIs.js","./N3Util":"../node_modules/n3/src/N3Util.js"}],"../node_modules/n3/src/N3Parser.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _N3Lexer = _interopRequireDefault(require("./N3Lexer"));

var _N3DataFactory = _interopRequireDefault(require("./N3DataFactory"));

var _IRIs = _interopRequireDefault(require("./IRIs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// **N3Parser** parses N3 documents.
let blankNodePrefix = 0; // ## Constructor

class N3Parser {
  constructor(options) {
    this._contextStack = [];
    this._graph = null; // Set the document IRI

    options = options || {};

    this._setBase(options.baseIRI);

    options.factory && initDataFactory(this, options.factory); // Set supported features depending on the format

    const format = typeof options.format === 'string' ? options.format.match(/\w*$/)[0].toLowerCase() : '',
          isTurtle = /turtle/.test(format),
          isTriG = /trig/.test(format),
          isNTriples = /triple/.test(format),
          isNQuads = /quad/.test(format),
          isN3 = this._n3Mode = /n3/.test(format),
          isLineMode = isNTriples || isNQuads;
    if (!(this._supportsNamedGraphs = !(isTurtle || isN3))) this._readPredicateOrNamedGraph = this._readPredicate; // Support triples in other graphs

    this._supportsQuads = !(isTurtle || isTriG || isNTriples || isN3); // Support nesting of triples

    this._supportsRDFStar = format === '' || /star|\*$/.test(format); // Disable relative IRIs in N-Triples or N-Quads mode

    if (isLineMode) this._resolveRelativeIRI = iri => {
      return null;
    };
    this._blankNodePrefix = typeof options.blankNodePrefix !== 'string' ? '' : options.blankNodePrefix.replace(/^(?!_:)/, '_:');
    this._lexer = options.lexer || new _N3Lexer.default({
      lineMode: isLineMode,
      n3: isN3
    }); // Disable explicit quantifiers by default

    this._explicitQuantifiers = !!options.explicitQuantifiers;
  } // ## Static class methods
  // ### `_resetBlankNodePrefix` restarts blank node prefix identification


  static _resetBlankNodePrefix() {
    blankNodePrefix = 0;
  } // ## Private methods
  // ### `_setBase` sets the base IRI to resolve relative IRIs


  _setBase(baseIRI) {
    if (!baseIRI) {
      this._base = '';
      this._basePath = '';
    } else {
      // Remove fragment if present
      const fragmentPos = baseIRI.indexOf('#');
      if (fragmentPos >= 0) baseIRI = baseIRI.substr(0, fragmentPos); // Set base IRI and its components

      this._base = baseIRI;
      this._basePath = baseIRI.indexOf('/') < 0 ? baseIRI : baseIRI.replace(/[^\/?]*(?:\?.*)?$/, '');
      baseIRI = baseIRI.match(/^(?:([a-z][a-z0-9+.-]*:))?(?:\/\/[^\/]*)?/i);
      this._baseRoot = baseIRI[0];
      this._baseScheme = baseIRI[1];
    }
  } // ### `_saveContext` stores the current parsing context
  // when entering a new scope (list, blank node, formula)


  _saveContext(type, graph, subject, predicate, object) {
    const n3Mode = this._n3Mode;

    this._contextStack.push({
      subject: subject,
      predicate: predicate,
      object: object,
      graph: graph,
      type: type,
      inverse: n3Mode ? this._inversePredicate : false,
      blankPrefix: n3Mode ? this._prefixes._ : '',
      quantified: n3Mode ? this._quantified : null
    }); // The settings below only apply to N3 streams


    if (n3Mode) {
      // Every new scope resets the predicate direction
      this._inversePredicate = false; // In N3, blank nodes are scoped to a formula
      // (using a dot as separator, as a blank node label cannot start with it)

      this._prefixes._ = this._graph ? "".concat(this._graph.id.substr(2), ".") : '.'; // Quantifiers are scoped to a formula

      this._quantified = Object.create(this._quantified);
    }
  } // ### `_restoreContext` restores the parent context
  // when leaving a scope (list, blank node, formula)


  _restoreContext() {
    const context = this._contextStack.pop(),
          n3Mode = this._n3Mode;

    this._subject = context.subject;
    this._predicate = context.predicate;
    this._object = context.object;
    this._graph = context.graph; // The settings below only apply to N3 streams

    if (n3Mode) {
      this._inversePredicate = context.inverse;
      this._prefixes._ = context.blankPrefix;
      this._quantified = context.quantified;
    }
  } // ### `_readInTopContext` reads a token when in the top context


  _readInTopContext(token) {
    switch (token.type) {
      // If an EOF token arrives in the top context, signal that we're done
      case 'eof':
        if (this._graph !== null) return this._error('Unclosed graph', token);
        delete this._prefixes._;
        return this._callback(null, null, this._prefixes);
      // It could be a prefix declaration

      case 'PREFIX':
        this._sparqlStyle = true;

      case '@prefix':
        return this._readPrefix;
      // It could be a base declaration

      case 'BASE':
        this._sparqlStyle = true;

      case '@base':
        return this._readBaseIRI;
      // It could be a graph

      case '{':
        if (this._supportsNamedGraphs) {
          this._graph = '';
          this._subject = null;
          return this._readSubject;
        }

      case 'GRAPH':
        if (this._supportsNamedGraphs) return this._readNamedGraphLabel;
      // Otherwise, the next token must be a subject

      default:
        return this._readSubject(token);
    }
  } // ### `_readEntity` reads an IRI, prefixed name, blank node, or variable


  _readEntity(token, quantifier) {
    let value;

    switch (token.type) {
      // Read a relative or absolute IRI
      case 'IRI':
      case 'typeIRI':
        const iri = this._resolveIRI(token.value);

        if (iri === null) return this._error('Invalid IRI', token);
        value = this._namedNode(iri);
        break;
      // Read a prefixed name

      case 'type':
      case 'prefixed':
        const prefix = this._prefixes[token.prefix];
        if (prefix === undefined) return this._error("Undefined prefix \"".concat(token.prefix, ":\""), token);
        value = this._namedNode(prefix + token.value);
        break;
      // Read a blank node

      case 'blank':
        value = this._blankNode(this._prefixes[token.prefix] + token.value);
        break;
      // Read a variable

      case 'var':
        value = this._variable(token.value.substr(1));
        break;
      // Everything else is not an entity

      default:
        return this._error("Expected entity but got ".concat(token.type), token);
    } // In N3 mode, replace the entity if it is quantified


    if (!quantifier && this._n3Mode && value.id in this._quantified) value = this._quantified[value.id];
    return value;
  } // ### `_readSubject` reads a quad's subject


  _readSubject(token) {
    this._predicate = null;

    switch (token.type) {
      case '[':
        // Start a new quad with a new blank node as subject
        this._saveContext('blank', this._graph, this._subject = this._blankNode(), null, null);

        return this._readBlankNodeHead;

      case '(':
        // Start a new list
        this._saveContext('list', this._graph, this.RDF_NIL, null, null);

        this._subject = null;
        return this._readListItem;

      case '{':
        // Start a new formula
        if (!this._n3Mode) return this._error('Unexpected graph', token);

        this._saveContext('formula', this._graph, this._graph = this._blankNode(), null, null);

        return this._readSubject;

      case '}':
        // No subject; the graph in which we are reading is closed instead
        return this._readPunctuation(token);

      case '@forSome':
        if (!this._n3Mode) return this._error('Unexpected "@forSome"', token);
        this._subject = null;
        this._predicate = this.N3_FORSOME;
        this._quantifier = this._blankNode;
        return this._readQuantifierList;

      case '@forAll':
        if (!this._n3Mode) return this._error('Unexpected "@forAll"', token);
        this._subject = null;
        this._predicate = this.N3_FORALL;
        this._quantifier = this._variable;
        return this._readQuantifierList;

      case 'literal':
        if (!this._n3Mode) return this._error('Unexpected literal', token);

        if (token.prefix.length === 0) {
          this._literalValue = token.value;
          return this._completeSubjectLiteral;
        } else this._subject = this._literal(token.value, this._namedNode(token.prefix));

        break;

      case '<<':
        if (!this._supportsRDFStar) return this._error('Unexpected RDF* syntax', token);

        this._saveContext('<<', this._graph, null, null, null);

        this._graph = null;
        return this._readSubject;

      default:
        // Read the subject entity
        if ((this._subject = this._readEntity(token)) === undefined) return; // In N3 mode, the subject might be a path

        if (this._n3Mode) return this._getPathReader(this._readPredicateOrNamedGraph);
    } // The next token must be a predicate,
    // or, if the subject was actually a graph IRI, a named graph


    return this._readPredicateOrNamedGraph;
  } // ### `_readPredicate` reads a quad's predicate


  _readPredicate(token) {
    const type = token.type;

    switch (type) {
      case 'inverse':
        this._inversePredicate = true;

      case 'abbreviation':
        this._predicate = this.ABBREVIATIONS[token.value];
        break;

      case '.':
      case ']':
      case '}':
        // Expected predicate didn't come, must have been trailing semicolon
        if (this._predicate === null) return this._error("Unexpected ".concat(type), token);
        this._subject = null;
        return type === ']' ? this._readBlankNodeTail(token) : this._readPunctuation(token);

      case ';':
        // Additional semicolons can be safely ignored
        return this._predicate !== null ? this._readPredicate : this._error('Expected predicate but got ;', token);

      case 'blank':
        if (!this._n3Mode) return this._error('Disallowed blank node as predicate', token);

      default:
        if ((this._predicate = this._readEntity(token)) === undefined) return;
    } // The next token must be an object


    return this._readObject;
  } // ### `_readObject` reads a quad's object


  _readObject(token) {
    switch (token.type) {
      case 'literal':
        // Regular literal, can still get a datatype or language
        if (token.prefix.length === 0) {
          this._literalValue = token.value;
          return this._readDataTypeOrLang;
        } // Pre-datatyped string literal (prefix stores the datatype)
        else this._object = this._literal(token.value, this._namedNode(token.prefix));

        break;

      case '[':
        // Start a new quad with a new blank node as subject
        this._saveContext('blank', this._graph, this._subject, this._predicate, this._subject = this._blankNode());

        return this._readBlankNodeHead;

      case '(':
        // Start a new list
        this._saveContext('list', this._graph, this._subject, this._predicate, this.RDF_NIL);

        this._subject = null;
        return this._readListItem;

      case '{':
        // Start a new formula
        if (!this._n3Mode) return this._error('Unexpected graph', token);

        this._saveContext('formula', this._graph, this._subject, this._predicate, this._graph = this._blankNode());

        return this._readSubject;

      case '<<':
        if (!this._supportsRDFStar) return this._error('Unexpected RDF* syntax', token);

        this._saveContext('<<', this._graph, this._subject, this._predicate, null);

        this._graph = null;
        return this._readSubject;

      default:
        // Read the object entity
        if ((this._object = this._readEntity(token)) === undefined) return; // In N3 mode, the object might be a path

        if (this._n3Mode) return this._getPathReader(this._getContextEndReader());
    }

    return this._getContextEndReader();
  } // ### `_readPredicateOrNamedGraph` reads a quad's predicate, or a named graph


  _readPredicateOrNamedGraph(token) {
    return token.type === '{' ? this._readGraph(token) : this._readPredicate(token);
  } // ### `_readGraph` reads a graph


  _readGraph(token) {
    if (token.type !== '{') return this._error("Expected graph but got ".concat(token.type), token); // The "subject" we read is actually the GRAPH's label

    this._graph = this._subject, this._subject = null;
    return this._readSubject;
  } // ### `_readBlankNodeHead` reads the head of a blank node


  _readBlankNodeHead(token) {
    if (token.type === ']') {
      this._subject = null;
      return this._readBlankNodeTail(token);
    } else {
      this._predicate = null;
      return this._readPredicate(token);
    }
  } // ### `_readBlankNodeTail` reads the end of a blank node


  _readBlankNodeTail(token) {
    if (token.type !== ']') return this._readBlankNodePunctuation(token); // Store blank node quad

    if (this._subject !== null) this._emit(this._subject, this._predicate, this._object, this._graph); // Restore the parent context containing this blank node

    const empty = this._predicate === null;

    this._restoreContext(); // If the blank node was the subject, continue reading the predicate


    if (this._object === null) // If the blank node was empty, it could be a named graph label
      return empty ? this._readPredicateOrNamedGraph : this._readPredicateAfterBlank; // If the blank node was the object, restore previous context and read punctuation
    else return this._getContextEndReader();
  } // ### `_readPredicateAfterBlank` reads a predicate after an anonymous blank node


  _readPredicateAfterBlank(token) {
    switch (token.type) {
      case '.':
      case '}':
        // No predicate is coming if the triple is terminated here
        this._subject = null;
        return this._readPunctuation(token);

      default:
        return this._readPredicate(token);
    }
  } // ### `_readListItem` reads items from a list


  _readListItem(token) {
    let item = null,
        // The item of the list
    list = null,
        // The list itself
    next = this._readListItem; // The next function to execute

    const previousList = this._subject,
          // The previous list that contains this list
    stack = this._contextStack,
          // The stack of parent contexts
    parent = stack[stack.length - 1]; // The parent containing the current list

    switch (token.type) {
      case '[':
        // Stack the current list quad and start a new quad with a blank node as subject
        this._saveContext('blank', this._graph, list = this._blankNode(), this.RDF_FIRST, this._subject = item = this._blankNode());

        next = this._readBlankNodeHead;
        break;

      case '(':
        // Stack the current list quad and start a new list
        this._saveContext('list', this._graph, list = this._blankNode(), this.RDF_FIRST, this.RDF_NIL);

        this._subject = null;
        break;

      case ')':
        // Closing the list; restore the parent context
        this._restoreContext(); // If this list is contained within a parent list, return the membership quad here.
        // This will be `<parent list element> rdf:first <this list>.`.


        if (stack.length !== 0 && stack[stack.length - 1].type === 'list') this._emit(this._subject, this._predicate, this._object, this._graph); // Was this list the parent's subject?

        if (this._predicate === null) {
          // The next token is the predicate
          next = this._readPredicate; // No list tail if this was an empty list

          if (this._subject === this.RDF_NIL) return next;
        } // The list was in the parent context's object
        else {
            next = this._getContextEndReader(); // No list tail if this was an empty list

            if (this._object === this.RDF_NIL) return next;
          } // Close the list by making the head nil


        list = this.RDF_NIL;
        break;

      case 'literal':
        // Regular literal, can still get a datatype or language
        if (token.prefix.length === 0) {
          this._literalValue = token.value;
          next = this._readListItemDataTypeOrLang;
        } // Pre-datatyped string literal (prefix stores the datatype)
        else {
            item = this._literal(token.value, this._namedNode(token.prefix));
            next = this._getContextEndReader();
          }

        break;

      case '{':
        // Start a new formula
        if (!this._n3Mode) return this._error('Unexpected graph', token);

        this._saveContext('formula', this._graph, this._subject, this._predicate, this._graph = this._blankNode());

        return this._readSubject;

      default:
        if ((item = this._readEntity(token)) === undefined) return;
    } // Create a new blank node if no item head was assigned yet


    if (list === null) this._subject = list = this._blankNode(); // Is this the first element of the list?

    if (previousList === null) {
      // This list is either the subject or the object of its parent
      if (parent.predicate === null) parent.subject = list;else parent.object = list;
    } else {
      // Continue the previous list with the current list
      this._emit(previousList, this.RDF_REST, list, this._graph);
    } // If an item was read, add it to the list


    if (item !== null) {
      // In N3 mode, the item might be a path
      if (this._n3Mode && (token.type === 'IRI' || token.type === 'prefixed')) {
        // Create a new context to add the item's path
        this._saveContext('item', this._graph, list, this.RDF_FIRST, item);

        this._subject = item, this._predicate = null; // _readPath will restore the context and output the item

        return this._getPathReader(this._readListItem);
      } // Output the item


      this._emit(list, this.RDF_FIRST, item, this._graph);
    }

    return next;
  } // ### `_readDataTypeOrLang` reads an _optional_ datatype or language


  _readDataTypeOrLang(token) {
    return this._completeObjectLiteral(token, false);
  } // ### `_readListItemDataTypeOrLang` reads an _optional_ datatype or language in a list


  _readListItemDataTypeOrLang(token) {
    return this._completeObjectLiteral(token, true);
  } // ### `_completeLiteral` completes a literal with an optional datatype or language


  _completeLiteral(token) {
    // Create a simple string literal by default
    let literal = this._literal(this._literalValue);

    switch (token.type) {
      // Create a datatyped literal
      case 'type':
      case 'typeIRI':
        const datatype = this._readEntity(token);

        if (datatype === undefined) return; // No datatype means an error occurred

        literal = this._literal(this._literalValue, datatype);
        token = null;
        break;
      // Create a language-tagged string

      case 'langcode':
        literal = this._literal(this._literalValue, token.value);
        token = null;
        break;
    }

    return {
      token,
      literal
    };
  } // Completes a literal in subject position


  _completeSubjectLiteral(token) {
    this._subject = this._completeLiteral(token).literal;
    return this._readPredicateOrNamedGraph;
  } // Completes a literal in object position


  _completeObjectLiteral(token, listItem) {
    const completed = this._completeLiteral(token);

    if (!completed) return;
    this._object = completed.literal; // If this literal was part of a list, write the item
    // (we could also check the context stack, but passing in a flag is faster)

    if (listItem) this._emit(this._subject, this.RDF_FIRST, this._object, this._graph); // If the token was consumed, continue with the rest of the input

    if (completed.token === null) return this._getContextEndReader(); // Otherwise, consume the token now
    else {
        this._readCallback = this._getContextEndReader();
        return this._readCallback(completed.token);
      }
  } // ### `_readFormulaTail` reads the end of a formula


  _readFormulaTail(token) {
    if (token.type !== '}') return this._readPunctuation(token); // Store the last quad of the formula

    if (this._subject !== null) this._emit(this._subject, this._predicate, this._object, this._graph); // Restore the parent context containing this formula

    this._restoreContext(); // If the formula was the subject, continue reading the predicate.
    // If the formula was the object, read punctuation.


    return this._object === null ? this._readPredicate : this._getContextEndReader();
  } // ### `_readPunctuation` reads punctuation between quads or quad parts


  _readPunctuation(token) {
    let next,
        graph = this._graph;
    const subject = this._subject,
          inversePredicate = this._inversePredicate;

    switch (token.type) {
      // A closing brace ends a graph
      case '}':
        if (this._graph === null) return this._error('Unexpected graph closing', token);
        if (this._n3Mode) return this._readFormulaTail(token);
        this._graph = null;
      // A dot just ends the statement, without sharing anything with the next

      case '.':
        this._subject = null;
        next = this._contextStack.length ? this._readSubject : this._readInTopContext;
        if (inversePredicate) this._inversePredicate = false;
        break;
      // Semicolon means the subject is shared; predicate and object are different

      case ';':
        next = this._readPredicate;
        break;
      // Comma means both the subject and predicate are shared; the object is different

      case ',':
        next = this._readObject;
        break;

      default:
        // An entity means this is a quad (only allowed if not already inside a graph)
        if (this._supportsQuads && this._graph === null && (graph = this._readEntity(token)) !== undefined) {
          next = this._readQuadPunctuation;
          break;
        }

        return this._error("Expected punctuation to follow \"".concat(this._object.id, "\""), token);
    } // A quad has been completed now, so return it


    if (subject !== null) {
      const predicate = this._predicate,
            object = this._object;
      if (!inversePredicate) this._emit(subject, predicate, object, graph);else this._emit(object, predicate, subject, graph);
    }

    return next;
  } // ### `_readBlankNodePunctuation` reads punctuation in a blank node


  _readBlankNodePunctuation(token) {
    let next;

    switch (token.type) {
      // Semicolon means the subject is shared; predicate and object are different
      case ';':
        next = this._readPredicate;
        break;
      // Comma means both the subject and predicate are shared; the object is different

      case ',':
        next = this._readObject;
        break;

      default:
        return this._error("Expected punctuation to follow \"".concat(this._object.id, "\""), token);
    } // A quad has been completed now, so return it


    this._emit(this._subject, this._predicate, this._object, this._graph);

    return next;
  } // ### `_readQuadPunctuation` reads punctuation after a quad


  _readQuadPunctuation(token) {
    if (token.type !== '.') return this._error('Expected dot to follow quad', token);
    return this._readInTopContext;
  } // ### `_readPrefix` reads the prefix of a prefix declaration


  _readPrefix(token) {
    if (token.type !== 'prefix') return this._error('Expected prefix to follow @prefix', token);
    this._prefix = token.value;
    return this._readPrefixIRI;
  } // ### `_readPrefixIRI` reads the IRI of a prefix declaration


  _readPrefixIRI(token) {
    if (token.type !== 'IRI') return this._error("Expected IRI to follow prefix \"".concat(this._prefix, ":\""), token);

    const prefixNode = this._readEntity(token);

    this._prefixes[this._prefix] = prefixNode.value;

    this._prefixCallback(this._prefix, prefixNode);

    return this._readDeclarationPunctuation;
  } // ### `_readBaseIRI` reads the IRI of a base declaration


  _readBaseIRI(token) {
    const iri = token.type === 'IRI' && this._resolveIRI(token.value);

    if (!iri) return this._error('Expected valid IRI to follow base declaration', token);

    this._setBase(iri);

    return this._readDeclarationPunctuation;
  } // ### `_readNamedGraphLabel` reads the label of a named graph


  _readNamedGraphLabel(token) {
    switch (token.type) {
      case 'IRI':
      case 'blank':
      case 'prefixed':
        return this._readSubject(token), this._readGraph;

      case '[':
        return this._readNamedGraphBlankLabel;

      default:
        return this._error('Invalid graph label', token);
    }
  } // ### `_readNamedGraphLabel` reads a blank node label of a named graph


  _readNamedGraphBlankLabel(token) {
    if (token.type !== ']') return this._error('Invalid graph label', token);
    this._subject = this._blankNode();
    return this._readGraph;
  } // ### `_readDeclarationPunctuation` reads the punctuation of a declaration


  _readDeclarationPunctuation(token) {
    // SPARQL-style declarations don't have punctuation
    if (this._sparqlStyle) {
      this._sparqlStyle = false;
      return this._readInTopContext(token);
    }

    if (token.type !== '.') return this._error('Expected declaration to end with a dot', token);
    return this._readInTopContext;
  } // Reads a list of quantified symbols from a @forSome or @forAll statement


  _readQuantifierList(token) {
    let entity;

    switch (token.type) {
      case 'IRI':
      case 'prefixed':
        if ((entity = this._readEntity(token, true)) !== undefined) break;

      default:
        return this._error("Unexpected ".concat(token.type), token);
    } // Without explicit quantifiers, map entities to a quantified entity


    if (!this._explicitQuantifiers) this._quantified[entity.id] = this._quantifier(this._blankNode().value); // With explicit quantifiers, output the reified quantifier
    else {
        // If this is the first item, start a new quantifier list
        if (this._subject === null) this._emit(this._graph || this.DEFAULTGRAPH, this._predicate, this._subject = this._blankNode(), this.QUANTIFIERS_GRAPH); // Otherwise, continue the previous list
        else this._emit(this._subject, this.RDF_REST, this._subject = this._blankNode(), this.QUANTIFIERS_GRAPH); // Output the list item

        this._emit(this._subject, this.RDF_FIRST, entity, this.QUANTIFIERS_GRAPH);
      }
    return this._readQuantifierPunctuation;
  } // Reads punctuation from a @forSome or @forAll statement


  _readQuantifierPunctuation(token) {
    // Read more quantifiers
    if (token.type === ',') return this._readQuantifierList; // End of the quantifier list
    else {
        // With explicit quantifiers, close the quantifier list
        if (this._explicitQuantifiers) {
          this._emit(this._subject, this.RDF_REST, this.RDF_NIL, this.QUANTIFIERS_GRAPH);

          this._subject = null;
        } // Read a dot


        this._readCallback = this._getContextEndReader();
        return this._readCallback(token);
      }
  } // ### `_getPathReader` reads a potential path and then resumes with the given function


  _getPathReader(afterPath) {
    this._afterPath = afterPath;
    return this._readPath;
  } // ### `_readPath` reads a potential path


  _readPath(token) {
    switch (token.type) {
      // Forward path
      case '!':
        return this._readForwardPath;
      // Backward path

      case '^':
        return this._readBackwardPath;
      // Not a path; resume reading where we left off

      default:
        const stack = this._contextStack,
              parent = stack.length && stack[stack.length - 1]; // If we were reading a list item, we still need to output it

        if (parent && parent.type === 'item') {
          // The list item is the remaining subejct after reading the path
          const item = this._subject; // Switch back to the context of the list

          this._restoreContext(); // Output the list item


          this._emit(this._subject, this.RDF_FIRST, item, this._graph);
        }

        return this._afterPath(token);
    }
  } // ### `_readForwardPath` reads a '!' path


  _readForwardPath(token) {
    let subject, predicate;

    const object = this._blankNode(); // The next token is the predicate


    if ((predicate = this._readEntity(token)) === undefined) return; // If we were reading a subject, replace the subject by the path's object

    if (this._predicate === null) subject = this._subject, this._subject = object; // If we were reading an object, replace the subject by the path's object
    else subject = this._object, this._object = object; // Emit the path's current quad and read its next section

    this._emit(subject, predicate, object, this._graph);

    return this._readPath;
  } // ### `_readBackwardPath` reads a '^' path


  _readBackwardPath(token) {
    const subject = this._blankNode();

    let predicate, object; // The next token is the predicate

    if ((predicate = this._readEntity(token)) === undefined) return; // If we were reading a subject, replace the subject by the path's subject

    if (this._predicate === null) object = this._subject, this._subject = subject; // If we were reading an object, replace the subject by the path's subject
    else object = this._object, this._object = subject; // Emit the path's current quad and read its next section

    this._emit(subject, predicate, object, this._graph);

    return this._readPath;
  } // ### `_readRDFStarTailOrGraph` reads the graph of a nested RDF* quad or the end of a nested RDF* triple


  _readRDFStarTailOrGraph(token) {
    if (token.type !== '>>') {
      // An entity means this is a quad (only allowed if not already inside a graph)
      if (this._supportsQuads && this._graph === null && (this._graph = this._readEntity(token)) !== undefined) return this._readRDFStarTail;
      return this._error("Expected >> to follow \"".concat(this._object.id, "\""), token);
    }

    return this._readRDFStarTail(token);
  } // ### `_readRDFStarTail` reads the end of a nested RDF* triple


  _readRDFStarTail(token) {
    if (token.type !== '>>') return this._error("Expected >> but got ".concat(token.type), token); // Read the quad and restore the previous context

    const quad = this._quad(this._subject, this._predicate, this._object, this._graph || this.DEFAULTGRAPH);

    this._restoreContext(); // If the triple was the subject, continue by reading the predicate.


    if (this._subject === null) {
      this._subject = quad;
      return this._readPredicate;
    } // If the triple was the object, read context end.
    else {
        this._object = quad;
        return this._getContextEndReader();
      }
  } // ### `_getContextEndReader` gets the next reader function at the end of a context


  _getContextEndReader() {
    const contextStack = this._contextStack;
    if (!contextStack.length) return this._readPunctuation;

    switch (contextStack[contextStack.length - 1].type) {
      case 'blank':
        return this._readBlankNodeTail;

      case 'list':
        return this._readListItem;

      case 'formula':
        return this._readFormulaTail;

      case '<<':
        return this._readRDFStarTailOrGraph;
    }
  } // ### `_emit` sends a quad through the callback


  _emit(subject, predicate, object, graph) {
    this._callback(null, this._quad(subject, predicate, object, graph || this.DEFAULTGRAPH));
  } // ### `_error` emits an error message through the callback


  _error(message, token) {
    const err = new Error("".concat(message, " on line ").concat(token.line, "."));
    err.context = {
      token: token,
      line: token.line,
      previousToken: this._lexer.previousToken
    };

    this._callback(err);

    this._callback = noop;
  } // ### `_resolveIRI` resolves an IRI against the base path


  _resolveIRI(iri) {
    return /^[a-z][a-z0-9+.-]*:/i.test(iri) ? iri : this._resolveRelativeIRI(iri);
  } // ### `_resolveRelativeIRI` resolves an IRI against the base path,
  // assuming that a base path has been set and that the IRI is indeed relative


  _resolveRelativeIRI(iri) {
    // An empty relative IRI indicates the base IRI
    if (!iri.length) return this._base; // Decide resolving strategy based in the first character

    switch (iri[0]) {
      // Resolve relative fragment IRIs against the base IRI
      case '#':
        return this._base + iri;
      // Resolve relative query string IRIs by replacing the query string

      case '?':
        return this._base.replace(/(?:\?.*)?$/, iri);
      // Resolve root-relative IRIs at the root of the base IRI

      case '/':
        // Resolve scheme-relative IRIs to the scheme
        return (iri[1] === '/' ? this._baseScheme : this._baseRoot) + this._removeDotSegments(iri);
      // Resolve all other IRIs at the base IRI's path

      default:
        // Relative IRIs cannot contain a colon in the first path segment
        return /^[^/:]*:/.test(iri) ? null : this._removeDotSegments(this._basePath + iri);
    }
  } // ### `_removeDotSegments` resolves './' and '../' path segments in an IRI as per RFC3986


  _removeDotSegments(iri) {
    // Don't modify the IRI if it does not contain any dot segments
    if (!/(^|\/)\.\.?($|[/#?])/.test(iri)) return iri; // Start with an imaginary slash before the IRI in order to resolve trailing './' and '../'

    const length = iri.length;
    let result = '',
        i = -1,
        pathStart = -1,
        segmentStart = 0,
        next = '/';

    while (i < length) {
      switch (next) {
        // The path starts with the first slash after the authority
        case ':':
          if (pathStart < 0) {
            // Skip two slashes before the authority
            if (iri[++i] === '/' && iri[++i] === '/') // Skip to slash after the authority
              while ((pathStart = i + 1) < length && iri[pathStart] !== '/') i = pathStart;
          }

          break;
        // Don't modify a query string or fragment

        case '?':
        case '#':
          i = length;
          break;
        // Handle '/.' or '/..' path segments

        case '/':
          if (iri[i + 1] === '.') {
            next = iri[++i + 1];

            switch (next) {
              // Remove a '/.' segment
              case '/':
                result += iri.substring(segmentStart, i - 1);
                segmentStart = i + 1;
                break;
              // Remove a trailing '/.' segment

              case undefined:
              case '?':
              case '#':
                return result + iri.substring(segmentStart, i) + iri.substr(i + 1);
              // Remove a '/..' segment

              case '.':
                next = iri[++i + 1];

                if (next === undefined || next === '/' || next === '?' || next === '#') {
                  result += iri.substring(segmentStart, i - 2); // Try to remove the parent path from result

                  if ((segmentStart = result.lastIndexOf('/')) >= pathStart) result = result.substr(0, segmentStart); // Remove a trailing '/..' segment

                  if (next !== '/') return "".concat(result, "/").concat(iri.substr(i + 1));
                  segmentStart = i + 1;
                }

            }
          }

      }

      next = iri[++i];
    }

    return result + iri.substring(segmentStart);
  } // ## Public methods
  // ### `parse` parses the N3 input and emits each parsed quad through the callback


  parse(input, quadCallback, prefixCallback) {
    // The read callback is the next function to be executed when a token arrives.
    // We start reading in the top context.
    this._readCallback = this._readInTopContext;
    this._sparqlStyle = false;
    this._prefixes = Object.create(null);
    this._prefixes._ = this._blankNodePrefix ? this._blankNodePrefix.substr(2) : "b".concat(blankNodePrefix++, "_");
    this._prefixCallback = prefixCallback || noop;
    this._inversePredicate = false;
    this._quantified = Object.create(null); // Parse synchronously if no quad callback is given

    if (!quadCallback) {
      const quads = [];
      let error;

      this._callback = (e, t) => {
        e ? error = e : t && quads.push(t);
      };

      this._lexer.tokenize(input).every(token => {
        return this._readCallback = this._readCallback(token);
      });

      if (error) throw error;
      return quads;
    } // Parse asynchronously otherwise, executing the read callback when a token arrives


    this._callback = quadCallback;

    this._lexer.tokenize(input, (error, token) => {
      if (error !== null) this._callback(error), this._callback = noop;else if (this._readCallback) this._readCallback = this._readCallback(token);
    });
  }

} // The empty function


exports.default = N3Parser;

function noop() {} // Initializes the parser with the given data factory


function initDataFactory(parser, factory) {
  // Set factory methods
  const namedNode = factory.namedNode;
  parser._namedNode = namedNode;
  parser._blankNode = factory.blankNode;
  parser._literal = factory.literal;
  parser._variable = factory.variable;
  parser._quad = factory.quad;
  parser.DEFAULTGRAPH = factory.defaultGraph(); // Set common named nodes

  parser.RDF_FIRST = namedNode(_IRIs.default.rdf.first);
  parser.RDF_REST = namedNode(_IRIs.default.rdf.rest);
  parser.RDF_NIL = namedNode(_IRIs.default.rdf.nil);
  parser.N3_FORALL = namedNode(_IRIs.default.r.forAll);
  parser.N3_FORSOME = namedNode(_IRIs.default.r.forSome);
  parser.ABBREVIATIONS = {
    'a': namedNode(_IRIs.default.rdf.type),
    '=': namedNode(_IRIs.default.owl.sameAs),
    '>': namedNode(_IRIs.default.log.implies)
  };
  parser.QUANTIFIERS_GRAPH = namedNode('urn:n3:quantifiers');
}

initDataFactory(N3Parser.prototype, _N3DataFactory.default);
},{"./N3Lexer":"../node_modules/n3/src/N3Lexer.js","./N3DataFactory":"../node_modules/n3/src/N3DataFactory.js","./IRIs":"../node_modules/n3/src/IRIs.js"}],"../node_modules/n3/src/N3Writer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _IRIs = _interopRequireDefault(require("./IRIs"));

var _N3DataFactory = _interopRequireWildcard(require("./N3DataFactory"));

var _N3Util = require("./N3Util");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// **N3Writer** writes N3 documents.
const DEFAULTGRAPH = _N3DataFactory.default.defaultGraph();

const {
  rdf,
  xsd
} = _IRIs.default; // Characters in literals that require escaping

const escape = /["\\\t\n\r\b\f\u0000-\u0019\ud800-\udbff]/,
      escapeAll = /["\\\t\n\r\b\f\u0000-\u0019]|[\ud800-\udbff][\udc00-\udfff]/g,
      escapedCharacters = {
  '\\': '\\\\',
  '"': '\\"',
  '\t': '\\t',
  '\n': '\\n',
  '\r': '\\r',
  '\b': '\\b',
  '\f': '\\f'
}; // ## Placeholder class to represent already pretty-printed terms

class SerializedTerm extends _N3DataFactory.Term {
  // Pretty-printed nodes are not equal to any other node
  // (e.g., [] does not equal [])
  equals() {
    return false;
  }

} // ## Constructor


class N3Writer {
  constructor(outputStream, options) {
    // ### `_prefixRegex` matches a prefixed name or IRI that begins with one of the added prefixes
    this._prefixRegex = /$0^/; // Shift arguments if the first argument is not a stream

    if (outputStream && typeof outputStream.write !== 'function') options = outputStream, outputStream = null;
    options = options || {};
    this._lists = options.lists; // If no output stream given, send the output as string through the end callback

    if (!outputStream) {
      let output = '';
      this._outputStream = {
        write(chunk, encoding, done) {
          output += chunk;
          done && done();
        },

        end: done => {
          done && done(null, output);
        }
      };
      this._endStream = true;
    } else {
      this._outputStream = outputStream;
      this._endStream = options.end === undefined ? true : !!options.end;
    } // Initialize writer, depending on the format


    this._subject = null;

    if (!/triple|quad/i.test(options.format)) {
      this._graph = DEFAULTGRAPH;
      this._prefixIRIs = Object.create(null);
      options.prefixes && this.addPrefixes(options.prefixes);
    } else {
      this._writeQuad = this._writeQuadLine;
    }
  } // ## Private methods
  // ### Whether the current graph is the default graph


  get _inDefaultGraph() {
    return DEFAULTGRAPH.equals(this._graph);
  } // ### `_write` writes the argument to the output stream


  _write(string, callback) {
    this._outputStream.write(string, 'utf8', callback);
  } // ### `_writeQuad` writes the quad to the output stream


  _writeQuad(subject, predicate, object, graph, done) {
    try {
      // Write the graph's label if it has changed
      if (!graph.equals(this._graph)) {
        // Close the previous graph and start the new one
        this._write((this._subject === null ? '' : this._inDefaultGraph ? '.\n' : '\n}\n') + (DEFAULTGRAPH.equals(graph) ? '' : "".concat(this._encodeIriOrBlank(graph), " {\n")));

        this._graph = graph;
        this._subject = null;
      } // Don't repeat the subject if it's the same


      if (subject.equals(this._subject)) {
        // Don't repeat the predicate if it's the same
        if (predicate.equals(this._predicate)) this._write(", ".concat(this._encodeObject(object)), done); // Same subject, different predicate
        else this._write(";\n    ".concat(this._encodePredicate(this._predicate = predicate), " ").concat(this._encodeObject(object)), done);
      } // Different subject; write the whole quad
      else this._write("".concat((this._subject === null ? '' : '.\n') + this._encodeSubject(this._subject = subject), " ").concat(this._encodePredicate(this._predicate = predicate), " ").concat(this._encodeObject(object)), done);
    } catch (error) {
      done && done(error);
    }
  } // ### `_writeQuadLine` writes the quad to the output stream as a single line


  _writeQuadLine(subject, predicate, object, graph, done) {
    // Write the quad without prefixes
    delete this._prefixMatch;

    this._write(this.quadToString(subject, predicate, object, graph), done);
  } // ### `quadToString` serializes a quad as a string


  quadToString(subject, predicate, object, graph) {
    return "".concat(this._encodeSubject(subject), " ").concat(this._encodeIriOrBlank(predicate), " ").concat(this._encodeObject(object)).concat(graph && graph.value ? " ".concat(this._encodeIriOrBlank(graph), " .\n") : ' .\n');
  } // ### `quadsToString` serializes an array of quads as a string


  quadsToString(quads) {
    return quads.map(t => {
      return this.quadToString(t.subject, t.predicate, t.object, t.graph);
    }).join('');
  } // ### `_encodeSubject` represents a subject


  _encodeSubject(entity) {
    return entity.termType === 'Quad' ? this._encodeQuad(entity) : this._encodeIriOrBlank(entity);
  } // ### `_encodeIriOrBlank` represents an IRI or blank node


  _encodeIriOrBlank(entity) {
    // A blank node or list is represented as-is
    if (entity.termType !== 'NamedNode') {
      // If it is a list head, pretty-print it
      if (this._lists && entity.value in this._lists) entity = this.list(this._lists[entity.value]);
      return 'id' in entity ? entity.id : "_:".concat(entity.value);
    } // Escape special characters


    let iri = entity.value;
    if (escape.test(iri)) iri = iri.replace(escapeAll, characterReplacer); // Try to represent the IRI as prefixed name

    const prefixMatch = this._prefixRegex.exec(iri);

    return !prefixMatch ? "<".concat(iri, ">") : !prefixMatch[1] ? iri : this._prefixIRIs[prefixMatch[1]] + prefixMatch[2];
  } // ### `_encodeLiteral` represents a literal


  _encodeLiteral(literal) {
    // Escape special characters
    let value = literal.value;
    if (escape.test(value)) value = value.replace(escapeAll, characterReplacer); // Write the literal, possibly with type or language

    if (literal.language) return "\"".concat(value, "\"@").concat(literal.language);else if (literal.datatype.value !== xsd.string) return "\"".concat(value, "\"^^").concat(this._encodeIriOrBlank(literal.datatype));else return "\"".concat(value, "\"");
  } // ### `_encodePredicate` represents a predicate


  _encodePredicate(predicate) {
    return predicate.value === rdf.type ? 'a' : this._encodeIriOrBlank(predicate);
  } // ### `_encodeObject` represents an object


  _encodeObject(object) {
    switch (object.termType) {
      case 'Quad':
        return this._encodeQuad(object);

      case 'Literal':
        return this._encodeLiteral(object);

      default:
        return this._encodeIriOrBlank(object);
    }
  } // ### `_encodeQuad` encodes an RDF* quad


  _encodeQuad(_ref) {
    let {
      subject,
      predicate,
      object,
      graph
    } = _ref;
    return "<<".concat(this._encodeSubject(subject), " ").concat(this._encodePredicate(predicate), " ").concat(this._encodeObject(object)).concat((0, _N3Util.isDefaultGraph)(graph) ? '' : " ".concat(this._encodeIriOrBlank(graph)), ">>");
  } // ### `_blockedWrite` replaces `_write` after the writer has been closed


  _blockedWrite() {
    throw new Error('Cannot write because the writer has been closed.');
  } // ### `addQuad` adds the quad to the output stream


  addQuad(subject, predicate, object, graph, done) {
    // The quad was given as an object, so shift parameters
    if (object === undefined) this._writeQuad(subject.subject, subject.predicate, subject.object, subject.graph, predicate); // The optional `graph` parameter was not provided
    else if (typeof graph === 'function') this._writeQuad(subject, predicate, object, DEFAULTGRAPH, graph); // The `graph` parameter was provided
      else this._writeQuad(subject, predicate, object, graph || DEFAULTGRAPH, done);
  } // ### `addQuads` adds the quads to the output stream


  addQuads(quads) {
    for (let i = 0; i < quads.length; i++) this.addQuad(quads[i]);
  } // ### `addPrefix` adds the prefix to the output stream


  addPrefix(prefix, iri, done) {
    const prefixes = {};
    prefixes[prefix] = iri;
    this.addPrefixes(prefixes, done);
  } // ### `addPrefixes` adds the prefixes to the output stream


  addPrefixes(prefixes, done) {
    // Ignore prefixes if not supported by the serialization
    if (!this._prefixIRIs) return done && done(); // Write all new prefixes

    let hasPrefixes = false;

    for (let prefix in prefixes) {
      let iri = prefixes[prefix];
      if (typeof iri !== 'string') iri = iri.value;
      hasPrefixes = true; // Finish a possible pending quad

      if (this._subject !== null) {
        this._write(this._inDefaultGraph ? '.\n' : '\n}\n');

        this._subject = null, this._graph = '';
      } // Store and write the prefix


      this._prefixIRIs[iri] = prefix += ':';

      this._write("@prefix ".concat(prefix, " <").concat(iri, ">.\n"));
    } // Recreate the prefix matcher


    if (hasPrefixes) {
      let IRIlist = '',
          prefixList = '';

      for (const prefixIRI in this._prefixIRIs) {
        IRIlist += IRIlist ? "|".concat(prefixIRI) : prefixIRI;
        prefixList += (prefixList ? '|' : '') + this._prefixIRIs[prefixIRI];
      }

      IRIlist = IRIlist.replace(/[\]\/\(\)\*\+\?\.\\\$]/g, '\\$&');
      this._prefixRegex = new RegExp("^(?:".concat(prefixList, ")[^/]*$|") + "^(".concat(IRIlist, ")([a-zA-Z][\\-_a-zA-Z0-9]*)$"));
    } // End a prefix block with a newline


    this._write(hasPrefixes ? '\n' : '', done);
  } // ### `blank` creates a blank node with the given content


  blank(predicate, object) {
    let children = predicate,
        child,
        length; // Empty blank node

    if (predicate === undefined) children = []; // Blank node passed as blank(Term("predicate"), Term("object"))
    else if (predicate.termType) children = [{
        predicate: predicate,
        object: object
      }]; // Blank node passed as blank({ predicate: predicate, object: object })
      else if (!('length' in predicate)) children = [predicate];

    switch (length = children.length) {
      // Generate an empty blank node
      case 0:
        return new SerializedTerm('[]');
      // Generate a non-nested one-triple blank node

      case 1:
        child = children[0];
        if (!(child.object instanceof SerializedTerm)) return new SerializedTerm("[ ".concat(this._encodePredicate(child.predicate), " ").concat(this._encodeObject(child.object), " ]"));
      // Generate a multi-triple or nested blank node

      default:
        let contents = '['; // Write all triples in order

        for (let i = 0; i < length; i++) {
          child = children[i]; // Write only the object is the predicate is the same as the previous

          if (child.predicate.equals(predicate)) contents += ", ".concat(this._encodeObject(child.object)); // Otherwise, write the predicate and the object
          else {
              contents += "".concat((i ? ';\n  ' : '\n  ') + this._encodePredicate(child.predicate), " ").concat(this._encodeObject(child.object));
              predicate = child.predicate;
            }
        }

        return new SerializedTerm("".concat(contents, "\n]"));
    }
  } // ### `list` creates a list node with the given content


  list(elements) {
    const length = elements && elements.length || 0,
          contents = new Array(length);

    for (let i = 0; i < length; i++) contents[i] = this._encodeObject(elements[i]);

    return new SerializedTerm("(".concat(contents.join(' '), ")"));
  } // ### `end` signals the end of the output stream


  end(done) {
    // Finish a possible pending quad
    if (this._subject !== null) {
      this._write(this._inDefaultGraph ? '.\n' : '\n}\n');

      this._subject = null;
    } // Disallow further writing


    this._write = this._blockedWrite; // Try to end the underlying stream, ensuring done is called exactly one time

    let singleDone = done && ((error, result) => {
      singleDone = null, done(error, result);
    });

    if (this._endStream) {
      try {
        return this._outputStream.end(singleDone);
      } catch (error) {
        /* error closing stream */
      }
    }

    singleDone && singleDone();
  }

} // Replaces a character by its escaped version


exports.default = N3Writer;

function characterReplacer(character) {
  // Replace a single character by its escaped version
  let result = escapedCharacters[character];

  if (result === undefined) {
    // Replace a single character with its 4-bit unicode escape sequence
    if (character.length === 1) {
      result = character.charCodeAt(0).toString(16);
      result = '\\u0000'.substr(0, 6 - result.length) + result;
    } // Replace a surrogate pair with its 8-bit unicode escape sequence
    else {
        result = ((character.charCodeAt(0) - 0xD800) * 0x400 + character.charCodeAt(1) + 0x2400).toString(16);
        result = '\\U00000000'.substr(0, 10 - result.length) + result;
      }
  }

  return result;
}
},{"./IRIs":"../node_modules/n3/src/IRIs.js","./N3DataFactory":"../node_modules/n3/src/N3DataFactory.js","./N3Util":"../node_modules/n3/src/N3Util.js"}],"../node_modules/events/events.js":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
'use strict';

var R = typeof Reflect === 'object' ? Reflect : null;
var ReflectApply = R && typeof R.apply === 'function' ? R.apply : function ReflectApply(target, receiver, args) {
  return Function.prototype.apply.call(target, receiver, args);
};
var ReflectOwnKeys;

if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys;
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
};

function EventEmitter() {
  EventEmitter.init.call(this);
}

module.exports = EventEmitter;
module.exports.once = once; // Backwards-compat with node 0.10.x

EventEmitter.EventEmitter = EventEmitter;
EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined; // By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.

var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function () {
    return defaultMaxListeners;
  },
  set: function (arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }

    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function () {
  if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
}; // Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.


EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }

  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined) return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];

  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);

  var doError = type === 'error';
  var events = this._events;
  if (events !== undefined) doError = doError && events.error === undefined;else if (!doError) return false; // If there is no 'error' event listener then throw.

  if (doError) {
    var er;
    if (args.length > 0) er = args[0];

    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    } // At least give some kind of context to the user


    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];
  if (handler === undefined) return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);

    for (var i = 0; i < len; ++i) ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;
  checkListener(listener);
  events = target._events;

  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type, listener.listener ? listener.listener : listener); // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object

      events = target._events;
    }

    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] = prepend ? [listener, existing] : [existing, listener]; // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    } // Check for listener leak


    m = _getMaxListeners(target);

    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true; // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax

      var w = new Error('Possible EventEmitter memory leak detected. ' + existing.length + ' ' + String(type) + ' listeners ' + 'added. Use emitter.setMaxListeners() to ' + 'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener = function prependListener(type, listener) {
  return _addListener(this, type, listener, true);
};

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0) return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = {
    fired: false,
    wrapFn: undefined,
    target: target,
    type: type,
    listener: listener
  };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
  checkListener(listener);
  this.prependListener(type, _onceWrap(this, type, listener));
  return this;
}; // Emits a 'removeListener' event if and only if the listener was removed.


EventEmitter.prototype.removeListener = function removeListener(type, listener) {
  var list, events, position, i, originalListener;
  checkListener(listener);
  events = this._events;
  if (events === undefined) return this;
  list = events[type];
  if (list === undefined) return this;

  if (list === listener || list.listener === listener) {
    if (--this._eventsCount === 0) this._events = Object.create(null);else {
      delete events[type];
      if (events.removeListener) this.emit('removeListener', type, list.listener || listener);
    }
  } else if (typeof list !== 'function') {
    position = -1;

    for (i = list.length - 1; i >= 0; i--) {
      if (list[i] === listener || list[i].listener === listener) {
        originalListener = list[i].listener;
        position = i;
        break;
      }
    }

    if (position < 0) return this;
    if (position === 0) list.shift();else {
      spliceOne(list, position);
    }
    if (list.length === 1) events[type] = list[0];
    if (events.removeListener !== undefined) this.emit('removeListener', type, originalListener || listener);
  }

  return this;
};

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
  var listeners, events, i;
  events = this._events;
  if (events === undefined) return this; // not listening for removeListener, no need to emit

  if (events.removeListener === undefined) {
    if (arguments.length === 0) {
      this._events = Object.create(null);
      this._eventsCount = 0;
    } else if (events[type] !== undefined) {
      if (--this._eventsCount === 0) this._events = Object.create(null);else delete events[type];
    }

    return this;
  } // emit removeListener for all listeners on all events


  if (arguments.length === 0) {
    var keys = Object.keys(events);
    var key;

    for (i = 0; i < keys.length; ++i) {
      key = keys[i];
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }

    this.removeAllListeners('removeListener');
    this._events = Object.create(null);
    this._eventsCount = 0;
    return this;
  }

  listeners = events[type];

  if (typeof listeners === 'function') {
    this.removeListener(type, listeners);
  } else if (listeners !== undefined) {
    // LIFO order
    for (i = listeners.length - 1; i >= 0; i--) {
      this.removeListener(type, listeners[i]);
    }
  }

  return this;
};

function _listeners(target, type, unwrap) {
  var events = target._events;
  if (events === undefined) return [];
  var evlistener = events[type];
  if (evlistener === undefined) return [];
  if (typeof evlistener === 'function') return unwrap ? [evlistener.listener || evlistener] : [evlistener];
  return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function (emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;

function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);

  for (var i = 0; i < n; ++i) copy[i] = arr[i];

  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++) list[index] = list[index + 1];

  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);

  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }

  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function eventListener() {
      if (errorListener !== undefined) {
        emitter.removeListener('error', errorListener);
      }

      resolve([].slice.call(arguments));
    }

    ;
    var errorListener; // Adding an error listener is not optional because
    // if an error is thrown on an event emitter we cannot
    // guarantee that the actual event we are waiting will
    // be fired. The result could be a silent way to create
    // memory or file descriptor leaks, which is something
    // we should avoid.

    if (name !== 'error') {
      errorListener = function errorListener(err) {
        emitter.removeListener(name, eventListener);
        reject(err);
      };

      emitter.once('error', errorListener);
    }

    emitter.once(name, eventListener);
  });
}
},{}],"../node_modules/readable-stream/lib/internal/streams/stream-browser.js":[function(require,module,exports) {
module.exports = require('events').EventEmitter;
},{"events":"../node_modules/events/events.js"}],"../node_modules/parcel-bundler/src/builtins/_empty.js":[function(require,module,exports) {

},{}],"../node_modules/readable-stream/lib/internal/streams/buffer_list.js":[function(require,module,exports) {

'use strict';

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var _require = require('buffer'),
    Buffer = _require.Buffer;

var _require2 = require('util'),
    inspect = _require2.inspect;

var custom = inspect && inspect.custom || 'inspect';

function copyBuffer(src, target, offset) {
  Buffer.prototype.copy.call(src, target, offset);
}

module.exports = /*#__PURE__*/function () {
  function BufferList() {
    _classCallCheck(this, BufferList);

    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  _createClass(BufferList, [{
    key: "push",
    value: function push(v) {
      var entry = {
        data: v,
        next: null
      };
      if (this.length > 0) this.tail.next = entry;else this.head = entry;
      this.tail = entry;
      ++this.length;
    }
  }, {
    key: "unshift",
    value: function unshift(v) {
      var entry = {
        data: v,
        next: this.head
      };
      if (this.length === 0) this.tail = entry;
      this.head = entry;
      ++this.length;
    }
  }, {
    key: "shift",
    value: function shift() {
      if (this.length === 0) return;
      var ret = this.head.data;
      if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;
      --this.length;
      return ret;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.head = this.tail = null;
      this.length = 0;
    }
  }, {
    key: "join",
    value: function join(s) {
      if (this.length === 0) return '';
      var p = this.head;
      var ret = '' + p.data;

      while (p = p.next) {
        ret += s + p.data;
      }

      return ret;
    }
  }, {
    key: "concat",
    value: function concat(n) {
      if (this.length === 0) return Buffer.alloc(0);
      var ret = Buffer.allocUnsafe(n >>> 0);
      var p = this.head;
      var i = 0;

      while (p) {
        copyBuffer(p.data, ret, i);
        i += p.data.length;
        p = p.next;
      }

      return ret;
    } // Consumes a specified amount of bytes or characters from the buffered data.

  }, {
    key: "consume",
    value: function consume(n, hasStrings) {
      var ret;

      if (n < this.head.data.length) {
        // `slice` is the same for buffers and strings.
        ret = this.head.data.slice(0, n);
        this.head.data = this.head.data.slice(n);
      } else if (n === this.head.data.length) {
        // First chunk is a perfect match.
        ret = this.shift();
      } else {
        // Result spans more than one buffer.
        ret = hasStrings ? this._getString(n) : this._getBuffer(n);
      }

      return ret;
    }
  }, {
    key: "first",
    value: function first() {
      return this.head.data;
    } // Consumes a specified amount of characters from the buffered data.

  }, {
    key: "_getString",
    value: function _getString(n) {
      var p = this.head;
      var c = 1;
      var ret = p.data;
      n -= ret.length;

      while (p = p.next) {
        var str = p.data;
        var nb = n > str.length ? str.length : n;
        if (nb === str.length) ret += str;else ret += str.slice(0, n);
        n -= nb;

        if (n === 0) {
          if (nb === str.length) {
            ++c;
            if (p.next) this.head = p.next;else this.head = this.tail = null;
          } else {
            this.head = p;
            p.data = str.slice(nb);
          }

          break;
        }

        ++c;
      }

      this.length -= c;
      return ret;
    } // Consumes a specified amount of bytes from the buffered data.

  }, {
    key: "_getBuffer",
    value: function _getBuffer(n) {
      var ret = Buffer.allocUnsafe(n);
      var p = this.head;
      var c = 1;
      p.data.copy(ret);
      n -= p.data.length;

      while (p = p.next) {
        var buf = p.data;
        var nb = n > buf.length ? buf.length : n;
        buf.copy(ret, ret.length - n, 0, nb);
        n -= nb;

        if (n === 0) {
          if (nb === buf.length) {
            ++c;
            if (p.next) this.head = p.next;else this.head = this.tail = null;
          } else {
            this.head = p;
            p.data = buf.slice(nb);
          }

          break;
        }

        ++c;
      }

      this.length -= c;
      return ret;
    } // Make sure the linked list only shows the minimal necessary information.

  }, {
    key: custom,
    value: function value(_, options) {
      return inspect(this, _objectSpread({}, options, {
        // Only inspect one level.
        depth: 0,
        // It should not recurse.
        customInspect: false
      }));
    }
  }]);

  return BufferList;
}();
},{"buffer":"../node_modules/buffer/index.js","util":"../node_modules/parcel-bundler/src/builtins/_empty.js"}],"../node_modules/process/browser.js":[function(require,module,exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};
},{}],"../node_modules/readable-stream/lib/internal/streams/destroy.js":[function(require,module,exports) {
var process = require("process");
'use strict'; // undocumented cb() API, needed for core, not for public API

function destroy(err, cb) {
  var _this = this;

  var readableDestroyed = this._readableState && this._readableState.destroyed;
  var writableDestroyed = this._writableState && this._writableState.destroyed;

  if (readableDestroyed || writableDestroyed) {
    if (cb) {
      cb(err);
    } else if (err) {
      if (!this._writableState) {
        process.nextTick(emitErrorNT, this, err);
      } else if (!this._writableState.errorEmitted) {
        this._writableState.errorEmitted = true;
        process.nextTick(emitErrorNT, this, err);
      }
    }

    return this;
  } // we set destroyed to true before firing error callbacks in order
  // to make it re-entrance safe in case destroy() is called within callbacks


  if (this._readableState) {
    this._readableState.destroyed = true;
  } // if this is a duplex stream mark the writable part as destroyed as well


  if (this._writableState) {
    this._writableState.destroyed = true;
  }

  this._destroy(err || null, function (err) {
    if (!cb && err) {
      if (!_this._writableState) {
        process.nextTick(emitErrorAndCloseNT, _this, err);
      } else if (!_this._writableState.errorEmitted) {
        _this._writableState.errorEmitted = true;
        process.nextTick(emitErrorAndCloseNT, _this, err);
      } else {
        process.nextTick(emitCloseNT, _this);
      }
    } else if (cb) {
      process.nextTick(emitCloseNT, _this);
      cb(err);
    } else {
      process.nextTick(emitCloseNT, _this);
    }
  });

  return this;
}

function emitErrorAndCloseNT(self, err) {
  emitErrorNT(self, err);
  emitCloseNT(self);
}

function emitCloseNT(self) {
  if (self._writableState && !self._writableState.emitClose) return;
  if (self._readableState && !self._readableState.emitClose) return;
  self.emit('close');
}

function undestroy() {
  if (this._readableState) {
    this._readableState.destroyed = false;
    this._readableState.reading = false;
    this._readableState.ended = false;
    this._readableState.endEmitted = false;
  }

  if (this._writableState) {
    this._writableState.destroyed = false;
    this._writableState.ended = false;
    this._writableState.ending = false;
    this._writableState.finalCalled = false;
    this._writableState.prefinished = false;
    this._writableState.finished = false;
    this._writableState.errorEmitted = false;
  }
}

function emitErrorNT(self, err) {
  self.emit('error', err);
}

function errorOrDestroy(stream, err) {
  // We have tests that rely on errors being emitted
  // in the same tick, so changing this is semver major.
  // For now when you opt-in to autoDestroy we allow
  // the error to be emitted nextTick. In a future
  // semver major update we should change the default to this.
  var rState = stream._readableState;
  var wState = stream._writableState;
  if (rState && rState.autoDestroy || wState && wState.autoDestroy) stream.destroy(err);else stream.emit('error', err);
}

module.exports = {
  destroy: destroy,
  undestroy: undestroy,
  errorOrDestroy: errorOrDestroy
};
},{"process":"../node_modules/process/browser.js"}],"../node_modules/readable-stream/errors-browser.js":[function(require,module,exports) {
'use strict';

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var codes = {};

function createErrorType(code, message, Base) {
  if (!Base) {
    Base = Error;
  }

  function getMessage(arg1, arg2, arg3) {
    if (typeof message === 'string') {
      return message;
    } else {
      return message(arg1, arg2, arg3);
    }
  }

  var NodeError = /*#__PURE__*/function (_Base) {
    _inheritsLoose(NodeError, _Base);

    function NodeError(arg1, arg2, arg3) {
      return _Base.call(this, getMessage(arg1, arg2, arg3)) || this;
    }

    return NodeError;
  }(Base);

  NodeError.prototype.name = Base.name;
  NodeError.prototype.code = code;
  codes[code] = NodeError;
} // https://github.com/nodejs/node/blob/v10.8.0/lib/internal/errors.js


function oneOf(expected, thing) {
  if (Array.isArray(expected)) {
    var len = expected.length;
    expected = expected.map(function (i) {
      return String(i);
    });

    if (len > 2) {
      return "one of ".concat(thing, " ").concat(expected.slice(0, len - 1).join(', '), ", or ") + expected[len - 1];
    } else if (len === 2) {
      return "one of ".concat(thing, " ").concat(expected[0], " or ").concat(expected[1]);
    } else {
      return "of ".concat(thing, " ").concat(expected[0]);
    }
  } else {
    return "of ".concat(thing, " ").concat(String(expected));
  }
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith


function startsWith(str, search, pos) {
  return str.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith


function endsWith(str, search, this_len) {
  if (this_len === undefined || this_len > str.length) {
    this_len = str.length;
  }

  return str.substring(this_len - search.length, this_len) === search;
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes


function includes(str, search, start) {
  if (typeof start !== 'number') {
    start = 0;
  }

  if (start + search.length > str.length) {
    return false;
  } else {
    return str.indexOf(search, start) !== -1;
  }
}

createErrorType('ERR_INVALID_OPT_VALUE', function (name, value) {
  return 'The value "' + value + '" is invalid for option "' + name + '"';
}, TypeError);
createErrorType('ERR_INVALID_ARG_TYPE', function (name, expected, actual) {
  // determiner: 'must be' or 'must not be'
  var determiner;

  if (typeof expected === 'string' && startsWith(expected, 'not ')) {
    determiner = 'must not be';
    expected = expected.replace(/^not /, '');
  } else {
    determiner = 'must be';
  }

  var msg;

  if (endsWith(name, ' argument')) {
    // For cases like 'first argument'
    msg = "The ".concat(name, " ").concat(determiner, " ").concat(oneOf(expected, 'type'));
  } else {
    var type = includes(name, '.') ? 'property' : 'argument';
    msg = "The \"".concat(name, "\" ").concat(type, " ").concat(determiner, " ").concat(oneOf(expected, 'type'));
  }

  msg += ". Received type ".concat(typeof actual);
  return msg;
}, TypeError);
createErrorType('ERR_STREAM_PUSH_AFTER_EOF', 'stream.push() after EOF');
createErrorType('ERR_METHOD_NOT_IMPLEMENTED', function (name) {
  return 'The ' + name + ' method is not implemented';
});
createErrorType('ERR_STREAM_PREMATURE_CLOSE', 'Premature close');
createErrorType('ERR_STREAM_DESTROYED', function (name) {
  return 'Cannot call ' + name + ' after a stream was destroyed';
});
createErrorType('ERR_MULTIPLE_CALLBACK', 'Callback called multiple times');
createErrorType('ERR_STREAM_CANNOT_PIPE', 'Cannot pipe, not readable');
createErrorType('ERR_STREAM_WRITE_AFTER_END', 'write after end');
createErrorType('ERR_STREAM_NULL_VALUES', 'May not write null values to stream', TypeError);
createErrorType('ERR_UNKNOWN_ENCODING', function (arg) {
  return 'Unknown encoding: ' + arg;
}, TypeError);
createErrorType('ERR_STREAM_UNSHIFT_AFTER_END_EVENT', 'stream.unshift() after end event');
module.exports.codes = codes;
},{}],"../node_modules/readable-stream/lib/internal/streams/state.js":[function(require,module,exports) {
'use strict';

var ERR_INVALID_OPT_VALUE = require('../../../errors').codes.ERR_INVALID_OPT_VALUE;

function highWaterMarkFrom(options, isDuplex, duplexKey) {
  return options.highWaterMark != null ? options.highWaterMark : isDuplex ? options[duplexKey] : null;
}

function getHighWaterMark(state, options, duplexKey, isDuplex) {
  var hwm = highWaterMarkFrom(options, isDuplex, duplexKey);

  if (hwm != null) {
    if (!(isFinite(hwm) && Math.floor(hwm) === hwm) || hwm < 0) {
      var name = isDuplex ? duplexKey : 'highWaterMark';
      throw new ERR_INVALID_OPT_VALUE(name, hwm);
    }

    return Math.floor(hwm);
  } // Default value


  return state.objectMode ? 16 : 16 * 1024;
}

module.exports = {
  getHighWaterMark: getHighWaterMark
};
},{"../../../errors":"../node_modules/readable-stream/errors-browser.js"}],"../node_modules/inherits/inherits_browser.js":[function(require,module,exports) {
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],"../node_modules/util-deprecate/browser.js":[function(require,module,exports) {
var global = arguments[3];

/**
 * Module exports.
 */

module.exports = deprecate;

/**
 * Mark that a method should not be used.
 * Returns a modified function which warns once by default.
 *
 * If `localStorage.noDeprecation = true` is set, then it is a no-op.
 *
 * If `localStorage.throwDeprecation = true` is set, then deprecated functions
 * will throw an Error when invoked.
 *
 * If `localStorage.traceDeprecation = true` is set, then deprecated functions
 * will invoke `console.trace()` instead of `console.error()`.
 *
 * @param {Function} fn - the function to deprecate
 * @param {String} msg - the string to print to the console when `fn` is invoked
 * @returns {Function} a new "deprecated" version of `fn`
 * @api public
 */

function deprecate (fn, msg) {
  if (config('noDeprecation')) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (config('throwDeprecation')) {
        throw new Error(msg);
      } else if (config('traceDeprecation')) {
        console.trace(msg);
      } else {
        console.warn(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
}

/**
 * Checks `localStorage` for boolean values for the given `name`.
 *
 * @param {String} name
 * @returns {Boolean}
 * @api private
 */

function config (name) {
  // accessing global.localStorage can trigger a DOMException in sandboxed iframes
  try {
    if (!global.localStorage) return false;
  } catch (_) {
    return false;
  }
  var val = global.localStorage[name];
  if (null == val) return false;
  return String(val).toLowerCase() === 'true';
}

},{}],"../node_modules/readable-stream/lib/_stream_writable.js":[function(require,module,exports) {

var global = arguments[3];
var process = require("process");
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// A bit simpler than readable streams.
// Implement an async ._write(chunk, encoding, cb), and it'll handle all
// the drain event emission and buffering.
'use strict';

module.exports = Writable;
/* <replacement> */

function WriteReq(chunk, encoding, cb) {
  this.chunk = chunk;
  this.encoding = encoding;
  this.callback = cb;
  this.next = null;
} // It seems a linked list but it is not
// there will be only 2 of these for each stream


function CorkedRequest(state) {
  var _this = this;

  this.next = null;
  this.entry = null;

  this.finish = function () {
    onCorkedFinish(_this, state);
  };
}
/* </replacement> */

/*<replacement>*/


var Duplex;
/*</replacement>*/

Writable.WritableState = WritableState;
/*<replacement>*/

var internalUtil = {
  deprecate: require('util-deprecate')
};
/*</replacement>*/

/*<replacement>*/

var Stream = require('./internal/streams/stream');
/*</replacement>*/


var Buffer = require('buffer').Buffer;

var OurUint8Array = global.Uint8Array || function () {};

function _uint8ArrayToBuffer(chunk) {
  return Buffer.from(chunk);
}

function _isUint8Array(obj) {
  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}

var destroyImpl = require('./internal/streams/destroy');

var _require = require('./internal/streams/state'),
    getHighWaterMark = _require.getHighWaterMark;

var _require$codes = require('../errors').codes,
    ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE,
    ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED,
    ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK,
    ERR_STREAM_CANNOT_PIPE = _require$codes.ERR_STREAM_CANNOT_PIPE,
    ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED,
    ERR_STREAM_NULL_VALUES = _require$codes.ERR_STREAM_NULL_VALUES,
    ERR_STREAM_WRITE_AFTER_END = _require$codes.ERR_STREAM_WRITE_AFTER_END,
    ERR_UNKNOWN_ENCODING = _require$codes.ERR_UNKNOWN_ENCODING;

var errorOrDestroy = destroyImpl.errorOrDestroy;

require('inherits')(Writable, Stream);

function nop() {}

function WritableState(options, stream, isDuplex) {
  Duplex = Duplex || require('./_stream_duplex');
  options = options || {}; // Duplex streams are both readable and writable, but share
  // the same options object.
  // However, some cases require setting options to different
  // values for the readable and the writable sides of the duplex stream,
  // e.g. options.readableObjectMode vs. options.writableObjectMode, etc.

  if (typeof isDuplex !== 'boolean') isDuplex = stream instanceof Duplex; // object stream flag to indicate whether or not this stream
  // contains buffers or objects.

  this.objectMode = !!options.objectMode;
  if (isDuplex) this.objectMode = this.objectMode || !!options.writableObjectMode; // the point at which write() starts returning false
  // Note: 0 is a valid value, means that we always return false if
  // the entire buffer is not flushed immediately on write()

  this.highWaterMark = getHighWaterMark(this, options, 'writableHighWaterMark', isDuplex); // if _final has been called

  this.finalCalled = false; // drain event flag.

  this.needDrain = false; // at the start of calling end()

  this.ending = false; // when end() has been called, and returned

  this.ended = false; // when 'finish' is emitted

  this.finished = false; // has it been destroyed

  this.destroyed = false; // should we decode strings into buffers before passing to _write?
  // this is here so that some node-core streams can optimize string
  // handling at a lower level.

  var noDecode = options.decodeStrings === false;
  this.decodeStrings = !noDecode; // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.

  this.defaultEncoding = options.defaultEncoding || 'utf8'; // not an actual buffer we keep track of, but a measurement
  // of how much we're waiting to get pushed to some underlying
  // socket or file.

  this.length = 0; // a flag to see when we're in the middle of a write.

  this.writing = false; // when true all writes will be buffered until .uncork() call

  this.corked = 0; // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, because any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.

  this.sync = true; // a flag to know if we're processing previously buffered items, which
  // may call the _write() callback in the same tick, so that we don't
  // end up in an overlapped onwrite situation.

  this.bufferProcessing = false; // the callback that's passed to _write(chunk,cb)

  this.onwrite = function (er) {
    onwrite(stream, er);
  }; // the callback that the user supplies to write(chunk,encoding,cb)


  this.writecb = null; // the amount that is being written when _write is called.

  this.writelen = 0;
  this.bufferedRequest = null;
  this.lastBufferedRequest = null; // number of pending user-supplied write callbacks
  // this must be 0 before 'finish' can be emitted

  this.pendingcb = 0; // emit prefinish if the only thing we're waiting for is _write cbs
  // This is relevant for synchronous Transform streams

  this.prefinished = false; // True if the error was already emitted and should not be thrown again

  this.errorEmitted = false; // Should close be emitted on destroy. Defaults to true.

  this.emitClose = options.emitClose !== false; // Should .destroy() be called after 'finish' (and potentially 'end')

  this.autoDestroy = !!options.autoDestroy; // count buffered requests

  this.bufferedRequestCount = 0; // allocate the first CorkedRequest, there is always
  // one allocated and free to use, and we maintain at most two

  this.corkedRequestsFree = new CorkedRequest(this);
}

WritableState.prototype.getBuffer = function getBuffer() {
  var current = this.bufferedRequest;
  var out = [];

  while (current) {
    out.push(current);
    current = current.next;
  }

  return out;
};

(function () {
  try {
    Object.defineProperty(WritableState.prototype, 'buffer', {
      get: internalUtil.deprecate(function writableStateBufferGetter() {
        return this.getBuffer();
      }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.', 'DEP0003')
    });
  } catch (_) {}
})(); // Test _writableState for inheritance to account for Duplex streams,
// whose prototype chain only points to Readable.


var realHasInstance;

if (typeof Symbol === 'function' && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === 'function') {
  realHasInstance = Function.prototype[Symbol.hasInstance];
  Object.defineProperty(Writable, Symbol.hasInstance, {
    value: function value(object) {
      if (realHasInstance.call(this, object)) return true;
      if (this !== Writable) return false;
      return object && object._writableState instanceof WritableState;
    }
  });
} else {
  realHasInstance = function realHasInstance(object) {
    return object instanceof this;
  };
}

function Writable(options) {
  Duplex = Duplex || require('./_stream_duplex'); // Writable ctor is applied to Duplexes, too.
  // `realHasInstance` is necessary because using plain `instanceof`
  // would return false, as no `_writableState` property is attached.
  // Trying to use the custom `instanceof` for Writable here will also break the
  // Node.js LazyTransform implementation, which has a non-trivial getter for
  // `_writableState` that would lead to infinite recursion.
  // Checking for a Stream.Duplex instance is faster here instead of inside
  // the WritableState constructor, at least with V8 6.5

  var isDuplex = this instanceof Duplex;
  if (!isDuplex && !realHasInstance.call(Writable, this)) return new Writable(options);
  this._writableState = new WritableState(options, this, isDuplex); // legacy.

  this.writable = true;

  if (options) {
    if (typeof options.write === 'function') this._write = options.write;
    if (typeof options.writev === 'function') this._writev = options.writev;
    if (typeof options.destroy === 'function') this._destroy = options.destroy;
    if (typeof options.final === 'function') this._final = options.final;
  }

  Stream.call(this);
} // Otherwise people can pipe Writable streams, which is just wrong.


Writable.prototype.pipe = function () {
  errorOrDestroy(this, new ERR_STREAM_CANNOT_PIPE());
};

function writeAfterEnd(stream, cb) {
  var er = new ERR_STREAM_WRITE_AFTER_END(); // TODO: defer error events consistently everywhere, not just the cb

  errorOrDestroy(stream, er);
  process.nextTick(cb, er);
} // Checks that a user-supplied chunk is valid, especially for the particular
// mode the stream is in. Currently this means that `null` is never accepted
// and undefined/non-string values are only allowed in object mode.


function validChunk(stream, state, chunk, cb) {
  var er;

  if (chunk === null) {
    er = new ERR_STREAM_NULL_VALUES();
  } else if (typeof chunk !== 'string' && !state.objectMode) {
    er = new ERR_INVALID_ARG_TYPE('chunk', ['string', 'Buffer'], chunk);
  }

  if (er) {
    errorOrDestroy(stream, er);
    process.nextTick(cb, er);
    return false;
  }

  return true;
}

Writable.prototype.write = function (chunk, encoding, cb) {
  var state = this._writableState;
  var ret = false;

  var isBuf = !state.objectMode && _isUint8Array(chunk);

  if (isBuf && !Buffer.isBuffer(chunk)) {
    chunk = _uint8ArrayToBuffer(chunk);
  }

  if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (isBuf) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;
  if (typeof cb !== 'function') cb = nop;
  if (state.ending) writeAfterEnd(this, cb);else if (isBuf || validChunk(this, state, chunk, cb)) {
    state.pendingcb++;
    ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
  }
  return ret;
};

Writable.prototype.cork = function () {
  this._writableState.corked++;
};

Writable.prototype.uncork = function () {
  var state = this._writableState;

  if (state.corked) {
    state.corked--;
    if (!state.writing && !state.corked && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
  }
};

Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
  // node::ParseEncoding() requires lower case.
  if (typeof encoding === 'string') encoding = encoding.toLowerCase();
  if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new ERR_UNKNOWN_ENCODING(encoding);
  this._writableState.defaultEncoding = encoding;
  return this;
};

Object.defineProperty(Writable.prototype, 'writableBuffer', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState && this._writableState.getBuffer();
  }
});

function decodeChunk(state, chunk, encoding) {
  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
    chunk = Buffer.from(chunk, encoding);
  }

  return chunk;
}

Object.defineProperty(Writable.prototype, 'writableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState.highWaterMark;
  }
}); // if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.

function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
  if (!isBuf) {
    var newChunk = decodeChunk(state, chunk, encoding);

    if (chunk !== newChunk) {
      isBuf = true;
      encoding = 'buffer';
      chunk = newChunk;
    }
  }

  var len = state.objectMode ? 1 : chunk.length;
  state.length += len;
  var ret = state.length < state.highWaterMark; // we must ensure that previous needDrain will not be reset to false.

  if (!ret) state.needDrain = true;

  if (state.writing || state.corked) {
    var last = state.lastBufferedRequest;
    state.lastBufferedRequest = {
      chunk: chunk,
      encoding: encoding,
      isBuf: isBuf,
      callback: cb,
      next: null
    };

    if (last) {
      last.next = state.lastBufferedRequest;
    } else {
      state.bufferedRequest = state.lastBufferedRequest;
    }

    state.bufferedRequestCount += 1;
  } else {
    doWrite(stream, state, false, len, chunk, encoding, cb);
  }

  return ret;
}

function doWrite(stream, state, writev, len, chunk, encoding, cb) {
  state.writelen = len;
  state.writecb = cb;
  state.writing = true;
  state.sync = true;
  if (state.destroyed) state.onwrite(new ERR_STREAM_DESTROYED('write'));else if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
  state.sync = false;
}

function onwriteError(stream, state, sync, er, cb) {
  --state.pendingcb;

  if (sync) {
    // defer the callback if we are being called synchronously
    // to avoid piling up things on the stack
    process.nextTick(cb, er); // this can emit finish, and it will always happen
    // after error

    process.nextTick(finishMaybe, stream, state);
    stream._writableState.errorEmitted = true;
    errorOrDestroy(stream, er);
  } else {
    // the caller expect this to happen before if
    // it is async
    cb(er);
    stream._writableState.errorEmitted = true;
    errorOrDestroy(stream, er); // this can emit finish, but finish must
    // always follow error

    finishMaybe(stream, state);
  }
}

function onwriteStateUpdate(state) {
  state.writing = false;
  state.writecb = null;
  state.length -= state.writelen;
  state.writelen = 0;
}

function onwrite(stream, er) {
  var state = stream._writableState;
  var sync = state.sync;
  var cb = state.writecb;
  if (typeof cb !== 'function') throw new ERR_MULTIPLE_CALLBACK();
  onwriteStateUpdate(state);
  if (er) onwriteError(stream, state, sync, er, cb);else {
    // Check if we're actually ready to finish, but don't emit yet
    var finished = needFinish(state) || stream.destroyed;

    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
      clearBuffer(stream, state);
    }

    if (sync) {
      process.nextTick(afterWrite, stream, state, finished, cb);
    } else {
      afterWrite(stream, state, finished, cb);
    }
  }
}

function afterWrite(stream, state, finished, cb) {
  if (!finished) onwriteDrain(stream, state);
  state.pendingcb--;
  cb();
  finishMaybe(stream, state);
} // Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.


function onwriteDrain(stream, state) {
  if (state.length === 0 && state.needDrain) {
    state.needDrain = false;
    stream.emit('drain');
  }
} // if there's something in the buffer waiting, then process it


function clearBuffer(stream, state) {
  state.bufferProcessing = true;
  var entry = state.bufferedRequest;

  if (stream._writev && entry && entry.next) {
    // Fast case, write everything using _writev()
    var l = state.bufferedRequestCount;
    var buffer = new Array(l);
    var holder = state.corkedRequestsFree;
    holder.entry = entry;
    var count = 0;
    var allBuffers = true;

    while (entry) {
      buffer[count] = entry;
      if (!entry.isBuf) allBuffers = false;
      entry = entry.next;
      count += 1;
    }

    buffer.allBuffers = allBuffers;
    doWrite(stream, state, true, state.length, buffer, '', holder.finish); // doWrite is almost always async, defer these to save a bit of time
    // as the hot path ends with doWrite

    state.pendingcb++;
    state.lastBufferedRequest = null;

    if (holder.next) {
      state.corkedRequestsFree = holder.next;
      holder.next = null;
    } else {
      state.corkedRequestsFree = new CorkedRequest(state);
    }

    state.bufferedRequestCount = 0;
  } else {
    // Slow case, write chunks one-by-one
    while (entry) {
      var chunk = entry.chunk;
      var encoding = entry.encoding;
      var cb = entry.callback;
      var len = state.objectMode ? 1 : chunk.length;
      doWrite(stream, state, false, len, chunk, encoding, cb);
      entry = entry.next;
      state.bufferedRequestCount--; // if we didn't call the onwrite immediately, then
      // it means that we need to wait until it does.
      // also, that means that the chunk and cb are currently
      // being processed, so move the buffer counter past them.

      if (state.writing) {
        break;
      }
    }

    if (entry === null) state.lastBufferedRequest = null;
  }

  state.bufferedRequest = entry;
  state.bufferProcessing = false;
}

Writable.prototype._write = function (chunk, encoding, cb) {
  cb(new ERR_METHOD_NOT_IMPLEMENTED('_write()'));
};

Writable.prototype._writev = null;

Writable.prototype.end = function (chunk, encoding, cb) {
  var state = this._writableState;

  if (typeof chunk === 'function') {
    cb = chunk;
    chunk = null;
    encoding = null;
  } else if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (chunk !== null && chunk !== undefined) this.write(chunk, encoding); // .end() fully uncorks

  if (state.corked) {
    state.corked = 1;
    this.uncork();
  } // ignore unnecessary end() calls.


  if (!state.ending) endWritable(this, state, cb);
  return this;
};

Object.defineProperty(Writable.prototype, 'writableLength', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState.length;
  }
});

function needFinish(state) {
  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
}

function callFinal(stream, state) {
  stream._final(function (err) {
    state.pendingcb--;

    if (err) {
      errorOrDestroy(stream, err);
    }

    state.prefinished = true;
    stream.emit('prefinish');
    finishMaybe(stream, state);
  });
}

function prefinish(stream, state) {
  if (!state.prefinished && !state.finalCalled) {
    if (typeof stream._final === 'function' && !state.destroyed) {
      state.pendingcb++;
      state.finalCalled = true;
      process.nextTick(callFinal, stream, state);
    } else {
      state.prefinished = true;
      stream.emit('prefinish');
    }
  }
}

function finishMaybe(stream, state) {
  var need = needFinish(state);

  if (need) {
    prefinish(stream, state);

    if (state.pendingcb === 0) {
      state.finished = true;
      stream.emit('finish');

      if (state.autoDestroy) {
        // In case of duplex streams we need a way to detect
        // if the readable side is ready for autoDestroy as well
        var rState = stream._readableState;

        if (!rState || rState.autoDestroy && rState.endEmitted) {
          stream.destroy();
        }
      }
    }
  }

  return need;
}

function endWritable(stream, state, cb) {
  state.ending = true;
  finishMaybe(stream, state);

  if (cb) {
    if (state.finished) process.nextTick(cb);else stream.once('finish', cb);
  }

  state.ended = true;
  stream.writable = false;
}

function onCorkedFinish(corkReq, state, err) {
  var entry = corkReq.entry;
  corkReq.entry = null;

  while (entry) {
    var cb = entry.callback;
    state.pendingcb--;
    cb(err);
    entry = entry.next;
  } // reuse the free corkReq.


  state.corkedRequestsFree.next = corkReq;
}

Object.defineProperty(Writable.prototype, 'destroyed', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    if (this._writableState === undefined) {
      return false;
    }

    return this._writableState.destroyed;
  },
  set: function set(value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (!this._writableState) {
      return;
    } // backward compatibility, the user is explicitly
    // managing destroyed


    this._writableState.destroyed = value;
  }
});
Writable.prototype.destroy = destroyImpl.destroy;
Writable.prototype._undestroy = destroyImpl.undestroy;

Writable.prototype._destroy = function (err, cb) {
  cb(err);
};
},{"util-deprecate":"../node_modules/util-deprecate/browser.js","./internal/streams/stream":"../node_modules/readable-stream/lib/internal/streams/stream-browser.js","buffer":"../node_modules/buffer/index.js","./internal/streams/destroy":"../node_modules/readable-stream/lib/internal/streams/destroy.js","./internal/streams/state":"../node_modules/readable-stream/lib/internal/streams/state.js","../errors":"../node_modules/readable-stream/errors-browser.js","inherits":"../node_modules/inherits/inherits_browser.js","./_stream_duplex":"../node_modules/readable-stream/lib/_stream_duplex.js","process":"../node_modules/process/browser.js"}],"../node_modules/readable-stream/lib/_stream_duplex.js":[function(require,module,exports) {
var process = require("process");
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a duplex stream is just a stream that is both readable and writable.
// Since JS doesn't have multiple prototypal inheritance, this class
// prototypally inherits from Readable, and then parasitically from
// Writable.
'use strict';
/*<replacement>*/

var objectKeys = Object.keys || function (obj) {
  var keys = [];

  for (var key in obj) {
    keys.push(key);
  }

  return keys;
};
/*</replacement>*/


module.exports = Duplex;

var Readable = require('./_stream_readable');

var Writable = require('./_stream_writable');

require('inherits')(Duplex, Readable);

{
  // Allow the keys array to be GC'ed.
  var keys = objectKeys(Writable.prototype);

  for (var v = 0; v < keys.length; v++) {
    var method = keys[v];
    if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
  }
}

function Duplex(options) {
  if (!(this instanceof Duplex)) return new Duplex(options);
  Readable.call(this, options);
  Writable.call(this, options);
  this.allowHalfOpen = true;

  if (options) {
    if (options.readable === false) this.readable = false;
    if (options.writable === false) this.writable = false;

    if (options.allowHalfOpen === false) {
      this.allowHalfOpen = false;
      this.once('end', onend);
    }
  }
}

Object.defineProperty(Duplex.prototype, 'writableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState.highWaterMark;
  }
});
Object.defineProperty(Duplex.prototype, 'writableBuffer', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState && this._writableState.getBuffer();
  }
});
Object.defineProperty(Duplex.prototype, 'writableLength', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState.length;
  }
}); // the no-half-open enforcer

function onend() {
  // If the writable side ended, then we're ok.
  if (this._writableState.ended) return; // no more data can be written.
  // But allow more writes to happen in this tick.

  process.nextTick(onEndNT, this);
}

function onEndNT(self) {
  self.end();
}

Object.defineProperty(Duplex.prototype, 'destroyed', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    if (this._readableState === undefined || this._writableState === undefined) {
      return false;
    }

    return this._readableState.destroyed && this._writableState.destroyed;
  },
  set: function set(value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (this._readableState === undefined || this._writableState === undefined) {
      return;
    } // backward compatibility, the user is explicitly
    // managing destroyed


    this._readableState.destroyed = value;
    this._writableState.destroyed = value;
  }
});
},{"./_stream_readable":"../node_modules/readable-stream/lib/_stream_readable.js","./_stream_writable":"../node_modules/readable-stream/lib/_stream_writable.js","inherits":"../node_modules/inherits/inherits_browser.js","process":"../node_modules/process/browser.js"}],"../node_modules/string_decoder/node_modules/safe-buffer/index.js":[function(require,module,exports) {

/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
/* eslint-disable node/no-deprecated-api */
var buffer = require('buffer')
var Buffer = buffer.Buffer

// alternative to using Object.keys for old browsers
function copyProps (src, dst) {
  for (var key in src) {
    dst[key] = src[key]
  }
}
if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
  module.exports = buffer
} else {
  // Copy properties from require('buffer')
  copyProps(buffer, exports)
  exports.Buffer = SafeBuffer
}

function SafeBuffer (arg, encodingOrOffset, length) {
  return Buffer(arg, encodingOrOffset, length)
}

SafeBuffer.prototype = Object.create(Buffer.prototype)

// Copy static methods from Buffer
copyProps(Buffer, SafeBuffer)

SafeBuffer.from = function (arg, encodingOrOffset, length) {
  if (typeof arg === 'number') {
    throw new TypeError('Argument must not be a number')
  }
  return Buffer(arg, encodingOrOffset, length)
}

SafeBuffer.alloc = function (size, fill, encoding) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  var buf = Buffer(size)
  if (fill !== undefined) {
    if (typeof encoding === 'string') {
      buf.fill(fill, encoding)
    } else {
      buf.fill(fill)
    }
  } else {
    buf.fill(0)
  }
  return buf
}

SafeBuffer.allocUnsafe = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return Buffer(size)
}

SafeBuffer.allocUnsafeSlow = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return buffer.SlowBuffer(size)
}

},{"buffer":"../node_modules/buffer/index.js"}],"../node_modules/string_decoder/lib/string_decoder.js":[function(require,module,exports) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

/*<replacement>*/

var Buffer = require('safe-buffer').Buffer;
/*</replacement>*/

var isEncoding = Buffer.isEncoding || function (encoding) {
  encoding = '' + encoding;
  switch (encoding && encoding.toLowerCase()) {
    case 'hex':case 'utf8':case 'utf-8':case 'ascii':case 'binary':case 'base64':case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':case 'raw':
      return true;
    default:
      return false;
  }
};

function _normalizeEncoding(enc) {
  if (!enc) return 'utf8';
  var retried;
  while (true) {
    switch (enc) {
      case 'utf8':
      case 'utf-8':
        return 'utf8';
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return 'utf16le';
      case 'latin1':
      case 'binary':
        return 'latin1';
      case 'base64':
      case 'ascii':
      case 'hex':
        return enc;
      default:
        if (retried) return; // undefined
        enc = ('' + enc).toLowerCase();
        retried = true;
    }
  }
};

// Do not cache `Buffer.isEncoding` when checking encoding names as some
// modules monkey-patch it to support additional encodings
function normalizeEncoding(enc) {
  var nenc = _normalizeEncoding(enc);
  if (typeof nenc !== 'string' && (Buffer.isEncoding === isEncoding || !isEncoding(enc))) throw new Error('Unknown encoding: ' + enc);
  return nenc || enc;
}

// StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters.
exports.StringDecoder = StringDecoder;
function StringDecoder(encoding) {
  this.encoding = normalizeEncoding(encoding);
  var nb;
  switch (this.encoding) {
    case 'utf16le':
      this.text = utf16Text;
      this.end = utf16End;
      nb = 4;
      break;
    case 'utf8':
      this.fillLast = utf8FillLast;
      nb = 4;
      break;
    case 'base64':
      this.text = base64Text;
      this.end = base64End;
      nb = 3;
      break;
    default:
      this.write = simpleWrite;
      this.end = simpleEnd;
      return;
  }
  this.lastNeed = 0;
  this.lastTotal = 0;
  this.lastChar = Buffer.allocUnsafe(nb);
}

StringDecoder.prototype.write = function (buf) {
  if (buf.length === 0) return '';
  var r;
  var i;
  if (this.lastNeed) {
    r = this.fillLast(buf);
    if (r === undefined) return '';
    i = this.lastNeed;
    this.lastNeed = 0;
  } else {
    i = 0;
  }
  if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
  return r || '';
};

StringDecoder.prototype.end = utf8End;

// Returns only complete characters in a Buffer
StringDecoder.prototype.text = utf8Text;

// Attempts to complete a partial non-UTF-8 character using bytes from a Buffer
StringDecoder.prototype.fillLast = function (buf) {
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
  this.lastNeed -= buf.length;
};

// Checks the type of a UTF-8 byte, whether it's ASCII, a leading byte, or a
// continuation byte. If an invalid byte is detected, -2 is returned.
function utf8CheckByte(byte) {
  if (byte <= 0x7F) return 0;else if (byte >> 5 === 0x06) return 2;else if (byte >> 4 === 0x0E) return 3;else if (byte >> 3 === 0x1E) return 4;
  return byte >> 6 === 0x02 ? -1 : -2;
}

// Checks at most 3 bytes at the end of a Buffer in order to detect an
// incomplete multi-byte UTF-8 character. The total number of bytes (2, 3, or 4)
// needed to complete the UTF-8 character (if applicable) are returned.
function utf8CheckIncomplete(self, buf, i) {
  var j = buf.length - 1;
  if (j < i) return 0;
  var nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) self.lastNeed = nb - 1;
    return nb;
  }
  if (--j < i || nb === -2) return 0;
  nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) self.lastNeed = nb - 2;
    return nb;
  }
  if (--j < i || nb === -2) return 0;
  nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) {
      if (nb === 2) nb = 0;else self.lastNeed = nb - 3;
    }
    return nb;
  }
  return 0;
}

// Validates as many continuation bytes for a multi-byte UTF-8 character as
// needed or are available. If we see a non-continuation byte where we expect
// one, we "replace" the validated continuation bytes we've seen so far with
// a single UTF-8 replacement character ('\ufffd'), to match v8's UTF-8 decoding
// behavior. The continuation byte check is included three times in the case
// where all of the continuation bytes for a character exist in the same buffer.
// It is also done this way as a slight performance increase instead of using a
// loop.
function utf8CheckExtraBytes(self, buf, p) {
  if ((buf[0] & 0xC0) !== 0x80) {
    self.lastNeed = 0;
    return '\ufffd';
  }
  if (self.lastNeed > 1 && buf.length > 1) {
    if ((buf[1] & 0xC0) !== 0x80) {
      self.lastNeed = 1;
      return '\ufffd';
    }
    if (self.lastNeed > 2 && buf.length > 2) {
      if ((buf[2] & 0xC0) !== 0x80) {
        self.lastNeed = 2;
        return '\ufffd';
      }
    }
  }
}

// Attempts to complete a multi-byte UTF-8 character using bytes from a Buffer.
function utf8FillLast(buf) {
  var p = this.lastTotal - this.lastNeed;
  var r = utf8CheckExtraBytes(this, buf, p);
  if (r !== undefined) return r;
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, p, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  buf.copy(this.lastChar, p, 0, buf.length);
  this.lastNeed -= buf.length;
}

// Returns all complete UTF-8 characters in a Buffer. If the Buffer ended on a
// partial character, the character's bytes are buffered until the required
// number of bytes are available.
function utf8Text(buf, i) {
  var total = utf8CheckIncomplete(this, buf, i);
  if (!this.lastNeed) return buf.toString('utf8', i);
  this.lastTotal = total;
  var end = buf.length - (total - this.lastNeed);
  buf.copy(this.lastChar, 0, end);
  return buf.toString('utf8', i, end);
}

// For UTF-8, a replacement character is added when ending on a partial
// character.
function utf8End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) return r + '\ufffd';
  return r;
}

// UTF-16LE typically needs two bytes per character, but even if we have an even
// number of bytes available, we need to check if we end on a leading/high
// surrogate. In that case, we need to wait for the next two bytes in order to
// decode the last character properly.
function utf16Text(buf, i) {
  if ((buf.length - i) % 2 === 0) {
    var r = buf.toString('utf16le', i);
    if (r) {
      var c = r.charCodeAt(r.length - 1);
      if (c >= 0xD800 && c <= 0xDBFF) {
        this.lastNeed = 2;
        this.lastTotal = 4;
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
        return r.slice(0, -1);
      }
    }
    return r;
  }
  this.lastNeed = 1;
  this.lastTotal = 2;
  this.lastChar[0] = buf[buf.length - 1];
  return buf.toString('utf16le', i, buf.length - 1);
}

// For UTF-16LE we do not explicitly append special replacement characters if we
// end on a partial character, we simply let v8 handle that.
function utf16End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) {
    var end = this.lastTotal - this.lastNeed;
    return r + this.lastChar.toString('utf16le', 0, end);
  }
  return r;
}

function base64Text(buf, i) {
  var n = (buf.length - i) % 3;
  if (n === 0) return buf.toString('base64', i);
  this.lastNeed = 3 - n;
  this.lastTotal = 3;
  if (n === 1) {
    this.lastChar[0] = buf[buf.length - 1];
  } else {
    this.lastChar[0] = buf[buf.length - 2];
    this.lastChar[1] = buf[buf.length - 1];
  }
  return buf.toString('base64', i, buf.length - n);
}

function base64End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) return r + this.lastChar.toString('base64', 0, 3 - this.lastNeed);
  return r;
}

// Pass bytes on through for single-byte encodings (e.g. ascii, latin1, hex)
function simpleWrite(buf) {
  return buf.toString(this.encoding);
}

function simpleEnd(buf) {
  return buf && buf.length ? this.write(buf) : '';
}
},{"safe-buffer":"../node_modules/string_decoder/node_modules/safe-buffer/index.js"}],"../node_modules/readable-stream/lib/internal/streams/end-of-stream.js":[function(require,module,exports) {
// Ported from https://github.com/mafintosh/end-of-stream with
// permission from the author, Mathias Buus (@mafintosh).
'use strict';

var ERR_STREAM_PREMATURE_CLOSE = require('../../../errors').codes.ERR_STREAM_PREMATURE_CLOSE;

function once(callback) {
  var called = false;
  return function () {
    if (called) return;
    called = true;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    callback.apply(this, args);
  };
}

function noop() {}

function isRequest(stream) {
  return stream.setHeader && typeof stream.abort === 'function';
}

function eos(stream, opts, callback) {
  if (typeof opts === 'function') return eos(stream, null, opts);
  if (!opts) opts = {};
  callback = once(callback || noop);
  var readable = opts.readable || opts.readable !== false && stream.readable;
  var writable = opts.writable || opts.writable !== false && stream.writable;

  var onlegacyfinish = function onlegacyfinish() {
    if (!stream.writable) onfinish();
  };

  var writableEnded = stream._writableState && stream._writableState.finished;

  var onfinish = function onfinish() {
    writable = false;
    writableEnded = true;
    if (!readable) callback.call(stream);
  };

  var readableEnded = stream._readableState && stream._readableState.endEmitted;

  var onend = function onend() {
    readable = false;
    readableEnded = true;
    if (!writable) callback.call(stream);
  };

  var onerror = function onerror(err) {
    callback.call(stream, err);
  };

  var onclose = function onclose() {
    var err;

    if (readable && !readableEnded) {
      if (!stream._readableState || !stream._readableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
      return callback.call(stream, err);
    }

    if (writable && !writableEnded) {
      if (!stream._writableState || !stream._writableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
      return callback.call(stream, err);
    }
  };

  var onrequest = function onrequest() {
    stream.req.on('finish', onfinish);
  };

  if (isRequest(stream)) {
    stream.on('complete', onfinish);
    stream.on('abort', onclose);
    if (stream.req) onrequest();else stream.on('request', onrequest);
  } else if (writable && !stream._writableState) {
    // legacy streams
    stream.on('end', onlegacyfinish);
    stream.on('close', onlegacyfinish);
  }

  stream.on('end', onend);
  stream.on('finish', onfinish);
  if (opts.error !== false) stream.on('error', onerror);
  stream.on('close', onclose);
  return function () {
    stream.removeListener('complete', onfinish);
    stream.removeListener('abort', onclose);
    stream.removeListener('request', onrequest);
    if (stream.req) stream.req.removeListener('finish', onfinish);
    stream.removeListener('end', onlegacyfinish);
    stream.removeListener('close', onlegacyfinish);
    stream.removeListener('finish', onfinish);
    stream.removeListener('end', onend);
    stream.removeListener('error', onerror);
    stream.removeListener('close', onclose);
  };
}

module.exports = eos;
},{"../../../errors":"../node_modules/readable-stream/errors-browser.js"}],"../node_modules/readable-stream/lib/internal/streams/async_iterator.js":[function(require,module,exports) {
var process = require("process");
'use strict';

var _Object$setPrototypeO;

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var finished = require('./end-of-stream');

var kLastResolve = Symbol('lastResolve');
var kLastReject = Symbol('lastReject');
var kError = Symbol('error');
var kEnded = Symbol('ended');
var kLastPromise = Symbol('lastPromise');
var kHandlePromise = Symbol('handlePromise');
var kStream = Symbol('stream');

function createIterResult(value, done) {
  return {
    value: value,
    done: done
  };
}

function readAndResolve(iter) {
  var resolve = iter[kLastResolve];

  if (resolve !== null) {
    var data = iter[kStream].read(); // we defer if data is null
    // we can be expecting either 'end' or
    // 'error'

    if (data !== null) {
      iter[kLastPromise] = null;
      iter[kLastResolve] = null;
      iter[kLastReject] = null;
      resolve(createIterResult(data, false));
    }
  }
}

function onReadable(iter) {
  // we wait for the next tick, because it might
  // emit an error with process.nextTick
  process.nextTick(readAndResolve, iter);
}

function wrapForNext(lastPromise, iter) {
  return function (resolve, reject) {
    lastPromise.then(function () {
      if (iter[kEnded]) {
        resolve(createIterResult(undefined, true));
        return;
      }

      iter[kHandlePromise](resolve, reject);
    }, reject);
  };
}

var AsyncIteratorPrototype = Object.getPrototypeOf(function () {});
var ReadableStreamAsyncIteratorPrototype = Object.setPrototypeOf((_Object$setPrototypeO = {
  get stream() {
    return this[kStream];
  },

  next: function next() {
    var _this = this; // if we have detected an error in the meanwhile
    // reject straight away


    var error = this[kError];

    if (error !== null) {
      return Promise.reject(error);
    }

    if (this[kEnded]) {
      return Promise.resolve(createIterResult(undefined, true));
    }

    if (this[kStream].destroyed) {
      // We need to defer via nextTick because if .destroy(err) is
      // called, the error will be emitted via nextTick, and
      // we cannot guarantee that there is no error lingering around
      // waiting to be emitted.
      return new Promise(function (resolve, reject) {
        process.nextTick(function () {
          if (_this[kError]) {
            reject(_this[kError]);
          } else {
            resolve(createIterResult(undefined, true));
          }
        });
      });
    } // if we have multiple next() calls
    // we will wait for the previous Promise to finish
    // this logic is optimized to support for await loops,
    // where next() is only called once at a time


    var lastPromise = this[kLastPromise];
    var promise;

    if (lastPromise) {
      promise = new Promise(wrapForNext(lastPromise, this));
    } else {
      // fast path needed to support multiple this.push()
      // without triggering the next() queue
      var data = this[kStream].read();

      if (data !== null) {
        return Promise.resolve(createIterResult(data, false));
      }

      promise = new Promise(this[kHandlePromise]);
    }

    this[kLastPromise] = promise;
    return promise;
  }
}, _defineProperty(_Object$setPrototypeO, Symbol.asyncIterator, function () {
  return this;
}), _defineProperty(_Object$setPrototypeO, "return", function _return() {
  var _this2 = this; // destroy(err, cb) is a private API
  // we can guarantee we have that here, because we control the
  // Readable class this is attached to


  return new Promise(function (resolve, reject) {
    _this2[kStream].destroy(null, function (err) {
      if (err) {
        reject(err);
        return;
      }

      resolve(createIterResult(undefined, true));
    });
  });
}), _Object$setPrototypeO), AsyncIteratorPrototype);

var createReadableStreamAsyncIterator = function createReadableStreamAsyncIterator(stream) {
  var _Object$create;

  var iterator = Object.create(ReadableStreamAsyncIteratorPrototype, (_Object$create = {}, _defineProperty(_Object$create, kStream, {
    value: stream,
    writable: true
  }), _defineProperty(_Object$create, kLastResolve, {
    value: null,
    writable: true
  }), _defineProperty(_Object$create, kLastReject, {
    value: null,
    writable: true
  }), _defineProperty(_Object$create, kError, {
    value: null,
    writable: true
  }), _defineProperty(_Object$create, kEnded, {
    value: stream._readableState.endEmitted,
    writable: true
  }), _defineProperty(_Object$create, kHandlePromise, {
    value: function value(resolve, reject) {
      var data = iterator[kStream].read();

      if (data) {
        iterator[kLastPromise] = null;
        iterator[kLastResolve] = null;
        iterator[kLastReject] = null;
        resolve(createIterResult(data, false));
      } else {
        iterator[kLastResolve] = resolve;
        iterator[kLastReject] = reject;
      }
    },
    writable: true
  }), _Object$create));
  iterator[kLastPromise] = null;
  finished(stream, function (err) {
    if (err && err.code !== 'ERR_STREAM_PREMATURE_CLOSE') {
      var reject = iterator[kLastReject]; // reject if we are waiting for data in the Promise
      // returned by next() and store the error

      if (reject !== null) {
        iterator[kLastPromise] = null;
        iterator[kLastResolve] = null;
        iterator[kLastReject] = null;
        reject(err);
      }

      iterator[kError] = err;
      return;
    }

    var resolve = iterator[kLastResolve];

    if (resolve !== null) {
      iterator[kLastPromise] = null;
      iterator[kLastResolve] = null;
      iterator[kLastReject] = null;
      resolve(createIterResult(undefined, true));
    }

    iterator[kEnded] = true;
  });
  stream.on('readable', onReadable.bind(null, iterator));
  return iterator;
};

module.exports = createReadableStreamAsyncIterator;
},{"./end-of-stream":"../node_modules/readable-stream/lib/internal/streams/end-of-stream.js","process":"../node_modules/process/browser.js"}],"../node_modules/readable-stream/lib/internal/streams/from-browser.js":[function(require,module,exports) {
module.exports = function () {
  throw new Error('Readable.from is not available in the browser');
};
},{}],"../node_modules/readable-stream/lib/_stream_readable.js":[function(require,module,exports) {

var global = arguments[3];
var process = require("process");
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
'use strict';

module.exports = Readable;
/*<replacement>*/

var Duplex;
/*</replacement>*/

Readable.ReadableState = ReadableState;
/*<replacement>*/

var EE = require('events').EventEmitter;

var EElistenerCount = function EElistenerCount(emitter, type) {
  return emitter.listeners(type).length;
};
/*</replacement>*/

/*<replacement>*/


var Stream = require('./internal/streams/stream');
/*</replacement>*/


var Buffer = require('buffer').Buffer;

var OurUint8Array = global.Uint8Array || function () {};

function _uint8ArrayToBuffer(chunk) {
  return Buffer.from(chunk);
}

function _isUint8Array(obj) {
  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}
/*<replacement>*/


var debugUtil = require('util');

var debug;

if (debugUtil && debugUtil.debuglog) {
  debug = debugUtil.debuglog('stream');
} else {
  debug = function debug() {};
}
/*</replacement>*/


var BufferList = require('./internal/streams/buffer_list');

var destroyImpl = require('./internal/streams/destroy');

var _require = require('./internal/streams/state'),
    getHighWaterMark = _require.getHighWaterMark;

var _require$codes = require('../errors').codes,
    ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE,
    ERR_STREAM_PUSH_AFTER_EOF = _require$codes.ERR_STREAM_PUSH_AFTER_EOF,
    ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED,
    ERR_STREAM_UNSHIFT_AFTER_END_EVENT = _require$codes.ERR_STREAM_UNSHIFT_AFTER_END_EVENT; // Lazy loaded to improve the startup performance.


var StringDecoder;
var createReadableStreamAsyncIterator;
var from;

require('inherits')(Readable, Stream);

var errorOrDestroy = destroyImpl.errorOrDestroy;
var kProxyEvents = ['error', 'close', 'destroy', 'pause', 'resume'];

function prependListener(emitter, event, fn) {
  // Sadly this is not cacheable as some libraries bundle their own
  // event emitter implementation with them.
  if (typeof emitter.prependListener === 'function') return emitter.prependListener(event, fn); // This is a hack to make sure that our error handler is attached before any
  // userland ones.  NEVER DO THIS. This is here only because this code needs
  // to continue to work with older versions of Node.js that do not include
  // the prependListener() method. The goal is to eventually remove this hack.

  if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);else if (Array.isArray(emitter._events[event])) emitter._events[event].unshift(fn);else emitter._events[event] = [fn, emitter._events[event]];
}

function ReadableState(options, stream, isDuplex) {
  Duplex = Duplex || require('./_stream_duplex');
  options = options || {}; // Duplex streams are both readable and writable, but share
  // the same options object.
  // However, some cases require setting options to different
  // values for the readable and the writable sides of the duplex stream.
  // These options can be provided separately as readableXXX and writableXXX.

  if (typeof isDuplex !== 'boolean') isDuplex = stream instanceof Duplex; // object stream flag. Used to make read(n) ignore n and to
  // make all the buffer merging and length checks go away

  this.objectMode = !!options.objectMode;
  if (isDuplex) this.objectMode = this.objectMode || !!options.readableObjectMode; // the point at which it stops calling _read() to fill the buffer
  // Note: 0 is a valid value, means "don't call _read preemptively ever"

  this.highWaterMark = getHighWaterMark(this, options, 'readableHighWaterMark', isDuplex); // A linked list is used to store data chunks instead of an array because the
  // linked list can remove elements from the beginning faster than
  // array.shift()

  this.buffer = new BufferList();
  this.length = 0;
  this.pipes = null;
  this.pipesCount = 0;
  this.flowing = null;
  this.ended = false;
  this.endEmitted = false;
  this.reading = false; // a flag to be able to tell if the event 'readable'/'data' is emitted
  // immediately, or on a later tick.  We set this to true at first, because
  // any actions that shouldn't happen until "later" should generally also
  // not happen before the first read call.

  this.sync = true; // whenever we return null, then we set a flag to say
  // that we're awaiting a 'readable' event emission.

  this.needReadable = false;
  this.emittedReadable = false;
  this.readableListening = false;
  this.resumeScheduled = false;
  this.paused = true; // Should close be emitted on destroy. Defaults to true.

  this.emitClose = options.emitClose !== false; // Should .destroy() be called after 'end' (and potentially 'finish')

  this.autoDestroy = !!options.autoDestroy; // has it been destroyed

  this.destroyed = false; // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.

  this.defaultEncoding = options.defaultEncoding || 'utf8'; // the number of writers that are awaiting a drain event in .pipe()s

  this.awaitDrain = 0; // if true, a maybeReadMore has been scheduled

  this.readingMore = false;
  this.decoder = null;
  this.encoding = null;

  if (options.encoding) {
    if (!StringDecoder) StringDecoder = require('string_decoder/').StringDecoder;
    this.decoder = new StringDecoder(options.encoding);
    this.encoding = options.encoding;
  }
}

function Readable(options) {
  Duplex = Duplex || require('./_stream_duplex');
  if (!(this instanceof Readable)) return new Readable(options); // Checking for a Stream.Duplex instance is faster here instead of inside
  // the ReadableState constructor, at least with V8 6.5

  var isDuplex = this instanceof Duplex;
  this._readableState = new ReadableState(options, this, isDuplex); // legacy

  this.readable = true;

  if (options) {
    if (typeof options.read === 'function') this._read = options.read;
    if (typeof options.destroy === 'function') this._destroy = options.destroy;
  }

  Stream.call(this);
}

Object.defineProperty(Readable.prototype, 'destroyed', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    if (this._readableState === undefined) {
      return false;
    }

    return this._readableState.destroyed;
  },
  set: function set(value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (!this._readableState) {
      return;
    } // backward compatibility, the user is explicitly
    // managing destroyed


    this._readableState.destroyed = value;
  }
});
Readable.prototype.destroy = destroyImpl.destroy;
Readable.prototype._undestroy = destroyImpl.undestroy;

Readable.prototype._destroy = function (err, cb) {
  cb(err);
}; // Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.


Readable.prototype.push = function (chunk, encoding) {
  var state = this._readableState;
  var skipChunkCheck;

  if (!state.objectMode) {
    if (typeof chunk === 'string') {
      encoding = encoding || state.defaultEncoding;

      if (encoding !== state.encoding) {
        chunk = Buffer.from(chunk, encoding);
        encoding = '';
      }

      skipChunkCheck = true;
    }
  } else {
    skipChunkCheck = true;
  }

  return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
}; // Unshift should *always* be something directly out of read()


Readable.prototype.unshift = function (chunk) {
  return readableAddChunk(this, chunk, null, true, false);
};

function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
  debug('readableAddChunk', chunk);
  var state = stream._readableState;

  if (chunk === null) {
    state.reading = false;
    onEofChunk(stream, state);
  } else {
    var er;
    if (!skipChunkCheck) er = chunkInvalid(state, chunk);

    if (er) {
      errorOrDestroy(stream, er);
    } else if (state.objectMode || chunk && chunk.length > 0) {
      if (typeof chunk !== 'string' && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer.prototype) {
        chunk = _uint8ArrayToBuffer(chunk);
      }

      if (addToFront) {
        if (state.endEmitted) errorOrDestroy(stream, new ERR_STREAM_UNSHIFT_AFTER_END_EVENT());else addChunk(stream, state, chunk, true);
      } else if (state.ended) {
        errorOrDestroy(stream, new ERR_STREAM_PUSH_AFTER_EOF());
      } else if (state.destroyed) {
        return false;
      } else {
        state.reading = false;

        if (state.decoder && !encoding) {
          chunk = state.decoder.write(chunk);
          if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false);else maybeReadMore(stream, state);
        } else {
          addChunk(stream, state, chunk, false);
        }
      }
    } else if (!addToFront) {
      state.reading = false;
      maybeReadMore(stream, state);
    }
  } // We can push more data if we are below the highWaterMark.
  // Also, if we have no data yet, we can stand some more bytes.
  // This is to work around cases where hwm=0, such as the repl.


  return !state.ended && (state.length < state.highWaterMark || state.length === 0);
}

function addChunk(stream, state, chunk, addToFront) {
  if (state.flowing && state.length === 0 && !state.sync) {
    state.awaitDrain = 0;
    stream.emit('data', chunk);
  } else {
    // update the buffer info.
    state.length += state.objectMode ? 1 : chunk.length;
    if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);
    if (state.needReadable) emitReadable(stream);
  }

  maybeReadMore(stream, state);
}

function chunkInvalid(state, chunk) {
  var er;

  if (!_isUint8Array(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
    er = new ERR_INVALID_ARG_TYPE('chunk', ['string', 'Buffer', 'Uint8Array'], chunk);
  }

  return er;
}

Readable.prototype.isPaused = function () {
  return this._readableState.flowing === false;
}; // backwards compatibility.


Readable.prototype.setEncoding = function (enc) {
  if (!StringDecoder) StringDecoder = require('string_decoder/').StringDecoder;
  var decoder = new StringDecoder(enc);
  this._readableState.decoder = decoder; // If setEncoding(null), decoder.encoding equals utf8

  this._readableState.encoding = this._readableState.decoder.encoding; // Iterate over current buffer to convert already stored Buffers:

  var p = this._readableState.buffer.head;
  var content = '';

  while (p !== null) {
    content += decoder.write(p.data);
    p = p.next;
  }

  this._readableState.buffer.clear();

  if (content !== '') this._readableState.buffer.push(content);
  this._readableState.length = content.length;
  return this;
}; // Don't raise the hwm > 1GB


var MAX_HWM = 0x40000000;

function computeNewHighWaterMark(n) {
  if (n >= MAX_HWM) {
    // TODO(ronag): Throw ERR_VALUE_OUT_OF_RANGE.
    n = MAX_HWM;
  } else {
    // Get the next highest power of 2 to prevent increasing hwm excessively in
    // tiny amounts
    n--;
    n |= n >>> 1;
    n |= n >>> 2;
    n |= n >>> 4;
    n |= n >>> 8;
    n |= n >>> 16;
    n++;
  }

  return n;
} // This function is designed to be inlinable, so please take care when making
// changes to the function body.


function howMuchToRead(n, state) {
  if (n <= 0 || state.length === 0 && state.ended) return 0;
  if (state.objectMode) return 1;

  if (n !== n) {
    // Only flow one buffer at a time
    if (state.flowing && state.length) return state.buffer.head.data.length;else return state.length;
  } // If we're asking for more than the current hwm, then raise the hwm.


  if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
  if (n <= state.length) return n; // Don't have enough

  if (!state.ended) {
    state.needReadable = true;
    return 0;
  }

  return state.length;
} // you can override either this method, or the async _read(n) below.


Readable.prototype.read = function (n) {
  debug('read', n);
  n = parseInt(n, 10);
  var state = this._readableState;
  var nOrig = n;
  if (n !== 0) state.emittedReadable = false; // if we're doing read(0) to trigger a readable event, but we
  // already have a bunch of data in the buffer, then just trigger
  // the 'readable' event and move on.

  if (n === 0 && state.needReadable && ((state.highWaterMark !== 0 ? state.length >= state.highWaterMark : state.length > 0) || state.ended)) {
    debug('read: emitReadable', state.length, state.ended);
    if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
    return null;
  }

  n = howMuchToRead(n, state); // if we've ended, and we're now clear, then finish it up.

  if (n === 0 && state.ended) {
    if (state.length === 0) endReadable(this);
    return null;
  } // All the actual chunk generation logic needs to be
  // *below* the call to _read.  The reason is that in certain
  // synthetic stream cases, such as passthrough streams, _read
  // may be a completely synchronous operation which may change
  // the state of the read buffer, providing enough data when
  // before there was *not* enough.
  //
  // So, the steps are:
  // 1. Figure out what the state of things will be after we do
  // a read from the buffer.
  //
  // 2. If that resulting state will trigger a _read, then call _read.
  // Note that this may be asynchronous, or synchronous.  Yes, it is
  // deeply ugly to write APIs this way, but that still doesn't mean
  // that the Readable class should behave improperly, as streams are
  // designed to be sync/async agnostic.
  // Take note if the _read call is sync or async (ie, if the read call
  // has returned yet), so that we know whether or not it's safe to emit
  // 'readable' etc.
  //
  // 3. Actually pull the requested chunks out of the buffer and return.
  // if we need a readable event, then we need to do some reading.


  var doRead = state.needReadable;
  debug('need readable', doRead); // if we currently have less than the highWaterMark, then also read some

  if (state.length === 0 || state.length - n < state.highWaterMark) {
    doRead = true;
    debug('length less than watermark', doRead);
  } // however, if we've ended, then there's no point, and if we're already
  // reading, then it's unnecessary.


  if (state.ended || state.reading) {
    doRead = false;
    debug('reading or ended', doRead);
  } else if (doRead) {
    debug('do read');
    state.reading = true;
    state.sync = true; // if the length is currently zero, then we *need* a readable event.

    if (state.length === 0) state.needReadable = true; // call internal read method

    this._read(state.highWaterMark);

    state.sync = false; // If _read pushed data synchronously, then `reading` will be false,
    // and we need to re-evaluate how much data we can return to the user.

    if (!state.reading) n = howMuchToRead(nOrig, state);
  }

  var ret;
  if (n > 0) ret = fromList(n, state);else ret = null;

  if (ret === null) {
    state.needReadable = state.length <= state.highWaterMark;
    n = 0;
  } else {
    state.length -= n;
    state.awaitDrain = 0;
  }

  if (state.length === 0) {
    // If we have nothing in the buffer, then we want to know
    // as soon as we *do* get something into the buffer.
    if (!state.ended) state.needReadable = true; // If we tried to read() past the EOF, then emit end on the next tick.

    if (nOrig !== n && state.ended) endReadable(this);
  }

  if (ret !== null) this.emit('data', ret);
  return ret;
};

function onEofChunk(stream, state) {
  debug('onEofChunk');
  if (state.ended) return;

  if (state.decoder) {
    var chunk = state.decoder.end();

    if (chunk && chunk.length) {
      state.buffer.push(chunk);
      state.length += state.objectMode ? 1 : chunk.length;
    }
  }

  state.ended = true;

  if (state.sync) {
    // if we are sync, wait until next tick to emit the data.
    // Otherwise we risk emitting data in the flow()
    // the readable code triggers during a read() call
    emitReadable(stream);
  } else {
    // emit 'readable' now to make sure it gets picked up.
    state.needReadable = false;

    if (!state.emittedReadable) {
      state.emittedReadable = true;
      emitReadable_(stream);
    }
  }
} // Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.


function emitReadable(stream) {
  var state = stream._readableState;
  debug('emitReadable', state.needReadable, state.emittedReadable);
  state.needReadable = false;

  if (!state.emittedReadable) {
    debug('emitReadable', state.flowing);
    state.emittedReadable = true;
    process.nextTick(emitReadable_, stream);
  }
}

function emitReadable_(stream) {
  var state = stream._readableState;
  debug('emitReadable_', state.destroyed, state.length, state.ended);

  if (!state.destroyed && (state.length || state.ended)) {
    stream.emit('readable');
    state.emittedReadable = false;
  } // The stream needs another readable event if
  // 1. It is not flowing, as the flow mechanism will take
  //    care of it.
  // 2. It is not ended.
  // 3. It is below the highWaterMark, so we can schedule
  //    another readable later.


  state.needReadable = !state.flowing && !state.ended && state.length <= state.highWaterMark;
  flow(stream);
} // at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.


function maybeReadMore(stream, state) {
  if (!state.readingMore) {
    state.readingMore = true;
    process.nextTick(maybeReadMore_, stream, state);
  }
}

function maybeReadMore_(stream, state) {
  // Attempt to read more data if we should.
  //
  // The conditions for reading more data are (one of):
  // - Not enough data buffered (state.length < state.highWaterMark). The loop
  //   is responsible for filling the buffer with enough data if such data
  //   is available. If highWaterMark is 0 and we are not in the flowing mode
  //   we should _not_ attempt to buffer any extra data. We'll get more data
  //   when the stream consumer calls read() instead.
  // - No data in the buffer, and the stream is in flowing mode. In this mode
  //   the loop below is responsible for ensuring read() is called. Failing to
  //   call read here would abort the flow and there's no other mechanism for
  //   continuing the flow if the stream consumer has just subscribed to the
  //   'data' event.
  //
  // In addition to the above conditions to keep reading data, the following
  // conditions prevent the data from being read:
  // - The stream has ended (state.ended).
  // - There is already a pending 'read' operation (state.reading). This is a
  //   case where the the stream has called the implementation defined _read()
  //   method, but they are processing the call asynchronously and have _not_
  //   called push() with new data. In this case we skip performing more
  //   read()s. The execution ends in this method again after the _read() ends
  //   up calling push() with more data.
  while (!state.reading && !state.ended && (state.length < state.highWaterMark || state.flowing && state.length === 0)) {
    var len = state.length;
    debug('maybeReadMore read 0');
    stream.read(0);
    if (len === state.length) // didn't get any data, stop spinning.
      break;
  }

  state.readingMore = false;
} // abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.


Readable.prototype._read = function (n) {
  errorOrDestroy(this, new ERR_METHOD_NOT_IMPLEMENTED('_read()'));
};

Readable.prototype.pipe = function (dest, pipeOpts) {
  var src = this;
  var state = this._readableState;

  switch (state.pipesCount) {
    case 0:
      state.pipes = dest;
      break;

    case 1:
      state.pipes = [state.pipes, dest];
      break;

    default:
      state.pipes.push(dest);
      break;
  }

  state.pipesCount += 1;
  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);
  var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
  var endFn = doEnd ? onend : unpipe;
  if (state.endEmitted) process.nextTick(endFn);else src.once('end', endFn);
  dest.on('unpipe', onunpipe);

  function onunpipe(readable, unpipeInfo) {
    debug('onunpipe');

    if (readable === src) {
      if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
        unpipeInfo.hasUnpiped = true;
        cleanup();
      }
    }
  }

  function onend() {
    debug('onend');
    dest.end();
  } // when the dest drains, it reduces the awaitDrain counter
  // on the source.  This would be more elegant with a .once()
  // handler in flow(), but adding and removing repeatedly is
  // too slow.


  var ondrain = pipeOnDrain(src);
  dest.on('drain', ondrain);
  var cleanedUp = false;

  function cleanup() {
    debug('cleanup'); // cleanup event handlers once the pipe is broken

    dest.removeListener('close', onclose);
    dest.removeListener('finish', onfinish);
    dest.removeListener('drain', ondrain);
    dest.removeListener('error', onerror);
    dest.removeListener('unpipe', onunpipe);
    src.removeListener('end', onend);
    src.removeListener('end', unpipe);
    src.removeListener('data', ondata);
    cleanedUp = true; // if the reader is waiting for a drain event from this
    // specific writer, then it would cause it to never start
    // flowing again.
    // So, if this is awaiting a drain, then we just call it now.
    // If we don't know, then assume that we are waiting for one.

    if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
  }

  src.on('data', ondata);

  function ondata(chunk) {
    debug('ondata');
    var ret = dest.write(chunk);
    debug('dest.write', ret);

    if (ret === false) {
      // If the user unpiped during `dest.write()`, it is possible
      // to get stuck in a permanently paused state if that write
      // also returned false.
      // => Check whether `dest` is still a piping destination.
      if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
        debug('false write response, pause', state.awaitDrain);
        state.awaitDrain++;
      }

      src.pause();
    }
  } // if the dest has an error, then stop piping into it.
  // however, don't suppress the throwing behavior for this.


  function onerror(er) {
    debug('onerror', er);
    unpipe();
    dest.removeListener('error', onerror);
    if (EElistenerCount(dest, 'error') === 0) errorOrDestroy(dest, er);
  } // Make sure our error handler is attached before userland ones.


  prependListener(dest, 'error', onerror); // Both close and finish should trigger unpipe, but only once.

  function onclose() {
    dest.removeListener('finish', onfinish);
    unpipe();
  }

  dest.once('close', onclose);

  function onfinish() {
    debug('onfinish');
    dest.removeListener('close', onclose);
    unpipe();
  }

  dest.once('finish', onfinish);

  function unpipe() {
    debug('unpipe');
    src.unpipe(dest);
  } // tell the dest that it's being piped to


  dest.emit('pipe', src); // start the flow if it hasn't been started already.

  if (!state.flowing) {
    debug('pipe resume');
    src.resume();
  }

  return dest;
};

function pipeOnDrain(src) {
  return function pipeOnDrainFunctionResult() {
    var state = src._readableState;
    debug('pipeOnDrain', state.awaitDrain);
    if (state.awaitDrain) state.awaitDrain--;

    if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
      state.flowing = true;
      flow(src);
    }
  };
}

Readable.prototype.unpipe = function (dest) {
  var state = this._readableState;
  var unpipeInfo = {
    hasUnpiped: false
  }; // if we're not piping anywhere, then do nothing.

  if (state.pipesCount === 0) return this; // just one destination.  most common case.

  if (state.pipesCount === 1) {
    // passed in one, but it's not the right one.
    if (dest && dest !== state.pipes) return this;
    if (!dest) dest = state.pipes; // got a match.

    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;
    if (dest) dest.emit('unpipe', this, unpipeInfo);
    return this;
  } // slow case. multiple pipe destinations.


  if (!dest) {
    // remove all.
    var dests = state.pipes;
    var len = state.pipesCount;
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;

    for (var i = 0; i < len; i++) {
      dests[i].emit('unpipe', this, {
        hasUnpiped: false
      });
    }

    return this;
  } // try to find the right one.


  var index = indexOf(state.pipes, dest);
  if (index === -1) return this;
  state.pipes.splice(index, 1);
  state.pipesCount -= 1;
  if (state.pipesCount === 1) state.pipes = state.pipes[0];
  dest.emit('unpipe', this, unpipeInfo);
  return this;
}; // set up data events if they are asked for
// Ensure readable listeners eventually get something


Readable.prototype.on = function (ev, fn) {
  var res = Stream.prototype.on.call(this, ev, fn);
  var state = this._readableState;

  if (ev === 'data') {
    // update readableListening so that resume() may be a no-op
    // a few lines down. This is needed to support once('readable').
    state.readableListening = this.listenerCount('readable') > 0; // Try start flowing on next tick if stream isn't explicitly paused

    if (state.flowing !== false) this.resume();
  } else if (ev === 'readable') {
    if (!state.endEmitted && !state.readableListening) {
      state.readableListening = state.needReadable = true;
      state.flowing = false;
      state.emittedReadable = false;
      debug('on readable', state.length, state.reading);

      if (state.length) {
        emitReadable(this);
      } else if (!state.reading) {
        process.nextTick(nReadingNextTick, this);
      }
    }
  }

  return res;
};

Readable.prototype.addListener = Readable.prototype.on;

Readable.prototype.removeListener = function (ev, fn) {
  var res = Stream.prototype.removeListener.call(this, ev, fn);

  if (ev === 'readable') {
    // We need to check if there is someone still listening to
    // readable and reset the state. However this needs to happen
    // after readable has been emitted but before I/O (nextTick) to
    // support once('readable', fn) cycles. This means that calling
    // resume within the same tick will have no
    // effect.
    process.nextTick(updateReadableListening, this);
  }

  return res;
};

Readable.prototype.removeAllListeners = function (ev) {
  var res = Stream.prototype.removeAllListeners.apply(this, arguments);

  if (ev === 'readable' || ev === undefined) {
    // We need to check if there is someone still listening to
    // readable and reset the state. However this needs to happen
    // after readable has been emitted but before I/O (nextTick) to
    // support once('readable', fn) cycles. This means that calling
    // resume within the same tick will have no
    // effect.
    process.nextTick(updateReadableListening, this);
  }

  return res;
};

function updateReadableListening(self) {
  var state = self._readableState;
  state.readableListening = self.listenerCount('readable') > 0;

  if (state.resumeScheduled && !state.paused) {
    // flowing needs to be set to true now, otherwise
    // the upcoming resume will not flow.
    state.flowing = true; // crude way to check if we should resume
  } else if (self.listenerCount('data') > 0) {
    self.resume();
  }
}

function nReadingNextTick(self) {
  debug('readable nexttick read 0');
  self.read(0);
} // pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.


Readable.prototype.resume = function () {
  var state = this._readableState;

  if (!state.flowing) {
    debug('resume'); // we flow only if there is no one listening
    // for readable, but we still have to call
    // resume()

    state.flowing = !state.readableListening;
    resume(this, state);
  }

  state.paused = false;
  return this;
};

function resume(stream, state) {
  if (!state.resumeScheduled) {
    state.resumeScheduled = true;
    process.nextTick(resume_, stream, state);
  }
}

function resume_(stream, state) {
  debug('resume', state.reading);

  if (!state.reading) {
    stream.read(0);
  }

  state.resumeScheduled = false;
  stream.emit('resume');
  flow(stream);
  if (state.flowing && !state.reading) stream.read(0);
}

Readable.prototype.pause = function () {
  debug('call pause flowing=%j', this._readableState.flowing);

  if (this._readableState.flowing !== false) {
    debug('pause');
    this._readableState.flowing = false;
    this.emit('pause');
  }

  this._readableState.paused = true;
  return this;
};

function flow(stream) {
  var state = stream._readableState;
  debug('flow', state.flowing);

  while (state.flowing && stream.read() !== null) {
    ;
  }
} // wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.


Readable.prototype.wrap = function (stream) {
  var _this = this;

  var state = this._readableState;
  var paused = false;
  stream.on('end', function () {
    debug('wrapped end');

    if (state.decoder && !state.ended) {
      var chunk = state.decoder.end();
      if (chunk && chunk.length) _this.push(chunk);
    }

    _this.push(null);
  });
  stream.on('data', function (chunk) {
    debug('wrapped data');
    if (state.decoder) chunk = state.decoder.write(chunk); // don't skip over falsy values in objectMode

    if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;

    var ret = _this.push(chunk);

    if (!ret) {
      paused = true;
      stream.pause();
    }
  }); // proxy all the other methods.
  // important when wrapping filters and duplexes.

  for (var i in stream) {
    if (this[i] === undefined && typeof stream[i] === 'function') {
      this[i] = function methodWrap(method) {
        return function methodWrapReturnFunction() {
          return stream[method].apply(stream, arguments);
        };
      }(i);
    }
  } // proxy certain important events.


  for (var n = 0; n < kProxyEvents.length; n++) {
    stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
  } // when we try to consume some more bytes, simply unpause the
  // underlying stream.


  this._read = function (n) {
    debug('wrapped _read', n);

    if (paused) {
      paused = false;
      stream.resume();
    }
  };

  return this;
};

if (typeof Symbol === 'function') {
  Readable.prototype[Symbol.asyncIterator] = function () {
    if (createReadableStreamAsyncIterator === undefined) {
      createReadableStreamAsyncIterator = require('./internal/streams/async_iterator');
    }

    return createReadableStreamAsyncIterator(this);
  };
}

Object.defineProperty(Readable.prototype, 'readableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._readableState.highWaterMark;
  }
});
Object.defineProperty(Readable.prototype, 'readableBuffer', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._readableState && this._readableState.buffer;
  }
});
Object.defineProperty(Readable.prototype, 'readableFlowing', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._readableState.flowing;
  },
  set: function set(state) {
    if (this._readableState) {
      this._readableState.flowing = state;
    }
  }
}); // exposed for testing purposes only.

Readable._fromList = fromList;
Object.defineProperty(Readable.prototype, 'readableLength', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._readableState.length;
  }
}); // Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.

function fromList(n, state) {
  // nothing buffered
  if (state.length === 0) return null;
  var ret;
  if (state.objectMode) ret = state.buffer.shift();else if (!n || n >= state.length) {
    // read it all, truncate the list
    if (state.decoder) ret = state.buffer.join('');else if (state.buffer.length === 1) ret = state.buffer.first();else ret = state.buffer.concat(state.length);
    state.buffer.clear();
  } else {
    // read part of list
    ret = state.buffer.consume(n, state.decoder);
  }
  return ret;
}

function endReadable(stream) {
  var state = stream._readableState;
  debug('endReadable', state.endEmitted);

  if (!state.endEmitted) {
    state.ended = true;
    process.nextTick(endReadableNT, state, stream);
  }
}

function endReadableNT(state, stream) {
  debug('endReadableNT', state.endEmitted, state.length); // Check that we didn't get one last unshift.

  if (!state.endEmitted && state.length === 0) {
    state.endEmitted = true;
    stream.readable = false;
    stream.emit('end');

    if (state.autoDestroy) {
      // In case of duplex streams we need a way to detect
      // if the writable side is ready for autoDestroy as well
      var wState = stream._writableState;

      if (!wState || wState.autoDestroy && wState.finished) {
        stream.destroy();
      }
    }
  }
}

if (typeof Symbol === 'function') {
  Readable.from = function (iterable, opts) {
    if (from === undefined) {
      from = require('./internal/streams/from');
    }

    return from(Readable, iterable, opts);
  };
}

function indexOf(xs, x) {
  for (var i = 0, l = xs.length; i < l; i++) {
    if (xs[i] === x) return i;
  }

  return -1;
}
},{"events":"../node_modules/events/events.js","./internal/streams/stream":"../node_modules/readable-stream/lib/internal/streams/stream-browser.js","buffer":"../node_modules/buffer/index.js","util":"../node_modules/parcel-bundler/src/builtins/_empty.js","./internal/streams/buffer_list":"../node_modules/readable-stream/lib/internal/streams/buffer_list.js","./internal/streams/destroy":"../node_modules/readable-stream/lib/internal/streams/destroy.js","./internal/streams/state":"../node_modules/readable-stream/lib/internal/streams/state.js","../errors":"../node_modules/readable-stream/errors-browser.js","inherits":"../node_modules/inherits/inherits_browser.js","./_stream_duplex":"../node_modules/readable-stream/lib/_stream_duplex.js","string_decoder/":"../node_modules/string_decoder/lib/string_decoder.js","./internal/streams/async_iterator":"../node_modules/readable-stream/lib/internal/streams/async_iterator.js","./internal/streams/from":"../node_modules/readable-stream/lib/internal/streams/from-browser.js","process":"../node_modules/process/browser.js"}],"../node_modules/readable-stream/lib/_stream_transform.js":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.
'use strict';

module.exports = Transform;

var _require$codes = require('../errors').codes,
    ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED,
    ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK,
    ERR_TRANSFORM_ALREADY_TRANSFORMING = _require$codes.ERR_TRANSFORM_ALREADY_TRANSFORMING,
    ERR_TRANSFORM_WITH_LENGTH_0 = _require$codes.ERR_TRANSFORM_WITH_LENGTH_0;

var Duplex = require('./_stream_duplex');

require('inherits')(Transform, Duplex);

function afterTransform(er, data) {
  var ts = this._transformState;
  ts.transforming = false;
  var cb = ts.writecb;

  if (cb === null) {
    return this.emit('error', new ERR_MULTIPLE_CALLBACK());
  }

  ts.writechunk = null;
  ts.writecb = null;
  if (data != null) // single equals check for both `null` and `undefined`
    this.push(data);
  cb(er);
  var rs = this._readableState;
  rs.reading = false;

  if (rs.needReadable || rs.length < rs.highWaterMark) {
    this._read(rs.highWaterMark);
  }
}

function Transform(options) {
  if (!(this instanceof Transform)) return new Transform(options);
  Duplex.call(this, options);
  this._transformState = {
    afterTransform: afterTransform.bind(this),
    needTransform: false,
    transforming: false,
    writecb: null,
    writechunk: null,
    writeencoding: null
  }; // start out asking for a readable event once data is transformed.

  this._readableState.needReadable = true; // we have implemented the _read method, and done the other things
  // that Readable wants before the first _read call, so unset the
  // sync guard flag.

  this._readableState.sync = false;

  if (options) {
    if (typeof options.transform === 'function') this._transform = options.transform;
    if (typeof options.flush === 'function') this._flush = options.flush;
  } // When the writable side finishes, then flush out anything remaining.


  this.on('prefinish', prefinish);
}

function prefinish() {
  var _this = this;

  if (typeof this._flush === 'function' && !this._readableState.destroyed) {
    this._flush(function (er, data) {
      done(_this, er, data);
    });
  } else {
    done(this, null, null);
  }
}

Transform.prototype.push = function (chunk, encoding) {
  this._transformState.needTransform = false;
  return Duplex.prototype.push.call(this, chunk, encoding);
}; // This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.


Transform.prototype._transform = function (chunk, encoding, cb) {
  cb(new ERR_METHOD_NOT_IMPLEMENTED('_transform()'));
};

Transform.prototype._write = function (chunk, encoding, cb) {
  var ts = this._transformState;
  ts.writecb = cb;
  ts.writechunk = chunk;
  ts.writeencoding = encoding;

  if (!ts.transforming) {
    var rs = this._readableState;
    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
  }
}; // Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.


Transform.prototype._read = function (n) {
  var ts = this._transformState;

  if (ts.writechunk !== null && !ts.transforming) {
    ts.transforming = true;

    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
  } else {
    // mark that we need a transform, so that any data that comes in
    // will get processed, now that we've asked for it.
    ts.needTransform = true;
  }
};

Transform.prototype._destroy = function (err, cb) {
  Duplex.prototype._destroy.call(this, err, function (err2) {
    cb(err2);
  });
};

function done(stream, er, data) {
  if (er) return stream.emit('error', er);
  if (data != null) // single equals check for both `null` and `undefined`
    stream.push(data); // TODO(BridgeAR): Write a test for these two error cases
  // if there's nothing in the write buffer, then that means
  // that nothing more will ever be provided

  if (stream._writableState.length) throw new ERR_TRANSFORM_WITH_LENGTH_0();
  if (stream._transformState.transforming) throw new ERR_TRANSFORM_ALREADY_TRANSFORMING();
  return stream.push(null);
}
},{"../errors":"../node_modules/readable-stream/errors-browser.js","./_stream_duplex":"../node_modules/readable-stream/lib/_stream_duplex.js","inherits":"../node_modules/inherits/inherits_browser.js"}],"../node_modules/readable-stream/lib/_stream_passthrough.js":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a passthrough stream.
// basically just the most minimal sort of Transform stream.
// Every written chunk gets output as-is.
'use strict';

module.exports = PassThrough;

var Transform = require('./_stream_transform');

require('inherits')(PassThrough, Transform);

function PassThrough(options) {
  if (!(this instanceof PassThrough)) return new PassThrough(options);
  Transform.call(this, options);
}

PassThrough.prototype._transform = function (chunk, encoding, cb) {
  cb(null, chunk);
};
},{"./_stream_transform":"../node_modules/readable-stream/lib/_stream_transform.js","inherits":"../node_modules/inherits/inherits_browser.js"}],"../node_modules/readable-stream/lib/internal/streams/pipeline.js":[function(require,module,exports) {
// Ported from https://github.com/mafintosh/pump with
// permission from the author, Mathias Buus (@mafintosh).
'use strict';

var eos;

function once(callback) {
  var called = false;
  return function () {
    if (called) return;
    called = true;
    callback.apply(void 0, arguments);
  };
}

var _require$codes = require('../../../errors').codes,
    ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS,
    ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED;

function noop(err) {
  // Rethrow the error if it exists to avoid swallowing it
  if (err) throw err;
}

function isRequest(stream) {
  return stream.setHeader && typeof stream.abort === 'function';
}

function destroyer(stream, reading, writing, callback) {
  callback = once(callback);
  var closed = false;
  stream.on('close', function () {
    closed = true;
  });
  if (eos === undefined) eos = require('./end-of-stream');
  eos(stream, {
    readable: reading,
    writable: writing
  }, function (err) {
    if (err) return callback(err);
    closed = true;
    callback();
  });
  var destroyed = false;
  return function (err) {
    if (closed) return;
    if (destroyed) return;
    destroyed = true; // request.destroy just do .end - .abort is what we want

    if (isRequest(stream)) return stream.abort();
    if (typeof stream.destroy === 'function') return stream.destroy();
    callback(err || new ERR_STREAM_DESTROYED('pipe'));
  };
}

function call(fn) {
  fn();
}

function pipe(from, to) {
  return from.pipe(to);
}

function popCallback(streams) {
  if (!streams.length) return noop;
  if (typeof streams[streams.length - 1] !== 'function') return noop;
  return streams.pop();
}

function pipeline() {
  for (var _len = arguments.length, streams = new Array(_len), _key = 0; _key < _len; _key++) {
    streams[_key] = arguments[_key];
  }

  var callback = popCallback(streams);
  if (Array.isArray(streams[0])) streams = streams[0];

  if (streams.length < 2) {
    throw new ERR_MISSING_ARGS('streams');
  }

  var error;
  var destroys = streams.map(function (stream, i) {
    var reading = i < streams.length - 1;
    var writing = i > 0;
    return destroyer(stream, reading, writing, function (err) {
      if (!error) error = err;
      if (err) destroys.forEach(call);
      if (reading) return;
      destroys.forEach(call);
      callback(error);
    });
  });
  return streams.reduce(pipe);
}

module.exports = pipeline;
},{"../../../errors":"../node_modules/readable-stream/errors-browser.js","./end-of-stream":"../node_modules/readable-stream/lib/internal/streams/end-of-stream.js"}],"../node_modules/readable-stream/readable-browser.js":[function(require,module,exports) {
exports = module.exports = require('./lib/_stream_readable.js');
exports.Stream = exports;
exports.Readable = exports;
exports.Writable = require('./lib/_stream_writable.js');
exports.Duplex = require('./lib/_stream_duplex.js');
exports.Transform = require('./lib/_stream_transform.js');
exports.PassThrough = require('./lib/_stream_passthrough.js');
exports.finished = require('./lib/internal/streams/end-of-stream.js');
exports.pipeline = require('./lib/internal/streams/pipeline.js');
},{"./lib/_stream_readable.js":"../node_modules/readable-stream/lib/_stream_readable.js","./lib/_stream_writable.js":"../node_modules/readable-stream/lib/_stream_writable.js","./lib/_stream_duplex.js":"../node_modules/readable-stream/lib/_stream_duplex.js","./lib/_stream_transform.js":"../node_modules/readable-stream/lib/_stream_transform.js","./lib/_stream_passthrough.js":"../node_modules/readable-stream/lib/_stream_passthrough.js","./lib/internal/streams/end-of-stream.js":"../node_modules/readable-stream/lib/internal/streams/end-of-stream.js","./lib/internal/streams/pipeline.js":"../node_modules/readable-stream/lib/internal/streams/pipeline.js"}],"../node_modules/n3/src/N3Store.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _N3DataFactory = _interopRequireWildcard(require("./N3DataFactory"));

var _readableStream = require("readable-stream");

var _IRIs = _interopRequireDefault(require("./IRIs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// **N3Store** objects store N3 quads by graph in memory.
// ## Constructor
class N3Store {
  constructor(quads, options) {
    // The number of quads is initially zero
    this._size = 0; // `_graphs` contains subject, predicate, and object indexes per graph

    this._graphs = Object.create(null); // `_ids` maps entities such as `http://xmlns.com/foaf/0.1/name` to numbers,
    // saving memory by using only numbers as keys in `_graphs`

    this._id = 0;
    this._ids = Object.create(null);
    this._ids['><'] = 0; // dummy entry, so the first actual key is non-zero

    this._entities = Object.create(null); // inverse of `_ids`
    // `_blankNodeIndex` is the index of the last automatically named blank node

    this._blankNodeIndex = 0; // Shift parameters if `quads` is not given

    if (!options && quads && !quads[0]) options = quads, quads = null;
    options = options || {};
    this._factory = options.factory || _N3DataFactory.default; // Add quads if passed

    if (quads) this.addQuads(quads);
  } // ## Public properties
  // ### `size` returns the number of quads in the store


  get size() {
    // Return the quad count if if was cached
    let size = this._size;
    if (size !== null) return size; // Calculate the number of quads by counting to the deepest level

    size = 0;
    const graphs = this._graphs;
    let subjects, subject;

    for (const graphKey in graphs) for (const subjectKey in subjects = graphs[graphKey].subjects) for (const predicateKey in subject = subjects[subjectKey]) size += Object.keys(subject[predicateKey]).length;

    return this._size = size;
  } // ## Private methods
  // ### `_addToIndex` adds a quad to a three-layered index.
  // Returns if the index has changed, if the entry did not already exist.


  _addToIndex(index0, key0, key1, key2) {
    // Create layers as necessary
    const index1 = index0[key0] || (index0[key0] = {});
    const index2 = index1[key1] || (index1[key1] = {}); // Setting the key to _any_ value signals the presence of the quad

    const existed = (key2 in index2);
    if (!existed) index2[key2] = null;
    return !existed;
  } // ### `_removeFromIndex` removes a quad from a three-layered index


  _removeFromIndex(index0, key0, key1, key2) {
    // Remove the quad from the index
    const index1 = index0[key0],
          index2 = index1[key1];
    delete index2[key2]; // Remove intermediary index layers if they are empty

    for (const key in index2) return;

    delete index1[key1];

    for (const key in index1) return;

    delete index0[key0];
  } // ### `_findInIndex` finds a set of quads in a three-layered index.
  // The index base is `index0` and the keys at each level are `key0`, `key1`, and `key2`.
  // Any of these keys can be undefined, which is interpreted as a wildcard.
  // `name0`, `name1`, and `name2` are the names of the keys at each level,
  // used when reconstructing the resulting quad
  // (for instance: _subject_, _predicate_, and _object_).
  // Finally, `graph` will be the graph of the created quads.
  // If `callback` is given, each result is passed through it
  // and iteration halts when it returns truthy for any quad.
  // If instead `array` is given, each result is added to the array.


  _findInIndex(index0, key0, key1, key2, name0, name1, name2, graph, callback, array) {
    let tmp, index1, index2; // Depending on the number of variables, keys or reverse index are faster

    const varCount = !key0 + !key1 + !key2,
          entityKeys = varCount > 1 ? Object.keys(this._ids) : this._entities; // If a key is specified, use only that part of index 0.

    if (key0) (tmp = index0, index0 = {})[key0] = tmp[key0];

    for (const value0 in index0) {
      const entity0 = entityKeys[value0];

      if (index1 = index0[value0]) {
        // If a key is specified, use only that part of index 1.
        if (key1) (tmp = index1, index1 = {})[key1] = tmp[key1];

        for (const value1 in index1) {
          const entity1 = entityKeys[value1];

          if (index2 = index1[value1]) {
            // If a key is specified, use only that part of index 2, if it exists.
            const values = key2 ? key2 in index2 ? [key2] : [] : Object.keys(index2); // Create quads for all items found in index 2.

            for (let l = 0; l < values.length; l++) {
              const parts = {
                subject: null,
                predicate: null,
                object: null
              };
              parts[name0] = (0, _N3DataFactory.termFromId)(entity0, this._factory);
              parts[name1] = (0, _N3DataFactory.termFromId)(entity1, this._factory);
              parts[name2] = (0, _N3DataFactory.termFromId)(entityKeys[values[l]], this._factory);

              const quad = this._factory.quad(parts.subject, parts.predicate, parts.object, (0, _N3DataFactory.termFromId)(graph, this._factory));

              if (array) array.push(quad);else if (callback(quad)) return true;
            }
          }
        }
      }
    }

    return array;
  } // ### `_loop` executes the callback on all keys of index 0


  _loop(index0, callback) {
    for (const key0 in index0) callback(key0);
  } // ### `_loopByKey0` executes the callback on all keys of a certain entry in index 0


  _loopByKey0(index0, key0, callback) {
    let index1, key1;

    if (index1 = index0[key0]) {
      for (key1 in index1) callback(key1);
    }
  } // ### `_loopByKey1` executes the callback on given keys of all entries in index 0


  _loopByKey1(index0, key1, callback) {
    let key0, index1;

    for (key0 in index0) {
      index1 = index0[key0];
      if (index1[key1]) callback(key0);
    }
  } // ### `_loopBy2Keys` executes the callback on given keys of certain entries in index 2


  _loopBy2Keys(index0, key0, key1, callback) {
    let index1, index2, key2;

    if ((index1 = index0[key0]) && (index2 = index1[key1])) {
      for (key2 in index2) callback(key2);
    }
  } // ### `_countInIndex` counts matching quads in a three-layered index.
  // The index base is `index0` and the keys at each level are `key0`, `key1`, and `key2`.
  // Any of these keys can be undefined, which is interpreted as a wildcard.


  _countInIndex(index0, key0, key1, key2) {
    let count = 0,
        tmp,
        index1,
        index2; // If a key is specified, count only that part of index 0

    if (key0) (tmp = index0, index0 = {})[key0] = tmp[key0];

    for (const value0 in index0) {
      if (index1 = index0[value0]) {
        // If a key is specified, count only that part of index 1
        if (key1) (tmp = index1, index1 = {})[key1] = tmp[key1];

        for (const value1 in index1) {
          if (index2 = index1[value1]) {
            // If a key is specified, count the quad if it exists
            if (key2) key2 in index2 && count++; // Otherwise, count all quads
            else count += Object.keys(index2).length;
          }
        }
      }
    }

    return count;
  } // ### `_getGraphs` returns an array with the given graph,
  // or all graphs if the argument is null or undefined.


  _getGraphs(graph) {
    if (!isString(graph)) return this._graphs;
    const graphs = {};
    graphs[graph] = this._graphs[graph];
    return graphs;
  } // ### `_uniqueEntities` returns a function that accepts an entity ID
  // and passes the corresponding entity to callback if it hasn't occurred before.


  _uniqueEntities(callback) {
    const uniqueIds = Object.create(null);
    return id => {
      if (!(id in uniqueIds)) {
        uniqueIds[id] = true;
        callback((0, _N3DataFactory.termFromId)(this._entities[id], this._factory));
      }
    };
  } // ## Public methods
  // ### `addQuad` adds a new quad to the store.
  // Returns if the quad index has changed, if the quad did not already exist.


  addQuad(subject, predicate, object, graph) {
    // Shift arguments if a quad object is given instead of components
    if (!predicate) graph = subject.graph, object = subject.object, predicate = subject.predicate, subject = subject.subject; // Convert terms to internal string representation

    subject = (0, _N3DataFactory.termToId)(subject);
    predicate = (0, _N3DataFactory.termToId)(predicate);
    object = (0, _N3DataFactory.termToId)(object);
    graph = (0, _N3DataFactory.termToId)(graph); // Find the graph that will contain the triple

    let graphItem = this._graphs[graph]; // Create the graph if it doesn't exist yet

    if (!graphItem) {
      graphItem = this._graphs[graph] = {
        subjects: {},
        predicates: {},
        objects: {}
      }; // Freezing a graph helps subsequent `add` performance,
      // and properties will never be modified anyway

      Object.freeze(graphItem);
    } // Since entities can often be long IRIs, we avoid storing them in every index.
    // Instead, we have a separate index that maps entities to numbers,
    // which are then used as keys in the other indexes.


    const ids = this._ids;
    const entities = this._entities;
    subject = ids[subject] || (ids[entities[++this._id] = subject] = this._id);
    predicate = ids[predicate] || (ids[entities[++this._id] = predicate] = this._id);
    object = ids[object] || (ids[entities[++this._id] = object] = this._id);

    const changed = this._addToIndex(graphItem.subjects, subject, predicate, object);

    this._addToIndex(graphItem.predicates, predicate, object, subject);

    this._addToIndex(graphItem.objects, object, subject, predicate); // The cached quad count is now invalid


    this._size = null;
    return changed;
  } // ### `addQuads` adds multiple quads to the store


  addQuads(quads) {
    for (let i = 0; i < quads.length; i++) this.addQuad(quads[i]);
  } // ### `import` adds a stream of quads to the store


  import(stream) {
    stream.on('data', quad => {
      this.addQuad(quad);
    });
    return stream;
  } // ### `removeQuad` removes a quad from the store if it exists


  removeQuad(subject, predicate, object, graph) {
    // Shift arguments if a quad object is given instead of components
    if (!predicate) graph = subject.graph, object = subject.object, predicate = subject.predicate, subject = subject.subject; // Convert terms to internal string representation

    subject = (0, _N3DataFactory.termToId)(subject);
    predicate = (0, _N3DataFactory.termToId)(predicate);
    object = (0, _N3DataFactory.termToId)(object);
    graph = (0, _N3DataFactory.termToId)(graph); // Find internal identifiers for all components
    // and verify the quad exists.

    const ids = this._ids,
          graphs = this._graphs;
    let graphItem, subjects, predicates;
    if (!(subject = ids[subject]) || !(predicate = ids[predicate]) || !(object = ids[object]) || !(graphItem = graphs[graph]) || !(subjects = graphItem.subjects[subject]) || !(predicates = subjects[predicate]) || !(object in predicates)) return false; // Remove it from all indexes

    this._removeFromIndex(graphItem.subjects, subject, predicate, object);

    this._removeFromIndex(graphItem.predicates, predicate, object, subject);

    this._removeFromIndex(graphItem.objects, object, subject, predicate);

    if (this._size !== null) this._size--; // Remove the graph if it is empty

    for (subject in graphItem.subjects) return true;

    delete graphs[graph];
    return true;
  } // ### `removeQuads` removes multiple quads from the store


  removeQuads(quads) {
    for (let i = 0; i < quads.length; i++) this.removeQuad(quads[i]);
  } // ### `remove` removes a stream of quads from the store


  remove(stream) {
    stream.on('data', quad => {
      this.removeQuad(quad);
    });
    return stream;
  } // ### `removeMatches` removes all matching quads from the store
  // Setting any field to `undefined` or `null` indicates a wildcard.


  removeMatches(subject, predicate, object, graph) {
    return this.remove(this.match(subject, predicate, object, graph));
  } // ### `deleteGraph` removes all triples with the given graph from the store


  deleteGraph(graph) {
    return this.removeMatches(null, null, null, graph);
  } // ### `getQuads` returns an array of quads matching a pattern.
  // Setting any field to `undefined` or `null` indicates a wildcard.


  getQuads(subject, predicate, object, graph) {
    // Convert terms to internal string representation
    subject = subject && (0, _N3DataFactory.termToId)(subject);
    predicate = predicate && (0, _N3DataFactory.termToId)(predicate);
    object = object && (0, _N3DataFactory.termToId)(object);
    graph = graph && (0, _N3DataFactory.termToId)(graph);

    const quads = [],
          graphs = this._getGraphs(graph),
          ids = this._ids;

    let content, subjectId, predicateId, objectId; // Translate IRIs to internal index keys.

    if (isString(subject) && !(subjectId = ids[subject]) || isString(predicate) && !(predicateId = ids[predicate]) || isString(object) && !(objectId = ids[object])) return quads;

    for (const graphId in graphs) {
      // Only if the specified graph contains triples, there can be results
      if (content = graphs[graphId]) {
        // Choose the optimal index, based on what fields are present
        if (subjectId) {
          if (objectId) // If subject and object are given, the object index will be the fastest
            this._findInIndex(content.objects, objectId, subjectId, predicateId, 'object', 'subject', 'predicate', graphId, null, quads);else // If only subject and possibly predicate are given, the subject index will be the fastest
            this._findInIndex(content.subjects, subjectId, predicateId, null, 'subject', 'predicate', 'object', graphId, null, quads);
        } else if (predicateId) // If only predicate and possibly object are given, the predicate index will be the fastest
          this._findInIndex(content.predicates, predicateId, objectId, null, 'predicate', 'object', 'subject', graphId, null, quads);else if (objectId) // If only object is given, the object index will be the fastest
          this._findInIndex(content.objects, objectId, null, null, 'object', 'subject', 'predicate', graphId, null, quads);else // If nothing is given, iterate subjects and predicates first
          this._findInIndex(content.subjects, null, null, null, 'subject', 'predicate', 'object', graphId, null, quads);
      }
    }

    return quads;
  } // ### `match` returns a stream of quads matching a pattern.
  // Setting any field to `undefined` or `null` indicates a wildcard.


  match(subject, predicate, object, graph) {
    const stream = new _readableStream.Readable({
      objectMode: true
    }); // Initialize stream once it is being read

    stream._read = () => {
      for (const quad of this.getQuads(subject, predicate, object, graph)) stream.push(quad);

      stream.push(null);
    };

    return stream;
  } // ### `countQuads` returns the number of quads matching a pattern.
  // Setting any field to `undefined` or `null` indicates a wildcard.


  countQuads(subject, predicate, object, graph) {
    // Convert terms to internal string representation
    subject = subject && (0, _N3DataFactory.termToId)(subject);
    predicate = predicate && (0, _N3DataFactory.termToId)(predicate);
    object = object && (0, _N3DataFactory.termToId)(object);
    graph = graph && (0, _N3DataFactory.termToId)(graph);

    const graphs = this._getGraphs(graph),
          ids = this._ids;

    let count = 0,
        content,
        subjectId,
        predicateId,
        objectId; // Translate IRIs to internal index keys.

    if (isString(subject) && !(subjectId = ids[subject]) || isString(predicate) && !(predicateId = ids[predicate]) || isString(object) && !(objectId = ids[object])) return 0;

    for (const graphId in graphs) {
      // Only if the specified graph contains triples, there can be results
      if (content = graphs[graphId]) {
        // Choose the optimal index, based on what fields are present
        if (subject) {
          if (object) // If subject and object are given, the object index will be the fastest
            count += this._countInIndex(content.objects, objectId, subjectId, predicateId);else // If only subject and possibly predicate are given, the subject index will be the fastest
            count += this._countInIndex(content.subjects, subjectId, predicateId, objectId);
        } else if (predicate) {
          // If only predicate and possibly object are given, the predicate index will be the fastest
          count += this._countInIndex(content.predicates, predicateId, objectId, subjectId);
        } else {
          // If only object is possibly given, the object index will be the fastest
          count += this._countInIndex(content.objects, objectId, subjectId, predicateId);
        }
      }
    }

    return count;
  } // ### `forEach` executes the callback on all quads.
  // Setting any field to `undefined` or `null` indicates a wildcard.


  forEach(callback, subject, predicate, object, graph) {
    this.some(quad => {
      callback(quad);
      return false;
    }, subject, predicate, object, graph);
  } // ### `every` executes the callback on all quads,
  // and returns `true` if it returns truthy for all them.
  // Setting any field to `undefined` or `null` indicates a wildcard.


  every(callback, subject, predicate, object, graph) {
    let some = false;
    const every = !this.some(quad => {
      some = true;
      return !callback(quad);
    }, subject, predicate, object, graph);
    return some && every;
  } // ### `some` executes the callback on all quads,
  // and returns `true` if it returns truthy for any of them.
  // Setting any field to `undefined` or `null` indicates a wildcard.


  some(callback, subject, predicate, object, graph) {
    // Convert terms to internal string representation
    subject = subject && (0, _N3DataFactory.termToId)(subject);
    predicate = predicate && (0, _N3DataFactory.termToId)(predicate);
    object = object && (0, _N3DataFactory.termToId)(object);
    graph = graph && (0, _N3DataFactory.termToId)(graph);

    const graphs = this._getGraphs(graph),
          ids = this._ids;

    let content, subjectId, predicateId, objectId; // Translate IRIs to internal index keys.

    if (isString(subject) && !(subjectId = ids[subject]) || isString(predicate) && !(predicateId = ids[predicate]) || isString(object) && !(objectId = ids[object])) return false;

    for (const graphId in graphs) {
      // Only if the specified graph contains triples, there can be results
      if (content = graphs[graphId]) {
        // Choose the optimal index, based on what fields are present
        if (subjectId) {
          if (objectId) {
            // If subject and object are given, the object index will be the fastest
            if (this._findInIndex(content.objects, objectId, subjectId, predicateId, 'object', 'subject', 'predicate', graphId, callback, null)) return true;
          } else // If only subject and possibly predicate are given, the subject index will be the fastest
            if (this._findInIndex(content.subjects, subjectId, predicateId, null, 'subject', 'predicate', 'object', graphId, callback, null)) return true;
        } else if (predicateId) {
          // If only predicate and possibly object are given, the predicate index will be the fastest
          if (this._findInIndex(content.predicates, predicateId, objectId, null, 'predicate', 'object', 'subject', graphId, callback, null)) {
            return true;
          }
        } else if (objectId) {
          // If only object is given, the object index will be the fastest
          if (this._findInIndex(content.objects, objectId, null, null, 'object', 'subject', 'predicate', graphId, callback, null)) {
            return true;
          }
        } else // If nothing is given, iterate subjects and predicates first
          if (this._findInIndex(content.subjects, null, null, null, 'subject', 'predicate', 'object', graphId, callback, null)) {
            return true;
          }
      }
    }

    return false;
  } // ### `getSubjects` returns all subjects that match the pattern.
  // Setting any field to `undefined` or `null` indicates a wildcard.


  getSubjects(predicate, object, graph) {
    const results = [];
    this.forSubjects(s => {
      results.push(s);
    }, predicate, object, graph);
    return results;
  } // ### `forSubjects` executes the callback on all subjects that match the pattern.
  // Setting any field to `undefined` or `null` indicates a wildcard.


  forSubjects(callback, predicate, object, graph) {
    // Convert terms to internal string representation
    predicate = predicate && (0, _N3DataFactory.termToId)(predicate);
    object = object && (0, _N3DataFactory.termToId)(object);
    graph = graph && (0, _N3DataFactory.termToId)(graph);

    const ids = this._ids,
          graphs = this._getGraphs(graph);

    let content, predicateId, objectId;
    callback = this._uniqueEntities(callback); // Translate IRIs to internal index keys.

    if (isString(predicate) && !(predicateId = ids[predicate]) || isString(object) && !(objectId = ids[object])) return;

    for (graph in graphs) {
      // Only if the specified graph contains triples, there can be results
      if (content = graphs[graph]) {
        // Choose optimal index based on which fields are wildcards
        if (predicateId) {
          if (objectId) // If predicate and object are given, the POS index is best.
            this._loopBy2Keys(content.predicates, predicateId, objectId, callback);else // If only predicate is given, the SPO index is best.
            this._loopByKey1(content.subjects, predicateId, callback);
        } else if (objectId) // If only object is given, the OSP index is best.
          this._loopByKey0(content.objects, objectId, callback);else // If no params given, iterate all the subjects
          this._loop(content.subjects, callback);
      }
    }
  } // ### `getPredicates` returns all predicates that match the pattern.
  // Setting any field to `undefined` or `null` indicates a wildcard.


  getPredicates(subject, object, graph) {
    const results = [];
    this.forPredicates(p => {
      results.push(p);
    }, subject, object, graph);
    return results;
  } // ### `forPredicates` executes the callback on all predicates that match the pattern.
  // Setting any field to `undefined` or `null` indicates a wildcard.


  forPredicates(callback, subject, object, graph) {
    // Convert terms to internal string representation
    subject = subject && (0, _N3DataFactory.termToId)(subject);
    object = object && (0, _N3DataFactory.termToId)(object);
    graph = graph && (0, _N3DataFactory.termToId)(graph);

    const ids = this._ids,
          graphs = this._getGraphs(graph);

    let content, subjectId, objectId;
    callback = this._uniqueEntities(callback); // Translate IRIs to internal index keys.

    if (isString(subject) && !(subjectId = ids[subject]) || isString(object) && !(objectId = ids[object])) return;

    for (graph in graphs) {
      // Only if the specified graph contains triples, there can be results
      if (content = graphs[graph]) {
        // Choose optimal index based on which fields are wildcards
        if (subjectId) {
          if (objectId) // If subject and object are given, the OSP index is best.
            this._loopBy2Keys(content.objects, objectId, subjectId, callback);else // If only subject is given, the SPO index is best.
            this._loopByKey0(content.subjects, subjectId, callback);
        } else if (objectId) // If only object is given, the POS index is best.
          this._loopByKey1(content.predicates, objectId, callback);else // If no params given, iterate all the predicates.
          this._loop(content.predicates, callback);
      }
    }
  } // ### `getObjects` returns all objects that match the pattern.
  // Setting any field to `undefined` or `null` indicates a wildcard.


  getObjects(subject, predicate, graph) {
    const results = [];
    this.forObjects(o => {
      results.push(o);
    }, subject, predicate, graph);
    return results;
  } // ### `forObjects` executes the callback on all objects that match the pattern.
  // Setting any field to `undefined` or `null` indicates a wildcard.


  forObjects(callback, subject, predicate, graph) {
    // Convert terms to internal string representation
    subject = subject && (0, _N3DataFactory.termToId)(subject);
    predicate = predicate && (0, _N3DataFactory.termToId)(predicate);
    graph = graph && (0, _N3DataFactory.termToId)(graph);

    const ids = this._ids,
          graphs = this._getGraphs(graph);

    let content, subjectId, predicateId;
    callback = this._uniqueEntities(callback); // Translate IRIs to internal index keys.

    if (isString(subject) && !(subjectId = ids[subject]) || isString(predicate) && !(predicateId = ids[predicate])) return;

    for (graph in graphs) {
      // Only if the specified graph contains triples, there can be results
      if (content = graphs[graph]) {
        // Choose optimal index based on which fields are wildcards
        if (subjectId) {
          if (predicateId) // If subject and predicate are given, the SPO index is best.
            this._loopBy2Keys(content.subjects, subjectId, predicateId, callback);else // If only subject is given, the OSP index is best.
            this._loopByKey1(content.objects, subjectId, callback);
        } else if (predicateId) // If only predicate is given, the POS index is best.
          this._loopByKey0(content.predicates, predicateId, callback);else // If no params given, iterate all the objects.
          this._loop(content.objects, callback);
      }
    }
  } // ### `getGraphs` returns all graphs that match the pattern.
  // Setting any field to `undefined` or `null` indicates a wildcard.


  getGraphs(subject, predicate, object) {
    const results = [];
    this.forGraphs(g => {
      results.push(g);
    }, subject, predicate, object);
    return results;
  } // ### `forGraphs` executes the callback on all graphs that match the pattern.
  // Setting any field to `undefined` or `null` indicates a wildcard.


  forGraphs(callback, subject, predicate, object) {
    for (const graph in this._graphs) {
      this.some(quad => {
        callback(quad.graph);
        return true; // Halt iteration of some()
      }, subject, predicate, object, graph);
    }
  } // ### `createBlankNode` creates a new blank node, returning its name


  createBlankNode(suggestedName) {
    let name, index; // Generate a name based on the suggested name

    if (suggestedName) {
      name = suggestedName = "_:".concat(suggestedName), index = 1;

      while (this._ids[name]) name = suggestedName + index++;
    } // Generate a generic blank node name
    else {
        do {
          name = "_:b".concat(this._blankNodeIndex++);
        } while (this._ids[name]);
      } // Add the blank node to the entities, avoiding the generation of duplicates


    this._ids[name] = ++this._id;
    this._entities[this._id] = name;
    return this._factory.blankNode(name.substr(2));
  } // ### `extractLists` finds and removes all list triples
  // and returns the items per list.


  extractLists() {
    let {
      remove = false,
      ignoreErrors = false
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const lists = {}; // has scalar keys so could be a simple Object

    const onError = ignoreErrors ? () => true : (node, message) => {
      throw new Error("".concat(node.value, " ").concat(message));
    }; // Traverse each list from its tail

    const tails = this.getQuads(null, _IRIs.default.rdf.rest, _IRIs.default.rdf.nil, null);
    const toRemove = remove ? [...tails] : [];
    tails.forEach(tailQuad => {
      const items = []; // the members found as objects of rdf:first quads

      let malformed = false; // signals whether the current list is malformed

      let head; // the head of the list (_:b1 in above example)

      let headPos; // set to subject or object when head is set

      const graph = tailQuad.graph; // make sure list is in exactly one graph
      // Traverse the list from tail to end

      let current = tailQuad.subject;

      while (current && !malformed) {
        const objectQuads = this.getQuads(null, null, current, null);
        const subjectQuads = this.getQuads(current, null, null, null);
        let quad,
            first = null,
            rest = null,
            parent = null; // Find the first and rest of this list node

        for (let i = 0; i < subjectQuads.length && !malformed; i++) {
          quad = subjectQuads[i];
          if (!quad.graph.equals(graph)) malformed = onError(current, 'not confined to single graph');else if (head) malformed = onError(current, 'has non-list arcs out'); // one rdf:first
          else if (quad.predicate.value === _IRIs.default.rdf.first) {
              if (first) malformed = onError(current, 'has multiple rdf:first arcs');else toRemove.push(first = quad);
            } // one rdf:rest
            else if (quad.predicate.value === _IRIs.default.rdf.rest) {
                if (rest) malformed = onError(current, 'has multiple rdf:rest arcs');else toRemove.push(rest = quad);
              } // alien triple
              else if (objectQuads.length) malformed = onError(current, 'can\'t be subject and object');else {
                  head = quad; // e.g. { (1 2 3) :p :o }

                  headPos = 'subject';
                }
        } // { :s :p (1 2) } arrives here with no head
        // { (1 2) :p :o } arrives here with head set to the list.


        for (let i = 0; i < objectQuads.length && !malformed; ++i) {
          quad = objectQuads[i];
          if (head) malformed = onError(current, 'can\'t have coreferences'); // one rdf:rest
          else if (quad.predicate.value === _IRIs.default.rdf.rest) {
              if (parent) malformed = onError(current, 'has incoming rdf:rest arcs');else parent = quad;
            } else {
              head = quad; // e.g. { :s :p (1 2) }

              headPos = 'object';
            }
        } // Store the list item and continue with parent


        if (!first) malformed = onError(current, 'has no list head');else items.unshift(first.object);
        current = parent && parent.subject;
      } // Don't remove any quads if the list is malformed


      if (malformed) remove = false; // Store the list under the value of its head
      else if (head) lists[head[headPos].value] = items;
    }); // Remove list quads if requested

    if (remove) this.removeQuads(toRemove);
    return lists;
  }

} // Determines whether the argument is a string


exports.default = N3Store;

function isString(s) {
  return typeof s === 'string' || s instanceof String;
}
},{"./N3DataFactory":"../node_modules/n3/src/N3DataFactory.js","readable-stream":"../node_modules/readable-stream/readable-browser.js","./IRIs":"../node_modules/n3/src/IRIs.js"}],"../node_modules/n3/src/N3StreamParser.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _N3Parser = _interopRequireDefault(require("./N3Parser"));

var _readableStream = require("readable-stream");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// **N3StreamParser** parses a text stream into a quad stream.
// ## Constructor
class N3StreamParser extends _readableStream.Transform {
  constructor(options) {
    super({
      decodeStrings: true
    });
    this._readableState.objectMode = true; // Set up parser with dummy stream to obtain `data` and `end` callbacks

    const parser = new _N3Parser.default(options);
    let onData, onEnd;
    parser.parse({
      on: (event, callback) => {
        switch (event) {
          case 'data':
            onData = callback;
            break;

          case 'end':
            onEnd = callback;
            break;
        }
      }
    }, // Handle quads by pushing them down the pipeline
    (error, quad) => {
      error && this.emit('error', error) || quad && this.push(quad);
    }, // Emit prefixes through the `prefix` event
    (prefix, uri) => {
      this.emit('prefix', prefix, uri);
    }); // Implement Transform methods through parser callbacks

    this._transform = (chunk, encoding, done) => {
      onData(chunk);
      done();
    };

    this._flush = done => {
      onEnd();
      done();
    };
  } // ### Parses a stream of strings


  import(stream) {
    stream.on('data', chunk => {
      this.write(chunk);
    });
    stream.on('end', () => {
      this.end();
    });
    stream.on('error', error => {
      this.emit('error', error);
    });
    return this;
  }

}

exports.default = N3StreamParser;
},{"./N3Parser":"../node_modules/n3/src/N3Parser.js","readable-stream":"../node_modules/readable-stream/readable-browser.js"}],"../node_modules/n3/src/N3StreamWriter.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _readableStream = require("readable-stream");

var _N3Writer = _interopRequireDefault(require("./N3Writer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// **N3StreamWriter** serializes a quad stream into a text stream.
// ## Constructor
class N3StreamWriter extends _readableStream.Transform {
  constructor(options) {
    super({
      encoding: 'utf8'
    });
    this._writableState.objectMode = true; // Set up writer with a dummy stream object

    const writer = this._writer = new _N3Writer.default({
      write: (quad, encoding, callback) => {
        this.push(quad);
        callback && callback();
      },
      end: callback => {
        this.push(null);
        callback && callback();
      }
    }, options); // Implement Transform methods on top of writer

    this._transform = (quad, encoding, done) => {
      writer.addQuad(quad, done);
    };

    this._flush = done => {
      writer.end(done);
    };
  } // ### Serializes a stream of quads


  import(stream) {
    stream.on('data', quad => {
      this.write(quad);
    });
    stream.on('end', () => {
      this.end();
    });
    stream.on('error', error => {
      this.emit('error', error);
    });
    stream.on('prefix', (prefix, iri) => {
      this._writer.addPrefix(prefix, iri);
    });
    return this;
  }

}

exports.default = N3StreamWriter;
},{"readable-stream":"../node_modules/readable-stream/readable-browser.js","./N3Writer":"../node_modules/n3/src/N3Writer.js"}],"../node_modules/n3/src/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Lexer", {
  enumerable: true,
  get: function () {
    return _N3Lexer.default;
  }
});
Object.defineProperty(exports, "Parser", {
  enumerable: true,
  get: function () {
    return _N3Parser.default;
  }
});
Object.defineProperty(exports, "Writer", {
  enumerable: true,
  get: function () {
    return _N3Writer.default;
  }
});
Object.defineProperty(exports, "Store", {
  enumerable: true,
  get: function () {
    return _N3Store.default;
  }
});
Object.defineProperty(exports, "StreamParser", {
  enumerable: true,
  get: function () {
    return _N3StreamParser.default;
  }
});
Object.defineProperty(exports, "StreamWriter", {
  enumerable: true,
  get: function () {
    return _N3StreamWriter.default;
  }
});
Object.defineProperty(exports, "DataFactory", {
  enumerable: true,
  get: function () {
    return _N3DataFactory.default;
  }
});
Object.defineProperty(exports, "Term", {
  enumerable: true,
  get: function () {
    return _N3DataFactory.Term;
  }
});
Object.defineProperty(exports, "NamedNode", {
  enumerable: true,
  get: function () {
    return _N3DataFactory.NamedNode;
  }
});
Object.defineProperty(exports, "Literal", {
  enumerable: true,
  get: function () {
    return _N3DataFactory.Literal;
  }
});
Object.defineProperty(exports, "BlankNode", {
  enumerable: true,
  get: function () {
    return _N3DataFactory.BlankNode;
  }
});
Object.defineProperty(exports, "Variable", {
  enumerable: true,
  get: function () {
    return _N3DataFactory.Variable;
  }
});
Object.defineProperty(exports, "DefaultGraph", {
  enumerable: true,
  get: function () {
    return _N3DataFactory.DefaultGraph;
  }
});
Object.defineProperty(exports, "Quad", {
  enumerable: true,
  get: function () {
    return _N3DataFactory.Quad;
  }
});
Object.defineProperty(exports, "Triple", {
  enumerable: true,
  get: function () {
    return _N3DataFactory.Triple;
  }
});
Object.defineProperty(exports, "termFromId", {
  enumerable: true,
  get: function () {
    return _N3DataFactory.termFromId;
  }
});
Object.defineProperty(exports, "termToId", {
  enumerable: true,
  get: function () {
    return _N3DataFactory.termToId;
  }
});
exports.Util = void 0;

var _N3Lexer = _interopRequireDefault(require("./N3Lexer"));

var _N3Parser = _interopRequireDefault(require("./N3Parser"));

var _N3Writer = _interopRequireDefault(require("./N3Writer"));

var _N3Store = _interopRequireDefault(require("./N3Store"));

var _N3StreamParser = _interopRequireDefault(require("./N3StreamParser"));

var _N3StreamWriter = _interopRequireDefault(require("./N3StreamWriter"));

var Util = _interopRequireWildcard(require("./N3Util"));

exports.Util = Util;

var _N3DataFactory = _interopRequireWildcard(require("./N3DataFactory"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./N3Lexer":"../node_modules/n3/src/N3Lexer.js","./N3Parser":"../node_modules/n3/src/N3Parser.js","./N3Writer":"../node_modules/n3/src/N3Writer.js","./N3Store":"../node_modules/n3/src/N3Store.js","./N3StreamParser":"../node_modules/n3/src/N3StreamParser.js","./N3StreamWriter":"../node_modules/n3/src/N3StreamWriter.js","./N3Util":"../node_modules/n3/src/N3Util.js","./N3DataFactory":"../node_modules/n3/src/N3DataFactory.js"}],"../node_modules/@rmlio/yarrrml-parser/lib/abstract-generator.js":[function(require,module,exports) {
/**
 * author: Pieter Heyvaert (pheyvaer.heyvaert@ugent.be)
 * Ghent University - imec - IDLab
 */

const YAML = require('yamljs');
const expand = require('./expander.js');
const namespaces = require('prefix-ns').asMap();
const rdfaVocs = require('./rdfa-context.json')['@context'];
const {DataFactory} = require('n3');
const {namedNode, literal, quad} = DataFactory;

namespaces.ql = 'http://semweb.mmlab.be/ns/ql#';
namespaces.fnml = 'http://semweb.mmlab.be/ns/fnml#';
namespaces.fno = 'https://w3id.org/function/ontology#';

class AbstractGenerator {

  constructor(options = null) {
    this.mappingsAndIRIs = {};
    this.referencingObjectMapDetails = {};
    this.prefixes = {};
    this.baseIRI = 'http://mapping.example.com/';
    this.quads = [];
    this.options = {...{class: false, externalReferences: {}, includeMetadata: true}, ...options}
    this.externalReferences = this.options.externalReferences;
    this.authors = [];
  }

  /**
   * This method converts YARRRML to another set of rules.
   * @param yarrrml {string|array} This is either an array of objects {yarrrml, file} that need to be converted or
   * a single YARRRML string.
   */
  convert(yarrrml) {
    // To make it backwards compatible.
    if (typeof yarrrml === 'string' || yarrrml instanceof String) {
      yarrrml = [{yarrrml}];
    }

    this.counter = {};
    const expandedJSONs = [];

    for (const el of yarrrml) {
      const {yarrrml, file} = el;

      let json;

      try {
        json = YAML.parse(yarrrml);
      } catch (e) {
        e.code = 'INVALID_YAML';
        e.file = file
        throw e;
      }

      try {
        const expandedJSON = expand(json);
        if (expandedJSON.external) {
          this.externalReferences = {...this.externalReferences, ...expandedJSON.external};
        }

        if (expandedJSON.authors) {
          this.authors = this.authors.concat(expandedJSON.authors);
        }

        expandedJSONs.push(expandedJSON);
      } catch (e) {
        e.code = 'INVALID_YARRRML';
        throw e;
      }
    }

    const combinedExpandedJSON = this._combineExpandedJSONs(expandedJSONs);
    this.prefixes = combinedExpandedJSON.prefixes;
    this.externalReferences = {...this.externalReferences, ...this.options.externalReferences};

    //convert to RML
    return this.convertExpandedJSON(combinedExpandedJSON);
  }

  convertExpandedJSON(yarrrml) {
    if (yarrrml.prefixes) {
      Object.keys(yarrrml.prefixes).forEach(prefix => {
        rdfaVocs[prefix] = yarrrml.prefixes[prefix];
      });
    }

    if (this.options.includeMetadata) {
      this._generateDatasetDescription(this.authors);
    }
  }

  /**
   * This method combines multiple expanded JSONs in a single one.
   * @param expandedJSONs An array of expanded JSONs that need to be combined.
   * @returns {{mappings: {}, prefixes: {}, sources: {}}} The combined expanded JSON.
   * @private
   */
  _combineExpandedJSONs(expandedJSONs) {
    const result = {mappings: {}, prefixes: {}, sources: {}};

    for (const json of expandedJSONs) {
      this._addSourceValuesToTarget(json.mappings, result.mappings, 'Mapping');
      this._addSourceValuesToTarget(json.prefixes, result.prefixes, 'Prefix');
      this._addSourceValuesToTarget(json.sources, result.sources, 'Source');

      if (json.base) {
        if (result.base) {
          console.warn(`Base is multiple times defined. Using only "${result.base}".`);
        } else {
          result.base = json.base;
        }
      }
    }

    return result;
  }

  /**
   * This method adds all key-values from a source object to a target object.
   * Warning messages are outputted if a key already exists in the target object.
   * In this case the value in the target object for that key is preserved.
   * @param sourceObj {object} The object from which the key-value pairs are read.
   * @param targetObj {object} The object to which the non-existing key-value pairs are added.
   * @param messageValue {string} The type of key. This is used in the warning message.
   * @private
   */
  _addSourceValuesToTarget(sourceObj, targetObj, messageValue) {
    for (const key in sourceObj) {
      if (targetObj[key]) {
        console.warn(`${messageValue} with key "${key}" is multiple times defined. Using only fist occurrence.`);
      } else {
        targetObj[key] = sourceObj[key];
      }
    }
  }

  generateMapping(tmSubject, mapping, mappingName, sourceSubject) {

    this.quads.push(quad(
      tmSubject,
      namedNode(namespaces.rdfs + 'label'),
      literal(mappingName)
    ));

    const subjectMaps = []

    mapping.subjects.forEach(subject => {
      const smSubject = namedNode(this.baseIRI + this.getUniqueID('s'));

      this.quads.push(quad(
        smSubject,
        namedNode(namespaces.rdf + 'type'),
        namedNode(namespaces.rr + 'SubjectMap')
      ));

      this.quads.push(quad(
        tmSubject,
        namedNode(namespaces.rr + 'subjectMap'),
        smSubject
      ));

      if (typeof subject === "object") {
        if (subject.function) {
          this.generateFunctionTermMap(smSubject, subject, sourceSubject, subject.type === 'iri' ? 'IRI' : 'BlankNode');
        } else {
          this.quads.push(quad(
            smSubject,
            namedNode(namespaces.rr + 'termType'),
            namedNode(namespaces.rr + 'BlankNode')
          ));
        }
      } else {
        const {predicate, object} = this.getAppropriatePredicateAndObjectForValue(subject);
        this.quads.push(quad(
          smSubject,
          predicate,
          object
        ));
      }

      if (mapping.graphs) {
        mapping.graphs.forEach(graph => {
          this.generateGraphMap(smSubject, graph, sourceSubject);
        });
      }
      subjectMaps.push(smSubject);
    });

    if (mapping.predicateobjects) {
      mapping.predicateobjects.forEach(po => {

        if (this.options.class && // flag
          po.predicates.length === 1 && // only one predicate
          po.predicates[0].indexOf('$(') === -1 && // without template, ie, a constant value
          ['a', 'http://www.w3.org/1999/02/22-rdf-syntax-ns#type'].indexOf(AbstractGenerator.expandPrefix(po.predicates[0])) !== -1 && // is `a` or `rdf:type`
          po.objects.filter(o => o.function).length === 0 && // no functions
          po.objects.filter(o => o.mapping).length === 0 // no mappings
        ) {
          subjectMaps.forEach(sMap => {
            po.objects.forEach(o => {
              const {object} = this.getAppropriatePredicateAndObjectForValue(o.value, true);
              this.quads.push(quad(
                sMap,
                namedNode(namespaces.rr + 'class'),
                object
              ));
            });
          });
          return;
        }

        const pomSubject = namedNode(this.baseIRI + this.getUniqueID('pom'));


        this.quads.push(quad(
          pomSubject,
          namedNode(namespaces.rdf + 'type'),
          namedNode(namespaces.rr + 'PredicateObjectMap')
        ));

        this.quads.push(quad(
          tmSubject,
          namedNode(namespaces.rr + 'predicateObjectMap'),
          pomSubject
        ));

        let isPredicateRDFTYPE = false;

        po.predicates.forEach(p => {
          const pmSubject = namedNode(this.baseIRI + this.getUniqueID('pm'));

          this.quads.push(quad(
            pmSubject,
            namedNode(namespaces.rdf + 'type'),
            namedNode(namespaces.rr + 'PredicateMap')
          ));

          this.quads.push(quad(
            pomSubject,
            namedNode(namespaces.rr + 'predicateMap'),
            pmSubject
          ));

          let appropriatePO;

          if (p === 'a') {
            appropriatePO = {
              object: namedNode(namespaces.rdf + 'type'),
              predicate: namedNode(namespaces.rr + 'constant')
            };
            isPredicateRDFTYPE = true;
          } else {
            appropriatePO = this.getAppropriatePredicateAndObjectForValue(p, true);
          }

          this.quads.push(quad(
            pmSubject,
            appropriatePO.predicate,
            appropriatePO.object
          ));
        });

        po.objects.forEach(o => {
          const omSubject = namedNode(this.baseIRI + this.getUniqueID('om'));

          this.quads.push(quad(
            pomSubject,
            namedNode(namespaces.rr + 'objectMap'),
            omSubject
          ));

          if (o.function) {
            if (isPredicateRDFTYPE) {
              o.type = 'iri';
            }

            this.generateFunctionTermMap(omSubject, o, sourceSubject, 'Literal');
          } else if (o.mapping) {
            //we are dealing with a parenttriplesmap
            this.saveReferencingObjectMapDetails(mappingName, omSubject, o);
          } else {
            this.generateNormalObjectMap(omSubject, o);
          }
        });

        if (po.graphs) {
          po.graphs.forEach(graph => {
            this.generateGraphMap(pomSubject, graph, sourceSubject);
          });
        }
      });
    }
  }

  generateNormalObjectMap(omSubject, o) {
    this.quads.push(quad(
      omSubject,
      namedNode(namespaces.rdf + 'type'),
      namedNode(namespaces.rr + 'ObjectMap')
    ));

    switch (o.type) {
      case 'iri':
        o.type = namedNode(namespaces.rr + 'IRI');
        break;
      case 'blank':
        o.type = namedNode(namespaces.rr + 'BlankNode');
        break;
      case 'literal':
      default:
        o.type = namedNode(namespaces.rr + 'Literal');
        break;
    }

    if (o.value) {
      const {predicate, object} = this.getAppropriatePredicateAndObjectForValue(o.value);

      this.quads.push(quad(
        omSubject,
        predicate,
        object
      ));
    }

    this.quads.push(quad(
      omSubject,
      namedNode(namespaces.rr + 'termType'),
      o.type
    ));

    if (o.datatype) {
      this.quads.push(quad(
        omSubject,
        namedNode(namespaces.rr + 'datatype'),
        namedNode(AbstractGenerator.expandPrefix(o.datatype))
      ));
    } else if (o.language) {
      this.quads.push(quad(
        omSubject,
        namedNode(namespaces.rr + 'language'),
        literal(o.language)
      ));
    }
  }

  generateAllReferencingObjectMap() {
    Object.keys(this.referencingObjectMapDetails).forEach(mappingName => {
      const allDetails = this.referencingObjectMapDetails[mappingName];

      allDetails.forEach(details => {
        this.generateReferencingObjectMap(details.om, details.o);
      });
    });
  };

  generateReferencingObjectMap(omSubject, o) {
    this.quads.push(quad(
      omSubject,
      namedNode(namespaces.rdf + 'type'),
      namedNode(namespaces.rr + 'ObjectMap')
    ));

    this.quads.push(quad(
      omSubject,
      namedNode(namespaces.rr + 'parentTriplesMap'),
      this.mappingsAndIRIs[o.mapping][0]
    ));

    if (o.conditions) {
      o.conditions.forEach(condition => {
        this.generateCondition(condition, omSubject);
      });
    }
  }

  generateCondition(condition, omSubject) {
    const joinConditionSubject = namedNode(this.baseIRI + this.getUniqueID('jc'));

    this.quads.push(quad(
      omSubject,
      namedNode(namespaces.rr + 'joinCondition'),
      joinConditionSubject
    ));

    condition.parameters.forEach(parameter => {
      let predicate;

      if (AbstractGenerator.expandPrefix(parameter.parameter) === 'str1') {
        predicate = namedNode(namespaces.rr + 'child');
      } else {
        predicate = namedNode(namespaces.rr + 'parent');
      }

      this.quads.push(quad(
        joinConditionSubject,
        predicate,
        literal(parameter.value.substr(2).slice(0, -1))
      ));
    });
  }

  saveReferencingObjectMapDetails(mappingName, om, o) {
    if (!this.referencingObjectMapDetails[mappingName]) {
      this.referencingObjectMapDetails[mappingName] = [];
    }

    this.referencingObjectMapDetails[mappingName].push({
      om, o
    });
  }

  generateFunctionTermMap(omSubject, o, sourceSubject, termType) {
    if (o.function === 'equal') {
      this.convertEqualToIDLabEqual(o);
    }

    this.quads.push(quad(
      omSubject,
      namedNode(namespaces.rdf + 'type'),
      namedNode(namespaces.fnml + 'FunctionTermMap')
    ));

    if (o.type === 'iri') {
      this.quads.push(quad(
        omSubject,
        namedNode(namespaces.rr + 'termType'),
        namedNode(namespaces.rr + 'IRI')
      ));
    } else if (termType) {
      this.quads.push(quad(
        omSubject,
        namedNode(namespaces.rr + 'termType'),
        namedNode(namespaces.rr + termType)
      ));
    }

    if (o.datatype) {
      this.quads.push(quad(
        omSubject,
        namedNode(namespaces.rr + 'datatype'),
        namedNode(AbstractGenerator.expandPrefix(o.datatype))
      ));
    } else if (o.language) {
      this.quads.push(quad(
        omSubject,
        namedNode(namespaces.rr + 'language'),
        literal(o.language)
      ));
    }

    const fnSubject = namedNode(this.baseIRI + this.getUniqueID('fn'));
    const pomExecutesSubject = namedNode(this.baseIRI + this.getUniqueID('pomexec'));
    const pmExecutesSubject = namedNode(this.baseIRI + this.getUniqueID('pmexec'));
    const omExecutesSubject = namedNode(this.baseIRI + this.getUniqueID('omexec'));

    this.quads.push(quad(
      omSubject,
      namedNode(namespaces.fnml + 'functionValue'),
      fnSubject
    ));

    if (sourceSubject) {
      this.generateFnSource(fnSubject, sourceSubject);
    }

    this.quads.push(quad(
      fnSubject,
      namedNode(namespaces.rr + 'predicateObjectMap'),
      pomExecutesSubject
    ));

    this.quads.push(quad(
      pomExecutesSubject,
      namedNode(namespaces.rr + 'predicateMap'),
      pmExecutesSubject
    ));

    this.quads.push(quad(
      pmExecutesSubject,
      namedNode(namespaces.rr + 'constant'),
      namedNode(namespaces.fno + 'executes')
    ));

    this.quads.push(quad(
      pomExecutesSubject,
      namedNode(namespaces.rr + 'objectMap'),
      omExecutesSubject
    ));

    const {predicate, object} = this.getAppropriatePredicateAndObjectForValue(o.function);

    this.quads.push(quad(
      omExecutesSubject,
      predicate,
      object
    ));

    this.quads.push(quad(
      omExecutesSubject,
      namedNode(namespaces.rr + 'termType'),
      namedNode(namespaces.rr + 'IRI')
    ));

    if (o.parameters) {
      o.parameters.forEach(pm => {
        const pomSubject = namedNode(this.baseIRI + this.getUniqueID('pom'));
        const pmSubject = namedNode(this.baseIRI + this.getUniqueID('pm'));
        const omSubject = namedNode(this.baseIRI + this.getUniqueID('om'));

        this.quads.push(quad(
          fnSubject,
          namedNode(namespaces.rr + 'predicateObjectMap'),
          pomSubject
        ));

        this.quads.push(quad(
          pomSubject,
          namedNode(namespaces.rdf + 'type'),
          namedNode(namespaces.rr + 'PredicateObjectMap')
        ));

        this.quads.push(quad(
          pomSubject,
          namedNode(namespaces.rr + 'predicateMap'),
          pmSubject
        ));

        this.quads.push(quad(
          pmSubject,
          namedNode(namespaces.rdf + 'type'),
          namedNode(namespaces.rr + 'PredicateMap')
        ));

        const {predicate, object} = this.getAppropriatePredicateAndObjectForValue(pm.parameter, true);

        this.quads.push(quad(
          pmSubject,
          predicate,
          object
        ));

        this.quads.push(quad(
          pomSubject,
          namedNode(namespaces.rr + 'objectMap'),
          omSubject
        ));

        this.quads.push(quad(
          omSubject,
          namedNode(namespaces.rdf + 'type'),
          namedNode(namespaces.rr + 'ObjectMap')
        ));


        if (pm.from === 'subject') {
          if (pm.type === 'blank') {
            this.quads.push(quad(
              omSubject,
              namedNode(namespaces.rr + 'termType'),
              namedNode(namespaces.rr + 'BlankNode')
            ));
          } else {
            const {predicate, object} = this.getAppropriatePredicateAndObjectForValue(pm.value);

            this.quads.push(quad(
              omSubject,
              predicate,
              object
            ));

            const termTypeObject = pm.type === 'iri' ? 'IRI' : 'Literal';

            this.quads.push(quad(
              omSubject,
              namedNode(namespaces.rr + 'termType'),
              namedNode(namespaces.rr + termTypeObject)
            ));
          }
        } else if (pm.from === 'function') {
          this.generateFunctionTermMap(omSubject, pm.value, sourceSubject);
        } else {
          const parentTermMapSubject = namedNode(this.baseIRI + this.getUniqueID('ptm'));

          this.quads.push(quad(
            omSubject,
            namedNode(namespaces.rml + 'parentTermMap'),
            parentTermMapSubject
          ));

          const {predicate, object} = this.getAppropriatePredicateAndObjectForValue(pm.value);

          this.quads.push(quad(
            parentTermMapSubject,
            predicate,
            object
          ));
        }
      });
    }
  }

  generateGraphMap(subject, graph, sourceSubject) {
    const graphMapSubject = namedNode(this.baseIRI + this.getUniqueID('gm'));

    this.quads.push(quad(
      subject,
      namedNode(namespaces.rr + 'graphMap'),
      graphMapSubject
    ));

    this.quads.push(quad(
      graphMapSubject,
      namedNode(namespaces.rdf + 'type'),
      namedNode(namespaces.rr + 'GraphMap')
    ));

    if (typeof graph === "object") {
      this.generateFunctionTermMap(graphMapSubject, graph, sourceSubject, 'IRI');
    } else {
      const {predicate, object} = this.getAppropriatePredicateAndObjectForValue(graph);

      this.quads.push(quad(
        graphMapSubject,
        predicate,
        object
      ));
    }
  }

  generateFnSource(fnSubject, sourceSubject) {
    throw new Error('Not implemented yet.');
  }

  /**
   * This method creates quads for the void dataset representing the rules with
   * the authors as contributors.
   * @param authors - An array of authors that will be added as contributors.
   */
  _generateDatasetDescription(authors) {
    this.datasetIRI = namedNode(this.baseIRI + this.getUniqueID('rules'));

    this.quads.push(quad(
      this.datasetIRI,
      namedNode(namespaces.rdf + 'type'),
      namedNode(namespaces.void + 'Dataset')
    ));

    for (const author of authors) {
      if (author.webid) {
        this.quads.push(quad(
          this.datasetIRI,
          namedNode(namespaces.dcterms + 'contributor'),
          namedNode(author.webid)
        ));
      } else {
        const personIRI = namedNode(this.baseIRI + this.getUniqueID('person'));

        this.quads.push(quad(
          this.datasetIRI,
          namedNode(namespaces.dcterms + 'contributor'),
          personIRI
        ));

        this.quads.push(quad(
          personIRI,
          namedNode(namespaces.dcterms + 'contributor'),
          namedNode(namespaces.foaf + 'Person')
        ));

        if (author.name) {
          this.quads.push(quad(
            personIRI,
            namedNode(namespaces.rdfs + 'label'),
            literal(author.name)
          ));
        }

        if (author.email) {
          this.quads.push(quad(
            personIRI,
            namedNode(namespaces.foaf + 'mbox'),
            namedNode(`mailto:${author.email}`)
          ));
        }

        if (author.website) {
          this.quads.push(quad(
            personIRI,
            namedNode(namespaces.foaf + 'homepage'),
            namedNode(author.website)
          ));
        }
      }
    }
  }

  static parseTemplate(t) {
    t = '' + t; // Make sure it's a string.
    t = t.replace(/\\\\/g, '@@@BACKWARD-SLASH@@@'); // We want to preserve real backward slashes.
    t = t.replace(/\\\(/g, '@@@BRACKET-OPEN@@@'); // Same for opening brackets.
    t = t.replace(/\\\)/g, '@@@BRACKET-CLOSE@@@'); // Same for closing brackets.
    t = t.replace(/\$\(([^)]*)\)/g, "{$1}");
    t = t.replace(/@@@BRACKET-CLOSE@@@/g, ')');
    t = t.replace(/@@@BRACKET-OPEN@@@/g, '(');
    t = t.replace(/@@@BACKWARD-SLASH@@@/g, '/');

    return t;
  }

  static escapeTemplate(t) {
    return ('' + t).replace('{', '\\{').replace('}', '\\}');
  }

  static countReference(t) {
    t = '' + t;
    const match = t.match(/\{([^\}]*)\}/g);

    if (match === null) {
      return 0;
    } else {
      return match.length;
    }
  }

  static hasConstantPart(t) {
    return ('' + t).replace(/\{([^\}]*)\}/g, "").length > 0;
  }

  static getFirstReference(t) {
    t = '' + t;
    const a = t.match(/\{([^\}]*)\}/g);

    return a[0].substr(1, a[0].length - 2);
  }

  /**
   * This function replaces all external references in a given string.
   * @param {string} str - The string in which the external references have to be replaced with their values.
   */
  _replaceExternalReferences(str) {
    str = '' + str;
    const refs = str.match(/\{([^\}]*)\}/g);

    if (refs) {
      for (const ref of refs) {
        if (ref.startsWith('{_')) {
          const refWithoutBrackets = ref.substr(2, ref.length - 3);
          const externalRefValue = this.externalReferences[refWithoutBrackets];

          if (externalRefValue) {
            str = str.replace(ref, externalRefValue);
          } else {
            console.info(`No external reference is found for ${ref}. It is not replaced.`);
          }
        }
      }
    }

    return str;
  }

  getUniqueID(prefix = '') {
    if (!prefix) {
      prefix = 'id';
    }

    if (!this.counter[prefix]) {
      this.counter[prefix] = 0;
    }
    const id = '' + this.counter[prefix];
    this.counter[prefix]++;

    return `${prefix}_${id.padStart(3, '0')}`;
  }

  static expandPrefix(str) {
    if (!(typeof (str) === 'string' || str instanceof String)) {
      return str;
    }

    if (str.indexOf('http://') !== -1 || str.indexOf('https://') !== -1) {
      return str;
    }

    str = str.replace(/\\:/g, '@@@@____@@@@');

    const splits = str.split(':');

    if (splits.length === 1) {
      return str.replace(/@@@@____@@@@/g, ':');
    }

    if (splits[1].charAt(0) === ' ') {
      return str.replace('@@@@____@@@@', ':');
    }

    if (rdfaVocs[splits[0]]) {
      return rdfaVocs[splits[0]] + splits[1].replace(/@@@@____@@@@/g, ':');
    } else {
      console.error(`prefix "${splits[0]}" was not found.`);
      return str.replace(/@@@@____@@@@/g, ':');
    }
  }

  addMappingIRI(mappingName, iri) {
    if (!this.mappingsAndIRIs[mappingName]) {
      this.mappingsAndIRIs[mappingName] = [];
    }

    this.mappingsAndIRIs[mappingName].push(iri);

    if (this.datasetIRI) {
      // Add the Triples Map to the void dataset.
      this.quads.push(quad(
        this.datasetIRI,
        namedNode(namespaces.void + 'exampleResource'),
        iri
      ));
    }
  }

  getPrefixes() {
    return this.prefixes;
  }

  getBaseIRI() {
    return this.baseIRI;
  }

  getAppropriatePredicateAndObjectForValue(value, isIRI = false) {
    let predicate = namedNode(namespaces.rr + 'template');
    const escapedValue = AbstractGenerator.escapeTemplate(value);
    const parsedValue = AbstractGenerator.parseTemplate(escapedValue);
    let object;

    if (AbstractGenerator.countReference(parsedValue) === 1 && !AbstractGenerator.hasConstantPart(parsedValue)) {
      object = this._replaceExternalReferences(parsedValue);

      if (object === parsedValue) {
        object = object.replace(/\\_/g, '_');
        object = AbstractGenerator.getFirstReference(object);
        object = AbstractGenerator.expandPrefix(object)
        object = literal(object);
        predicate = this.getReferenceOnlyPredicate();
      } else {
        object = literal(object);
        predicate = namedNode(namespaces.rr + 'constant');
      }
    } else if (parsedValue === escapedValue) {
      predicate = namedNode(namespaces.rr + 'constant');
      object = this._replaceExternalReferences(AbstractGenerator.expandPrefix(value));

      if (isIRI) {
        object = namedNode(object);
      } else {
        object = literal(object);
      }
    } else {
      const expandedValue = AbstractGenerator.expandPrefix(parsedValue);
      object = this._replaceExternalReferences(expandedValue);
      object = object.replace(/\\_/g, '_');
      object = literal(object);
    }

    return {predicate, object};
  }

  /**
   * This method converts the equal function to a an IDLab equal function.
   * @param fn The function that needs to be converted.
   */
  convertEqualToIDLabEqual(fn) {
    fn.function = 'http://example.com/idlab/function/equal';

    fn.parameters.forEach(pm => {
      if (pm.parameter === 'str1') {
        pm.parameter = 'http://users.ugent.be/~bjdmeest/function/grel.ttl#valueParameter';
      } else if (pm.parameter === 'str2') {
        pm.parameter = 'http://users.ugent.be/~bjdmeest/function/grel.ttl#valueParameter2';
      }
    });
  }

}

module.exports = AbstractGenerator;

},{"yamljs":"../node_modules/yamljs/lib/Yaml.js","./expander.js":"../node_modules/@rmlio/yarrrml-parser/lib/expander.js","prefix-ns":"../node_modules/prefix-ns/index.js","./rdfa-context.json":"../node_modules/@rmlio/yarrrml-parser/lib/rdfa-context.json","n3":"../node_modules/n3/src/index.js"}],"../node_modules/@rmlio/yarrrml-parser/lib/formulations.json":[function(require,module,exports) {
module.exports = {
  "query": {
    "sql2008": "http://www.w3.org/ns/r2rml#SQL2008",
    "oracle": "http://www.w3.org/ns/r2rml#Oracle",
    "mysql": "http://www.w3.org/ns/r2rml#MySQL",
    "mssql": "http://www.w3.org/ns/r2rml#MSSQLServer",
    "hsql": "http://www.w3.org/ns/r2rml#HSQLDB",
    "postgresql": "http://www.w3.org/ns/r2rml#PostgreSQL",
    "db2": "http://www.w3.org/ns/r2rml#DB2",
    "informix": "Informix",
    "ingres": "http://www.w3.org/ns/r2rml#Ingres",
    "progress": "http://www.w3.org/ns/r2rml#Progress",
    "sybasease": "http://www.w3.org/ns/r2rml#SybaseASE",
    "sybasesqlanywhere": "http://www.w3.org/ns/r2rml#SybaseSQLAnywhere",
    "virtuoso": "http://www.w3.org/ns/r2rml#Virtuoso",
    "firebird": "http://www.w3.org/ns/r2rml#Firebird"
  },

  "reference": {
    "jsonpath": "http://semweb.mmlab.be/ns/ql#JSONPath",
    "xpath": "http://semweb.mmlab.be/ns/ql#XPath",
    "csv": "http://semweb.mmlab.be/ns/ql#CSV",
    "css3": "http://semweb.mmlab.be/ns/ql#CSS3"
  }
}
;
},{}],"../node_modules/@rmlio/yarrrml-parser/lib/jdbc-drivers.json":[function(require,module,exports) {
module.exports = {
  "oracle": "oracle.jdbc.driver.OracleDriver",
  "mysql": "com.mysql.cj.jdbc.Driver",
  "postgresql": "org.postgresql.Driver",
  "mssql": "com.microsoft.sqlserver.jdbc.SQLServerDriver",
  "db2": "com.ibm.as400.access.AS400JDBCDriver"
}
;
},{}],"../node_modules/@rmlio/yarrrml-parser/lib/rml-generator.js":[function(require,module,exports) {
/**
 * author: Pieter Heyvaert (pheyvaer.heyvaert@ugent.be)
 * Ghent University - imec - IDLab
 */

const namespaces = require('prefix-ns').asMap();
const AbstractGenerator = require('./abstract-generator.js');
const formulations = require('./formulations.json');
const { DataFactory } = require('n3');
const {namedNode, literal, quad} = DataFactory;
const jdbcDrivers = require('./jdbc-drivers');

namespaces.ql = 'http://semweb.mmlab.be/ns/ql#';
namespaces['idlab-fn'] = 'http://example.com/idlab/function/';

class RMLGenerator extends AbstractGenerator {

  constructor(options = null) {
    super(options);
  }

  convertExpandedJSON(yarrrml) {
    super.convertExpandedJSON(yarrrml);

    if (yarrrml.base) {
      this.baseIRI = yarrrml.base;
    }

    const sourcesIRIMap = {};

    if (yarrrml.sources) {
      Object.keys(yarrrml.sources).forEach(sourceName => {
        sourcesIRIMap[sourceName] = this.generateSource(yarrrml.sources[sourceName], undefined, sourceName);
      });
    }

    if (!yarrrml.mappings) {
      return this.quads;
    }

    Object.keys(yarrrml.mappings).forEach(mappingName => {
      const mapping = yarrrml.mappings[mappingName];

      if (mapping.sources) {
        mapping.sources = [].concat(mapping.sources);
        mapping.sources.forEach(source => {
          const tmSubject = namedNode(this.baseIRI + this.getUniqueID('map_' + mappingName));
          this.addMappingIRI(mappingName, tmSubject);

          let sourceSubject;

          if (typeof source === 'string') {
            sourceSubject = sourcesIRIMap[source];

            this.quads.push(quad(
              tmSubject,
              namedNode(namespaces.rml + 'logicalSource'),
              sourceSubject
            ));
          } else {
            sourceSubject = this.generateSource(source, tmSubject);
          }

          this.generateMapping(tmSubject, mapping, mappingName, sourceSubject);
        });
      } else {
        const tmSubject = namedNode(this.baseIRI + mappingName);
        this.generateMapping(tmSubject, mapping, mappingName);
      }
    });

    this.generateAllReferencingObjectMap();
    return this.quads;
  }

  generateMapping(tmSubject, mapping, mappingName, sourceSubject) {
    this.quads.push(quad(
      tmSubject,
      namedNode(namespaces.rdf + 'type'),
      namedNode(namespaces.rr + 'TriplesMap')
    ));

    super.generateMapping(tmSubject, mapping, mappingName, sourceSubject);
  }

  generateSource(source, tmSubject, sourceName) {
    const sSubject = namedNode(this.baseIRI + this.getUniqueID('source'));

    if (tmSubject) {
      this.quads.push(quad(
        tmSubject,
        namedNode(namespaces.rml + 'logicalSource'),
        sSubject
      ));
    }

    this.quads.push(quad(
      sSubject,
      namedNode(namespaces.rdf + 'type'),
      namedNode(namespaces.rml + 'LogicalSource')
    ));

    if (sourceName) {
      this.quads.push(quad(
        sSubject,
        namedNode(namespaces.rdfs + 'label'),
        literal(sourceName)
      ));
    }

    if (!source.type) {
      if (source.referenceFormulation === 'csv' && source.delimiter !== undefined && source.delimiter !== ',') {
       // We need CSVW.
        this.prefixes['csvw'] = namespaces.csvw;
        const csvwSubject = namedNode(this.baseIRI + this.getUniqueID('csvw'));
        const dialectSubject = namedNode(this.baseIRI + this.getUniqueID('csvw-dialect'));

        this.quads.push(quad(
          sSubject,
          namedNode(namespaces.rml + 'source'),
          csvwSubject
        ));

        this.quads.push(quad(
          csvwSubject,
          namedNode(namespaces.rdf + 'type'),
          namedNode(namespaces.csvw + 'Table')
        ));

        this.quads.push(quad(
          csvwSubject,
          namedNode(namespaces.csvw + 'url'),
          literal(source.access)
        ));

        this.quads.push(quad(
          csvwSubject,
          namedNode(namespaces.csvw + 'dialect'),
          dialectSubject
        ));

        this.quads.push(quad(
          dialectSubject,
          namedNode(namespaces.rdf + 'type'),
          namedNode(namespaces.csvw + 'Dialect')
        ));

        this.quads.push(quad(
          dialectSubject,
          namedNode(namespaces.csvw + 'delimiter'),
          literal(source.delimiter)
        ));
      } else {
        this.quads.push(quad(
          sSubject,
          namedNode(namespaces.rml + 'source'),
          literal(source.access)
        ));
      }

      if (source.iterator) {
        this.quads.push(quad(
          sSubject,
          namedNode(namespaces.rml + 'iterator'),
          literal(source.iterator)
        ));
      }
    } else {
      const databaseSubject = namedNode(this.baseIRI + this.getUniqueID('database'));

      this.quads.push(quad(
        sSubject,
        namedNode(namespaces.rml + 'source'),
        databaseSubject
      ));

      this.quads.push(quad(
        sSubject,
        namedNode(namespaces.rml + 'query'),
        literal(source.query)
      ));

      this._generateDatabaseDescription(databaseSubject, source);
    }

    let object = namedNode(formulations.reference[source.referenceFormulation]);

    this.quads.push(quad(
      sSubject,
      namedNode(namespaces.rml + 'referenceFormulation'),
      object
    ));

    return sSubject;
  }

  _generateDatabaseDescription(subject, source) {
    this.quads.push(quad(
      subject,
      namedNode(namespaces.rdf + 'type'),
      namedNode(namespaces.d2rq + 'Database')
    ));

    this.quads.push(quad(
      subject,
      namedNode(namespaces.d2rq + 'jdbcDSN'),
      literal(source.access)
    ));

    this.quads.push(quad(
      subject,
      namedNode(namespaces.d2rq + 'jdbcDriver'),
      literal(jdbcDrivers[source.type])
    ));

    if (source.credentials) {
      if (source.credentials.username) {
        this.quads.push(quad(
          subject,
          namedNode(namespaces.d2rq + 'username'),
          literal(source.credentials.username)
        ));
      }

      if (source.credentials.password) {
        this.quads.push(quad(
          subject,
          namedNode(namespaces.d2rq + 'password'),
          literal(source.credentials.password)
        ));
      }
    }
  }

  generateFnSource(fnSubject, sourceSubject) {
    this.quads.push(quad(
      fnSubject,
      namedNode(namespaces.rml + 'logicalSource'),
      sourceSubject
    ));
  }

  generateCondition(condition, omSubject) {
    if (condition.function === 'equal'
      && !this._parametersContainsFunction(condition.parameters)
      && !this._parametersContainsConstantValues(condition.parameters)
      && !this._parametersContainsTemplates(condition.parameters)
    ) {
      super.generateCondition(condition, omSubject);
    } else {
      if (condition.function === 'equal') {
        this.convertEqualToIDLabEqual(condition);
      }

      const joinConditionSubject = namedNode(this.baseIRI + this.getUniqueID('jc'));

      this.quads.push(quad(
        omSubject,
        namedNode(namespaces.rml + 'joinCondition'),
        joinConditionSubject
      ));

      this.generateFunctionTermMap(joinConditionSubject, condition);
    }
  }

  getReferenceOnlyPredicate() {
    return namedNode(namespaces.rml + 'reference');
  }

  /**
   * This method returns true if there is at least one parameter that is a function.
   * @param parameters The list of parameters to check.
   * @returns {boolean} True if at least one parameter is found that is a function, else false.
   * @private
   */
  _parametersContainsFunction(parameters) {
    let i = 0;

    while (i < parameters.length && typeof parameters[i].value === 'string') {
      i ++
    }

    return i < parameters.length;
  }

  /**
   * This method returns true if there is at least one parameter that is a constant value.
   * @param parameters The list of parameters to check.
   * @returns {boolean} True if at least one parameter is found that is a constant value, else false.
   * @private
   */
  _parametersContainsConstantValues(parameters) {
    let i = 0;

    while (i < parameters.length &&
    (typeof parameters[i].value !== 'string' ||
      (typeof parameters[i].value === 'string'
        && this.getAppropriatePredicateAndObjectForValue(parameters[i].value).predicate.value !== namespaces.rr + 'constant'))) {
      i ++
    }

    return i < parameters.length;
  }

  /**
   * This method returns true if there is at least one parameter that is a template.
   * @param parameters The list of parameters to check.
   * @returns {boolean} True if at least one parameter is found that is a template, else false.
   * @private
   */
  _parametersContainsTemplates(parameters) {
    let i = 0;

    while (i < parameters.length &&
    (typeof parameters[i].value !== 'string' ||
      (typeof parameters[i].value === 'string'
        && this.getAppropriatePredicateAndObjectForValue(parameters[i].value).predicate.value !== namespaces.rr + 'template'))) {
      i ++
    }

    return i < parameters.length;
  }
}

module.exports = RMLGenerator;

},{"prefix-ns":"../node_modules/prefix-ns/index.js","./abstract-generator.js":"../node_modules/@rmlio/yarrrml-parser/lib/abstract-generator.js","./formulations.json":"../node_modules/@rmlio/yarrrml-parser/lib/formulations.json","n3":"../node_modules/n3/src/index.js","./jdbc-drivers":"../node_modules/@rmlio/yarrrml-parser/lib/jdbc-drivers.json"}],"madamseditor.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rmlGenerator = _interopRequireDefault(require("@rmlio/yarrrml-parser/lib/rml-generator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const N3 = require('n3');

const {
  DataFactory
} = N3;
const {
  namedNode,
  literal,
  defaultGraph,
  quad
} = DataFactory;
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

class MadamsEditor_UI {
  init(parent) {
    this.config = parent.config;
    this.parser = parent.parser;
    this.initEditors();

    if (_GLOBAL.config.dataUrl != "") {
      this.loadExampleData(_GLOBAL.config.dataUrl, this.dataEditor);
    }

    if (_GLOBAL.config.mappingUrl != "") {
      this.loadExampleData(_GLOBAL.config.mappingUrl, this.yarrrmlEditor);
    } // init run btn event


    document.querySelector("#convert-btn").addEventListener("click", e => {
      this.handleClickRunBtn(e);
      e.preventDefault();
    });
  }

  initEditors() {
    const self = this;
    let handleUpdateYarrmlEditorTimeout;
    this.yarrrmlEditor = ace.edit("yarrrml-editor");
    this.yarrrmlEditor.setTheme("ace/theme/tomorrow");
    this.yarrrmlEditor.session.setMode("ace/mode/yaml");
    this.yarrrmlEditor.session.on("change", () => {
      clearTimeout(handleUpdateYarrmlEditorTimeout);
      handleUpdateYarrmlEditorTimeout = setTimeout(() => {
        self.handleUpdateYarrmlEditor();
      }, 1500);
    });
    this.dataEditor = ace.edit("json-editor");
    this.dataEditor.setTheme("ace/theme/tomorrow"); // this.jsonEditor.setReadOnly(true);  // false to make it editable

    this.dataEditor.session.setMode("ace/mode/json");
    this.outEditor = ace.edit("out-editor");
    this.outEditor.setTheme("ace/theme/tomorrow");
    this.outEditor.session.setMode("ace/mode/turtle"); // this.outEditor.setReadOnly(true);  // false to make it editable
  }

  handleClickRunBtn(e) {
    this.firstRun = typeof this.firstRun === 'undefined' ? true : false;
    const btn = e.target.closest("#convert-btn");
    btn.classList.add('disabled');
    btn.querySelector(".loader").classList.remove("d-none");
    btn.querySelector(".bi").classList.add("d-none");
    this.cleanupMessages();
    this.parser.runMapping().then(result => {
      return this.parser.rdf2Turtle(result);
    }).then(result => {
      result = result.replace(/\.\n([\w\<])/g, ".\n\n$1");

      if (this.firstRun) {
        document.querySelector("#out-wrapper").classList.remove("d-none");
        document.querySelector("#out-wrapper").scrollIntoView();
      }

      this.outEditor.setValue(result);
      this.outEditor.clearSelection();
    }).catch(e => {
      this.addMessage('error', 'RML Mapper failed: ' + e);
    }).finally(result => {
      btn.classList.remove('disabled');
      btn.querySelector(".loader").classList.add("d-none");
      btn.querySelector(".bi").classList.remove("d-none");
    });
  }

  handleUpdateYarrmlEditor() {
    this.cleanupMessages();
    const inputData = this.dataEditor.getValue();
    let mappingStr = this.yarrrmlEditor.getValue();
    mappingStr = this.parser.yarrrmlExtend(mappingStr);
    mappingStr = this.parser.yarrrmlEncodeBrackets(mappingStr);
    this.parser.yarrrml2RML(mappingStr).then(rml => {}).catch(e => {
      this.addMessage('error', e);
    });
  }

  loadExampleData() {
    let url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    let target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    fetch(url).then(data => {
      if (!data.ok) {
        throw new Error('Network response was not ok');
      }

      return data.text();
    }).then(text => {
      target.setValue(text);
      target.clearSelection();
    }).catch(error => {
      this.addMessage('error', 'Fetch example data failed. ' + error);
    });
  }

  addMessage(type) {
    for (var _len = arguments.length, message = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      message[_key - 1] = arguments[_key];
    }

    console.log(type, message);
    const wrapper = document.querySelector("#messages-wrapper");
    const closeBtn = '<button type="button" class="close ml-2" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
    const alertEl = $('<div class="alert" role="alert">' + message.toString() + closeBtn + '</div>');

    switch (type) {
      case 'error':
        alertEl.addClass('alert-danger');
        break;

      case 'success':
        alertEl.addClass('alert-success');
        break;

      default:
        break;
    }

    $(wrapper).append(alertEl);
  }

  cleanupMessages() {
    const wrapper = document.querySelector("#messages-wrapper");
    wrapper.innerHTML = "";
  }

}

class MadamsEditor {
  constructor(config) {
    if (_GLOBAL.instance) {
      return _GLOBAL.instance;
    }

    this.config = config;
    this.ui = new MadamsEditor_UI();
    this.parser = new MadamsEditor_Parser();

    this._init(config);

    _GLOBAL.instance = this;
  }

  _init(config) {
    const self = this;
    Object.assign(_GLOBAL.config, _GLOBAL.config.defaults, config);
    console.log('config', _GLOBAL.config);
    this.ui.init(this);
    this.parser.init(this);
  }

}

exports.default = MadamsEditor;

class MadamsEditor_Parser {
  constructor() {
    _defineProperty(this, "escapeTable", {
      '(': '\\$LBR',
      ')': '\\$RBR',
      '{': '\\$LCB',
      '}': '\\$RCB'
    });
  }

  init(parent) {
    this.parent = parent;
    this.ui = parent.ui;
  }

  runMapping() {
    const self = this;
    const inputData = this.ui.dataEditor.getValue();
    let mappingStr = this.ui.yarrrmlEditor.getValue();
    mappingStr = this.yarrrmlExtend(mappingStr);
    mappingStr = this.yarrrmlEncodeBrackets(mappingStr);
    return new Promise((resolve, reject) => {
      this.yarrrml2RML(mappingStr).then(rml => {
        return fetch(_GLOBAL.config.rmlMapperUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            rml: rml,
            sources: {
              input: inputData
            }
          })
        });
      }).then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        return response.text();
      }).then(data => {
        data = self.decodeRMLReplacements(data);
        resolve(data);
      }).catch(e => {
        console.log(e);
        reject(e.toString());
      });
    });
  }

  yarrrmlExtend(yarrrml) {
    // replace function
    let str = yarrrml.replace(/((?:parameters|pms): *\[)([\w@^./$()"' ,[\]|=:]+)(\])/g, function () {
      for (var _len2 = arguments.length, e = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        e[_key2] = arguments[_key2];
      }

      const [, cg1, cg2, cg3] = e;
      const params = cg2.split(',').map((el, i) => "[schema:str".concat(i, ", ").concat(el.trim(), "]")).join(', ');
      return cg1 + params + cg3;
    }); // replace join

    str = str.replace(/join: *\[ *"?([\w@^./$:\-*, ')()]+)"? *, *"?([\w@^./$:\-*, '()]+)"? *\]/g, 'condition:{function:equal,parameters:[[str1,"$($1)"],[str2,"$($2)"]]}');
    return str;
  }

  yarrrmlEncodeBrackets(str) {
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

  decodeRMLReplacements(rml) {
    return Object.entries(this.escapeTable).reduce((str, _ref) => {
      let [char, code] = _ref;
      return str.replace(new RegExp(code, 'g'), char);
    }, rml);
  }

  yarrrml2RML(yaml) {
    const self = this;
    const y2r = new _rmlGenerator.default();
    const writer = new N3.Writer();
    let quads;

    try {
      quads = y2r.convert(yaml);

      if (typeof y2r.getMessages !== 'undefined') {
        const messages = y2r.getMessages();
        messages.forEach(message => {
          self.ui.addMessage(message.type, message.text);
        });
      }
    } catch (e) {
      return new Promise((resolve, reject) => {
        reject('Generate the RML mapping from YARRRML failed. ' + e);
      });
    }

    quads.forEach(q => {
      if (q.object.termType === "Literal") {
        writer.addQuad(quad(namedNode(q.subject.value), namedNode(q.predicate.value), literal(q.object.value)));
      } else {
        writer.addQuad(namedNode(q.subject.value), namedNode(q.predicate.value), namedNode(q.object.value));
      }
    });
    return new Promise((resolve, reject) => {
      writer.end((err, doc) => {
        if (err) {
          return reject(e);
        }

        resolve(doc);
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
          outWriter.addQuad(quad);
        } else {
          outWriter.end((err, outTtl) => {
            if (err) {
              return reject('N3 parser error: ' + err);
            }

            resolve(outTtl);
          });
        }
      });
    });
  }

  getUsedPrefixes() {
    const self = this;
    const yaml = this.ui.yarrrmlEditor.getValue();
    let prefixes = {};
    prefixes.rdf = _GLOBAL.prefixes.rdf;
    Object.keys(_GLOBAL.prefixes).forEach(pre => {
      if (yaml.indexOf("".concat(pre, ":")) >= 0) {
        prefixes[pre] = _GLOBAL.prefixes[pre];
      }
    });

    try {
      let json = YAML.parse(yaml);

      if (json.prefixes) {
        prefixes = Object.assign({}, prefixes, json.prefixes);
      }
    } catch (e) {
      self.ui.addMessage('error', e);
    }

    return prefixes;
  }

}
},{"@rmlio/yarrrml-parser/lib/rml-generator":"../node_modules/@rmlio/yarrrml-parser/lib/rml-generator.js","n3":"../node_modules/n3/src/index.js"}],"app.js":[function(require,module,exports) {
"use strict";

var _madamseditor = _interopRequireDefault(require("./madamseditor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const me = new _madamseditor.default(meOptions);
},{"./madamseditor":"madamseditor.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "0.0.0.0" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "1235" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","app.js"], null)
//# sourceMappingURL=/app.c328ef1a.js.map