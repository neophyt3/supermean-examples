/**
 ****** /server/app/routes/examples/mongoose/index.js
 * Server Side Example Routes - Mongoose
 */

var config = require('../../../config');
var express = require('express');
var router = express.Router();




/* endpoint: GET /examples/mongoose */
router.get('/', function (req, res, next) {
    'use strict';
    var vdata = {
        title: 'Mongoose Examples',
        desc: 'A list of mongoose examples.',
        keywords: 'supermean, mean stack, mongoose examples'
    };

    res.render('examples/mongoose/index', vdata);
});




/******** EXAMPLES *****/
/* endpoint: GET /examples/mongoose/00setupmongo */

//**** setup mongo database
router.get('/00setupmongo', require('./handlers/00setupmongo'));
router.get('/00setupmongoose', require('./handlers/00setupmongoose'));

//**** schema types: String, Number, Boolean, ...
router.get('/01schematypes-string-callback', require('./handlers/01schematypes-string-callback'));
router.get('/01schematypes-string', require('./handlers/01schematypes-string'));
router.get('/01schematypes-number', require('./handlers/01schematypes-number'));
router.get('/01schematypes-misc', require('./handlers/01schematypes-misc'));
router.get('/01schematypes-buffer', require('./handlers/01schematypes-buffer'));

//**** schema field options: default, required, select, get, set, index, unique
router.get('/02schemaoptions-default', require('./handlers/02schemaoptions-default'));
router.get('/02schemaoptions-required', require('./handlers/02schemaoptions-required'));
router.get('/02schemaoptions-select', require('./handlers/02schemaoptions-select'));
router.get('/02schemaoptions-select2', require('./handlers/02schemaoptions-select2'));
router.get('/02schemaoptions-getset', require('./handlers/02schemaoptions-getset'));
router.get('/02schemaoptions-index', require('./handlers/02schemaoptions-index'));


//**** schema additions: methods, statics, query helpers, middlewares, virtuals
router.get('/07schadditions-insertdocs', require('./handlers/07schadditions').insertdocs);
router.get('/07schadditions-methods-findyounger', require('./handlers/07schadditions').methods_findyounger);
router.get('/07schadditions-statics-findyounger', require('./handlers/07schadditions').statics_findyounger);
router.get('/07schadditions-query-filterbyname', require('./handlers/07schadditions').query_filterbyname);
router.get('/07schadditions-prepost-save', require('./handlers/07schadditions').prepost_save);
router.get('/07schadditions-plugin', require('./handlers/07schadditions').plugin);


//**** validation
router.get('/08validation-builtin', require('./handlers/08validation').builtin);
router.get('/08validation-validateproperty', require('./handlers/08validation').validateproperty);
router.get('/08validation-validate-schema', require('./handlers/08validation').validate_on_schema);
router.get('/08validation-validate-doc', require('./handlers/08validation').validate_on_doc);
router.get('/08validation-validatesync-doc', require('./handlers/08validation').validatesync_on_doc);
router.get('/08validation-makeinvalid', require('./handlers/08validation').makeinvalid);


//**** indeks
router.get('/09indeks-listall', require('./handlers/09indeks').listall);
router.get('/09indeks-removeall', require('./handlers/09indeks').removeall);
router.get('/09indeks-buildind', require('./handlers/09indeks').buildind);


//**** operations: insert, delete, update, search
router.get('/10operationssave', require('./handlers/10operationssave'));
router.get('/11operationscreate', require('./handlers/11operationscreate'));
router.get('/12operationsinsertmany', require('./handlers/12operationsinsertmany'));
router.get('/15operationsremove', require('./handlers/15operationsremove'));
router.get('/16operationsfindidremove', require('./handlers/16operationsfindidremove'));
router.get('/17operationsfindoneremove', require('./handlers/17operationsfindoneremove'));
router.get('/20operationsupdate', require('./handlers/20operationsupdate'));
router.get('/21operationsfindidupdate', require('./handlers/21operationsfindidupdate'));
router.get('/22operationsfindoneupdate', require('./handlers/22operationsfindoneupdate'));
router.get('/25operationsfind', require('./handlers/25operationsfind'));
router.get('/26operationsfindid', require('./handlers/26operationsfindid'));
router.get('/27operationsfindone', require('./handlers/27operationsfindone'));
router.get('/28operationscount', require('./handlers/28operationscount'));
router.get('/28operationscountfind', require('./handlers/28operationscount_find'));
router.get('/29operationsdistinct', require('./handlers/29operationsdistinct'));


