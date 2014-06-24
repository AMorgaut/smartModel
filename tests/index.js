var logs;

exports['test MODEL'] = require('./test-model');
exports['test CLASS'] = require('./test-class');
exports['test ATTRIBUTE'] = require('./test-attribute');
exports['test METHODS'] = require('./test-method');
exports['test EVENTS'] = require('./test-event');

// AUTORUN
if (require.main === module) {
    require('test').run(exports);
    logs = console.content;
}