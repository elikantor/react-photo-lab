import React, { Component } from 'react';
import PhotoCard from './PhotoCard'

export default class FavoritePhotosContainer extends Component {
  render() {
    let favorites = this.props.favorites.map(photo=> <PhotoCard favoriteContainer={"fav"} photo={photo} remove={this.props.remove}/>)
    return (
    <div className="ui container">
      <h1>Favorite Photos</h1>
      <div className="ui special cards three column grid">
           {favorites}
      </div>
    </div>
    );
  }
}
