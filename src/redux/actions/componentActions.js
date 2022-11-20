import axios from "axios";

export const FETCH_BANNER_SUCCESS = "FETCH_BANNER_SUCCESS";
export const FETCH_ABOUT_US_SUCCESS = "FETCH_ABOUT_US_SUCCESS";
export const FETCH_VISION_SUCCESS = "FETCH_VISION_SUCCESS";
export const FETCH_MISSION_SUCCESS = "FETCH_MISSION_SUCCESS";
export const FETCH_GOAL_SUCCESS = "FETCH_GOAL_SUCCESS";
export const FETCH_CLIENT_SUCCESS = "FETCH_CLIENT_SUCCESS";

export const getComponent = () => async (dispatch) => {
    try {
        const res = await axios.get(`${process.env.REACT_APP_API}/components/active`);
        const banner = res?.data.filter(data => data.type === "HOME_SLIDER");
        const about = res?.data.filter(data => data.type === "ABOUT_US");
        const vision = res?.data.filter(data => data.type === "VISION");
        const mission = res?.data.filter(data => data.type === "MISSION");
        const goal = res?.data.filter(data => data.type === "GOAL");
        const client = res?.data.filter(data => data.type === "CLIENT");

        dispatch({ type: FETCH_BANNER_SUCCESS, payload: banner });
        dispatch({ type: FETCH_ABOUT_US_SUCCESS, payload: about[0] });
        dispatch({ type: FETCH_VISION_SUCCESS, payload: vision[0] });
        dispatch({ type: FETCH_MISSION_SUCCESS, payload: mission[0] });
        dispatch({ type: FETCH_GOAL_SUCCESS, payload: goal[0] });
        dispatch({ type: FETCH_CLIENT_SUCCESS, payload: client[0] });
    }
    catch (error) {
        console.log(error.message);
    }
}
