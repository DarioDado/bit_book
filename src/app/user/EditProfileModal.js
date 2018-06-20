import React, { Component } from 'react';

class EditProfileModal extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        if (this.props.isOpen) {
            return (
                <div className="edit-overlay">
                    <div className="edit-modal">
                        {this.props.children}
                    </div>
                </div>
            )
        }
        return null;

    }
}

export { EditProfileModal };