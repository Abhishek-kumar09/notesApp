const notes = require('./notes.js')
const chalk = require('chalk')
const yargs = require('yargs')

yargs.version('1.0.1')

yargs.command(
    {
        command: "add",
        describe: "add new note",
        builder: {
            title: {
                describe: "Add Note Title",
                demandOption: true,
                type: 'string'
            },
            body: {
                describe: 'Add Note Body',
                demandOption: true,
                type: 'string'
            }
        },
        handler: function (argv) {
            notes.addNotes(argv.title, argv.body)
        },
    })



yargs.command(
    {
        command: "remove",
        describe: "remove note",
        builder: {
            title: {
                describe: "Note Title to be deleted",
                demandOption: true,
                type: 'string'
            }
        },
        handler(argv) {
            console.log('removing')
            notes.removeNote(argv.title)
        }
    })

yargs.command({
    command: "read",
    describe: "read note",
    builder: {
        title: {
            describe: "title to read",
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.read(argv.title)
    }
})

yargs.command({
    command: "list",
    describe: "list note",
    handler: () => {
        console.log("notes are...")
        notes.listNote()
    }
})

console.log(yargs.argv);
