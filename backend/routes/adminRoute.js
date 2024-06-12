import express from "express";
import { adminDashboard,adminLogin,logout,updateUser,createUser,fetchUserDetails ,deleteUser } from "../controllers/adminControllers.js";

const router = express.Router();

router.get('/dashboard',adminDashboard)
router.post('/login',adminLogin)
router.post('/logout',logout)
router.post('/updateuser/:id',updateUser)
router.get('/getuserdata/:id',fetchUserDetails)
router.post('/createuser',createUser)
router.delete('/deleteuser/:id', deleteUser);


export default router;