import { FETCH_BANNER_SUCCESS } from "../actions/componentActions";
import { FETCH_ABOUT_US_SUCCESS } from "../actions/componentActions";
import { FETCH_VISION_SUCCESS } from "../actions/componentActions";
import { FETCH_MISSION_SUCCESS } from "../actions/componentActions";
import { FETCH_GOAL_SUCCESS } from "../actions/componentActions";
import { FETCH_CLIENT_SUCCESS } from "../actions/componentActions";

const initState = {
    banner: [],
    about: {},
    vision: {},
    mission: {},
    goal: {},
    client: {}
};

const componentReducer = (state = initState, action) => {
    if (action.type === FETCH_BANNER_SUCCESS) {
        return {
            ...state,
            banner: action.payload
        };
    }
    else if (action.type === FETCH_ABOUT_US_SUCCESS) {
        return {
            ...state,
            about: action.payload
        };
    }
    else if (action.type === FETCH_VISION_SUCCESS) {
        return {
            ...state,
            vision: action.payload
        };
    }
    else if (action.type === FETCH_MISSION_SUCCESS) {
        return {
            ...state,
            mission: action.payload
        };
    }
    else if (action.type === FETCH_GOAL_SUCCESS) {
        return {
            ...state,
            goal: action.payload
        };
    }
    else if (action.type === FETCH_CLIENT_SUCCESS) {
        return {
            ...state,
            client: action.payload
        };
    }

    return state;
};

export default componentReducer;