
import * as types from '../const/ActionType';


var initialState=[
    false];
var myReducer=(state=initialState,action)=>{
    switch(action.type){
        case types.TOGGLE_FROM:
            return !state;
            case types.OPEN_FORM:
                state=!state;
                return state;
                case types.CLOSE_FORM:
                    state=false;
                return state;
            default: return state
    }

};
export default myReducer;