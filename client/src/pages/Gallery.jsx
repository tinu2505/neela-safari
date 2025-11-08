import React, {useEffect, useState } from 'react';
import Styles from './gallery.module.css';
{/*import logo from '../assets/images/logo(5).png';
import card1 from '../assets/images/logo(4).png';
import card2 from '../assets/images/logo(3).png';
import maps from '../assets/images/maps.png';
import needtoknow from '../assets/images/needtoknow.png';
import packing from '../assets/images/packing.png';
import rates from '../assets/images/rates.png';
import weather from '../assets/images/weather.png';
import feedback from '../assets/images/feedback.png';*/}

function Gallery() {
    
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch('/api/images')
        .then(res => res.json())
        .then(setImages)
        .catch(err => console.error('Unable to fetch images:', err));
    }, []);

    return(
        <div className={Styles.main}>
            <h1>Gallery</h1>
            <p>Beauty Captured!</p>
            <div className={Styles.media}>
                {images.map(img => (
                    <img key={img.uuid} src={img.cdn_url} alt={img.original_filename || 'Uploadcare Image'} />
                ))}
            </div>
        </div>
    );
}

export default Gallery;