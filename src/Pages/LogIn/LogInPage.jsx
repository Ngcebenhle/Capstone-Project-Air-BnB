import React from 'react'
import './LogInPage.css'
import {ReactComponent as LogoRed} from '../../Assets/LogoRed.svg'
import LogIn from '../../Comoponents/LogIn/LogIn'


const LogInPage = () => {
  return (
    <div className='LogInpage'>

       <div className="nav">
           <div className="logo">
              <LogoRed/>
           </div>
       </div>

       <div className="logInForm">
         <LogIn/>
       </div>
       
    </div>
  )
}

export default LogInPage