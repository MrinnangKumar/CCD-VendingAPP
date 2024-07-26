const mongoose = require("mongoose")
const Note = new mongoose.Schema({
    //? Here we have to pass all the data about the name like what showuld be type of name, min/max number of character
    title: {
        type: String,
        min: 5,
        max:50,
        required: true
    },
    description: {
        type: String,
        min: 50,
        max:300,
       required: true //* This means its mandatory
    },
    postedBy:{
        type: String,
        min: 5,
        max:30,
        required: true,
        
    },
},{timestamps: true})

//! Now if we wnat to export this schema
module.exports = mongoose.model("note", Note) //? "note" => This should be unique for different model & we can't overwrite.  Note => This is the schema we created above.  This will create a collection named "notes" in our database.                                                                                                             