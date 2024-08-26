import axios from "axios";
import {  React,createContext, useState } from "react";
import Reservation from '../Reducer/Reservation/ReservationReducer'

export const ReservationProvider =  createContext();



const ReservationContext = (props) => {

    const INITIALSTATE = {
         
        listingId:null,
        dates:{
            checkInDate:null,
            checkOutDate:null
        },
         guest:{
            adults:null,
            children:null
         }
    }

    const [state, dispatch] = useReducer(CreateListing, INITIALSTATE);

       const dates = () => {
        // change dates here
        dispatch({type: "CHANGE_DATES",
          payload:{name: e.target.name, value: e.target.value}
        })
       }   
       
      const increaseGuest = () => {
        dispatch({type: "INCREASE_NUMBER_OF_GUEST",
          payload:{name: e.target.name, value: e.target.value}
        })
      }

      const decreaseGuest = () => {
        dispatch({type:"DECREASE_NUMBER_OF_GUEST",
          payload:{name: e.target.name, value: e.target.value}
        })
      }

      const makeReservation = () => {

        // set listing id to state then send the state

        axios.post('')
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
         console.log(error);
        });

        //  const response = await instance({
            //   method: "post",
            //   url: "",
            //   body:{
            //       username:username,
            //       password:password
            //   }
            //   });
      }
  return (
    <ReservationProvider.Provider value={{
      makeReservation,
      dates,
      increaseGuest,
      decreaseGuest
    }}>
        {props.children}
    </ReservationProvider.Provider>
  )
}

export default ReservationContext