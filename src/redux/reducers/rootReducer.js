import { combineReducers } from "redux";
import commentsData from './commentReducer';
import moviesData from './moviesReducer';


const rootReducer = combineReducers({
    comments: commentsData,
    movies: moviesData
});

export default rootReducer;