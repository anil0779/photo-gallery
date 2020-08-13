import React from 'react';

function Photo(props) {
    const { src, alt } = props;

    return (
        <div>
            <image src={src} alt={alt} />
        </div>
    )
}

export default Photo;