import React from 'react'

const Header = (props) => {
    return(
        <div style={{backgroundColor: "black"}}>
            <div class="ui inverted segment">
                <div class="ui inverted secondary pointing menu">
                    <div className="ui inverted button all" value="all" onClick={props.changeDisplay}>
                        All Photos
                    </div>
                    <div className="ui inverted button favorites" value="favorites" onClick={props.changeDisplay}>
                        Favorites
                    </div>
                    <div className="ui inverted button add" value="add" onClick={props.changeDisplay}>
                        Add New Photo
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header