import axios from "axios";

export const GET_ACCESSORIES_SUCCESS = "GET_ACCESSORIES_SUCCESS";

export const getAllAccessories = () => async (dispatch) => {

    try {
        const res = await axios.get(`/categories/active`);

        dispatch({ type: GET_ACCESSORIES_SUCCESS, payload: res.data });
    }
    catch (error) {
        console.log(error.message);
    }
}