import axios from "axios";

export const FETCH_SLIDER_SUCCESS = "FETCH_SLIDER_SUCCESS";
export const FETCH_ABOUT_SUCCESS = "FETCH_ABOUT_SUCCESS";
export const FETCH_VISION_SUCCESS = "FETCH_VISION_SUCCESS";
export const FETCH_MISSION_SUCCESS = "FETCH_MISSION_SUCCESS";
export const FETCH_GOAL_SUCCESS = "FETCH_GOAL_SUCCESS";
export const FETCH_CLIENT_SUCCESS = "FETCH_CLIENT_SUCCESS";
export const FETCH_GALLERY_SUCCESS = "FETCH_GALLERY_SUCCESS";
export const FETCH_MANAGEMENT_SUCCESS = "FETCH_MANAGEMENT_SUCCESS";
export const FETCH_MESSAGE_SUCCESS = "FETCH_MESSAGE_SUCCESS";
export const FETCH_PROFILE_SUCCESS = "FETCH_PROFILE_SUCCESS";

export const getSlider = () => async (dispatch) => {
    try {
        const res = await axios.get(`/components/slider`);

        dispatch({ type: FETCH_SLIDER_SUCCESS, payload: res.data });
    }
    catch (error) {
        console.log(error.message);
    }
}

export const getAbout = () => async (dispatch) => {
    try {
        const res = await axios.get(`/components/about`);

        dispatch({ type: FETCH_ABOUT_SUCCESS, payload: res.data });
    }
    catch (error) {
        console.log(error.message);
    }
}

export const getVision = () => async (dispatch) => {
    try {
        const res = await axios.get(`/components/vision`);

        dispatch({ type: FETCH_VISION_SUCCESS, payload: res.data });
    }
    catch (error) {
        console.log(error.message);
    }
}

export const getMission = () => async (dispatch) => {
    try {
        const res = await axios.get(`/components/mission`);

        dispatch({ type: FETCH_MISSION_SUCCESS, payload: res.data });
    }
    catch (error) {
        console.log(error.message);
    }
}

export const getGoal = () => async (dispatch) => {
    try {
        const res = await axios.get(`/components/goal`);

        dispatch({ type: FETCH_GOAL_SUCCESS, payload: res.data });
    }
    catch (error) {
        console.log(error.message);
    }
}

export const getClient = () => async (dispatch) => {
    try {
        const res = await axios.get(`/components/client`);

        dispatch({ type: FETCH_CLIENT_SUCCESS, payload: res.data });
    }
    catch (error) {
        console.log(error.message);
    }
}

export const getGallery = () => async (dispatch) => {
    try {
        const res = await axios.get(`/components/gallery`);

        dispatch({ type: FETCH_GALLERY_SUCCESS, payload: res.data });
    }
    catch (error) {
        console.log(error.message);
    }
}

export const getManagement = () => async (dispatch) => {
    try {
        const res = await axios.get(`/components/management`);

        dispatch({ type: FETCH_MANAGEMENT_SUCCESS, payload: res.data });
    }
    catch (error) {
        console.log(error.message);
    }
}

export const getMessage = () => async (dispatch) => {
    try {
        const res = await axios.get(`/components/message`);

        dispatch({ type: FETCH_MESSAGE_SUCCESS, payload: res.data });
    }
    catch (error) {
        console.log(error.message);
    }
}

export const getProfile = () => async (dispatch) => {
    try {
        const res = await axios.get(`/components/profile`);

        dispatch({ type: FETCH_PROFILE_SUCCESS, payload: res.data });
    }
    catch (error) {
        console.log(error.message);
    }
}
