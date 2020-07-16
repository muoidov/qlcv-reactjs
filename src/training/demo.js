import {createStore} from 'redux';
var initialState={
	status: false,
	sort:{
		by:'name',value:1
	}
}
var myReducer=(state=initialState,action)=>{
	if(action.type==='TG_STT'){
		state.status=!state.status;
		return state;
	}
	if(action.type==='sort'){
		// state.sort={
		// 	by: action.sort.by,
		// 	value:action.sort.value
		// }
		var {by,value}=action.sort;
		var {status}=state ;
		return {
			status:status,
			sort:{
				by:by,
				value:value
			}
		};
	}
	return state;
}
const store = createStore(myReducer);
console.log('Before:',store.getState());
var action={type:'TG_STT'};
store.dispatch(action);
console.log('After:',store.getState());


var saction={type:'sort',sort:{by:'moi',value:-1}};
store.dispatch(saction);
console.log('sort',store.getState());