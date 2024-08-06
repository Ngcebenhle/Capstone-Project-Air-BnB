import React from 'react'
import './Listing.css'

const Listing = () => {
  return (
    <div className='listingContainer'>

        <div className="nav">
             <div className="log">
                <img src="" alt="" />
             </div>
             <div className="search">
                {/* Search input */}
                <input type="text" name="" id="" />
                <span>
                <i>
                   {/* red round search icon */}
                 </i>
                </span>
             </div>
             <div className="userProfile">
                {/*  User Section Componet */}
             </div>
        </div>

         <div className="miniListingInfo">

            <h3>Name / Location</h3>

            <div className="subMiniInfoBar">

                 <div className="miniInfo">
                    <span>Rating </span>
                    <span>Review </span>
                    <span>Super host </span>
                 </div>

                 <div className="interaction">

                    {/* two icons Share and Save */}

                    <span>
                        <i>
                          {/* Share icon */}
                        </i>
                        Share
                    </span>

                    <span>
                        <i>
                          {/* Save icon */}
                        </i>
                        Save
                    </span>
                 </div>
            </div>
         </div>

         <div className="listingInfo">

              <div className="Images">

                <div className="mainImage">

                    <img className='mainImageBanner' 
                    src="" alt="" 
                    />

                </div>

                <div className="subImages">
                     
                      {/* use NodeChildren to populate here */}
                      
                    <div className="subImage">
                       
                        {/* 1 */}
                        <img className='smallerImage' 
                        src="" alt="" />

                    </div>   

                    <div className="subImage">
                        
                         {/* 2 */}
                        <img className='smallerImage' 
                        src="" alt="" />
                
                    </div>

                     <div className="subImage">
                        
                          {/* 3 */} 
                        <img className='smallerImage' 
                        src="" alt="" />
                       
                    </div> 

                    <div className="subImage">
                       
                         {/* 4 */}
                         <img className='smallerImage' 
                        src="" alt="" />

                    </div>

                 </div> 

              </div>

              <div className="ListingDetails">

                <div className="details">

                    <div className="info">

                       <div className="listingName">

                          <div className="name">
                            <h3>Name . Location</h3>
                            <span>2 Geusts .</span>
                            <span>2 bedrooms .</span>
                            <span>2 baths .</span>
                            <span>2 beds .</span>
                          </div>

                          <div className="hostPhoto">

                            {/* Round Photo */}
                            <img src="" alt="" />

                            <div className="hostTagIcon">
                                <span>
                                    <i>
                                        {/* Host Tag overlayed on the profile photo */}
                                    </i>
                                </span>
                            </div>

                          </div>
                       </div>

                     <hr />
                       {/* This added on/ offered in the listing  */}
                       <div className="amendeties">

                          <div className="accomodationTypeDescription">

                            <div className="descriptiveIcon">
                                <span>
                                    <i>
                                        {/* Home Icon */}
                                    </i>
                                </span>
                            </div>

                            <div className="accomodationType">
                                <h4>Accomodation Type</h4>
                                <span>Small Description</span>
                            </div>

                          </div>

                          <div className="cleaningDescription">

                            <div className="descriptiveIcon">
                                <span>
                                    <i>
                                        {/* Cleaning Icon */}
                                    </i>
                                </span>
                            </div>

                            <div className="cleaningType">
                                <h4>Enhenced Cleaning</h4>
                                <span>Small Description of whats being done ... <a href="">Show more</a></span>
                            </div>

                          </div>

                          <div className="accomodationTypeDescription">

                            <div className="descriptiveIcon">
                                <span>
                                    <i>
                                        {/* Home Icon */}
                                    </i>
                                </span>
                            </div>

                            <div className="accomodationType">
                                <h4>Accomodation Type</h4>
                                <span>Small Description</span>
                            </div>

                          </div>

                          <div className="cleaningDescription">

                            <div className="descriptiveIcon">
                                <span>
                                    <i>
                                        {/* Cleaning Icon */}
                                    </i>
                                </span>
                            </div>

                            <div className="cleaningType">
                                <h4>Enhenced Cleaning</h4>
                                <span>Small Description of whats being done ... <a href="">Show more</a></span>
                            </div>

                          </div>

                       </div>

                     <hr />

                       <div className="listingTextDescription">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Voluptatibus tempora et consequuntur cupiditate, 
                            aperiam in ad deleniti fuga harum ratione iste 
                            praesentium architecto earum maxime officiis? 
                            Dignissimos ipsam expedita nam.
                        </p>
                        <span>...</span>

                         <a href="">Show More</a>

                       </div>

                     <hr />

                    </div>

                    <div className="reserve">

                        <div className="reserveCard">

                            <div className="priceAndReview">

                                <div className="price">
                                    <span>price </span>
                                    <span>/night</span>
                                </div>

                                <div className="ratingAndReview">
                                    <span>rating</span>
                                    <span>Review</span>
                                </div>

                            </div>

                            <div className="datesAndGusts">

                                <div className="chooseDates">
                                    <div className="checkingInDate"></div>
                                    <div className="checkingOutDate"></div>
                                </div>

                                <div className="geusts">
                                    {/* drop down for list of guests
                                        udults and children */}
                                </div>

                            </div>

                            <div className="reserveButton">
                                <button>Reserve</button>
                            </div>

                            <div className="randomText">
                                <span>You Wont be Charged yet</span>
                            </div>

                            <div className="addedPrice">

                                <div className="pricePerDay">

                                    <div className="dayXprice">
                                    <span>Day x Price</span>
                                    </div>
                                
                                <div className="total">
                                    <span>total</span>
                                </div>

                                </div>

                                <div className="weeklyDiscount">

                                    <div className="weekXdiscount">
                                    <span>Weekly Discount</span>
                                    </div>
                                
                                <div className="total">
                                    <span>total</span>
                                </div>

                                </div>

                                <div className="cleaningFee">

                                    <div className="cleaningXfee">
                                    <span>Cleaning Fee</span>
                                    </div>
                                
                                <div className="total">
                                    <span>total</span>
                                </div>

                                </div>

                                <div className="serviceFee">

                                    <div className="serviceXfee">
                                    <span>Service Fee</span>
                                    </div>
                                
                                <div className="total">
                                    <span>total</span>
                                </div>

                                </div>

                                <div className="ocupancyTaxAndFees">

                                    <div className="otf">
                                    <span>Occupancy Tax and fee</span>
                                    </div>
                                
                                <div className="total">
                                    <span>total</span>
                                </div>

                                </div>
                            
                            </div>

                            <hr />

                            <div className="grandTotal">

                                    <div className="grand">
                                    <span>Grand Total</span>
                                    </div>
                                
                                <div className="total">
                                    <span>total</span>
                                </div>

                            </div>

                        </div>

                        <div className="reportListing">
                        <span>Report Listing</span>
                        </div>

                    </div>
                     
                     
                </div>
                
               <div className="extra">

                <div className="bedroomShowcase">
                    <h3>Where you'll Sleep</h3>

                    <div className="bedroomPhotos">
                       <img className='bedroomImage' 
                       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP-QTWqAz8r0h0mGzlY4Nil-tQczJKIpayDw&s" alt="" />
                    </div>

                    <div className="bedroomDetails">
                        <h4>2 Bedrooms</h4>
                         <span>2 Beds Each</span>
                    </div>

                    <hr />
                </div>


                <div className="offersAvailable">
                    <h3>What this Place Offers</h3>
                     
                      <div className="offers">

                        <div className="offerList">

                           <div className="offer">
                             
                           <div className="offerIcon">
                                <span>
                                    <i>
                                        {/* Offer icon */}
                                    </i>
                                </span>
                            </div>
                            <div className="offerName">
                                <h5>Wi-Fi</h5>
                            </div>
                           </div>

                           <div className="offer">
                             
                             <div className="offerIcon">
                                  <span>
                                      <i>
                                          {/* Offer icon */}
                                      </i>
                                  </span>
                              </div>
                              <div className="offerName">
                                  <h5>Wi-Fi</h5>
                              </div>
                            </div>

                            <div className="offer">
                             
                             <div className="offerIcon">
                                  <span>
                                      <i>
                                          {/* Offer icon */}
                                      </i>
                                  </span>
                              </div>
                              <div className="offerName">
                                  <h5>Wi-Fi</h5>
                              </div>
                            </div>

                            <div className="offer">
                             
                             <div className="offerIcon">
                                  <span>
                                      <i>
                                          {/* Offer icon */}
                                      </i>
                                  </span>
                              </div>
                              <div className="offerName">
                                  <h5>Wi-Fi</h5>
                              </div>
                             </div>

                             <div className="offer">
                             
                             <div className="offerIcon">
                                  <span>
                                      <i>
                                          {/* Offer icon */}
                                      </i>
                                  </span>
                              </div>
                              <div className="offerName">
                                  <h5>Wi-Fi</h5>
                              </div>
                             </div>

                        </div>


                        <div className="offerList">

                           <div className="offer">
                             
                           <div className="offerIcon">
                                <span>
                                    <i>
                                        {/* Offer icon */}
                                    </i>
                                </span>
                            </div>
                            <div className="offerName">
                                <h5>Wi-Fi</h5>
                            </div>
                           </div>

                           <div className="offer">
                             
                             <div className="offerIcon">
                                  <span>
                                      <i>
                                          {/* Offer icon */}
                                      </i>
                                  </span>
                              </div>
                              <div className="offerName">
                                  <h5>Wi-Fi</h5>
                              </div>
                            </div>

                            <div className="offer">
                             
                             <div className="offerIcon">
                                  <span>
                                      <i>
                                          {/* Offer icon */}
                                      </i>
                                  </span>
                              </div>
                              <div className="offerName">
                                  <h5>Wi-Fi</h5>
                              </div>
                            </div>

                            <div className="offer">
                             
                             <div className="offerIcon">
                                  <span>
                                      <i>
                                          {/* Offer icon */}
                                      </i>
                                  </span>
                              </div>
                              <div className="offerName">
                                  <h5>Wi-Fi</h5>
                              </div>
                             </div>

                             <div className="offer">
                             
                             <div className="offerIcon">
                                  <span>
                                      <i>
                                          {/* Offer icon */}
                                      </i>
                                  </span>
                              </div>
                              <div className="offerName">
                                  <h5>Wi-Fi</h5>
                              </div>
                             </div>

                        </div>
                        
                      </div>

                      <div className="offerButton">
                        <button>Show all 37 Amenities</button>
                      </div>

                    <hr />
                </div>

             
             
                <div className="dates">
                    <h5>Calenders here</h5>

                    
                </div>

               </div>

               <hr />
              </div>

         </div>

         <div className="reviews">
                <h5>Reviews here</h5>

                <div className="slideGraphs">

                    <div className="graphlist">
                        
                    <div className="graph">
                    <h6>communication</h6>
                    <span>
                        <i>
                           {/* slide Graph */}
                        </i>
                        rating
                    </span>
                    </div>

                    <div className="graph">
                    <h6>communication</h6>
                    <span>
                        <i>
                           {/* slide Graph */}
                        </i>
                        rating
                    </span>
                    </div>

                    <div className="graph">
                    <h6>communication</h6>
                    <span>
                        <i>
                           {/* slide Graph */}
                        </i>
                        rating
                    </span>
                    </div>

                  
                    </div>

                    <div className="graphlist">
                        
                        <div className="graph">
                        <h6>communication</h6>
                        <span>
                            <i>
                               {/* slide Graph */}
                            </i>
                            rating
                        </span>
                        </div>
    
                        <div className="graph">
                        <h6>communication</h6>
                        <span>
                            <i>
                               {/* slide Graph */}
                            </i>
                            rating
                        </span>
                        </div>
    
                        <div className="graph">
                        <h6>communication</h6>
                        <span>
                            <i>
                               {/* slide Graph */}
                            </i>
                            rating
                        </span>
                        </div>
    
                      
                        </div>

                </div>
            
             <div className="reviewComments">

                <div className="commentsList">

                    <div className="comments">

                          <div className="user">
                              <div className="userPhoto">
                                <img src="" alt="" />
                              </div>

                              <div className="userDetails">
                                <h3>User Name</h3>
                                <span>Date of Comment</span>
                              </div>
                          </div>

                          <div className="commentedText">
                            <p> This Here is an actual comment</p>
                          </div>
                    </div>

                    <div className="comments">
                        
                        <div className="user">
                            <div className="userPhoto">
                              <img src="" alt="" />
                            </div>

                            <div className="userDetails">
                              <h3>User Name</h3>
                              <span>Date of Comment</span>
                            </div>
                        </div>

                        <div className="commentedText">
                          <p> This Here is an actual comment</p>
                        </div>
                   </div>

                   <div className="comments">
                        
                        <div className="user">
                            <div className="userPhoto">
                              <img src="" alt="" />
                            </div>

                            <div className="userDetails">
                              <h3>User Name</h3>
                              <span>Date of Comment</span>
                            </div>
                        </div>

                        <div className="commentedText">
                          <p> This Here is an actual comment</p>
                        </div>
                  </div>

                </div>

                <div className="commentsList">

                    <div className="comments">

                          <div className="user">
                              <div className="userPhoto">
                                <img src="" alt="" />
                              </div>

                              <div className="userDetails">
                                <h3>User Name</h3>
                                <span>Date of Comment</span>
                              </div>
                          </div>

                          <div className="commentedText">
                            <p> This Here is an actual comment</p>
                          </div>
                    </div>

                    <div className="comments">
                        
                        <div className="user">
                            <div className="userPhoto">
                              <img src="" alt="" />
                            </div>

                            <div className="userDetails">
                              <h3>User Name</h3>
                              <span>Date of Comment</span>
                            </div>
                        </div>

                        <div className="commentedText">
                          <p> This Here is an actual comment</p>
                        </div>
                   </div>

                   <div className="comments">
                        
                        <div className="user">
                            <div className="userPhoto">
                              <img src="" alt="" />
                            </div>

                            <div className="userDetails">
                              <h3>User Name</h3>
                              <span>Date of Comment</span>
                            </div>
                        </div>

                        <div className="commentedText">
                          <p> This Here is an actual comment</p>
                        </div>
                  </div>

                </div>

             </div>
             
             <div className="reviewButton">
                <button>Show all 27 reviews</button>
             </div>
           <hr />
         </div>

       <hr />
         <div className="hostDetails">
            <h5>host Details here</h5>

            <div className="profile">

                          <div className="hostedByUser">
                              <div className="userPhoto">
                                <img src="" alt="" />
                              </div>

                              <div className="userDetails">
                                <h3>User Name</h3>
                                <span>Date of Comment</span>
                              </div>
                          </div>
            </div>

            <div className="userTags">

                <span>
                    <i>
                      {/* icon */}
                    </i>
                     12 Reviews 
                </span>

                <span>
                    <i>
                      {/* icon */}
                    </i>
                     identity verified 
                </span>

                <span>
                    <i>
                      {/* icon */}
                    </i>
                     Superhost 
                </span>

            </div>

            <div className="userDescriptiveDetails">
                <h4>Jenny Is a Superhost</h4>
                <p>voluptate magna</p>
                <p>Lorem, i elit. Ea temporibus dio unde commodi blanditiis 
                    suscipit veniam est quas dolorem  assumenda, m hic. Magni.</p>
                <p>quas dolorem  assumenda, m hic. Magni</p>
            </div>

             <div className="contactUserButton">
                <button>Contact User</button>
             </div>

             <div className="extraText">
                <span>Lorem, ipsum dolor sit amet consectetur 
                    adipisicing elit. Iure maxime accusantium eaque, 
                    </span>
             </div>
         </div>

         <hr />

         <div className="thingsToKnow">
            <h3>Things to Know</h3>
            <div className="thingsToKnowInfo">

                <div className="houseRules">

                <div className="offer">
                             
                             <div className="offerIcon">
                                  <span>
                                      <i>
                                          {/* Offer icon */}
                                      </i>
                                  </span>
                              </div>
                              <div className="offerName">
                                  <h5>Wi-Fi</h5>
                              </div>
                </div>

                <div className="offer">
                             
                             <div className="offerIcon">
                                  <span>
                                      <i>
                                          {/* Offer icon */}
                                      </i>
                                  </span>
                              </div>
                              <div className="offerName">
                                  <h5>Wi-Fi</h5>
                              </div>
                </div>

                </div>

                <div className="healthAndSafety">

                <div className="offer">
                             
                             <div className="offerIcon">
                                  <span>
                                      <i>
                                          {/* Offer icon */}
                                      </i>
                                  </span>
                              </div>
                              <div className="offerName">
                                  <h5>Wi-Fi</h5>
                              </div>
                </div>

                <div className="offer">
                             
                             <div className="offerIcon">
                                  <span>
                                      <i>
                                          {/* Offer icon */}
                                      </i>
                                  </span>
                              </div>
                              <div className="offerName">
                                  <h5>Wi-Fi</h5>
                              </div>
                </div>

                <a href="">Show more </a>

                </div>

                <div className="cancellation">

                <div className="offer">
                             
                             <div className="offerIcon">
                                  <span>
                                      <i>
                                          {/* Offer icon */}
                                      </i>
                                  </span>
                              </div>
                              <div className="offerName">
                                  <h5>Wi-Fi</h5>
                              </div>
                </div>

                <a href="">Show more </a>

                </div>

            </div>
         </div>

         <div className="explore">

            <h4>Explore Options here</h4>

           <div className="options">

            <div className="optionList">

                <div className="option">
                    <p>Paris</p>
                </div>

                <div className="option">
                    <p>Dijon</p>
                </div>

                <div className="option">
                    <p>Amiens</p>
                </div>

            </div>

             <div className="optionList">

                <div className="option">
                    <p>Paris</p>
                </div>

                <div className="option">
                    <p>Dijon</p>
                </div>

                <div className="option">
                    <p>Amiens</p>
                </div>

            </div>

            <div className="optionList">

                <div className="option">
                    <p>Paris</p>
                </div>

                <div className="option">
                    <p>Dijon</p>
                </div>

                <div className="option">
                    <p>Amiens</p>
                </div>

            </div>

             <div className="optionList">

                <div className="option">
                    <p>Paris</p>
                </div>

                <div className="option">
                    <p>Dijon</p>
                </div>

                <div className="option">
                    <p>Amiens</p>
                </div>

            </div>

           </div>

           <h5>Unique stays in AirBnB</h5>

           <div className="options">

            <div className="optionList">

                <div className="option">
                    <p>Paris</p>
                </div>

                <div className="option">
                    <p>Dijon</p>
                </div>

              

            </div>

             <div className="optionList">

                <div className="option">
                    <p>Paris</p>
                </div>

                <div className="option">
                    <p>Dijon</p>
                </div>

                
            </div>

            <div className="optionList">

                <div className="option">
                    <p>Paris</p>
                </div>

                <div className="option">
                    <p>Dijon</p>
                </div>

               

            </div>

             <div className="optionList">

                <div className="option">
                    <p>Paris</p>
                </div>

                <div className="option">
                    <p>Dijon</p>
                </div>

                

            </div>

           </div>

           <div className="links">
            <span>Airbnb .</span>
            <span>Europe .</span>
            <span>France .</span>
            <span>Bordeaux .</span>
          </div>

         </div>

         <div className="footer">
            {/* Add Footer Componet */}
         </div>

    </div>
  )
}

export default Listing