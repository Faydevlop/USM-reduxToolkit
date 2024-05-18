import express from "express";
const router = express.Router();
import { protect } from "../middleware/authMiddleware.js";
import upload from "../middleware/multerConfig.js";

import {registerUser,loginUser,userProfile,updateUserProfile,logoutUser} from "../controllers/userControllers.js";

router.post('/register',registerUser);

router.post('/login',loginUser);

router.post('/logout',logoutUser)

router.route('/profile').get(protect, userProfile).put(protect,upload.single('profilePicture'),updateUserProfile)


export default router;