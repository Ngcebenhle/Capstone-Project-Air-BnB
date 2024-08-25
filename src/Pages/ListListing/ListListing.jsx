import React from 'react'
import './ListListing.css'
import ListListingNavSearch from '../../Components/ListListingNavSearch/ListListingNavSearch'
import NavUserTab from '../../Components/NavUserTab/NavUserTab'
import {ReactComponent as LogoRed} from '../../Assets/Logo_Red.svg'
import {ReactComponent as SearchIcon} from '../../Assets/Search.svg'
import {ReactComponent as Filter} from '../../Assets/Small_Filter.svg'
 
const ListListing = () => {
  return (
    <div className='listListingPage'>

        <div className="nav">

            <div className="logo">
              <LogoRed/>
            </div>

            <div className="middleSection">
               {/* <ListListingNavSearch/> */}
               <SearchIcon/>
            </div>

            <div className="NavUserProfile">
              <div>
              <NavUserTab/>
              </div>
            </div>

        </div>
        <p>Lorem ipsum dolor sit</p>

       <div className='filterRow'>
       <div className="filters">
         
         <div className="filterList">
          <div>
          <button> Price</button>
         {/* <button>Type Of Place</button> */}
         <button>Free Cancellation</button>
         <button>Washer</button>
         <button>Self Check-In</button>
         <button>Wi-Fi</button>
         <button>Kitchen</button>
         <button>Air Conditioning</button>
         <button>Free Parking</button>
         <button>Dryer</button>
         <button>Dedicated Workspace</button>
         <button>Pets</button>
         <button>Smoking</button>
         <button>Parties Allowed</button>
         <button>More</button>
          </div>
        
         </div>

           <div className="filterButton">
           <div><Filter/></div>  
           <span>Filter</span>
           </div>


       </div>
       </div>


        <div className="listings">
            {/* Listing Component */}
        </div>
    </div>
  )
}

export default ListListing