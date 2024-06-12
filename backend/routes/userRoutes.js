import express from "express";
const router = express.Router();
import { protect } from "../middleware/authMiddleware.js";
// const upload = require('../middleware/uploadMiddleware'); 
import upload from "../middleware/uploadMiddleware.js";
import multer  from "multer";
// const path = require('path');
// import path from 'path'
// const __dirname = path.resolve()

import {registerUser,loginUser,userProfile,updateUserProfile,logoutUser} from "../controllers/userControllers.js";

// multer
// multer
// const productStorage = multer.diskStorage({
//   destination: (req, file, callback) => {
//       // Navigate up two levels to reach the backend directory
//       callback(null, path.join(__dirname, '..', '..', 'public', 'uploads'));
//   },

//   // Extension
//   filename: (req, file, callback) => {
//       callback(null, Date.now() + file.originalname);
//   }
// });

// // Upload parameters for multer
// const uploadprdt = multer({
//   storage: productStorage,
//   // limits: {
//   //     fileSize: 1024 * 1024 * 5 // Uncomment if you want to enforce a file size limit
//   // }
// });

router.post('/register',registerUser);

router.post('/login',loginUser); 

router.post('/logout',logoutUser)


// router.post('/profile',uploadprdt.single('profileImage'),updateUserProfile)
router.post('/profile',upload.single('profileImage'),updateUserProfile)

router.route('/profile').get(protect, userProfile)


export default router;