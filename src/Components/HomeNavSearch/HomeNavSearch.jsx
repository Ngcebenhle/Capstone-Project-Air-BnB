import {React, useContext, useEffect, useState} from 'react'
import './HomeNacSearch.css'
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from "react-datepicker";
import {ReactComponent as Search} from '../../Assets/Search.svg'
import LoginContext from '../../Context/LogInContext'


const HomeNavSearch = () => {

  const [addGuestToggler, setAddGuestToggler] = useState(false)

  const setDates = useContext(LoginContext)
  const  dates  = useContext(LoginContext)
  // const isLoggedIn = useContext(LoginContext)

   // Reading Locations from database
   const res = useEffect(() => {
    
   

  });

  const guestToggler = () => {
    setAddGuestToggler(!addGuestToggler)
  }
  

  return (
    <div>
      <div className='homeNavSearch'>

         <div className="location">
            <h4 className='headingText'>Location</h4>
            <span className='subText'>Where are you going ?</span>
         </div>

         <div className="checkIn">
         <h4 className='headingText'>Check In</h4>
         <span className='subText'>Add Date</span>
         {/* <span><DatePicker selected={dates.checkInDate} onChange={(date) => setDates({checkInDate:date})}/></span> */}
         </div>

         <div className="checkOut">
         <h4 className='headingText'>Check Out</h4>
         <span className='subText'>Add Date</span>
         {/* <span><DatePicker selected={dates.checkOutDate} onChange={(date) => setDates({checkOutDate:date})}/></span> */}
         </div>

         <div className="guest" onClick={guestToggler}>
         <h4 className='headingText'>Guests</h4>
         <span className='subText'>Add Guests</span>

         {addGuestToggler && 

         <div className="guestAdder">
          <div className="adults">
          <span>adults</span>
            <button>-</button>
            <p>0</p>
            <button>+</button>
          </div>
          <div className="children">
            <span>Children</span>
            <button>-</button>
            <p>0</p>
            <button>+</button>
          </div>
         </div>
         }

         </div>
         
         <div  className="searchIcon">
          <Search/>
         </div>
    </div>

    </div>
  )
}

export default HomeNavSearch