//**queries
router.get('/35queryobject-byfind', require('./handlers/35queryobject').byfind);
router.get('/35queryobject-byconstructor', require('./handlers/35queryobject').byconstructor);
router.get('/36querymostused-common', require('./handlers/36querymostused').common);
router.get('/36querymostused-distinct', require('./handlers/36querymostused').distinct);
router.get('/36querymostused-regex', require('./handlers/36querymostused').regex);
router.get('/36querymostused-select', require('./handlers/36querymostused').select);
router.get('/37querysearch-find', require('./handlers/37querysearch').find);
router.get('/38querylogic-gt-lt', require('./handlers/38querylogic').gtlt);
router.get('/38querylogic-and-or', require('./handlers/38querylogic').andor);
router.get('/39queryarray-all', require('./handlers/39queryarray').all);
router.get('/39queryarray-in', require('./handlers/39queryarray').in);
router.get('/39queryarray-elemmatch', require('./handlers/39queryarray').elemMatch);
router.get('/39queryarray-size', require('./handlers/39queryarray').size);
router.get('/39queryarray-slice', require('./handlers/39queryarray').slice);
router.get('/40queryoper-remove', require('./handlers/40queryoper').remove);
router.get('/40queryoper-update', require('./handlers/40queryoper').update);
router.get('/41querymisc-dollarwhere', require('./handlers/41querymisc').dollarwhere);
router.get('/41querymisc-comment', require('./handlers/41querymisc').comment);
router.get('/41querymisc-cursor-stream', require('./handlers/41querymisc').cursorStream);
router.get('/41querymisc-exists', require('./handlers/41querymisc').exists);
router.get('/41querymisc-merge', require('./handlers/41querymisc').merge);
router.get('/41querymisc-setoptions', require('./handlers/41querymisc').setOptions);

//**** multiple db connections
router.get('/60multiconn-dynamic', require('./handlers/60multiconn').dynamic);
router.get('/60multiconn-merge', require('./handlers/60multiconn').merge);

//**** subdocs (embeded docs)
router.get('/65subdocs-savenew', require('./handlers/65subdocs').savenew);
router.get('/65subdocs-removesubdoc', require('./handlers/65subdocs').removesubdoc);
router.get('/65subdocs-findparent', require('./handlers/65subdocs').findparent);

//**** refs & population
router.get('/70refs-emptycollections', require('./handlers/70refs').emptycollections);
router.get('/70refs-savepersonthenstory', require('./handlers/70refs').savepersonthenstory);
router.get('/70refs-savestorythenperson', require('./handlers/70refs').savestorythenperson);
router.get('/70refs-getperson', require('./handlers/70refs').getperson);
router.get('/70refs-execpopulate', require('./handlers/70refs').execpopulate);

//*** delete linked docs
router.get('/70refs-deleteperson', require('./handlers/70refs').deleteperson);
router.get('/70refs-deletestory', require('./handlers/70refs').deletestory);


//*** misc
router.get('/80misc-fillcollection', require('./handlers/80misc').fillcollection);
router.get('/80misc-lean', require('./handlers/80misc').lean);
router.get('/80misc-tojson', require('./handlers/80misc').tojson);
router.get('/80misc-toobject', require('./handlers/80misc').toobject);
router.get('/80misc-tostring', require('./handlers/80misc').tostring);

//*** native mongodb nodejs driver
router.get('/90native-find', require('./handlers/90native').find);


module.exports = router;
