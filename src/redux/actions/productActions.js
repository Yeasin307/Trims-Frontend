import axios from "axios";

export const FETCH_PRODUCT_SUCCESS = "FETCH_PRODUCT_SUCCESS";

export const getProduct = (id) => async (dispatch) => {
    try {
        if (id) {
            const res = await axios.get(`${process.env.REACT_APP_SERVER_API}/products/${id}`);
            dispatch({ type: FETCH_PRODUCT_SUCCESS, payload: res?.data });
        }
    }
    catch (error) {
        console.log(error.message);
    }
}