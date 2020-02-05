import React, { Component } from 'react';

export default class SearchBar extends Component {
  
    render() {

      return (
    <div className="search">
        Search for a Photo
      <input type="textfield" name="search" value={this.props.search} onChange={this.props.handleFilter}/>
    </div>
    );
  }
}