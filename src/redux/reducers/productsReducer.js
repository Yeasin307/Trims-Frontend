import { FETCH_PRODUCTS_SUCCESS } from "../actions/productsActions";

const initState = {
  products: []
};

const productsReducer = (state = initState, action) => {
  if (action.type === FETCH_PRODUCTS_SUCCESS) {
    return {
      ...state,
      products: action.payload
    };
  }

  return state;
};

export default productsReducer;
