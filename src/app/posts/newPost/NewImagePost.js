import React from 'react';

const NewImagePost = () => {
    return (
        <form>
            <div className="row">
                <div className="input-field col s12">
                    <h3>New image post</h3>
                </div>
                <div className="input-field col s12">
                    <label htmlFor="icon_prefix">Image url</label>
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

export { NewImagePost };