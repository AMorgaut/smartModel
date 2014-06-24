var assert = require('assert');
var smodel = require('smodel');


exports['test smodel has a $model() method'] = function () {
    var model = {};
    assert.ok(typeof smodel.$model === 'function');
};

exports['test $model() returns SmartModel instance'] = function () {
    var model = {};
    assert.ok(smodel.$model(model) instanceof smodel.SmartModel);
};

exports['test SmartModel has a $class() method'] = function () {
    var model = {};
    assert.ok(typeof smodel.$model(model).$class === 'function');
};


// AUTORUN
if (require.main === module) {
    require('test').run(exports);
    console.content;
}