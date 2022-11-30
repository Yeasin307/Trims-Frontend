import axios from "axios";

export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";

export const getProductByCategory = (id) => async (dispatch) => {
  try {

    if (id) {
      const res = await axios.post(`${process.env.REACT_APP_API}/categories/category-details`, { id });

      let products = []

      if (res?.data?.Child?.length === 0) {

        const res = await axios.get(`${process.env.REACT_APP_API}/products/${id}`);
        products = [...products, ...res?.data];

      }
      else {

        for (const category of res?.data?.Child) {
          const res = await axios.get(`${process.env.REACT_APP_API}/products/${category?.id}`);
          products = [...products, ...res?.data];
        }

      }

      dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: products });
    }
    else {

      const res = await axios.get(`${process.env.REACT_APP_API}/products/active`);

      dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: res?.data });
    }

  }
  catch (error) {
    console.log(error.message);
  }
}
