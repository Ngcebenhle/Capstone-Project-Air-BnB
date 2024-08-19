import { createContext, useState } from "react";
import React from "react";
import { Airbnb } from "../Reducer/CreateListing/CreateListingReducer";

export const LoginContext = createContext();

const LogInContext = (props) => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");
  const [user, setUser] = useState("");
  const [dates, setDates] = useState({
    checkInDate:"",
    checkOutDate:""
  });


 
   //   Log In Function
  const  LogIn = (username ,password) => {

      // auth response if true set isLogged In true
      // save JWT on local storage

      //  const response = await instance({
      //   method: "post",
      //   url: "",
      //   body:{
      //       username:username,
      //       password:password
      //   }
      //   });

      // setToken(response.token)
      // setUser(response.username)
      setIsLoggedIn(true);  
   }

   //   Log Out Function
   const LogOut = () => {

      // delete JWT from local storage
      setIsLoggedIn(false);
      setToken("");
      setUser("");
      
   }

  return (
    <LoginContext.Provider value={{
      isLoggedIn,
      token,
      user,
      dates,
      setDates,
      LogIn,
      LogOut}}>
      {props.children}
      </LoginContext.Provider>
  );
};

export default LogInContext;
