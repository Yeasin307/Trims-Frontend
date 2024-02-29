import axios from "axios";

export const FETCH_PRODUCT_SUCCESS = "FETCH_PRODUCT_SUCCESS";

export const getProduct = (slug) => async (dispatch) => {
    try {
        if (slug) {
            const res = await axios.get(`/products/${slug}`);
            dispatch({ type: FETCH_PRODUCT_SUCCESS, payload: res?.data });
        }
    }
    catch (error) {
        console.log(error.message);
    }
}