import asyncHandler from "express-async-handler";
import User from "../model/userModel.js";
import genaratetoken from '../utils/genaratetoken.js'


const registerUser = asyncHandler(async (req, res) => {
    
    console.log('request is here');
    const { name, email, password } = req.body;

    console.log('request:', name, password, email);
    const userExist = await User.findOne({ email });
    if (userExist) {
  
        return res.status(400).json({status:false, message: 'User Already Exists' });
        
    }
    console.log('no comminfg');
    const user = await User.create({
        name,
        email,
        password
    })

    if (user) {
        genaratetoken(res, user._id)
        return res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            message:'success',
            status:true
        })

    } else {
        throw new Error('Invalid User data')
    }
})


const loginUser = asyncHandler(async(req,res)=>{
   
    const {email,password} = req.body;

    const user = await User.findOne({email})

    if(user && (await user.matchPassword(password)) ){
        genaratetoken(res,user._id)
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email , 
            message:'success',
            status:true  
        })
        console.log('login success fully');
    }else{
        res.status(401).json({status:false,message:'Invalid Email or password'});
        console.log('Invalid credential');
    }

})

const userProfile = asyncHandler(async(req,res)=>{
    const user = {
        _id:req.user._id,
        name:req.user.name,
        email:req.user.email
    }
    res.status(200).json({ user });
})

import upload from "../middleware/multerConfig.js";

const updateUserProfile = asyncHandler(async (req, res) => {
    console.log('update request is here');
    const user = await User.findById(req.user._id);

    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;

        if (req.user.password) {
            user.password = req.body.password;
        }

        // Check if a file was uploaded
        if (req.files && Object.keys(req.files).length > 0) {
            let profilePicture = req.files.profilePicture; // Assuming the file input field is named 'profilePicture'
            
            // Move the file to the desired location
            profilePicture.mv(`./uploads/${profilePicture.name}`, function (err) {
                if (err) {
                    return res.status(500).send(err);
                }
                
                // Optionally, update the user's profile picture path in the database
                user.profilePicturePath = `/uploads/${profilePicture.name}`;
            });
        }

        const updatedUser = await user.save();

        res.status(200).json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            profilePicture: updatedUser.profilePicturePath, // Include the profile picture path in the response
        });
    } else {
        res.status(404).send('User not found');
    }
});

const logoutUser = asyncHandler(async(req,res)=>{
    console.log('response is here');
    res.cookie('jwt','',{
        httpOnly:true,
        expires:new Date(0)

    })
    res.status(200).json({islogout:true, message: 'User Logged Out' });
})






export{
    registerUser,
    loginUser,
    userProfile,
    updateUserProfile,
    logoutUser
}