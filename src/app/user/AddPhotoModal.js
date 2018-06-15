import React from 'react';

const AddPhotoModal = (props) => {
    const {hideAddModal, onCloseAddModal} = props;
    return (
        <div className={`overlay ${hideAddModal}`}>
            <div className="modal" style={{ display: 'block' }}>
                <form>
                    <button className="waves-effect waves-light btn right" onClick={onCloseAddModal}>x</button>
                    <div className="modal-content">
                        <div className="input-field col s12">
                            <h3></h3>
                        </div>
                        <div className="input-field col s12">
                            <label htmlFor="icon_prefix">post</label>
                        </div>
                        <div className="input-field col s12">
                            <input id="icon_prefix" name="textInputValue" type="text"  />
                        </div>
                        <h5>Wrong input!</h5>
                    </div>
                    <div className="modal-footer">
                        <button className={`waves-effect waves-light btn right`} >Post</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export { AddPhotoModal };