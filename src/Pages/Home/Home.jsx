import React from 'react'
import './Home.css'


const Home = () => {
  return (
    <div className='home'>

       <div className="nav">

        <div className="logo"></div>
        <div className="navLinks"></div>
        <div className="userProfile"></div>

       </div>

       <div className="locationFilter">
            <div>
                {/* Location filter and Date selector Components her */}
            </div>
       </div>

       <div className="banner">

         <img src="https://www.nerdwallet.com/assets/blog/wp-content/uploads/2022/02/Airbnb-Stay-Joshua-Tree-1920x1152.jpg" 
         alt="" />
         
         <div className="bannerText">
            <h1>Not Sure Where to Go? Perfect</h1>
            <button>i'm flexible</button>
         </div>

       </div>
       
       <div className="extraContent">

           <div className="inspiration">
            <h2>Inspiration for your next trip</h2>
            <div className="inspirationCards">
             {/* Home Card Component here */}
            </div>
           </div>

           <div className="discover">
             <h1>Discover Airbnb Experiences</h1>

             <div className="banners">

                <div className="photo1">
                    <img src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-3133339-media_library/original/9b251ae4-3e47-48d3-b78d-080c5d9388fc.jpeg?im_w=720" 
                    alt="" />
                    <div className="photo1Text">
                        <h1>Things to do on your trip</h1>
                        <button></button>
                    </div>
                </div>

                <div className="photo2">
                    <img src="https://i.insider.com/5ddd23e0695b58490a314289?width=750&format=jpeg&auto=webp" 
                    alt="" />
                    <div className="photo2Text">
                        <h1>Things to do at home</h1>
                        <button></button>
                    </div>
                </div>
             </div>
           </div>

           <div className="shop">

            <div className="shopText">
                <h1>Shop Airbnb Gift Cards</h1>
                <button>Learn More</button>
            </div>

            <div className="shopImage">
                <img src="https://ml5u6r2vr7de.i.optimole.com/cb:aeZg.3180f/w:1600/h:1025/q:mauto/f:avif/https://fantasticostudio.co/wp-content/uploads/2022/09/airbnb_laura_niubo_giftcards.png" 
                alt="" />
            </div>
           </div>

           <div className="questionsBanner">
            <img src="https://media.cntraveler.com/photos/5d112d50c4d7bd806dbc00a4/16:9/w_1280,c_limit/airbnb%20luxe.jpg" 
            alt="" />

            <div className="questionsText">
                <h1>Question About Hosting</h1>
                <button>Ask a Question</button>
            </div>
           </div>
           
           <div className="inspirationForFuture">

                <h2>Inspiration For your Future Getaways</h2>

                <div className="links">
                    <span>link1</span>
                    <span>link2</span>
                    <span>link3</span>
                    <span>link4</span>
                    <span>link5</span>
                    <span>link6</span>
                </div>

                <div className="suggestions">

                    <div className="sugestedlocations">
                        <h2>France</h2>
                        <span>italy</span>
                    </div>

                    <div className="sugestedlocations">
                        <h2>France</h2>
                        <span>italy</span>
                    </div>

                    <div className="sugestedlocations">
                        <h2>France</h2>
                        <span>italy</span>
                    </div>

                    <div className="sugestedlocations">
                        <h2>France</h2>
                        <span>italy</span>
                    </div>

                </div>

                <div className="suggestions">
                    
                    <div className="sugestedlocations">
                        <h2>France</h2>
                        <span>italy</span>
                    </div>

                    <div className="sugestedlocations">
                        <h2>France</h2>
                        <span>italy</span>
                    </div>

                    <div className="sugestedlocations">
                        <h2>France</h2>
                        <span>italy</span>
                    </div>

                    <div className="sugestedlocations">
                        <h2>France</h2>
                        <span>italy</span>
                    </div>

                </div>

                <div className="suggestions">
                    
                    <div className="sugestedlocations">
                        <h2>France</h2>
                        <span>italy</span>
                    </div>

                    <div className="sugestedlocations">
                        <h2>France</h2>
                        <span>italy</span>
                    </div>

                    <div className="sugestedlocations">
                        <h2>France</h2>
                        <span>italy</span>
                    </div>

                    <div className="sugestedlocations">
                        <h2>France</h2>
                        <span>italy</span>
                    </div>

                </div>

           </div>

           <div className="footer">
            {/* footer components here */}
           </div>
       </div>

    </div>
  )
}

export default Home