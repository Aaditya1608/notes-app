const express = require("express");
const mongoose = require("mongoose");
const noteModel = require("./models/note.model");
require("dotenv").config();
const app = express();
app.use(express.json()); //middleware for raw JSON data

/* 
    POST Api: /create-note
    GET Api: /notes
    PATCH Api: /notes/:id
    DELETE Api: /notes/:id
    GET API: /notes/:id
*/

app.post("/create-note", async (req, res) => {
  try {
    const result = await noteModel.create({
      title: req.body.title,
      content: req.body.content,
    });
    return res.status(201).json({
      message: "Note created successfully",
      notes: result,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Server Error",
    });
  }
});

app.get("/notes", async (req, res) => {
  try {
    const notes = await noteModel.find();
    return res.status(200).json({
      message: "Note obtained successfully",
      notes: notes,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Server error",
    });
  }
});

app.delete("/notes/:id", async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "ID not valid",
      });
    }
    const delNote = await noteModel.findByIdAndDelete(id);
    if (!delNote) {
      return res.status(404).json({
        message: "Post not found",
      });
    }
    return res.status(200).json({
      message: "Post deleted successfully",
      notes: delNote,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Server Error",
    });
  }
});

app.patch("/notes/:id", async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "ID not valid",
      });
    }
    const updatedNote = await noteModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        title: req.body.title,
        content: req.body.content,
      },
      {
        returnDocument: "after",
      },
    );
    if (!updatedNote) {
      return res.status(404).json({
        message: "Post not found",
      });
    }
    return res.status(200).json({
      message: "Post updated successfully",
      notes: updatedNote,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Server Error",
    });
  }
});
app.get("/notes/:id", async (req, res) => {
  try {
    const id = req.params.id;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({
            message: "ID not valid",
        })
    }
  } catch (err) {
    return res.status(500).json({
      message: "Server Error",
    });
  }
});
module.exports = app;
