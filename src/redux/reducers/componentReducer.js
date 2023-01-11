import { FETCH_BANNER_SUCCESS } from "../actions/componentActions";

const initState = {
    banner: [],
};

const componentReducer = (state = initState, action) => {
    if (action.type === FETCH_BANNER_SUCCESS) {
        return {
            ...state,
            banner: action.payload
        };
    }

    return state;
};

export default componentReducer;