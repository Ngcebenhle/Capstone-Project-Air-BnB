import React from 'react'
import './LogInPage.css'
import {ReactComponent as LogoRed} from '../../Assets/LogoRed.svg'
import LogIn from '../../Components/LogIn/LogIn'


const LogInPage = () => {
  return (
    <div className='LogInPage'>

       <div className="logInNav">
           <div className="logInLogo">
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