import React from 'react';
import './App.css';
import Taskform from './components/Taskform' ;
import Control from './components/Control' ;
import Table from './components/Table' ;
import _ from 'lodash';
import demo from './training/demo';
import {connect} from 'react-redux';
import * as actions from './action/index';
class App extends React.Component{
  constructor (props){
super(props);
this.state={
  edit:null,
  filter:{
    name:'',
  stt:-1},
  keyword:''
  ,
   sortb :'name',
    sortv:1
}}
  
  
  Change=()=>{
    this.props.onTGFrom();
//   this.setState({

//     isDisplay :!this.state.isDisplay
//   });
   }

onSubmit=(data)=>{
  var {tasks}=this.state;
  if(data.id===''){data.id=this.generateID();
  tasks.push(data);

}else{
   var index =this.findIndex(data.id);
   tasks[index]=data;
}
  
  this.setState({
    tasks:tasks,edit:null
  });
  localStorage.setItem('tasks',JSON.stringify(tasks));
  }

  findIndex=(id)=>{
    var {tasks}=this.state;
    var rs=-1;
    tasks.forEach((task,index)=>{
      if(task.id===id){
        return index;
      }
    });
return rs;
  }
  onDel=(id)=>{
     var {tasks}=this.state;
    var index =this.findIndex(id);
    if(index !== -1){
      tasks.splice(index,1);
      this.setState({
        tasks:tasks
      });
localStorage.setItem('tasks',JSON.stringify(tasks));
    }
  }
  onUpdate2=(id)=>{
var {tasks}=this.state;
var index=this.findIndex(id);
var edit=tasks[index];
this.setState({
  edit:edit
});

 this.onShow();
    }
    onShow=()=>{
      this.setState({
      isDisplay:true});
    }
    onFil=(name,stt)=>{
stt=parseInt(stt,10);
this.setState({
  filter:{
name:name.toLowerCase(),
  stt:stt}
});
    }
    onSort=(sortb,sortv)=>{
this.setState ({
    sortb :sortb   ,
    sortv  :sortv     
  
});
    }
    onSearch=()=>{
      this.props.onSearch(this.state.keyword);
    }
  render(){

    var {tasks, edit,filter,keyword,sortb,sortv}=this.state;
    var {isDisplay}=this.props;
    // if(filter){
    //   if(filter.name){
    //     tasks = tasks.filter((task)=>{
    //       return task.name.toLowerCase().indexOf(filter.name)!==-1;
    //     });}
        
          
    //     }
    //     if(keyword){
    //     tasks = tasks.filter((task)=>{
    //       return task.name.toLowerCase().indexOf(filter.name)!==-1;
    //     });
    //     }
//         if(sortb==='name'){
//       tasks.sort((a,b)=>{
// if(a.name>b.name) return sortv; 
// else if(a.name <b.name) return -sortv;
// else return 0;
//       });}else{      tasks.sort((a,b)=>{
// if(a.status>b.status) return -sortv; 
// else if(a.status <b.status) return sortv;
// else return 0;
//       });}
    
    var elet= isDisplay? 
    <Taskform task={this.edit}/>:
    '';
    return(
      <div> <div className="container-fluid">
        <h1 className="text-center"> WORKING MANAGE</h1>
      </div>
      <div className="row">
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        {elet}
        </div>
        <div className={isDisplay===true?"col-xs-8 col-sm-8 col-md-8 col-lg-8":"col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
          <button type="button" className="btn btn-primary" onClick={this.Change}><i className="fas fa-plus" ></i>&nbsp;Them cong viec</button>
          
         <Control onSearch={this.onSearch} onSort={this.onSort} sortb={sortb} sortv={sortv}/>
         <Table tasks={tasks} onUpdate={this.onUpdate} onDel={this.onDel} onUpdate2={this.onUpdate2} onFil={this.onFil}/>
       </div>
        </div>
      </div>
      );
  }
}
const mapStateToProps= state=>{
return{
isDisplay: state.isDisplay
}
};
const mapDisPatchToProps=(dispatch,props)=>{
  return{
onTGFrom:  ()=>{
dispatch(actions.togglefrom())
},
onCLFrom:()=>{
dispatch(actions.closefrom())
}
  }
};
export default connect(mapStateToProps,mapDisPatchToProps)(App);
