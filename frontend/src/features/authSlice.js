import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { text } from "express";
import { rule } from "postcss";
import { act } from "react";

// api integration part

// register api
export const registerAuth = createAsyncThunk(
    'auth/register',
    async (userData,{rejectWithValue})=>{
        try {
            let response = await axios.post('http://localhost:8000/user/register',userData);
        console.log('responed data is here');
        return response.data
        
        } catch (error) {
            if(error.response && error.response.data){
                return rejectWithValue(error.response.data);
            }else{
                return rejectWithValue({ message: error.message });
            }
        }
    }
)

// login api
export const loginAuth = createAsyncThunk(
    'auth/login',
    async(userData,{rejectWithValue})=>{
        try {
            let response = await axios.post('http://localhost:8000/user/login',userData)
            console.log('login responed data is here');
            return response.data
        } catch (error) {
            if(error.response && error.response.data){
                return rejectWithValue(error.response.data);
            }else{
                return rejectWithValue({message:error.message})
            }
            
        }
    }
)

//logout user
export const logoutUser = createAsyncThunk(
    'auth/logout',
    async ()=>{
        try {
            let response = await axios.post('http://localhost:8000/user/logout')
            return response.data
        } catch (error) {
            
        }
    }
)

//update user profile api
export const updateProfile = createAsyncThunk(
    'auth/updateprofile',
    async (userData,{rejectWithValue})=>{
        try {
            let response = await axios.post('http://localhost:8000/user/logout',userData)
            return response.data
        } catch (error) {
            if(error.response && error.response.data){
                return rejectWithValue(error.response.data);
            }else{
                return rejectWithValue({message:error.message})
            }
        }
    }
)






// slice part
const authSlice = createSlice({
    name:'authSlice',
    initialState:{
        user:null,
        error:null,
        loading: false,
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(registerAuth.pending,(state)=>{
            state.loading = true;
        })
        .addCase(registerAuth.fulfilled,(state,action)=>{
            state.loading = false;
            state.user = action.payload;
            state.error = null;
        })
        .addCase(registerAuth.rejected,(state,action)=>{
            state.loading = false;
            state.user = null;
            state.error = action.payload ? action.payload.message : "Registration failed";
        })
        .addCase(loginAuth.pending,(state)=>{
            state.loading = true;
        })
        .addCase(loginAuth.fulfilled,(state,action)=>{
            state.loading = true;
            state.user = action.payload;
            state.error = null;
        })
        .addCase(loginAuth.rejected,(state,action)=>{
            state.loading = false;
            state.user = null;
            state.error = action.payload ? action.payload.message : "Registration failed"

        })
        .addCase(logoutUser.pending,(state)=>{
            state.loading = false;
        })
        .addCase(logoutUser.fulfilled,(state,action)=>{
            state.loading = false;
            state.user = null;
            state.error = null;
        })
        .addCase(updateProfile.pending,(state)=>{
            state.loading =true
        })
        .addCase(updateProfile.fulfilled,(state,action)=>{
            state.loading = false;
            state.user = action.payload
            state.error = null
        })
        .addCase(updateProfile.rejected,(state)=>{
            state.loading = false;
            state.user = null;
            state.error = action.payload ? action.payload.message : "Registration failed"
        })
    }
})


export const authReducer = authSlice.reducer ;