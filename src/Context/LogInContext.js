import { createContext, useState } from "react";
import React from "react";
import { Airbnb } from "../Reducer/CreateListing/CreateListingReducer";

export const LoginContext = createContext();

const LogInContext = (props) => {
  
  const [isLoggedIn, setIsLoggedIn] = useState({
    loggedIn:false,
    token: null
  });
  const [user, setUser] = useState({});
  
  const [dates, setDates] = useState({});


 
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

      setIsLoggedIn(true)

       // Access ID and User Name
       setUser({username: '',UserId: '',type: ''})
   }

   //   Log Out Function
   const LogOut = () => {
      setIsLoggedIn(false)
      // delete JWT from local storage
   }

  return (
    <LoginContext.Provider value={{isLoggedIn,user,LogIn,LogOut}}>{props.children}</LoginContext.Provider>
  );
};

export default LogInContext;
