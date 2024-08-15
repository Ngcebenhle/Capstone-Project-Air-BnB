import React from 'react'
import './HomeNacSearch.css'
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from "react-datepicker";

const HomeNavSearch = () => {
  return (
    <div className='homeNavSearch'>

         <div className="location">
            <h4>Location</h4>
            <span>Where are you going ?</span>
         </div>

         <div className="checkIn">
         <h4>Check In</h4>
         <span><DatePicker/></span>
         </div>

         <div className="checkOut">
         <h4>Check Out</h4>
         <span><DatePicker/></span>
         </div>

         <div className="guest">
         <h4>Guests</h4>
         <span>Add Guests</span>
         </div>
         
         <div className="searchIcon"></div>
    </div>
  )
}

export default HomeNavSearch