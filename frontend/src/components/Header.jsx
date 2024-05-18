import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutUser } from '../features/authSlice';


function Header() {
    const {user,error,loading} = useSelector((state)=>state.auth);
    const dispatch = useDispatch()

    const handelLogin = ()=>{
        dispatch(logoutUser())

    }

    

  return (
    <header id="navbar-sticky" className="navbar nav-light">
    <div className="container">
      <nav>
        {/* Navbar Brand Logo */}
        <a href="home-directory.html" className="logo">
          <img
            src="assets/images/logo-dark.png"
            className="h-10 logo-dark"
            alt="Opixo Logo"
          />
          <img
            src="assets/images/logo-light.png"
            className="h-10 logo-light"
            alt="Opixo Logo"
          />
        </a>
        {/* Moblie Menu Toggle Button (Offcanvas Button) */}
        <div className="lg:hidden flex items-center ms-auto px-2.5">
          <button
            className="hs-collapse-toggle inline-flex items-center justify-center h-9 w-12 rounded-md border border-gray-300 bg-slate-300/30"
            type="button"
            id="hs-unstyled-collapse"
            data-hs-collapse="#mobileMenu"
            data-hs-type="collapse"
          >
            <i className="uil uil-bars text-2xl" />
          </button>
        </div>
        {/* Nevigation Menu */}
        <div
          id="mobileMenu"
          className="hs-collapse overflow-hidden transition-all duration-300 lg:basis-auto basis-full grow hidden lg:flex items-center justify-center mx-auto mt-2 lg:mt-0"
        >
          <ul id="navbar-navlist" className="navbar-nav">
            
            
            {/* Service Page Link */}
            {/* <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li> */}
            {/* Features Page Link */}
            {/* <li className="nav-item">
              <a className="nav-link" href="#features">
                Features
              </a>
            </li> */}
            {/* Price Page Link */}
            {/* <li className="nav-item">
              <a className="nav-link" href="#testimonial">
                Testimonials
              </a>
            </li> */}
            {/* Review Page Link */}
            {/* <li className="nav-item">
              <a className="nav-link" href="#blog">
                Blog
              </a>
            </li> */}
          </ul>
          {/* Download Button */}
          
        </div>
        {/* Download Button */}
        <div className="flex items-center space-x-2">
  {user ? (
    <Link to={'/profile'}>
    <a  className="nav-btn">Profile</a></Link>
  ) : (
    <Link to={'/login'}>
      <a className="nav-btn">Sign up</a>
    </Link>
  )}
  {user ? (
    <a onClick={handelLogin} className="nav-btn">Log out</a>
  ) : (
    <Link to={'/login'}>
      <a className="nav-btn">Log in</a>
    </Link>
  )}
</div>

      </nav>
    </div>
  </header>
  )
}

export default Header