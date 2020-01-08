const notes = require('./notes.js')
const chalk = require('chalk')
const yargs = require('yargs')
console.log(getNotes())
console.log(chalk.bgRed(process.argv))
// version definition using yargs
yargs.version('1.0.1')






yargs.command({
    command : "add",
    describe : "add new note",
    handler : function() {
        console.log("adding note...")
    },
    builder : {
        command 
    }
})

yargs.command({command:"remove",
describe: "remove note",
handler: ()=>console.log("removing notes...")})

yargs.command({command:"read",
describe: "read note",
handler: ()=>console.log("reding notes...")})

yargs.command({command:"list",
describe: "list note",
handler: ()=>console.log("listing notes...")})

console.log(chalk.yellow(yargs.argv))