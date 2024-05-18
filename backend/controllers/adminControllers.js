import asyncHandler from "express-async-handler";


const adminDashboard = asyncHandler(async(req,res)=>{
    res.status(200).json('adminDashboard / List User')
})

const adminLogin = asyncHandler(async(req,res)=>{
    res.status(200).json('adminLogin')
})

const logout = asyncHandler(async(req,res)=>{
    res.status(200).json('adminlogout')
})

const updateuser = asyncHandler(async(req,res)=>{
    res.status(200).json('updateuser')
})

const createUser = asyncHandler(async(req,res)=>{
    res.status(200).json('create User')
})


const DeleteUser = asyncHandler(async(req,res)=>{
    res.status(200).json('Delete User')
})









export{
    adminDashboard,
    adminLogin,
    logout,
    updateuser,
    createUser,
    DeleteUser
}