import actionTypes from './actionTypes';
import { combineReducers } from 'redux'

// Define a reducer
function reducerPageRouter(state, action) {
    if (action.type === actionTypes.LOGIN) {
        return { pageToDisplay: actionTypes.LOGIN }
    }
    if (action.type === actionTypes.VIDEOS) {
        return { pageToDisplay: actionTypes.VIDEOS }
    }
    if (action.type === actionTypes.VIDEODETAILS) {
        return { pageToDisplay: actionTypes.VIDEODETAILS }
    }
    return state
}

/*const reducers = combineReducers({
    reducerPageRouter
})*/

export default reducerPageRouter;