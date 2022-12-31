import { FETCH_PRODUCT_SUCCESS } from "../actions/productActions";

const initState = {
    product: {}
};

const productReducer = (state = initState, action) => {
    if (action.type === FETCH_PRODUCT_SUCCESS) {
        return {
            ...state,
            product: action.payload
        };
    }

    return state;
};

export default productReducer;
