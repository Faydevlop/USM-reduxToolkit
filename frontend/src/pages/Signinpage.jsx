import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux';
import { registerAuth } from '../features/authSlice';
import { useNavigate } from 'react-router-dom';

function Signinpage() {
    
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {user,error,loading} = useSelector((state)=>state.auth)


    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(name,email,password);
        dispatch(registerAuth({name,email,password})).unwrap()
        .then((data)=>{
            navigate('/')
        })
    }
    


  return (
    <>
    <section className="flex items-center p-10 w-full bg-right-bottom lg:h-screen bg-no-repeat bg-cover bg-[url(../images/auth-bg.jpg)]">
      <div className="absolute inset-0 w-full h-full bg-black/60" />
      {/* end backdrop */}
      <div className="container">
        <div className="backdrop-blur-2xl bg-black/40 rounded-lg overflow-hidden max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2">
            <div className="flex flex-col h-full p-10">
              <div className="pb-10">
                <a href="index.html" className="flex justify-center">
                  <img
                    src="assets/images/logo-light.png"
                    alt="dark logo"
                    className="h-10"
                  />
                </a>
              </div>
              <div className="pb6 my-auto text-center">
                <h4 className="text-2xl font-bold text-white mb-3">Sign Up</h4>
                <p className="text-gray-300 mb-5 max-w-sm mx-auto">
                  Enter your email address and password to access account.
                </p>
                {error && <h2 className="text-red-500">{error}</h2>}
                  {user && <h2 className="text-green-500">{user.message}</h2>}
                {/* form */}
                <form action="#" className="text-start">
                  <div className="mb-4">
                    <label
                      htmlFor="input-label"
                      className="block text-base/normal font-semibold text-gray-200 mb-2"
                    >
                      Your Name <small>*</small>
                    </label>
                    <input
                      type="text"
                      id="input-label"
                      className="block w-full rounded py-1.5 px-3 bg-transparent border-white/10 border-gray-200 text-white/80 focus:border-white/25 focus:ring-transparent"
                      placeholder="Your Name"
                      value={name} 
                      onChange={(e)=>setName(e.target.value)}
                    />
                  </div>
                  {/* end name input */}
                  <div className="mb-4">
                    <label
                      htmlFor="emailaddress"
                      className="block text-base/normal font-semibold text-gray-200 mb-2"
                    >
                      Email address
                    </label>
                    <input
                      className="block w-full rounded py-1.5 px-3 bg-transparent border-white/10 border-gray-200 text-white/80 focus:border-white/25 focus:ring-transparent"
                      type="email"
                      id="emailaddress"
                      value={email} 
                      onChange={(e)=>setEmail(e.target.value)}
                      required=""
                      placeholder="Enter your email"
                    />
                  </div>
                  {/* end email input */}
                  <div className="mb-4">
                    <label
                      htmlFor="password"
                      className="block text-base/normal font-semibold text-gray-200 mb-2"
                    >
                      Password
                    </label>
                    <input
                      className="block w-full rounded py-1.5 px-3 bg-transparent border-white/10 border-gray-200 text-white/80 focus:border-white/25 focus:ring-transparent"
                      type="password"
                      required=""
                      value={password} 
                      onChange={(e)=>setPassword(e.target.value)}
                      id="password"
                      placeholder="Enter your password"
                    />
                  </div>
                  {/* end password input */}
                  <div className="mb-6">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-white/20 bg-white/20 text-primary-600 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary/60 focus:ring-offset-0"
                      id="checkbox-signin"
                    />
                    <label
                      className="ms-2 text-gray-200 align-middle"
                      htmlFor="checkbox-signin"
                    >
                      <span className="font-bold">I Accept </span>
                      <a href="javascript: void(0);">Terms and Conditions</a>
                    </label>
                  </div>
                  {/* end checkbox input */}
                  <div className="mb-6 text-center">
                    <button
                      className="w-full inline-flex items-center justify-center px-6 py-2 backdrop-blur-2xl bg-white/20 text-white rounded-lg transition-all duration-500 group hover:bg-primary/20 hover:text-primary mt-5"
                      type="submit"
                      onClick={handleSubmit}
                    >
                      <i className="uil uil-navigator me-2 text-lg" />{" "}
                      <span className="fw-bold">Log In</span>{" "}
                    </button>
                  </div>
                </form>
                {/* end form*/}
                <div className="pb-6">
                  <div className="text-center">
                    <p className="text-lg text-gray-200 font-semibold mb-4">
                      Sign in with
                    </p>
                    <ul className="flex flex-wrap items-center justify-center gap-2">
                      <li>
                        <a
                          href="javascript:void(0);"
                          className="h-10 w-10 inline-flex items-center justify-center backdrop-blur-2xl bg-white/20 rounded-lg transition-all duration-500 group hover:bg-primary/60"
                        >
                          <i className="uil uil-facebook-f text-xl text-white group-hover:text-white" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0);"
                          className="h-10 w-10 inline-flex items-center justify-center backdrop-blur-2xl bg-white/20 rounded-lg transition-all duration-500 group hover:bg-pink-600/60"
                        >
                          <i className="uil uil-instagram text-xl text-white group-hover:text-white" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0);"
                          className="h-10 w-10 inline-flex items-center justify-center backdrop-blur-2xl bg-white/20 rounded-lg transition-all duration-500 group hover:bg-sky-600/60"
                        >
                          <i className="uil uil-skype-alt text-xl text-white group-hover:text-white" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0);"
                          className="h-10 w-10 inline-flex items-center justify-center backdrop-blur-2xl bg-white/20 rounded-lg transition-all duration-500 group hover:bg-blue-800/60"
                        >
                          <i className="uil uil-linkedin-alt text-xl text-white group-hover:text-white" />
                        </a>
                      </li>
                    </ul>
                    {/* end social */}
                  </div>
                </div>
              </div>
              <div className="w-full text-center">
                <p className="text-gray-300 leading-6 text-base font-medium">
                  Already have an account?{" "}
                  <Link to={'/login'}>
                      <a  className="text-primary font-semibold ms-1">
                        Sign in
                      </a>
                      </Link>
                </p>
              </div>
            </div>{" "}
            {/* end col */}
            <div className="hidden lg:block">
              <div className="relative overflow-hidden h-full w-full">
                <img
                  src="assets/images/auth-img.jpg"
                  alt=""
                  className="w-full h-full transform -scale-x-100"
                />
              
              </div>
            </div>
          
          </div>{" "}
          
        </div>{" "}
       
      </div>
     
    </section>
    
  </>
  
  )
}

export default Signinpage