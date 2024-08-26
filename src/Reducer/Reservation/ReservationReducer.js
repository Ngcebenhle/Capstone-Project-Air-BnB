const Reservation = (state, action) => {
    switch (action.type) {
      
      case "CHANGE_DATES":
        return {
          ...state,
         [action.payload.name]:action.payload.value
        };
  
      case "INCREASE_NUMBER_OF_GUEST":
        return {
          ...state,
        };

      case "DECREASE_NUMBER_OF_GUEST":
      
        return {
          ...state,
          amenities:[...state.amenities, action.payload]
        };
  
      default:
        return state;
    }
  };

  // ...state,
  // quntity:state.quntity +1

  export default Reservation