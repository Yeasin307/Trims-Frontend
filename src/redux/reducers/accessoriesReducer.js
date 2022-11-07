import { GET_ACCESSORIES_SUCCESS } from "../actions/accessoriesActions"

const initialState = {
    accessories: []
}

const accessoriesReducer = (state = initialState, action) => {

    if (action.type === GET_ACCESSORIES_SUCCESS) {
        return {
            ...state,
            accessories: action.payload
        }
    }

    return state;
}
export default accessoriesReducer;