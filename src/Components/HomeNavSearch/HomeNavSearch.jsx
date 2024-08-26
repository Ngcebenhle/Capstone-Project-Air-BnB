import {React, useContext, useEffect, useState} from 'react'
import './HomeNacSearch.css'
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from "react-datepicker";
import {ReactComponent as Search} from '../../Assets/Search.svg'
import LoginContext from '../../Context/LogInContext'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const HomeNavSearch = () => {


  const [addGuestToggler, setAddGuestToggler] = useState(false)
  const [hoverOnGuestAdder, setHoverOnGuestAdder] = useState(false)

  const history = useHistory();



  const setDates = useContext(LoginContext)
  const  dates  = useContext(LoginContext)
  // const isLoggedIn = useContext(LoginContext)



   // Reading Locations from database
   const res = useEffect(() => {
    

  });



  // Guest adder toggler function
  const guestToggler = () => {
    setAddGuestToggler(!addGuestToggler);
  }
  
  // Search Button Function
  const HandleSearchLocation = () => {
    history.push("/listListings");
     
    // get selected location and send out an
    // api request for all the locations on that 
    // selected location.

    // user context to set location here 

    // axios.get('')
    // .then(function (response) {
         
    //       // get and set listing to all listing with this location
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
  }
  

  return (
    <div>
      <div className='homeNavSearch'>

         <div className="location">
            <h4 className='headingText'>Location</h4>
            {/* <span className='subText'>Where are you going ?</span> */}
            
            {/* Location Selection list /dropdown  */}
         
           <select>
              {/* {listListing ? listListing.map((listing) => {
                return(
                   <option key={listing.id} value={listing.id}>
                    {listing.location}
                   </option>
                )
              })
              :null} */}
            </select>
          


         </div>

         <div className="checkIn">
         <h4 className='headingText'>Check In</h4>
         {/* <span className='subText'>Add Date</span> */}
         <span><DatePicker/></span>
         {/* selected={dates.checkInDate} onChange={(date) => setDates({checkInDate:date})} */}
         </div>

         <div className="checkOut">
         <h4 className='headingText'>Check Out</h4>
         {/* <span className='subText'>Add Date</span> */}
         <span><DatePicker/></span>
         {/* selected={dates.checkOutDate} onChange={(date) => setDates({checkOutDate:date})} */}
         </div>

         <div className="guest" onClick={guestToggler}>
         <h4 className='headingText'>Guests</h4>
         <span className='subText'>Add Guests</span>

         {addGuestToggler && 

         <div className="guestAdder" onMouseOver={setHoverOnGuestAdder(true)}
           onMouseOut={setHoverOnGuestAdder(false)} >

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
         
         <div  className="searchIcon" onClick={HandleSearchLocation}>
          <Search/>
         </div>
    </div>

    </div>
  )
}

export default HomeNavSearch