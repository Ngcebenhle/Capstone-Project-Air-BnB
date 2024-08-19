import { createContext, useState, React } from "react";
import { CreateListing } from "../Reducer/CreateListing/CreateListingReducer";

export const CreateListingContext = createContext();

import React from 'react'

const CreateListingContext = () => {

  const initialState = { 
    images:[],

   };
  const [state, dispatch] = useReducer(CreateListing, initialState);

    // All create listing methods.
    

  return (
    <CreateListingContext.Provider 
    value={{
        // isLoggedIn,
        // user,
        // LogIn,
        // LogOut
        }}>
        {props.children}
    </CreateListingContext.Provider>
  )
}

export default CreateListingContext