import React from 'react'
import './Listing.css'
import NavUserTab from '../../Components/NavUserTab/NavUserTab.jsx';
import {ReactComponent as Logo} from '../../Assest/Logo_Red.svg'
import {ReactComponent as Dot} from '../../Assest/Dot.svg'
import {ReactComponent as Save} from '../../Assest/Save.svg'
import {ReactComponent as Share} from '../../Assest/Share.svg'
import {ReactComponent as Ring} from '../../Assest/Red_Ring_Superhost_Icon.svg'
import {ReactComponent as Star} from '../../Assest/Red_Start_icon.svg'
import {ReactComponent as Try} from '../../Assest/Try_this.svg'
import {ReactComponent as TryRight} from '../../Assest/Try_this_Right.svg'
import {ReactComponent as Badge} from '../../Assest/Airbnb_superhost_Badge.svg'
import {ReactComponent as Home} from '../../Assest/Home.svg'
import {ReactComponent as StarCleaning} from '../../Assest/Star_Cleaning_Icon.svg'
import {ReactComponent as SelfCheck} from '../../Assest/Self_Check_In.svg'
import {ReactComponent as Cancellation} from '../../Assest/Cancellation.svg'
import {ReactComponent as Reserve} from '../../Assest/Reserve_Section_icons.svg'
import {ReactComponent as Leaf} from '../../Assest/Leaf.svg'

import {ReactComponent as Washer} from '../../Assest/Washer.svg'
import {ReactComponent as Camera} from '../../Assest/Camera.svg'
import {ReactComponent as Kitchen} from '../../Assest/Kitchine.svg'
import {ReactComponent as Wifi} from '../../Assest/Wifi.svg'
import {ReactComponent as Fridge} from '../../Assest/Refrigiration.svg'
import {ReactComponent as Dryer} from '../../Assest/Dryer.svg'
import {ReactComponent as AirCooling} from '../../Assest/Air_Cooling.svg'
import {ReactComponent as Pets} from '../../Assest/Pets.svg'
import {ReactComponent as Bicycle} from '../../Assest/Bycicle.svg'


