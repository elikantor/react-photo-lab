import React, { Component } from 'react';

export default class AddNewPhotoForm extends Component {

    // state = {
    //     author: "",
    //     download_url: ""
    // }

    // handleOnSubmit = () => {

    // }

    render() {
        return (
            <div className="ui container custom-form">
            <form className="ui form" onSubmit={this.props.handleSubmit}>
                <div className="field">
                    <label>Author</label>
                    <input type="text" name="author" required onChange={this.props.handleChange} value={this.props.author} placeholder="Author"/>
                </div>

                <div className="field">
                    <label>Image URL</label>
                    <input type="text" name="img_url" required onChange={this.props.handleChange} value={this.props.img_url} placeholder="Photo URL"/>
                </div>
    
                <button className="ui button" type="submit">Submit</button>
            </form>  
        </div>
        );
    }
}
