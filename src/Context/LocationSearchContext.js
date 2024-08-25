import { React, createContext, useState, useEffect } from "react";
import axios from "axios";

export const LocationSearch = createContext();

/////////////////////////////////////////////////////


const LocationSearchContext = (props) => {
   
    const [location, setLocation] = useState() // List of all available Location 
    const [selectedLocation, setSelectedLocation] = useState()


    
  return (
    <LocationSearch.Provider value={{

    }}>
        {props.children}
    </LocationSearch.Provider>
  )
}

export default LocationSearchContext