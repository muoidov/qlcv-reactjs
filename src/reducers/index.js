import {combineReducers} from 'redux';
import tasks from './tasks';
import isDisplay from './isDisplayFrom';
const myReducer = combineReducers({
    tasks,
    isDisplay
});
export default myReducer;