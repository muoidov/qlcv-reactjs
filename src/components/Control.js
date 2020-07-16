import React,{Component} from 'react';
import Sort from './Sort' ;
import Search from './Search' ;
class Control extends Component{
  render(){
    return(
      <div className="row" style={{marginTop: "15px"}}>
     <Search onSearch={this.props.onSearch}/>
     <Sort  onSort={this.props.onSort} sortb={this.props.sortb} sortv={this.props.sortv}/>
 
 </div>
      );
  }
}

export default Control;
