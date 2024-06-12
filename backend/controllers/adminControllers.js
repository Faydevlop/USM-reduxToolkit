import asyncHandler from 'express-async-handler';
import User from '../model/userModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const adminDashboard = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.status(200).json(users);
});

const adminLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if(user.isAdmin){
    if (user && (await user.matchPassword(password))) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '30d' });
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        profileImage: user.profileImage ,
        token: token,
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  }else{
    res.status(401).json({ message: 'Admin not found' });
  }
  
});



const logout = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Logged out successfully' });
});

const fetchUserDetails = asyncHandler(async (req, res) => {
  console.log('req is here');
  const userId = req.params.id;

  try {
    const user = await User.findOne({_id:userId});
    if (!user) {console.log('req is here 2');
      res.status(404);
      throw new Error('User not found');
    }

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      // Include other user details as needed
    });
  } catch (error) {
    console.log('req is here 3');
    res.status(500);
    throw new Error('Server Error');
  }
});


const updateUser = asyncHandler(async (req, res) => {
  
  const user = await User.findById(req.params.id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();
    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

const createUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400).json({ message: 'User already exists' });
  } else {
    const user = await User.create({
      name,
      email,
      password,
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      });
    } else {
      res.status(400).json({ message: 'Invalid user data' });
    }
  }
});

const deleteUser = asyncHandler(async (req, res) => {
    console.log('delete request is here');
    console.log(req.params.id);
    
    try {
        const user = await User.findOne({ _id: req.params.id });

        if (user) {
            await User.deleteOne({ _id: req.params.id }); // Use deleteOne to delete the document
            res.json({ message: 'User removed' });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ message: 'Server error' });
    }
});
    

export {
  adminDashboard,
  adminLogin,
  logout,
  updateUser,
  createUser,
  deleteUser,
  fetchUserDetails
};
