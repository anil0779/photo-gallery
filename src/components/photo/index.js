import React, { useState, useEffect, useRef } from 'react';
import Like from './../like-button/index';
import Zoom from '../zoom';
import './index.css';

function Photo(props) {
    const { urls = {} } = props;
    const { small } = urls;

    const imgRef = useRef();

    const [showZoom, setShowZoom] = useState(false);

    const handleClick = () => {
        setShowZoom(true);
    }

    return (
        <div className={'photo-wrapper'}>
            {showZoom && <Zoom imgRef={imgRef} />}
            <Like />
            <div className={'scrollable-image'}>
                <img ref={imgRef} src={small} className={"photo"} onClick={handleClick} />
            </div>
        </div>
    )
}

export default Photo;