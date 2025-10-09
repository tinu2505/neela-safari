import React, { useState } from 'react';
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
    const [enlargedimg, setenlargedimg] = useState(null);

    return(
        <div className={Styles.main}>
            <h1>Gallery</h1>
            <p>Beauty Captured!</p>
            <div className={Styles.media}>
                <img src="https://q0hao2iwgg.ucarecd.net/4a886a46-35a1-46da-a603-0ad9028202aa/logo4.png" alt="" />
                <img src="https://q0hao2iwgg.ucarecd.net/c9eece5a-e81f-473d-af19-56b68e03b4e0/logo3.png" alt="" />
                <img src="https://q0hao2iwgg.ucarecd.net/a8926cd9-c55e-44b4-aff8-cc7cdec15676/maps.png" alt="" />
                <img src="https://q0hao2iwgg.ucarecd.net/f7406a89-6273-489d-9e0d-5eb6ed1be0e7/rates.png" alt="" />
                <img src="https://q0hao2iwgg.ucarecd.net/50c0dd8f-7be8-41f0-9c04-84740363b423/logo5.png" alt="" />
                <img src="https://q0hao2iwgg.ucarecd.net/50c0dd8f-7be8-41f0-9c04-84740363b423/logo5.png" alt="" />
                <img src="https://q0hao2iwgg.ucarecd.net/50c0dd8f-7be8-41f0-9c04-84740363b423/logo5.png" alt="" />
            </div>
        </div>
    );
}

export default Gallery;