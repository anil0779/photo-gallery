import React from 'react';
import Like from './../like-button/index';

function Photo(props) {
    const { urls = {} } = props;
    const { small } = urls;

    return (
        <div>
            <Like />
            <img src={small} className={"photo"} />
        </div>
    )
}

export default Photo;