import React from 'react'
import './ListingCard.css'

const ListingCard = () => {
  return (
    <div className='container'>
         <div className="content">
            <div className="displayImage"></div>
            <div className="displayData">
                
                <div className="listingDetails">
                    <div className="location-name">
                        <span>
                            Location / Name in small 
                            font and gray text 
                        </span>
                        <h3>Location / Name title</h3>
                    </div>
                    <div className="likeIcon">
                        <span>
                            <i>
                                {/* heart toggle icon */}
                            </i>
                        </span>
                    </div>
                </div>

                <div className="listingDescription">
                    {/* Number of bedrooms, guest number, type of location, amendeties */}
                </div>

                <div className="ratting-price">
                    <div className="rating"></div>
                    <div className="price"></div>
                </div>

            </div>
         </div>
    </div> 
  )
}

export default ListingCard