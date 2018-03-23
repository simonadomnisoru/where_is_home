import actionTypes from "./actionTypes";
import { combineReducers } from "redux";

// Define a reducer
function reducerPageRouter(state, action) {
    if (action.type === actionTypes.MAP) {
        return { pageToDisplay: actionTypes.MAP };
    }
    if (action.type === actionTypes.CRITERION) {
        return { pageToDisplay: actionTypes.CRITERION };
    }
    return state;
}
export default reducerPageRouter;