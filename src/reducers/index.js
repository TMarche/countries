import {combineReducers} from 'redux';
import countriesReducer from "./countriesReducer"

export default combineReducers({
    // Removes error message from redux
    countries: countriesReducer,
});