const Listing = () => {
  return (
    <div className='listingContainer'>

        <div className="nav">

             <div className="logo">
               <Logo/>
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
             
             <div className="navUserProfile">
                <NavUserTab/>
                
             </div>
        </div>
          
          <hr />

         <div className="miniListingInfo">

            <h3>Name / Location</h3>

            <div className="subMiniInfoBar">

                 <div className="miniInfo">
                      <Try/>
                    {/* <span className='star'><Star/></span>
                    <span className='dot'><Dot/></span>
                    <span>7 review </span>
                    <span className='dot'><Dot/></span>
                    <span><Ring/></span>
                    <span>superhost </span>
                    <span className='dot'><Dot/></span>
                    <span>Location</span> */}
                 </div>

                 <div className="interaction">
                      <TryRight/>
                    {/* two icons Share and Save */}

                    {/* <span>
                        <i>
                         <Share/>
                        </i>
                        Share
                    </span>

                    <span>
                        <i>
                         <Save/>
                        </i>
                        Save
                    </span> */}
                 </div>
            </div>
         </div>

         <div className="listingInfo">

              <div className="Images">

                <div className="mainImage">

                    <img className='mainImageBanner' 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQykx-eqg-tuN-WD7VArOCZM4ynUQ2SgxlfIw&s" alt="" 
                    />

                </div>

                <div className="subImages">
                     
                      {/* use NodeChildren to populate here */}
                      
                    <div className="subImage">
                       
                        {/* 1 */}
                        <img className='smallerImage' 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQykx-eqg-tuN-WD7VArOCZM4ynUQ2SgxlfIw&s" alt="" />

                    </div>   

                    <div className="subImage">
                        
                         {/* 2 */}
                        <img className='smallerImage' 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQykx-eqg-tuN-WD7VArOCZM4ynUQ2SgxlfIw&s" alt="" />
                
                    </div>

                     <div className="subImage">
                        
                          {/* 3 */} 
                        <img className='smallerImage' 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQykx-eqg-tuN-WD7VArOCZM4ynUQ2SgxlfIw&s" alt="" />
                       
                    </div> 

                    <div className="subImage">
                       
                         {/* 4 */}
                         <img className='smallerImage' 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQykx-eqg-tuN-WD7VArOCZM4ynUQ2SgxlfIw&s" alt="" />

                    </div>

                 </div> 

              </div>

              <div className="ListingDetails">

                <div className="details">

                    <div className="info">

                       <div className="listingName">

                          <div className="name">
                            <h3>Entire rental unit hosted by Ghazal</h3>
                            <span>2 Geusts .</span>
                            <Dot/>
                            <span>2 bedrooms  <Dot/></span>
                            <span>2 baths  <Dot/></span>
                            <span>2 beds  <Dot/></span>
                          </div>

                          <div className="hostPhoto">

                            {/* Round Photo */}
                            <img src="https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8" 
                            alt="" />

                            <div className="hostTagIcon">
                                <span>
                                    <i>
                                       <Badge/>
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
                                     <Home/>
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
                                        <StarCleaning/>
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
                                       <SelfCheck/>
                                    </i>
                                </span>
                            </div>

                            <div className="accomodationType">
                                <h4>Self Check In</h4>
                                <span>Check yourself in with Keypad</span>
                            </div>

                          </div>

                          <div className="cleaningDescription">

                            <div className="descriptiveIcon">
                                <span>
                                    <i>
                                       <Cancellation/>
                                    </i>
                                </span>
                            </div>

                            <div className="cleaningType">
                                <h4>Free Cancellation Before Feb 14</h4>
                                <span>Free, no extra charges</span>
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
                        <span>...</span><br />

                        <br /> <a href="">Show More</a>

                       </div>

                     <hr />

                    </div>

                    <div className="reserve">

                        <div className="reserveCard">

                            <div className="priceAndReview">

                                <div className="price">
                                    <span className='dollarAmount'>price </span>
                                    <span>/night</span>
                                </div>

                                <div className="ratingAndReview">
                                    <Reserve/>
                                    {/* <span>rating</span>
                                    <span>Review</span> */}
                                </div>

                            </div>

                            <div className="datesAndGusts">

                                <div className="chooseDates">
                                    <div className="checkingInDate">
                                        its me
                                    </div>
                                    <div className="checkingOutDate">its 
                                        me here
                                    </div>
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
                                      <Leaf/>
                                    </i>
                                </span>
                            </div>

                            <div className="offerName">
                                <h5>Garden View</h5>
                            </div>

                           </div>

                           <div className="offer">
                             
                             <div className="offerIcon">
                                  <span>
                                      <i>
                                       <Wifi/>
                                      </i>
                                  </span>
                              </div>
  
                              <div className="offerName">
                                  <h5>Wifi</h5>
                              </div>
  
                             </div>

                             <div className="offer">
                             
                             <div className="offerIcon">
                                  <span>
                                      <i>
                                        <Washer/>
                                      </i>
                                  </span>
                              </div>
  
                              <div className="offerName">
                                  <h5>Free washer - in building</h5>
                              </div>
  
                             </div>

                             <div className="offer">
                             
                             <div className="offerIcon">
                                  <span>
                                      <i>
                                    <AirCooling/>
                                      </i>
                                  </span>
                              </div>
  
                              <div className="offerName">
                                  <h5>Central air conditioning</h5>
                              </div>
  
                             </div>

                             <div className="offer">
                             
                             <div className="offerIcon">
                                  <span>
                                      <i>
                                        <Fridge/>
                                      </i>
                                  </span>
                              </div>
  
                              <div className="offerName">
                                  <h5>Refrigerator</h5>
                              </div>
  
                             </div>


                        </div>


                       <div className="offerList">

                           <div className="offer">
                             
                           <div className="offerIcon">
                                <span>
                                    <i>
                                     <Kitchen/>
                                    </i>
                                </span>
                            </div>

                            <div className="offerName">
                                <h5>Kitchen</h5>
                            </div>

                           </div>

                           <div className="offer">
                             
                             <div className="offerIcon">
                                  <span>
                                      <i>
                                        <Pets/>
                                      </i>
                                  </span>
                              </div>
  
                              <div className="offerName">
                                  <h5>Pets allowed</h5>
                              </div>
  
                             </div>

                             <div className="offer">
                             
                             <div className="offerIcon">
                                  <span>
                                      <i>
                                        <Dryer/>
                                      </i>
                                  </span>
                              </div>
  
                              <div className="offerName">
                                  <h5>Dryer</h5>
                              </div>
  
                             </div>

                             <div className="offer">
                             
                             <div className="offerIcon">
                                  <span>
                                      <i>
                                       <Camera/>
                                      </i>
                                  </span>
                              </div>
  
                              <div className="offerName">
                                  <h5>Security cameras on property</h5>
                              </div>
  
                             </div>

                             <div className="offer">
                             
                             <div className="offerIcon">
                                  <span>
                                      <i>
                                        <Bicycle/>
                                      </i>
                                  </span>
                              </div>
  
                              <div className="offerName">
                                  <h5>Bicycles</h5>
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