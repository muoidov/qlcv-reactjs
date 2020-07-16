
import * as types from '../const/ActionType';
var s4=()=>{
    return Math.floor((1+Math.random())*0x1000).toString(16).substring(1);
  }
 var findIndex=(tasks,id)=>{

    var rs=-1;
    tasks.forEach((task,index)=>{
      if(task.id===id){
        return index;
      }
    });}
    var     generateID= ()=>{
  return this.s4()+this.s4()+this.s4();
    }
var data =JSON.parse(localStorage.getItem('tasks'));
var initialState=[
    data
];
var myReducer=(state=initialState,action)=>{
    switch(action.type){
        case types.LIST_ALL:
            return state
            case types.ADD_TASK:
                var newTask={
                    id:s4(),
                    name:action.task.name,
                    status:action.task.status==='true'?true:false
                }
                state.push(newTask);
                localStorage.setItem('task',JSON.stringify(state));
                return [...state]
            case types.UPDATE_STATUS:
                var id=action.id;
    var index =findIndex(state,id);
   state[index].status=!state[index].status;
localStorage.setItem('tasks',JSON.stringify(state));
    
                return [...state];
            default: return state
    }

};
export default myReducer;