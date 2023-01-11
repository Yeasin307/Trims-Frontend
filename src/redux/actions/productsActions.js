import axios from "axios";

export const FETCH_INITIAL_PRODUCTS_SUCCESS = "FETCH_INITIAL_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_BY_CATEGORY_SUCCESS = "FETCH_PRODUCTS_BY_CATEGORY_SUCCESS";

export const getInitialProducts = () => async (dispatch) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_SERVER_API}/products/active`);
    dispatch({ type: FETCH_INITIAL_PRODUCTS_SUCCESS, payload: res?.data });
  }
  catch (error) {
    console.log(error.message);
  }
}

export const getProductsByCategory = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_SERVER_API}/products/category/${id}`);
    dispatch({ type: FETCH_PRODUCTS_BY_CATEGORY_SUCCESS, payload: res?.data });
  }
  catch (error) {
    console.log(error.message);
  }
}