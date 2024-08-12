import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='container'>

        <div className="links">

            <div className="support">
                <h3>Support</h3>

                <div className="suportlinks">
                    <a href="">Help Center</a>
                    <a href="">Safety Information</a>
                    <a href="">Cancellation Options</a>
                    <a href="">Our COVID-19 Response</a>
                    <a href="">Disability Support</a>
                    <a href="">Report Neighborhood Concern</a>
                </div>

            </div>

            <div className="community">
            <h3>Community</h3>

            <div className="communitylinks">
                    <a href="">Airbnb.org Disaster Relief Housing</a>
                    <a href="">Support: Afghan Refugees</a>
                    <a href="">Celebrating Diversity & Belonging</a>
                    <a href="">Combating Discrimination</a>
                </div>

            </div>

            <div className="hosting">
            <h3>Hosting</h3>

            <div className="hostinglinks">
                    <a href="">Try Hosting</a>
                    <a href="">Aircover: Protection for Hosts</a>
                    <a href="">Exlpore Hosting Resources</a>
                    <a href="">Visit Our Community Forum</a>
                    <a href="">How to Host Responsibly</a>
                </div>
            </div>

            <div className="about">
            <h3>About</h3>

            <div className="aboutlinks">
                    <a href="">Newsroom</a>
                    <a href="">Learn About New Features</a>
                    <a href="">Letter From Our Founders</a>
                    <a href="">Careere</a>
                    <a href="">Investors</a>
                    <a href="">Airbnb Luxe</a>
                </div>
            </div>
            
        </div>

        <div className="copyright">
          
            <div className="copywritelinks">
                  <span>&copy; 2020 Airbnb, inc .</span>
                  <span>Privacy .</span>
                  <span>Terms .</span>
                  <span>Sitemap .</span>
            </div>

            <div className="tabs">
               <span>
                <i>
                    {/* Language icon */}
                </i>
                <a href="">English</a>
                </span>

                <span>
                <i>
                    {/* Curencye icon */}
                </i>
                <a href="">USA</a>
                </span>

                <span>
                    <a href="">
                    <i>
                        {/* facebook logo icon */}
                    </i>
                    </a>
                </span>

                <span>
                    <a href="">
                    <i>
                        {/* twitter logo icon */}
                    </i>
                    </a>
                </span>

                <span>
                    <a href="">
                    <i>
                        {/* instagram logo icon */}
                    </i>
                    </a>
                </span>
            </div>

        </div>
    </div>
  )
}

export default Footer