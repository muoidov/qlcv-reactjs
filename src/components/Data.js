import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as action from './../action/index';
class Data extends Component{
  onUpdate=()=>{
    this.props.update(this.props.task.id);
  }
  onDel=()=>{
    this.props.onDel(this.props.task.id);
  }
  onUpdate2=()=>{
    this.props.onUpdate2(this.props.task.edit);
  }
  render(){
    var {task,index}=this.props;
    return(
              
             <tr>
             <td>{index+1}</td>
             <td>{task.name}</td>
             <td><span className={ task.status === true ? "label label-danger": "label label-success" } onClick={this.onUpdate}>{task.status===true?"Active":"Hide"}</span></td>
             <td><button type="button" className="btn btn-success" name="edit" 
             onClick={this.onUpdate2}><i className="fas fa-pen mr"></i>Sửa</button>&nbsp;
             <button type="button" className="btn btn-success" onClick={this.onDel}><i className="far fa-trash-alt mr"></i>Xóa</button></td>
             </tr>
           
      );
  }
}

const mapStateToProps= state=>{
  return{
  }
  };
  const mapDisPatchToProps=(dispatch,props)=>{
    return{
  onupdate:  (id)=>{
  dispatch(action.update(id));
  }
  
    }
  };
  export default connect(mapStateToProps,mapDisPatchToProps)(Data);
