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
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (url) => {
        setSelectedImage(url);
    };
    const closeModal = () => {
        setSelectedImage(null);
    };

    useEffect (() => {
        fetch('http://localhost:8080/api/images')
        .then((res) => res.json())
        .then(setImages)
        .catch(console.error)
    }, []);

    return(
        <div className={Styles.main}>
            <h1>Gallery</h1>
            <p>Beauty Captured!</p>
            <div className={Styles.media}>
                {images.map((url, idx) => (
                    <img key={idx} src={url} alt={`Gallery item ${idx + 1}`} onClick={() => openModal(url)} />
                ))}
            </div> 
            {/* Modal for displaying selected image */}
            {selectedImage && (
                <div className={Styles.modal} onClick={closeModal}>
                    <img src={selectedImage} alt='Enlarged' style={{ maxHeight: '90%', maxWidth: '90%' }} />
                </div>
            )}
        </div>
    );
}

export default Gallery;