import React, { useState } from "react";
import Styles from './home.module.css';
import herosection from '../assets/images/herosection.png';
import logo from '../assets/images/logo(5).png';
import card1 from '../assets/images/logo(4).png';
import card2 from '../assets/images/logo(3).png';
import maps from '../assets/images/maps.png';
import needtoknow from '../assets/images/needtoknow.png';
import packing from '../assets/images/packing.png';
import rates from '../assets/images/rates.png';
import weather from '../assets/images/weather.png';
import feedback from '../assets/images/feedback.png';

const infodata = [
    {
        title : "Maps & Direction",
        img: maps,
        content: "Here are directions-You can reach Neela Safari via XYZ route. Use Google Maps for navigation."
    },
    {
        title: "Need to Know",
        img: needtoknow,
        content: "Carry valid photo ID, observe wildlife safety instructions, and check for seasonal guidelines."
    },
    {
        title: "What to Pack",
        img: packing,
        content: "Suggested packing: lightweight clothing, sun protection, camera, binoculars, sturdy shoes." 
    },
    {
        title: "Weather",
        img: weather,
        content: "Typical weather is warm and dry; check forecast before arrival for latest updates."
    }
];

function Home() {
    const [openindex, setopoenindex] = useState(null);
    return(
        <div>
            <section className={Styles.hero}>
                    <img src={herosection} alt="heroImage" />
            </section>

            <div className={Styles.intro}>
                <h1>Welcome to Neela Safari</h1>
                <p>Experience the wild like never before with Neela Safari. 
                    Our expertly guided tours offer an unforgettable journey through the heart of nature, where you can witness majestic wildlife in their natural habitat.
                    Whether you're seeking thrilling adventures or serene landscapes, Neela Safari promises an unparalleled safari experience that will leave you with lasting memories. 
                    Join us and explore the untamed beauty of the wilderness!
                </p>
            </div>

            <div className={Styles.experiences}>
                <h1>Experiences</h1>
                <div className={Styles.cards}>
                    <div className={Styles.card}>
                        <img src={card1} alt="card1"/>
                        <div className={Styles.cardcontent}>
                            <h2>8 to 8 Safari</h2>
                            <p>Experience the thrill of an 8 to 8 safari, 
                                where you can immerse yourself in the wild from dawn till dusk.
                            </p>
                            <button>Book Now</button>
                        </div>
                    </div>
                    <div className={Styles.card}>
                        <img src={card2} alt="card2"/>
                        <div className={Styles.cardcontent}>
                            <h2>Morning Safari</h2>
                            <p>Experience the Beauty of Sunrise in Hilly terrain of Jawai.</p>
                            <button>Book Now</button>
                        </div>
                    </div>
                    <div className={Styles.card}>
                        <img src={card2} alt="card2"/>
                        <div className={Styles.cardcontent}>
                            <h2>Morning Safari</h2>
                            <p>Experience the Beauty of Sunrise in Hilly terrain of Jawai.</p>
                            <button>Book Now</button>
                        </div>
                    </div>
                    <div className={Styles.card}>
                        <img src={card2} alt="card2"/>
                        <div className={Styles.cardcontent}>
                            <h2>Morning Safari</h2>
                            <p>Experience the Beauty of Sunrise in Hilly terrain of Jawai.</p>
                            <button>Book Now</button>
                        </div>
                    </div>
                    <div className={Styles.card}>
                        <img src={card2} alt="card2"/>
                        <div className={Styles.cardcontent}>
                            <h2>Morning Safari</h2>
                            <p>Experience the Beauty of Sunrise in Hilly terrain of Jawai.</p>
                            <button>Book Now</button>
                        </div>
                    </div>
                    <div className={Styles.card}>
                        <img src={card2} alt="card2"/>
                        <div className={Styles.cardcontent}>
                            <h2>Morning Safari</h2>
                            <p>Experience the Beauty of Sunrise in Hilly terrain of Jawai.</p>
                            <button>Book Now</button>
                        </div>
                    </div>
                    <div className={Styles.card}>
                        <img src={card2} alt="card2"/>
                        <div className={Styles.cardcontent}>
                            <h2>Morning Safari</h2>
                            <p>Experience the Beauty of Sunrise in Hilly terrain of Jawai.</p>
                            <button>Book Now</button>
                        </div>
                    </div>
                    <div className={Styles.card}>
                        <img src={card2} alt="card2"/>
                        <div className={Styles.cardcontent}>
                            <h2>Morning Safari</h2>
                            <p>Experience the Beauty of Sunrise in Hilly terrain of Jawai.</p>
                            <button>Book Now</button>
                        </div>
                    </div>
                    <div className={Styles.card}>
                        <img src={card2} alt="card2"/>
                        <div className={Styles.cardcontent}>
                            <h2>Morning Safari</h2>
                            <p>Experience the Beauty of Sunrise in Hilly terrain of Jawai.</p>
                            <button>Book Now</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={Styles.infosection}>
                {infodata.map((item, idx) => (
                    <div className={Styles.infocard} 
                        key={item.title} 
                        onClick={() => setopoenindex(idx)}
                    >
                        <img src={item.img} alt={item.title} />
                        <h2>{item.title}</h2>
                    </div>

                ))}
               
                {/* Popup modal */}
                {openindex != null && (
                    <div className={Styles.modaloverlay} onClick={() => setopoenindex(null)}>
                        <div className={Styles.modal} onClick={e => e.stopPropagation()}>
                            <h3><b>{infodata[openindex].title}</b></h3>
                            <p>{infodata[openindex].content}</p>
                            <button onClick={() => setopoenindex(null)}>Close</button>
                        </div>
                    </div>
                )}

                {/*<div className={Styles.infocard} onClick={() => setModalOpen(true)}>
                    <img src={maps} alt="maps"/>
                    <h2>Maps & Direction</h2>
                </div>
                <div className={Styles.infocard} onClick={() => setModalOpen(true)}>
                    <img src={needtoknow} alt="needtoknow"/>
                    <h2>Need To Know</h2>
                </div>
                <div className={Styles.infocard} onClick={() => setModalOpen(true)}>
                    <img src={packing} alt="packing"/>
                    <h2>Need to Pack</h2>
                </div>
                <div className={Styles.infocard} onClick={() => setModalOpen(true)}>
                    <img src={weather} alt="weather"/>
                    <h2>Weather</h2>
                </div>*/}
            </div>

            <div className={Styles.gallery}>
                <a href="/Gallery"><h2>Gallery</h2></a>
                <div className={Styles.media}>
                    <img src={logo} alt="example" />
                    <img src={rates} alt="example" />
                    <img src={rates} alt="example" />
                    <img src={rates} alt="example" />
                    <img src={rates} alt="example" />
                    <img src={rates} alt="example" />
                    <img src={rates} alt="example" />
                </div>
            </div>

            <div className={Styles.feedback}>
                <div className={Styles.feedform}>
                    <h2>Share Your Feedback</h2>
                    <input type="text" placeholder="Your Name"/>
                    <textarea type="text" placeholder="Describe Your Experience With Us" rows={10} />
                    <button type="submit">Submit</button>
                </div>
                <div className={Styles.feedimage}>
                    <img src={feedback} alt="feedback icon" />
                </div>
            </div>
        </div>
    );
}

export default Home;