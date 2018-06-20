import React, { Component, Fragment } from 'react';

class EditProfileForm extends Component {



    render() {
        return (
            <Fragment>
                <div className="profile-img">
                    <img src="https://vignette.wikia.nocookie.net/undertale-rho/images/5/5f/Placeholder.jpg/revision/latest?cb=20180213155916" alt="" />
                </div>
                <form className="switch-form">
                    <input placeholder="Image url" id="img-url" type="text" />
                    <input type="file" />
                    <div class="switch">
                        <label>
                            Url
                            <input type="checkbox" />
                            <span class="lever"></span>
                            File upload
                        </label>
                    </div>
                </form>

                <form className="details-form">
                    <input placeholder="Name" id="first_name" type="text" />
                    <textarea placeholder="About" id="about" class="materialize-textarea"></textarea>
                    <button class="btn waves-effect waves-light submit" type="submit" name="action">Submit</button>
                    <button class="btn waves-effect waves-light" type="submit" name="action">Cancel</button>
                </form>
            </Fragment>
        );
    }
}

export { EditProfileForm };