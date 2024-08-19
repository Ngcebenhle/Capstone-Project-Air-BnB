import {React, useRef, useContext }from 'react'
import './LogIn.css'
import LogInContext from '../../Context/LogInContext';


const LogIn = () => {

const {username, password} = useRef();
const {LogIn} = useContext(LogInContext)

          LogIn(username.current.value, password.current.value)
  return (

    <div className='loginContainer'>
      
           <div className="form">
             <h2>Log In</h2>

             <div className="texteares">

                <div className="username">
                    <h5>Username</h5>
                    <input type="text" name="" id="" ref={username} />
                </div>

                <div className="password">
                    <h5>Password</h5>
                    <input type="password" name="" id="" ref={password}/>
                </div>

             </div>

              <span><a href="">Forgot Password ?</a></span>

              <button onClick={LogIn}>Log In</button>
           </div>
    </div>
    
  )
}

export default LogIn