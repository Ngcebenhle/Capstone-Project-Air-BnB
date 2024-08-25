import React, { useRef } from 'react'
import './CreateListingForm.css'

const CreateListingForm = () => {
  const amenities = useRef()

  const CreateListing = () => {
    // if all fields are filled and if they are send to backend but if not specify which one 
    //  and give an error 

    
      //send data/state to the back end.
  }

  const Cancel = () => {
      // clear our the state to it initial state
  }

  const dataInput = () => {
    // invoke state change and add the information being typed
  }

  const addAmenities = () => {
    //   invoke state change add Amenities to a list array or object
    const amenity = amenities.current.value.split(",")
    amenity.forEach(ameni => {
      // dispatch here
      // dispatchEvent({type: "ADD_AMENITIES", payload: ameni})
    });
  }

  const addImages = () => {
    //  invoke state change add Images to a list array or object
  }

  return (
    <div className='CreateListingForm'>
        <h2>Create Listing</h2>
          <div className="form">
                  <div className="section1">

                    <div className="sideA">

                        <div className="listingName">
                            <span>Listing Name</span>
                            <input type="text" name="listingName" id="" onChange={dataInput}/>
                        </div>

                        <div className="location">
                            <span>Location</span>
                            <input type="text" name="location" id="" onChange={dataInput}/>
                        </div>

                        <div className="Description">
                            <span>Description</span>
                            <input type="text" name="description" id="" onChange={dataInput}/>
                        </div>

                    </div>

                    <div className="sideB">

                        <div className="roomsBathsTypes">

                            <div className="rooms">
                                <span>Rooms</span>
                                <input type="text" name="rooms" id="" onChange={dataInput}/>
                            </div>
                            <div className="baths">
                            <span>Bath</span>
                            <input type="text" name="bath" id="" onChange={dataInput}/>
                            </div>
                            <div className="types">
                            <span>Type</span>
                            <input type="text" name="type" id="" onChange={dataInput}/>
                            </div>

                        </div>

                        <div className="location">
                            <span>Location</span>
                            <input type="text" name="listingLocation" id="" />
                        </div>

                        <div className="amenities">
                            <span>Amenities</span>
                           <div className='content'>
                           <input ref={amenities} type="text" name="amenities" id="" onChange={addAmenities} />
                           <button onClick={() => {
                             // adding amenities into a list array or object
                           }}>Add</button>
                           </div>
                        </div>
                    </div>
                  </div>
                  <div className="section2">

                   <div className="details">
                   <span>Images</span>
                   <button onChange={addImages}>Upload Images</button>
                   </div>

                   <input type="text" name="images" id="" />

                  </div>
                  <div className="submitButtons">
                    <button onClick={CreateListing} className='create'>Create</button>
                    <button onClick={Cancel} className='cancel'>Cancel</button>
                  </div>
          </div>
    </div>
  )
}

export default CreateListingForm