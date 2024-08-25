import React from 'react'
import './Admin.css'
import Reservations from '../../Components/MyReservations/Reservations'
import {ReactComponent as LogoRed} from '../../Assets/Logo_Red.svg'
import NavUserTab from '../../Components/NavUserTab/NavUserTab'
import CreateListingForm from '../../Components/CreateListingForm/CreateListingForm'

const Admin = () => {
  return (
    <div>
        <div className="main">

         <div className="nav">

            <div className="logo">
              
                <LogoRed/>
            </div>

            <div className="userProfile">
                <NavUserTab/>
            </div>

         </div>
          
          <div className="navButtons">

            <div className="navigation">
                 <button>
                  View reservations
                  {/* View only listing reserved that belong to the Logged in Admin */}
                  </button>
                 <button>
                  View Listing
                  {/* read only listing that belong to the logged in ID */}
                  </button>
                 <button>
                  Create Listing
                  {/* Open Creat Linsting form */}
                  </button>

            </div>
          </div>

         <div className="adminPages">

             <div className="reservationsList">

               <h2>My Reservations</h2>

                <div className='container'>

                <div className="bookedBy">
                    <span>Booked By</span>
                </div>

                <div className="property">
                   <span>Property</span>
                </div>

                <div className="checkInDate">
                   <span>Check In Date</span>
                </div>

                <div className="checkOutDate">
                    <span>Check out Date</span>
                </div>

                <div className="action">
                <span>Action</span>
                </div>
                    
                </div>

                  <Reservations/>
                  
                
                  

            </div>

            <div className="listings">
              
              {/* Listing Componets here */}
            </div>

            <div className="createlisting">
              <CreateListingForm/>
              {/* Create listing Componet Form here */}
            </div>
         </div>

          
      
      
        </div>
    </div>
  )
}

export default Admin