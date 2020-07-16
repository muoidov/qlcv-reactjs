import React, { Component } from 'react';
class Sort extends Component {
  componentDidUpdate(nextProps) {

  }
  constructor(props) {
    super(props);
    this.state = {
      sort: {
        by: 'name',
        value: 1
      }
    }
  }
  onClick = (sortb, sortv) => {
    this.setState({
      sort: {
        by: sortb,
        value: sortv
      }

    }); this.props.onSort(sortb, sortv);
  }
  render() {
    var { sort } = this.state;
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="dropdown">
          <button className="btn btn-primary dropdown-toggle" data-toggle="dropdown" >Sắp xếp <i className="fas fa-sort"></i></button>
          <ul className="dropdown-menu">
            <li onClick={() => this.onClick('name', 1)}><a role="button" >A-Z</a></li>
            <li onClick={() => this.onClick('name', -1)}><a role="button" >Z-A</a></li>
            <li onClick={() => this.onClick('status', 1)}><a role="button" >Active</a></li>
            <li onClick={() => this.onClick('status', -1)}><a role="button" >Hide</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sort;
