import {React, useContext} from 'react'
import './HomeNacSearch.css'
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from "react-datepicker";
import {ReactComponent as Search} from '../../Assets/Search_icon_2_Red.svg'
import LogInContext

from '../../Context/LogInContext';
const HomeNavSearch = () => {

  const datesState = useContext(LogInContext)
  const {setDates, dates } = datesState

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

         <div className="guest">
         <h4 className='headingText'>Guests</h4>
         <span className='subText'>Add Guests</span>
         </div>
         
         <div className="searchIcon">
          <Search/>
         </div>
    </div>
    </div>
  )
}

export default HomeNavSearch