import React from 'react';

const NewTextPost = () => {
    return (
        <form>
            <div className="row">
                <div className="input-field col s12">
                    <h3>New post</h3>
                </div>
                <div className="input-field col s12">
                    <label htmlFor="icon_prefix">Post content</label>
                </div>
                <div className="input-field col s12">
                    <input id="icon_prefix" type="text" className="validate" />
                </div>
                <div className="col s12">
                    <button className="waves-effect waves-light btn right">button</button>
                </div>
            </div>
        </form>
    );
};

export { NewTextPost };