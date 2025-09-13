import Styles from './about.module.css';
import aboutsection from '../assets/images/aboutsection.png';

function About(){
    return(
        <div className={Styles.about}>
            <div className={Styles.text}>
                <h1>About Us</h1>
                <p>Welcome to Neela Safari, where untamed wilderness meets curated luxury. Nestled in the heart of the breathtaking Jawai landscape, our safari experiences offer more than just wildlife viewing — they are immersive journeys into the soul of nature.
                    At Neela Safari, we specialize in expertly guided tours that unveil the vibrant rhythms of the wild. From majestic leopards roaming free to the serene beauty of dawn breaking over rugged hills, every moment is crafted to create lasting memories.
                    Our commitment to sustainability, conservation, and authentic cultural connections ensures that your safari is as enriching for the environment as it is for you. Whether you seek thrilling adventures or tranquil escapes, Neela Safari promises unparalleled hospitality, personalized service, and an intimate encounter with nature’s wonders.
                    Join us, and explore Jawai like never before — where every safari is a story, and every story is unforgettable.</p>
            </div> 
            <div className={Styles.image}>
                <img src="https://q0hao2iwgg.ucarecd.net/f2d97ffc-3093-44e9-b6bf-0078d4da4fc8/aboutsection.png" alt="about" />
            </div>
        </div>
    );
}

export default About;