import React, { useState } from 'react';
import LikeIcon from './../../../src/love-24.png';
import LikeIconActive from './../../../src/love-48.png';

function Like(props) {
    const [likedStatus, setLikedStatus] = useState(false);

    const handleOnClick = () => {
        setLikedStatus(!likedStatus);
    }

    return (
        <img
            src={likedStatus ? LikeIconActive : LikeIcon}
            className={'like-btn'}
            onClick={handleOnClick}
        />
    )
}

export default Like;