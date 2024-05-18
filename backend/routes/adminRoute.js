import express from "express";
import { adminDashboard,adminLogin,logout,updateuser,createUser ,DeleteUser } from "../controllers/adminControllers.js";

const router = express.Router();

router.get('/dashboard',adminDashboard)
router.post('/login',adminLogin)
router.post('/logout',logout)
router.put('/updateuser',updateuser)
router.post('/createuser',createUser)
router.delete('/deleteuser',DeleteUser)

export default router;