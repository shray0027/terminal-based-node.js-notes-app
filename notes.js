const fs = require('fs');
const chalk =require("chalk");
const addNote = (title ,body) =>{
    const notes= loadNote();
    const duplicateNote=notes.find(note=>note.title ===title);
    if(!duplicateNote.length){
        notes.push({
            title : title,
            body : body
        });
        console.log(chalk.inverse.blue("new note added"));
        saveNote(notes);
    }
    else{
        console.log(chalk.inverse.red("node title taken!"));
    }
    
}
const saveNote = (notes) =>{
    const data = fs.writeFileSync('notes.json',JSON.stringify(notes));
}

const removeNote = (title) =>{
    const  notes = loadNote();
    const filteredNote = notes.filter(note => note.title!==title);
    if(filteredNote.length===notes.length){
        console.log(chalk.inverse.red("note not found !"));
    }
    else{
        saveNote(filteredNote);
        console.log(chalk.inverse.yellow("note removed"));
    }
  
}
const listNote = ( )=>{
    const notes = loadNote();
    console.log(chalk.inverse.bold("Your Notes"));
    notes.forEach(note => console.log(note.title));
}

const readNote =(title)=>{
     const notes = loadNote();
     const note = notes.find((note) => title === note.title);
     if(note){
        console.log(chalk.inverse.yellow.bold(note.title));
        console.log(note.body);
        
     }
     else{
        console.log(chalk.red.bold.underline("NOTE NOT FOUND !"));
     }
}


const loadNote = () =>{
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const jsonData = dataBuffer.toString();
        return JSON.parse(jsonData);
    }
    catch(e){
        return [];
    }
 }
module.exports = {addNote : addNote,removeNote : removeNote,listNote:listNote,readNote : readNote};