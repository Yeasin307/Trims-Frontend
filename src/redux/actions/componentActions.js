import axios from "axios";

export const FETCH_BANNER_SUCCESS = "FETCH_BANNER_SUCCESS";

export const getComponent = () => async (dispatch) => {
    try {
        const res = await axios.get(`${process.env.REACT_APP_SERVER_API}/components/active`);

        dispatch({ type: FETCH_BANNER_SUCCESS, payload: res.data });
    }
    catch (error) {
        console.log(error.message);
    }
}
