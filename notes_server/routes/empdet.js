const router = require("express").Router();
const CustDetails = require("../models/CustDetails");
const User = require('../models/User');

//! -------------------------------------------------------GPT CODE STARTS--------------------------------------------------------------------------

// router.post("/addempdetails", async (req, res) => {
//     try {
//       const details = new CustDetails({
//         id: req.body.id,
//         Machine_No: req.body.Machine_No,
//         Customer_Name: req.body.Customer_Name,
//         Remark: req.body.Remark,
//         postedBy: req.body.DetailedBy,
//       });
//       const data = await details.save();
  
//       res.status(200).json(data);
//     } catch (e) {
//       res.status(500).json(e);
//     } 
//   });

// router.post("/addempdetails", async (req, res) => {
//   try {
//       console.log('Request body:', req.body);

//       const details = new CustDetails({
//           id: req.body.id,
//           Machine_No: req.body.Machine_No,
//           Customer_Name: req.body.Customer_Name,
//           Remark: req.body.Remark,
//           // postedBy: req.body.postedBy,
//       });

//       const data = await details.save();
//       console.log('Data saved successfully:', data);

//       res.status(200).json(data);
//   } catch (error) {
//       console.error('Error saving details:', error);

//       res.status(500).json({
//           message: 'Internal Server Error',
//           error: error.message,
//           stack: error.stack
//       });
//   }
// });
router.post("/addempdetails", async (req, res) => {
  try {
    console.log('Request body:', req.body);

    const details = new CustDetails({
      empid: req.body.empid,
      Machine_No: req.body.Machine_No,
      Customer_Name: req.body.Customer_Name,
      Remark: req.body.Remark,
      postedBy: req.body.postedBy,
    });

    const data = await details.save();
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

  // ! ------------------Get Employee Details By using Employee Id-------------------
// router.get("/getempdetails/:id", async (req, res) => {
//   const {id} = req.params;
//   try {
//     const UserId = await CustDetails.findOne({empid: id});
//     if(!UserId){
//       return res.status(400).json({ message: "User not found" });
//     }
//     res.status(200).json(UserId);
//     // const userId = req.params.userid;
//     // console.log(`Fetching details for user ID: ${userId}`);

//     // // Validate the user ID format
//     // if (!mongoose.Types.ObjectId.isValid(userId)) {
//     //   console.log(`Invalid user ID format: ${userId}`);
//     //   return res.status(400).json({ data: "Invalid user ID format" });
//     // }

//     // // Find the user by ID
//     // const currentUser = await User.findById(userId);
//     // console.log(`Current user:`, currentUser);

//     // if (!currentUser) {
//     //   console.log(`User not found with ID: ${userId}`);
//     //   return res.status(400).json({ data: "User not found" });
//     // }

//     // // Query to find details posted by the user
//     // const data = await CustDetails.find({ postedBy: new mongoose.Types.ObjectId(userId) });
//     // console.log(`Query: { postedBy: ${userId} }`);
//     // console.log(`Found ${data.length} details for user ID: ${userId}`, data);

//     // // Respond with the found data
    
//   } catch (e) {
//     // Log the error for debugging
//     console.error(`Error fetching details for user ID ${req.params.userid}:`, e.message);
//     console.error(e.stack);

//     // Respond with a 500 status and detailed error message
//     res.status(500).json({ message: "Internal Server Error", error: e.message });
//   }
// });

// // ! Old Code 
// router.get("/getempdetails/:userid", async (req, res) => {
//   try {        
//     const currentUser = await User.findById(req.params.userid);
//     if(!currentUser){
//       return res.status(400).json({ message: "User not found" });
//     }
//     const notes = await CustDetails.find({postedBy:req.params.userid})
//     res.status(200).json(notes);
//   } 
//   catch (e) {
//     res.status(500).json(e);
      
//   }
// });
router.get("/getempdetails/:userid", async (req, res) => {
  try {
    console.log(`Received request to get notes for user ID: ${req.params.userid}`);

    // Validate the user ID format
    // if (!mongoose.Types.ObjectId.isValid(req.params.userid)) {
    //   console.log(`Invalid user ID format: ${req.params.userid}`);
    //   return res.status(400).json({ data: "Invalid user ID format" });
    // }

    //* Find the user by ID
    const currentUser = await User.findById(req.params.userid);

    //* If user is not found, respond with a 400 status
    if (!currentUser) {
      console.log(`User not found with ID: ${req.params.userid}`);
      return res.status(400).json({ data: "User not found" });
    }

    //* Find notes posted by the user
    const data = await CustDetails.find({ postedBy: req.params.userid });

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