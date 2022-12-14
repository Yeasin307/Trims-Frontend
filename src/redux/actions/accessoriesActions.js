import axios from "axios";

export const GET_ACCESSORIES_SUCCESS = "GET_ACCESSORIES_SUCCESS";

export const getAllAccessories = () => async (dispatch) => {

    try {
        const res = await axios.get(`${process.env.REACT_APP_API}/categories/active`);

        const activeAccessories = await res?.data?.filter(data => data.Parent === null);

        const accessoriesDetails = [];

        for (const singleAccessories of activeAccessories) {
            const data = {
                id: singleAccessories?.id,
                name: singleAccessories?.name,
                child: singleAccessories?.Child
            }
            accessoriesDetails.push(data);
        }

        dispatch({ type: GET_ACCESSORIES_SUCCESS, payload: accessoriesDetails });
    }
    catch (error) {
        console.log(error.message);
    }
}