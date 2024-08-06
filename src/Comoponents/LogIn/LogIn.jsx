import React from 'react'
import './LogIn.css'

const LogIn = () => {
  return (

    <div className='loginContainer'>
           <div className="form">
             <h2>Log In</h2>

             <div className="texteares">

                <div className="username">
                    <h5>Username</h5>
                    <input type="text" name="" id="" />
                </div>

                <div className="password">
                    <h5>Password</h5>
                    <input type="password" name="" id="" />
                </div>

             </div>

              <span><a href="">Forgot Password ?</a></span>

              <button>Log In</button>
           </div>
    </div>
    
  )
}

export default LogIn