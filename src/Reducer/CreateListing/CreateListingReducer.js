export const CreateListing = (state, action) => {
    switch (action.type) {
      
      case "CHANGE_INPUT":
        return {
          ...state,
          basket: [...state.basket, action.payload]
        };
  
      case "LISTING_CREATED_SUCCESS":
        return {
          ...state,
          basket: []
        };

      case "ADD_AMENITIES":
        const index = state.basket.findIndex(
          (basketItem) => basketItem.id === action.payload.id
        );
  
        let newBasket = [...state.basket];
  
        if (index >= 0) {
          newBasket.splice(index, 1);
        } else {
          console.warn(`cannot remove 
                    (id: ${action.payload.id} 
                      as it is 
                      not in the basket)`);
        }
  
        return {
          ...state,
          basket: newBasket
        };
  
      case "REMOVE_AMENITIES":

        return {
          ...state,
          user: action.payload
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
  