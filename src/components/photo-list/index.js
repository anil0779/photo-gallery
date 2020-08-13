import React from 'react';
import Photo from './../photo/index';

function PhotoList(props) {
    
    const { photos = [] } = props;

    return (
        <div className={'photo-list-wrapper'}>
            <div className={'photos'}>
                {
                    photos.length > 0 && photos.map((photo, idx) => {
                        return <Photo key={idx} {...photo}/>
                    })
                }
            </div>
        </div>
    )
}

export default PhotoList;