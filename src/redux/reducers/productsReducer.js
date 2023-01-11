import { FETCH_INITIAL_PRODUCTS_SUCCESS } from "../actions/productsActions";
import { FETCH_PRODUCTS_BY_CATEGORY_SUCCESS } from "../actions/productsActions";

const initState = {
  initialProducts: [],
  products: []
};

const productsReducer = (state = initState, action) => {
  if (action.type === FETCH_INITIAL_PRODUCTS_SUCCESS) {
    return {
      ...state,
      initialProducts: action.payload
    };
  }
  else if (action.type === FETCH_PRODUCTS_BY_CATEGORY_SUCCESS) {
    return {
      ...state,
      products: action.payload
    };
  }

  return state;
};

export default productsReducer;
