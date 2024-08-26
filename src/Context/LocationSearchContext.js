import { React, createContext, useState, useEffect } from "react";
import axios from "axios";

export const LocationSearch = createContext();

/////////////////////////////////////////////////////


const LocationSearchContext = (props) => {
   
    const [location, setLocation] = useState() // List of all available Location 
    const [selectedLocation, setSelectedLocation] = useState()

      useEffect(() => {
      //Runs on every render
        

      axios.get('http://localhost:8000/')
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    });
    
  return (
    <LocationSearch.Provider value={{

    }}>
        {props.children}
    </LocationSearch.Provider>
  )
}

export default LocationSearchContext