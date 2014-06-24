var logs;

var assert = require('assert');
var smodel = require('smodel');


exports['test $attr() return SmartAttribute instance'] = function () {
    var module = {exports: {}};
    // test for standalone attribute files
    assert.ok(smodel.$attr(module, 'name') instanceof smodel.SmartAttribute);
    // test for embedded attribute definition
    assert.ok(smodel.$class(module, 'Contact').$attr('name') instanceof smodel.SmartAttribute);
};

exports['test SmartAttribute $attr() name attribute is applied'] = function () {
    var module = {exports: {}};
    assert.ok(smodel.$attr(module, 'name').attribute.name === 'name');
};

exports['test SmartAttribute $attr() default kind is storage'] = function () {
    var module = {exports: {}};
    assert.ok(smodel.$attr(module, 'name').attribute.kind === 'storage');
};

exports['test SmartAttribute $attr() default type is string'] = function () {
    var module = {exports: {}};
    assert.ok(smodel.$attr(module, 'name').attribute.type === 'string');
};

exports['test SmartAttribute $attr() default scope is public'] = function () {
    var module = {exports: {}};
    assert.ok(smodel.$attr(module, 'name').attribute.scope === 'public');
};


/*
  .$primary('ID'), // default: uuid / mandatory / auto-generate 
  .$attr('name'), // default: storage / string
  .$attr('mobile'), // default: storage / string
  .$attr('group', 'Group'), // Group is a DataClass singular name -> relatedEntity / Group / Group
  .$attr('groupName', 'group.name') // 'group.name' include a '.' and start by an attribute -> alias
*/


// AUTORUN
if (require.main === module) {
    require('test').run(exports);
    logs = console.content;
}