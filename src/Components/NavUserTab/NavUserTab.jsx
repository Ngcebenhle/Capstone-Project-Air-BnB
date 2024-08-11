import React from 'react'
import './NavUserTab.css'
import {ReactComponent as UserProfile} from '../../Assest/9042880_profile_circled_icon.svg'
import {ReactComponent as Menu} from '../../Assest/5402398_list_menu_options_settings_checklist_icon.svg'
import {ReactComponent as World} from '../../Assest/352479_language_icon.svg'

const NavUserTab = () => {
  return (
    <div className='user'>

        <div className="userName">
            <span>Become a host</span>
            <div className="languageIcon">
            <span>
                <i>
                  <World/>
                </i>
            </span>
            </div>
        </div>

        <div className="profileIcon">

            <div className="menuIcon">
            <span>
                <i>
                    {/* Menu Icon */}
                    <Menu/>

                </i>
             </span>
            </div>

           <div className="userProfile">
           <span>
                <i>
                    <UserProfile/>
                    {/* user profile icon */}
                </i>
             </span>

           </div>
        
           <div className="menuItems">
                 <button>Log In</button>
                 <button>Reservations</button>
           </div>

        </div>

    </div>
  ) 
}

export default NavUserTab

