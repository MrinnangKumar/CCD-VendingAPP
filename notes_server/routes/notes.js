const router = require("express").Router();
const CustDetails = require("../models/CustDetails");
const Note = require("../models/Notes");
const User = require('../models/User');
const express = require('express');
const mongoose = require('mongoose');
// //! Create Notes API

router.post("/addNote", async (req, res) => {
  try {
    const note = new Note({
      title: req.body.title,
      description: req.body.description,
      postedBy: req.body.postedBy,
    });
    const data = await note.save();

    res.status(200).json(data);
  } catch (e) {
    res.status(500).json(e);
  } 
});

// //! Delete Notes API (GPT Code)
router.delete("/deleteNote/:id", async (req, res) => {
  try {
    // Log the ID received
    console.log(`Received ID for deletion: ${req.params.id}`);

    // Check if the note exists
    const notes = await Note.findOne({ _id: req.params.id });
    
    // If note not found, send a 400 response
    if (!notes) {
      return res.status(400).json({ message: "Note not found", status: false });
    }

    // If note found, proceed to delete
    await Note.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: "Note deleted successfully", status: true });
  } catch (e) {
    // Log the error
    console.error(`Error occurred: ${e.message}`);
    
    // Send a 500 response with the error message
    return res.status(500).json({ message: e.message });
  }
});


//! Update Notes API
router.put("/updateNote/:id", async (req, res) => {
  try {
    //* Here we are checking the id wether it exist or not
    const notes = await Note.findOne({ _id: req.params.id });
    !notes && res.status(400).json({message: "note not found, please check the provided id",status: false,}); //* If id not found
    const note = await Note.updateOne({
      title: req.body.title,
      description: req.body.description,
      postedBy: req.body.postedBy,
    }); //* If found the process the delete function
    res.status(200).json({ message: "Note updated successfully", status: true }); //* Display the message of deleted successfully
  } catch (e) {
    res.status(500).json(e);
  }
});

// //! Get All Notes API
router.get("/getNotes/:userid", async (req, res) => {
  try {        
      console.log(`Received request to get notes for user ID: ${req.params.userid}`);

      // Validate the user ID format
      // if (!mongoose.Types.ObjectId.isValid(req.params.userid)) {
      //     console.log(`Invalid user ID format: ${req.params.userid}`);
      //     return res.status(400).json({ data: "Invalid user ID format" });
      // }

      // Find the user by ID
      const currentUser = await User.findById(req.params.userid);
      
      // If user is not found, respond with a 400 status
      if (!currentUser) {
          console.log(`User not found with ID: ${req.params.userid}`);
          return res.status(400).json({ data: "User not found" });
      }

      // Find notes posted by the user
      const notes = await Note.find({ postedBy: req.params.userid });

      // Respond with the found notes
      console.log(`Found ${notes.length} notes for user ID: ${req.params.userid}`);
      res.status(200).json(notes);
  } catch (e) {
      // Log the error for debugging
      console.error(`Error fetching notes for user ID ${req.params.userid}:`, e.message);
      console.error(e.stack);

      // Respond with a 500 status
      res.status(500).json({ message: "Internal Server Error" });
  }

});

module.exports = router;
  