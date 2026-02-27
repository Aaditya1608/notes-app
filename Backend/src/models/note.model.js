const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title: String,
    content: String,
},{ 
    timestamps: true,
})

const noteModel = mongoose.model("note",noteSchema);
module.exports = noteModel;