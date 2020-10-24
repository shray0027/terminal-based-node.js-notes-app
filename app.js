const validator = require("validator");
const yargs = require("yargs")
const chalk = require("chalk");
const notes = require("./notes");


yargs.command({
    command  : 'add',
    describe : 'this command add a note',
    builder : {
        title :{
            describe : 'this is title of new note',
            demandOption : true ,
            type  : 'string'
        },
        body :{
            describe : 'this is the body of the note',
            demandOption : true ,
            type :'string'
        }
    },
    handler(argv){
         notes.addNote(argv.title,argv.body);
    }
});
yargs.command({
    command  : 'remove',
    describe : 'this command removes a note',
    builder : {
        title : {
            describe : "title of note to be removed",
            demandOption : true,
            type: 'string'
        }
    },
    handler(argv){
         notes.removeNote(argv.title);
    }
});
yargs.command({
    command  : 'list',
    describe : 'this command lists all notes',
    handler (){ 
        notes.listNote();
    }
});
yargs.command({
    command  : 'read',
    describe : 'this command reads all notes',
    builder : {
        title : {
            describe : 'this is the title of node to be read',
            demandOption : true ,
            type : 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title);
    }
});
yargs.parse();