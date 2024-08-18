
import { React, useContext, useState } from "react";
import "./NavUserTab.css";
import { ReactComponent as UserProfile } from "../../Assest/9042880_profile_circled_icon.svg";
import { ReactComponent as Menu } from "../../Assest/5402398_list_menu_options_settings_checklist_icon.svg";
import { ReactComponent as World } from "../../Assest/352479_language_icon.svg";

//import context here


const NavUserTab = () => {
  // const isLoggedIn = useContext();
  const isLoggedIn = false;
  const navUserToggler = () => {
    // drop down buttons active

    // if logged in or not different buttons display.

    setButtonClicked(!buttonClicked);
  };
  const Username = "me";

  const [buttonClicked, setButtonClicked] = useState(false);

  return (
    <div className="user">
      <div className="userName">
        {/* if isLoggedIn is true change the name/text to the User name  */}
        <span>{isLoggedIn ? { Username } : "Become a host"}</span>
        <div className="languageIcon">
          <span>
            <i>
              <World />
            </i>
          </span>
        </div>
      </div>

      <div className="profileIcon" onClick={navUserToggler}>
        <div className="menuIcon">
          <span>
            <i>
              {/* Menu Icon */}
              <Menu />
            </i>
          </span>
        </div>


        <div className="userProfile">
          <span>
            <i>
              <UserProfile />
            </i>
          </span>

        </div>

        {/* I am not sure of this operator is it will work or not but 
            try it out ****************************************************
              ***********************************************************
                *******************************************************
                  ************************************************ */}
        {buttonClicked && (
          <div className="menuItems">
            {/* Conditional rendering if logged in is true 
                Change Log in to Log out  and if is false vise versa
                and do not display Reservation Button */}

            {isLoggedIn ? (
              <div className="LoggedInButtons">
                <button
                  onClick={() => {
                    // redirect to logIn Screen
                  }}
                >
                  Sign Out
                </button>

                <button
                  onClick={() => {
                    // Redirect to Reservation screen
                  }}
                >
                  Reservations
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  // redirect to logIn Screen
                }}
              >
                Log In
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default NavUserTab;
