const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const notesSchema = new mongoose.Schema

const nameSchema={
    firstname:{
        type:String,
        required: true
    },
    lastname:{
        type:String,
        required: true
    }
}

// const Note = mongoose.model("User","nameSchema")
router
    .route("/")
    .get((req, res) => res.sendFile(__dirname+'/regis.html'))
    // .post((req, res) => {
    //     let newNote=new Note({
    //         firstname: req.body.title,
    //         lastname: req.body.content
    //     })
    //     newNote.save();
    //     res.redirect("/test1")
    //
    // })
module.exports = router;
