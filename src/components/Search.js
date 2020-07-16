import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ''
    }
  }
  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value
    });
  }
  onSearch = (keyword) => {
    this.setState({
      keyword: keyword
    });
  }
  render() {
    var { keyword } = this.state;
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="input-group">
          <input type="text" className="form-control" name="keyword" placeholder="Search" value={keyword} onChange={this.onChange} />

          <div className="input-group-btn">

            <button className="btn btn-primary" type="submit" onClick={this.onSearch}>Tìm kiếm
        <i className="glyphicon glyphicon-search" style={{ marginLeft: "5px" }}></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
