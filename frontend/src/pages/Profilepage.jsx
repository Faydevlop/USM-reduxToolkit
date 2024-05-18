import React from 'react';
import Header from '../components/Header';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function ProfilePage() {
    

    const {user,error,loading} = useSelector((state)=>state.auth);

    if (!user) {
        return <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-10 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Please log in to view your profile</h2>
          <p className="text-gray-600 mb-6">You need to be logged in to access your profile and enjoy all the features.</p>
          <div className="flex space-x-4">
            <Link to="/login">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                Log In
              </button>
            </Link>
            <Link to="/signup">
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
      }
    
  return (
    <>
      <Header />
      <div
        style={{
          backgroundColor: '#b3b3b3', // Change this to your desired color
          minHeight: '100vh', // Ensure the background covers the full viewport height
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <form className="w-full max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="flex items-center space-x-6">
            <div className="shrink-0">
              <img id="preview_img" className="h-16 w-16 object-cover rounded-full" alt="pic here" />
            </div>
            <label className="block">
              <span className="sr-only">Choose profile photo</span>
              <input
                type="file"
                className="block w-full text-sm text-slate-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-violet-50 file:text-violet-700
                  hover:file:bg-violet-100"
              />
            </label>
          </div>
          <div className="mt-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" defaultValue={user.name} name="name" id="name" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" style={{ height: '30px' }} />
          </div>
          <div className="mt-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email"  defaultValue={user.email} name="email" id="email" autoComplete="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" style={{ height: '30px' }} />
          </div>
          <div className="mt-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label> 
            <input type="password"    name="password" id="password" autoComplete="current-password" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" style={{ height: '30px' }} />
          </div>
          <div className="flex justify-center pb-2">
            <button type="submit" className="bg-violet-500 hover:bg-blue-700 mt-4 text-white font-bold py-2 px-4 rounded">
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ProfilePage;
