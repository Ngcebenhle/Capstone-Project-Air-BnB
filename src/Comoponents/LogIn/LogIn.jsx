import React from 'react'
import './LogIn.css'

const LogIn = () => {
  // Call  use context the log in function and pass the text inputs values
  return (

    <div className='loginContainer'>
           <div className="form">
             <h2>Log In</h2>
             
             {/* Get the text inputs values and pass 
             them in the log In Function */}
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

              <button onClick={LogIn}>Log In</button>
           </div>
    </div>
    
  )
}

export default LogIn