﻿var assert = require('assert');
var smodel = require('smodel');

exports['test smodel has a $class() method'] = function () {
    var module = {exports: {}};
    assert.ok(typeof smodel.$class === 'function');
};

exports['test $class() return SmartClass instance'] = function () {
    var module = {exports: {}};
    assert.ok(smodel.$class(module, 'Contact') instanceof smodel.SmartClass);
    var model = {};
    assert.ok(smodel.$model(model).$class('Contact') instanceof smodel.SmartClass);
};

exports['test SmartClass has a $primary() method'] = function () {
    var module = {exports: {}};
    smodel.$class(module, 'Contact');
    assert.ok(typeof smodel.$class(module, 'Contact').$primary === 'function');
};

exports['test SmartClass has an $attr() method'] = function () {
    var module = {exports: {}};
    smodel.$class(module, 'Contact');
    assert.ok(typeof smodel.$class(module, 'Contact').$attr === 'function');
};

exports['test SmartClass name applied'] = function () {
    var module = {exports: {}};
    smodel.$class(module, 'Contact');
    assert.ok(module.exports.name === 'Contact');
    assert.ok(module.exports.className === 'Contact');
};

exports['test SmartClass default collection name is className + "Collection"'] = function () {
    var module = {exports: {}};
    smodel.$class(module, 'Contact');
    assert.ok(module.exports.collectionName === 'ContactCollection');
    smodel.$class(module, 'Contact', null);
    assert.ok(module.exports.collectionName === 'ContactCollection');
    smodel.$class(module, 'Contact', undefined);
    assert.ok(module.exports.collectionName === 'ContactCollection');
    smodel.$class(module, 'Contact', '');
    assert.ok(module.exports.collectionName === 'ContactCollection');
    smodel.$class(module, 'Contact', {});
    assert.ok(module.exports.collectionName === 'ContactCollection');
};

exports['test SmartClass custom collection name'] = function () {
    var module = {exports: {}};
    smodel.$class(module, 'Contact', 'Contacts');
    assert.ok(module.exports.dataClass.collectionName === 'Contacts');
};

exports['test SmartClass scope'] = function () {
    var module = {exports: {}};
    smodel.$class(module, 'Contact', 'Contacts', 'publicOnServer');
    assert.ok(module.exports.dataClass.scope === 'publicOnServer');
};

exports['test SmartClass default primary key'] = function () {
    var module = {exports: {}};
    smodel.$class(module, 'Contact');
    var attributes = module.exports.attributes;
    assert.ok(attributes.length === 1);
    assert.ok(attributes[0].primKey);
};

exports['test SmartClass default primary key is unique'] = function () {
    var module = {exports: {}};
    smodel.$class(module, 'Contact');
    var attributes = module.exports.attributes;
    assert.ok(attributes[0].unique);
};

exports['test SmartClass default primary key is UUID'] = function () {
    var module = {exports: {}};
    smodel.$class(module, 'Contact');
    var attributes = module.exports.attributes;
    assert.ok(attributes[0].type = 'uuid');
};

exports['test SmartClass default primary key is autogenerated'] = function () {
    var module = {exports: {}};
    smodel.$class(module, 'Contact');
    var attributes = module.exports.attributes;
    assert.ok(attributes.length === 1);
    assert.ok(attributes[0].autogenerate);
};


// AUTORUN
if (require.main === module) {
    require('test').run(exports);
    console.content;
}
