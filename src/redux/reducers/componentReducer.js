import { FETCH_SLIDER_SUCCESS } from "../actions/componentActions";
import { FETCH_ABOUT_SUCCESS } from "../actions/componentActions";
import { FETCH_VISION_SUCCESS } from "../actions/componentActions";
import { FETCH_MISSION_SUCCESS } from "../actions/componentActions";
import { FETCH_GOAL_SUCCESS } from "../actions/componentActions";
import { FETCH_CLIENT_SUCCESS } from "../actions/componentActions";
import { FETCH_GALLERY_SUCCESS } from "../actions/componentActions";
import { FETCH_MANAGEMENT_SUCCESS } from "../actions/componentActions";
import { FETCH_MESSAGE_SUCCESS } from "../actions/componentActions";
import { FETCH_PROFILE_SUCCESS } from "../actions/componentActions";

const initState = {
    slider: [],
    about: {},
    vision: {},
    mission: {},
    goal: {},
    client: {},
    gallery: [],
    management: [],
    message: {},
    profile: {}
};

const componentReducer = (state = initState, action) => {
    if (action.type === FETCH_SLIDER_SUCCESS) {
        return {
            ...state,
            slider: action.payload
        };
    }
    else if (action.type === FETCH_ABOUT_SUCCESS) {
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
    else if (action.type === FETCH_GALLERY_SUCCESS) {
        return {
            ...state,
            gallery: action.payload
        };
    }
    else if (action.type === FETCH_MANAGEMENT_SUCCESS) {
        return {
            ...state,
            management: action.payload
        };
    }
    else if (action.type === FETCH_MESSAGE_SUCCESS) {
        return {
            ...state,
            message: action.payload
        };
    }
    else if (action.type === FETCH_PROFILE_SUCCESS) {
        return {
            ...state,
            profile: action.payload
        };
    }

    return state;
};

export default componentReducer;