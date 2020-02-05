import React from 'react';
import './App.css';
import Header from './components/Header'
import PhotoContainer from './components/PhotoContainer'
import FavoritePhotosContainer from './components/FavoritePhotosContainer'
import AddNewPhotoForm from './components/AddNewPhotoForm'

class App extends React.Component{

  state = {
    allPhotos: [],
    favorites: [],
    display: "all",
    author: "",
    img_url: ""
  }

  componentDidMount(){
    fetch("http://localhost:3000/photos")
    .then(r=>r.json())
    .then(data => {
      this.setState({
        allPhotos: data
      })
    })
  }

  addToFavorites = (photo) => {
    this.setState({
      favorites: [...this.state.favorites, photo]
    })
  }

  changeDisplay = event => {
    if(event.target.innerText === "All Photos"){
      this.setState({
        display: "all"
      })
    } else if (event.target.innerText === "Favorites"){
      this.setState({
        display: "favorites"
      })
    } else {
      this.setState({
        display: "new"
      })
    }
  }

  remove = (photo) => {
    let favs = this.state.favorites.filter(fav => fav.id !== photo.id)
    this.setState({
      favorites: favs
    })
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let newPhoto = {
      author: this.state.author,
      download_url: this.state.img_url
    }
    this.setState({
      allPhotos: [...this.state.allPhotos, newPhoto]
    },()=>console.log(this.state.allPhotos))
  }



  render(){
    return (
      <div className="App">
          <Header changeDisplay={this.changeDisplay}/>
          {this.state.display === "new" ? <AddNewPhotoForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} author={this.state.author} img_url={this.state.img_url}/> : this.state.display === "favorites" ? 
            <FavoritePhotosContainer remove={this.remove} favorites={this.state.favorites} removeFromFavorites={this.removeFromFavorites}/> : 
            <PhotoContainer favorites={this.state.favorites} allPhotos={this.state.allPhotos} addToFavorites={this.addToFavorites} />}
      </div>
    )
  }
}

export default App;
