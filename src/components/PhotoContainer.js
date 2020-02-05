import React, { Component } from 'react';
import PhotoCard from './PhotoCard'
import SearchBar from './SearchBar'

export default class PhotoContainer extends Component {

  state = {
    search: ""
  }

  handleFilter = event => {
      this.setState({
          [event.target.name]: event.target.value
      })


  }


  render() {
    let filteredPhotos = this.props.allPhotos.filter(photo=> photo.author.toLowerCase().includes(this.state.search.toLowerCase()))
    let photos = filteredPhotos.map(photo=> <PhotoCard favorites={this.props.favorites} addToFavorites={this.props.addToFavorites} key={photo.id} photo={photo}/>)
      return (
    <div className="ui container">
      <h1>All Photos</h1>
      <div>
        <SearchBar search={this.state.search} handleFilter={this.handleFilter}/>
      </div>
      <div className="ui special cards three column grid">
          {photos}

      </div>
    </div>
    );
  }
}
