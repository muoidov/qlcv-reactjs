import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as action from './../action/index';
class Taskform extends Component{
  constructor(props){
    super(props);
    this.state={
      id:'',
      name:'',
      status:false
    }
  }
  componentDidMount(){
    if(this.props.edit){
      this.setState({
        id:this.props.id,
        name:this.props.name,
        status:this.props.status 
      });
    }

  }
onClose=()=>{
  this.props.isDisplay=false;
}
onChange=(ev)=>{
  var target=ev.target;
  var name=target.name;
  var value=target.value;
  if(name==='status'){
    value=target.value==='true'?true:false;
  }
  this.setState({
    [name]:value,
    
  });}

onSubmit=(event)=>{
  event.preventDefault();

this.props.onAddTask(this.state); 
this.onClose();

}
onClear=()=>{
  this.setState({
    name:'',
    status:false
  });
}
componentDidUpdate(nextProps){
if(nextProps && nextProps.tasks){
      this.setState({
        id:nextProps.tasks.id,
        name:nextProps.tasks.name,
        status:nextProps.tasks.status 
      });
    }
}
  render(){
    var {id}=this.state;
    return(
      <div className="panel panel-warning">
          <div className="panel-heading">
            <h3 className="panel-title">{id !== '' ?'Cap nhat':'Them CV'}<i className="fas fa-times-circle" onClick={this.onClose}></i>
            </h3>
          </div>
          <div className="panel-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Ten</label>
                <input type="text" name="name"className="form-control" value={this.state.name} onChange={this.onChange}  placeholder="Nhập tên"/>
                <label>Trang thai</label>
                <select name="status" className="form-control" value={this.state.status} onChange={this.onChange}>
                  <option value="true">Active</option>
                  <option value="false">Hide</option>
                </select>
                
              </div>
              <button type="submit" className="btn btn-primary"onClick={this.onSubmit}><i className="fas fa-plus"></i>&nbsp; Luu lai</button>&nbsp;
              <button type="close" className="btn btn-primary" onClick={this.onClose}><i className="far fa-times-circle"></i>&nbsp;Huy bo</button>
            </form>
          </div>
        </div>
      );
  }
}
const mapStateToProps=(state)=>{
  return{

  }
};

const mapDispatchToProps =(dispatch,props)=>{
  return{
    onAddTask:(task)=>{
      dispatch(action.addTask(task));
    }
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(Taskform);
