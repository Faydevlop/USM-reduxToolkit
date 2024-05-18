import React from 'react'
import Header from '../components/Header'
import { useSelector } from 'react-redux'

function Homepage() {

        const {user,error,loading} = useSelector((state)=>state.auth);
        

  return (
    <>
  <Header/>
  {/* Hero Section Start */}
  <section id="home" className="py-72 relative">
    <div className="container">
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url(assets/images/landing/directory/hero-bg.jpg)"
        }}
      >
        <div className="relative w-full h-full z-30 bg-black/60" />
      </div>
      <div className="relative z-30">
        <div className="max-w-2xl">
        <h2 className="text-6xl/tight font-bold text-white mb-4">
        Welcome {user ? user.name : "Please login"}
     </h2>

          
          
          <div className="lg:flex items-center gap-5 rounded shadow-sm p-3 border bg-white">
            <div className="sm:flex items-center justify-between w-full">
              <div className="flex w-full items-center border-r border-b sm:border-b-0">
                <i data-lucide="search" />
                <input
                  type="text"
                  id="hero-input"
                  name="hero-input"
                  className="border-0 w-full focus:ring-0 bg-transparent"
                  placeholder="what are you searching for ?"
                />
              </div>
              <div className="flex w-full items-center ps-4">
                <i data-lucide="map-pin" />
                <input
                  type="text"
                  id="hero-input"
                  name="hero-input"
                  className="border-0 w-full focus:ring-0 bg-transparent"
                  placeholder="Location"
                />
              </div>
              <button className="inline-flex items-center px-6 py-3 text-white text-base duration-300 rounded-md bg-gradient-to-r from-red-600 via-red-500 to-red-400">
                <span className="hidden sm:inline">Search</span>
                <i className="uil uil-search text-white text-lg/none ms-2" />
              </button>
            </div>
          </div>
          {/* Flex End */}
        </div>
      </div>
    </div>
    {/* Container End */}
   
  </section>
  
</>

  )
}

export default Homepage