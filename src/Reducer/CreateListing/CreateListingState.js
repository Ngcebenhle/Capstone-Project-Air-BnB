import {React, createContext, useReducer} from "react";
import CreateListing from './CreateListingReducer'

export const listingDetails = createContext()


// import React from 'react'
// import { type } from "@testing-library/user-event/dist/type";

export const CreateListingState = (props) => {
  const InitialState = {
    listingName:null,
    location:null,
    description:null,
    rooms:null,
    bath:null,
    type:null,
    listingLocation:null,
    amenities:[],
    image:[]
    };
 
    const [state, dispatch] = useReducer(CreateListing, InitialState)


    const changeInput = (e) => {
      dispatch({type: "CHANGE_INPUT",
        payload:{name: e.target.name, value: e.target.value}
      })
    }
  return (
    <listingDetails.Provider value={changeInput}>
     {props.children}
    </listingDetails.Provider>
  )
}


