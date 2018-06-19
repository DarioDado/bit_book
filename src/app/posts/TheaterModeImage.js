import React from 'react';
import "./TheaterModeImage.css"

const TheaterModeImage = (props) => {

    const { hideImgTheaterMode, imageSrc, onCloseTheaterMode} = props;
    return (
        <div className={`overlayModal ${hideImgTheaterMode}`} onClick={onCloseTheaterMode}>
            <div className="theater-mode">
            <img src={imageSrc} alt="profile" />
            </div>
        </div>
    );
};

export { TheaterModeImage };