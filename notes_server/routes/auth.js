//! Register API
const router = require("express").Router();
const User = require("../models/User");

router.post("/login",async (req, res)=>{
    //? Data is coming in request & we need to send the response(res) through the below code
    try {
        //* Through findOne we can check wether the data exist in the data base 
        const user = await User.findOne({email: req.body.email});
        //* Now suppose if user is not there then
        !user && res.status(400).json({"message":"user not found",status:false});


        //* If we found the user then we need to check the password
        const validatePassword=req.body.password==user.password;
        //* If validate is pswd is false
        !validatePassword && res.status(404).json({"message":"password is incorrect",status:false});

        //* Now if all the credentials matches 
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.post("/register", async(req,res)=>{

    try{
        const user = new User ({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
        }); 
        // ! This will have all the data which we'll send
        const data = await user.save();
        res.status(200).json(data);
    }catch(e){
        res.status(500).json(e);
    }

});


module.exports=router; 