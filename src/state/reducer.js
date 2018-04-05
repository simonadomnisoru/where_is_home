import actionTypes from "./actionTypes";

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