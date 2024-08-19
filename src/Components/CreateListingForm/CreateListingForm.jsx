import React from 'react'
import './CreateListingForm.css'

const CreateListingForm = () => {
  return (
    <div className='CreateListingForm'>
        <h2>Create Listing</h2>
          <div className="form">
                  <div className="section1">

                    <div className="sideA">

                        <div className="listingName">
                            <span>Listing Name</span>
                            <input type="text" name="" id="" />
                        </div>

                        <div className="location">
                            <span>Location</span>
                            <input type="text" name="" id="" />
                        </div>

                        <div className="Description">
                            <span>Description</span>
                            <input type="text" name="" id="" />
                        </div>

                    </div>

                    <div className="sideB">

                        <div className="roomsBathsTypes">

                            <div className="rooms">
                                <span>Rooms</span>
                                <input type="text" name="" id="" />
                            </div>
                            <div className="baths">
                            <span>Rooms</span>
                            <input type="text" name="" id="" />
                            </div>
                            <div className="types">
                            <span>Rooms</span>
                            <input type="text" name="" id="" />
                            </div>

                        </div>

                        <div className="location">
                            <span>Location</span>
                            <input type="text" name="" id="" />
                        </div>

                        <div className="amenities">
                            <span>Amenities</span>
                           <div className='content'>
                           <input type="text" name="" id="" />
                           <button>Add</button>
                           </div>
                        </div>
                    </div>
                  </div>
                  <div className="section2">

                   <div className="details">
                   <span>Images</span>
                   <button>Upload Images</button>
                   </div>

                   <input type="text" name="" id="" />

                  </div>
                  <div className="submitButtons">
                    <button className='create'>Create</button>
                    <button className='cancel'>Cancel</button>
                  </div>
          </div>
    </div>
  )
}

export default CreateListingForm