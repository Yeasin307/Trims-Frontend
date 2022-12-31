import axios from "axios";

export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";

export const getProductsByCategory = (id) => async (dispatch) => {
  try {
    if (id) {
      const res = await axios.get(`${process.env.REACT_APP_SERVER_API}/products/category/${id}`);
      dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: res?.data });
    }
    else {
      const res = await axios.get(`${process.env.REACT_APP_SERVER_API}/products/active`);
      dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: res?.data });
    }
  }
  catch (error) {
    console.log(error.message);
  }
}