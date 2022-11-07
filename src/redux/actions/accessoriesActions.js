import axios from "axios";

export const GET_ACCESSORIES_SUCCESS = "GET_ACCESSORIES_SUCCESS";

export const getAllAccessories = () => async (dispatch) => {
    try {
        const res = await axios.get(`${process.env.REACT_APP_API}/categories/active`);
        const accessories = await res?.data?.filter(data => data.Parent === null)
        dispatch({ type: GET_ACCESSORIES_SUCCESS, payload: accessories });
    }
    catch (error) {
        console.log(error.message);
    }
}