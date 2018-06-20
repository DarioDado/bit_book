import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TheaterModeImage } from './TheaterModeImage';




export class ImagePost extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hideImgTheaterMode: "hide",
            imageSrc: ""
        }
    }

    onOpenTheaterMode = (event) => {
        const imageSrc = event.target.src;
        this.setState({
            imageSrc,
            hideImgTheaterMode: null
        })
        window.scrollTo(0,0);
        document.querySelector("body").classList.add("scroll-off");
    }

    onCloseTheaterMode = (event) => {
        if(event.target.tagName !== "IMG"){
            this.setState({
                hideImgTheaterMode: "hide"
            })
        }
        document.querySelector("body").classList.remove("scroll-off");
        
    }

    render() {

        const { id, imageUrl, commentsNum, type } = this.props.post

        return (
            <div className="col s12 ">
                <div className="card post-card">
                    <div className="card-content">
                        <img src={imageUrl} alt="profile" onClick={this.onOpenTheaterMode}/>
                        <div className="post-details">
                            <Link to={`/feed/${type}/${id}`} >Image post</Link>
                            <span>{commentsNum} Comments</span>
                        </div>
                    </div>
                </div>
                <TheaterModeImage imageSrc={this.state.imageSrc} hideImgTheaterMode={this.state.hideImgTheaterMode} onCloseTheaterMode={this.onCloseTheaterMode}/>
            </div>
        )
    }
}