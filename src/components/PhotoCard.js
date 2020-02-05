import React from 'react'

const PhotoCard = (props) => {
    return (
        <div className="column">
            <div className="ui fluid card">
                <div className="image">
                    <img alt="" src={props.photo.download_url}/>
                </div>
                <div className="content">
                    <div className="header">{props.photo.author}</div>
                    {props.favoriteContainer === "fav" ? <button onClick={()=>props.remove(props.photo)} className="ui button blue">Remove from Favorites</button> :
                    <button disabled={props.favorites.includes(props.photo)} onClick={()=>props.addToFavorites(props.photo)} className="ui button blue">{props.favorites.includes(props.photo) ? "Already in Favorites" : "Add To Favorites"}</button>}
                </div>
            </div>
        </div>
    )
}

export default PhotoCard