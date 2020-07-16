import React,{Component} from 'react';
import Data from './Data';
import {connect} from 'react-redux';
class Table extends Component{
  constructor(props){
    super(props);
    this.state=({
fn:'',
fs:-1
    })
  }
  onChange=(ev)=>{
    var target=ev.target;
    var name=target.name;
    var value=target.value;
    this.props.onFil(name==='fn'?value:this.state.fn,
      name==='fs'?value:this.state.fs);
    this.setState({
      [name]:value   });
  }
  render(){
    console.log(this.props.todos);
    // var {tasks}=this.props;
    // var ele=tasks.map((task,index)=>{
    //   return <Data key={task.id} index={index} task={task} onUpdate={this.props.onUpdate} onDel={this.props.onDel}
    //   onUpdate2={this.props.onUpdate2}/>
    // });
    var  {fn,fs}=this.state;
    
    return(

      <table className="table table-hover">
           <thead>
             <tr>
               <th>STT</th>
               <th>Name</th>
               <th>Trang Thai</th>
               <th>Hoat Dong</th>
             </tr>
           </thead>
           <tbody>
             <tr>
               <td></td>
               <td><input name="fn" value={fn} onChange={this.onChange} type="text" className="form-control"  /></td>
               <td><select name="fs" value={fs} onChange={this.onChange} className="form-control">
                 <option >Tất cả</option>
                 <option>Ẩn</option>
                 <option>Kích hoạt</option>
               </select></td>
             </tr>
             {/* {ele } */}
           </tbody>
         </table>
      );
  }
}
const mapStateToProps=(state)=>{
return {todos:state.tasks}
};
export default connect(mapStateToProps,null)(Table);
