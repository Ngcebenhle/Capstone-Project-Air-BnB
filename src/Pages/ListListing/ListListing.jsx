import {React, useEffect, useState} from 'react'
import './ListListing.css'
import ListListingNavSearch from '../../Components/ListListingNavSearch/ListListingNavSearch'
import NavUserTab from '../../Components/NavUserTab/NavUserTab'
import {ReactComponent as LogoRed} from '../../Assets/Logo_Red.svg'
import {ReactComponent as SearchIcon} from '../../Assets/Search.svg'
import {ReactComponent as Filter} from '../../Assets/Small_FIlter.svg'
import axios from 'axios'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const ListListing = () => {

  const [listings, setListings] = useState(null)
  const history = useHistory();

   // get the list of the listing of the selected location
      // double check the link 

//   const listOfListings = useEffect(() => {

//       axios.get('http://localhost:8000/')
//       .then(function (response) {
//        setListings(response)
//       })
//       .catch(function (error) {
//         console.log(error);
//       });

// },[selectedLocation]);


  return (
    <div className='listListingPage'>

        <div className="listListingNav">

            <div className="listListingLogo" onClick={() => {
                   history.push("/");
            }}>
              <LogoRed/>
            </div>

            <div className="middleSection">
               {/* <ListListingNavSearch/> */}
               <SearchIcon/>
            </div>

            <div className="listListingNavUserProfile">
              <div>
              <NavUserTab/>
              </div>
            </div>

        </div>
        <p className='NoListings'>Lorem ipsum dolor sit</p>

       <div className='filterRow'>
       <div className="filters">
         
         <div className="filterList">

          <div className='filterOptions'>
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


        <div className="listListingPageListings">
            {/* Listing Component */}

        </div>
    </div>
  )
}

export default ListListing