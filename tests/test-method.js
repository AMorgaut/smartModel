var logs;



// AUTORUN
if (require.main === module) {
    require('test').run(exports);
    logs = console.content;
}