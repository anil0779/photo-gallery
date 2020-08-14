import React, { useState } from 'react';
import './index.css';

function Zoom(props) {

    const { imgRef } = props;
    const [ zoom, setZoom] = useState(0);

    const zoomin = () => {
        if(zoom < 3) {
            const containerHeight = imgRef.current.parentElement.clientHeight;
            let currWidth = imgRef && imgRef.current.width;
            imgRef.current.style.width = (currWidth + 100) + "px";
            imgRef.current.parentElement.style.height = containerHeight + "px";
            setZoom(zoom +1);
        }
    }
    const zoomout = () => {
        if(zoom > 0) {
            let currWidth = imgRef && imgRef.current.width;
            imgRef.current.style.width = (currWidth - 100) + "px";
            setZoom(zoom -1);
        }
    }

    return (
        <div className={'zoom-bar'}>
            <button type="button" onClick={zoomin}>+</button>
            <button type="button" onClick={zoomout}>-</button>
        </div>
    )
}

export default Zoom;