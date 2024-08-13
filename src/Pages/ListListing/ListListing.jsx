import React from 'react'
import './ListListing.css'

import {ReactComponent as LogoRed} from '../../Assest/Logo_Red.svg'
 
const ListListing = () => {
  return (
    <div className='listListingPage'>
        <div className="nav">
            <div className="logo"></div>
            <div className="middleSection"></div>
            <div className="userProfile"></div>
        </div>
        <div className="listings">
            {/* Listing Component */}
        </div>
    </div>
  )
}

export default ListListing