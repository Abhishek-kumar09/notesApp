const fs = require('fs')

const chalk = require('chalk')

getNotes = function () {
    console.log('inside getnotes')

}

const addNotes = (title, body) => {
    const _notes = loadNotes()
    var isDuplicate = _notes.find((note)=>note.title === title)

    if (isDuplicate) {
        console.log(chalk.red.inverse('Title Already Noted'))
    } else {
        _notes.push({
            title: title,
            body: body
        })
        saveNotes(_notes)
        console.log(chalk.green.inverse('Note Added'))
    }    
}

const saveNotes = (notes) => {
    const data = JSON.stringify(notes)
    fs.writeFileSync('notes.json', data)
}

function loadNotes() {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const notes = dataBuffer.toString()
        return JSON.parse(notes)
    }
    catch (e) {
        return []
    }
}

const removeNote = function (title) {
    const notes = loadNotes();
    const remainingNote = notes.filter((note) => note.title !== title);

    if(remainingNote.length < notes.length) {
        saveNotes(remainingNote)
        console.log(chalk.green.inverse(`Note with title ${title} removed`));        
    } else {
        console.log(chalk.red.inverse(`Note with title ${title} doesn't exist`))
    }
}

const readNotes = (title) => {
    const notes = loadNotes();
    bool = false
    notes.forEach(note => {
        if(note.title === title) {
            console.log(chalk.yellow.inverse(note.body))
            bool =true
            return
        }
    });
    (bool === false)?console.log(chalk.red.inverse(`Note with title ${title} doesnt exist`)) : console.log('That was the body')
}

const listNote = () => {
    const notes = loadNotes()
    for(note in notes) {
        console.log(`title : ${notes[note].title}  |  body : ${notes[note].body}`)
    }
}

module.exports = {
    addNotes: addNotes,
    read : readNotes,
    removeNote: removeNote,
    listNote : listNote
}