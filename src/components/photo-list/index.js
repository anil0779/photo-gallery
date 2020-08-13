import React from 'react';
import Photo from './../photo/index';
import './index.css';

function PhotoList(props) {
    
    const { photos = [] } = props;

    return (
        <div className={'photo-list-wrapper'}>
            <div className={'photos'}>
                {
                    photos.length > 0 && photos.map((photo) => {
                        return <Photo key={photo.id} {...photo}/>
                    })
                }
            </div>
        </div>
    )
}

export default PhotoList;