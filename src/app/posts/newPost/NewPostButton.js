import React, { Component } from 'react';
import M from 'materialize-css';

class NewPostButton extends Component {
    constructor(props) {
        super(props);

    }
    floatingBtn = React.createRef();

    componentDidMount() {
        M.FloatingActionButton.init(this.floatingBtn.current);      
    }
    render() {
        
        const onClick = this.props.onClick;
        return (
            <div className="fixed-action-btn" ref={this.floatingBtn}>
                <a className="btn-floating btn-large red">
                    <i className="large material-icons">mode_edit</i>
                </a>
                <ul>
                    <li><button data-target="text" className="btn modal-trigger btn-floating  blue" onClick={onClick}><i className="material-icons">text_format</i> Post</button></li>
                    <li><button data-target="image" className="btn modal-trigger btn-floating  green" onClick={onClick}><i className="material-icons">image</i>Image</button></li>
                    <li><button data-target="video" className="btn modal-trigger btn-floating  red" onClick={onClick}><i className="material-icons">ondemand_video</i>Video</button></li>
                </ul>
            </div>
        );
    }
};

export { NewPostButton };