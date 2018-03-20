import { createStore } from 'redux';
import actionTypes from './actionTypes';
import reducerPageRouter from './reducer';

// Define the initial state of our store
const initialState = {
    pageToDisplay: actionTypes.LOGIN
}

// Create a store, passing our reducer function and our initial state
const store = createStore(reducerPageRouter, initialState)

export default store;