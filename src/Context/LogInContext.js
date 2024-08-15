import { createContext, useState } from "react";
import React from "react";

export const LoginContext = createContext();

const LogInContext = (props) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});


//   Log In Function
   const LogIn = () => {

      // auth response if true set isLogged In true
      // save JWT on local storage
     

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
