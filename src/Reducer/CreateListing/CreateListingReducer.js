 const CreateListing = (state, action) => {
    switch (action.type) {
      
      case "CHANGE_INPUT":
        return {
          ...state,
         [action.payload.name]:action.payload.value
        };
  
      case "LISTING_CREATED_SUCCESS":
        return {
          ...state,
        };

      case "ADD_AMENITIES":
      
        return {
          ...state,
          amenities:[...state.amenities, action.payload]
        };
  
      case "REMOVE_AMENITIES":

        return {
          ...state,
          amenities: state.amenities.filter((ameni) => ameni !== action.payload)
        };
  
        case "ADD_IMAGES":
        
        return {
          ...state,
          user: action.payload
        };

        case "REMOVE_IMAGES":
        
        return {
          ...state,
          user: action.payload
        };

      default:
        return state;
    }
  };

  // ...state,
  // quntity:state.quntity +1
  export default CreateListing