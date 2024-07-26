const router = require("express").Router();
const Remarks = require("../models/Remarks");
const User = require('../models/User');


router.post("/addremarks", async (req, res) => {
    try {
      console.log('Request body:', req.body);
  
      const remarks = new Remarks({
        Remark: req.body.Remark,
        postedBy: req.body.postedBy,
      });
  
      const data = await remarks.save();
      console.log('Data saved successfully:', data);
  
      res.status(200).json(data);
    } catch (error) {
      if (error.code === 11000) { // Duplicate key error
        console.error('Duplicate key error:', error);
        res.status(400).json({
          message: 'Duplicate key error',
          error: error.message
        });
      } else {
        console.error('Error saving details:', error);
        res.status(500).json({
          message: 'Internal Server Error',
          error: error.message,
          stack: error.stack
        });
      }
    }
  });

  router.get("/getremarks/:userid", async (req, res) => {
    try {
      console.log(`Received request to get notes for user ID: ${req.params.userid}`);
  
      //* Find the user by ID
      const currentUser = await User.findById(req.params.userid);
  
      //* If user is not found, respond with a 400 status
      if (!currentUser) {
        console.log(`User not found with ID: ${req.params.userid}`);
        return res.status(400).json({ data: "User not found" });
      }
  
      //* Find notes posted by the user
      const data = await Remarks.find({ postedBy: req.params.userid });
  
      //* Respond with the found notes
      console.log(`Found ${data.length} data for user ID: ${req.params.userid}`);
      res.status(200).json(data); // Corrected the variable name
    } catch (e) {
      //* Log the error for debugging
      console.error(`Error fetching notes for user ID ${req.params.userid}:`, e.message);
      console.error(e.stack);
  
      //* Respond with a 500 status
      res.status(500).json({ message: "Internal Server Error" });
    }
  });
  module.exports = router;