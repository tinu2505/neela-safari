import React, { useEffect, useState } from "react";
import { FileUploaderRegular } from '@uploadcare/react-uploader';
import '@uploadcare/react-uploader/core.css';
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
import whatsapp from '../assets/images/whatsapp.webp';

const infodata = [
    {
        title : "Maps & Direction",
        img: "https://q0hao2iwgg.ucarecd.net/a8926cd9-c55e-44b4-aff8-cc7cdec15676/maps.png",
        content: "Here are directions-You can reach Neela Safari via XYZ route. Use Google Maps for navigation."
    },
    {
        title: "Need to Know",
        img: "https://q0hao2iwgg.ucarecd.net/956e86d5-02bc-4f3f-8607-ed267d97137c/needtoknow.png",
        content: "Carry valid photo ID, observe wildlife safety instructions, and check for seasonal guidelines."
    },
    {
        title: "What to Pack",
        img: "https://q0hao2iwgg.ucarecd.net/a587b94f-9df8-4a54-96b1-10c781cdb08d/packing.png",
        content: "Suggested packing: lightweight clothing, sun protection, camera, binoculars, sturdy shoes." 
    },
    {
        title: "Weather",
        img: "https://q0hao2iwgg.ucarecd.net/bee43947-ba18-40a5-bfb0-5b35d2398663/weather.png",
        content: "Typical weather is warm and dry; check forecast before arrival for latest updates."
    }
];

const galleryimages = [
    {
        img: "https://q0hao2iwgg.ucarecd.net/c43fa468-d3e5-4cb5-8273-35d7d9e18a69/sample2.jpg",
        title: "Image 1"
    },
    {
        img: "https://q0hao2iwgg.ucarecd.net/4717df11-98a7-4f88-8a6f-ce4e09fb85d0/sample1.jpg",
        title: "Image 2"    
    },
    {
        img: "https://q0hao2iwgg.ucarecd.net/d0d038c1-675c-4b77-9b09-8cbb99e15f3e/sample6.jpg",
        title: "Image 3"
    },
    {
        img: "https://q0hao2iwgg.ucarecd.net/14aefdc8-9bec-4d5a-a03c-90ec849c1f1b/sample5.jpg",
        title: "Image 4"
    },
    {
        img: "https://q0hao2iwgg.ucarecd.net/eac6b500-ca66-4f05-9701-b009cbfc8b3d/sample3.jpg",
        title: "Image 5"
    },
    {
        img: "https://q0hao2iwgg.ucarecd.net/c43fa468-d3e5-4cb5-8273-35d7d9e18a69/sample2.jpg",
        title: "Image 6"
    },
    {
        img: "https://q0hao2iwgg.ucarecd.net/c43fa468-d3e5-4cb5-8273-35d7d9e18a69/sample2.jpg",
        title: "Image 6"
    }
];

const previewimages = galleryimages.slice(0,8)

function Home() {
    const [openindex, setopoenindex] = useState(null);      
    const [weatherdata, setweatherdata] = useState(null);

    useEffect(() => {
        if (openindex === 3){
            const apiKey = "797b9efa832c532fdf300f51cfe8d4a8";
            const city = "Jawai Bandh";
            fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city},IN&appid=${apiKey}&units=metric`
            )  
            .then((res) => res.json())   
            .then((data) => setweatherdata(data))
            .catch(() => setweatherdata(null));
        }
    },[openindex]);

    return(
        <div>
            <section className={Styles.hero}>
                    <img src="https://q0hao2iwgg.ucarecd.net/2faaa8c3-9ed5-44c0-8147-4faa401ac8e4/herosection.png" alt="heroImage" />
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
                <a href="/safaris"><h1>Experiences</h1></a>
                <div className={Styles.cards}>
                    <div className={Styles.card}>
                        <img src="https://q0hao2iwgg.ucarecd.net/4a886a46-35a1-46da-a603-0ad9028202aa/logo4.png" alt="card1"/>
                        <div className={Styles.cardcontent}>
                            <h2>8 to 8 Safari</h2>
                            <p>Experience the thrill of an 8 to 8 safari, 
                                where you can immerse yourself in the wild from dawn till dusk.
                            </p>
                            <button>Book Now</button>
                        </div>
                    </div>
                    <div className={Styles.card}>
                        <img src="https://q0hao2iwgg.ucarecd.net/c9eece5a-e81f-473d-af19-56b68e03b4e0/logo3.png" alt="card2"/>
                        <div className={Styles.cardcontent}>
                            <h2>Morning Safari</h2>
                            <p>Experience the Beauty of Sunrise in Hilly terrain of Jawai.</p>
                            <button>Book Now</button>
                        </div>
                    </div>
                    <div className={Styles.card}>
                        <img src="https://q0hao2iwgg.ucarecd.net/c9eece5a-e81f-473d-af19-56b68e03b4e0/logo3.png" alt="card2"/>
                        <div className={Styles.cardcontent}>
                            <h2>Morning Safari</h2>
                            <p>Experience the Beauty of Sunrise in Hilly terrain of Jawai.</p>
                            <button>Book Now</button>
                        </div>
                    </div>
                    <div className={Styles.card}>
                        <img src="https://q0hao2iwgg.ucarecd.net/c9eece5a-e81f-473d-af19-56b68e03b4e0/logo3.png" alt="card2"/>
                        <div className={Styles.cardcontent}>
                            <h2>Morning Safari</h2>
                            <p>Experience the Beauty of Sunrise in Hilly terrain of Jawai.</p>
                            <button>Book Now</button>
                        </div>
                    </div>
                    <div className={Styles.card}>
                        <img src="https://q0hao2iwgg.ucarecd.net/c9eece5a-e81f-473d-af19-56b68e03b4e0/logo3.png" alt="card2"/>
                        <div className={Styles.cardcontent}>
                            <h2>Morning Safari</h2>
                            <p>Experience the Beauty of Sunrise in Hilly terrain of Jawai.</p>
                            <button>Book Now</button>
                        </div>
                    </div>
                    <div className={Styles.card}>
                        <img src="https://q0hao2iwgg.ucarecd.net/c9eece5a-e81f-473d-af19-56b68e03b4e0/logo3.png" alt="card2"/>
                        <div className={Styles.cardcontent}>
                            <h2>Morning Safari</h2>
                            <p>Experience the Beauty of Sunrise in Hilly terrain of Jawai.</p>
                            <button>Book Now</button>
                        </div>
                    </div>
                    <div className={Styles.card}>
                        <img src="https://q0hao2iwgg.ucarecd.net/c9eece5a-e81f-473d-af19-56b68e03b4e0/logo3.png" alt="card2"/>
                        <div className={Styles.cardcontent}>
                            <h2>Morning Safari</h2>
                            <p>Experience the Beauty of Sunrise in Hilly terrain of Jawai.</p>
                            <button>Book Now</button>
                        </div>
                    </div>
                    <div className={Styles.card}>
                        <img src="https://q0hao2iwgg.ucarecd.net/c9eece5a-e81f-473d-af19-56b68e03b4e0/logo3.png" alt="card2"/>
                        <div className={Styles.cardcontent}>
                            <h2>Morning Safari</h2>
                            <p>Experience the Beauty of Sunrise in Hilly terrain of Jawai.</p>
                            <button>Book Now</button>
                        </div>
                    </div>
                    <div className={Styles.card}>
                        <img src="https://q0hao2iwgg.ucarecd.net/c9eece5a-e81f-473d-af19-56b68e03b4e0/logo3.png" alt="card2"/>
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
                            {/* For Weather modal, show weather data */}
                            {openindex === 3 ? (
                                weatherdata ? (
                                    <div>
                                        <p>
                                            <b>Temperature:</b> {weatherdata.main?.temp}°C<br/>
                                            <b>Weather:</b> {weatherdata.weather?.[0]?.main} ({weatherdata.weather?.[0]?.description})<br/>
                                            <b>Humidity:</b> {weatherdata.main?.humidity}%<br/>
                                            <b>Wind:</b> {weatherdata.wind?.speed} m/s
                                        </p>
                                    </div>
                                ) : (
                                    <p>Loading Weather...</p>
                                )
                            ) : (
                                <p>{infodata[openindex].content}</p>
                            )}
                            {/*<p>{infodata[openindex].content}</p>*/}
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
                <h2>Gallery</h2>
                <div className={Styles.galleryrow}>
                    {/*<img src="https://q0hao2iwgg.ucarecd.net/50c0dd8f-7be8-41f0-9c04-84740363b423/logo5.png" alt="example" />
                    <img src="https://q0hao2iwgg.ucarecd.net/f7406a89-6273-489d-9e0d-5eb6ed1be0e7/rates.png" alt="example" />
                    <img src="https://q0hao2iwgg.ucarecd.net/f7406a89-6273-489d-9e0d-5eb6ed1be0e7/rates.png" alt="example" />
                    <img src="https://q0hao2iwgg.ucarecd.net/f7406a89-6273-489d-9e0d-5eb6ed1be0e7/rates.png" alt="example" />
                    <img src="https://q0hao2iwgg.ucarecd.net/f7406a89-6273-489d-9e0d-5eb6ed1be0e7/rates.png" alt="example" />
                    <img src="https://q0hao2iwgg.ucarecd.net/f7406a89-6273-489d-9e0d-5eb6ed1be0e7/rates.png" alt="example" />
                    <img src="https://q0hao2iwgg.ucarecd.net/f7406a89-6273-489d-9e0d-5eb6ed1be0e7/rates.png" alt="example" />
                    */}

                    {previewimages.map((src, idx) => (
                        <img key={idx} src={src.img} alt={`Gallery ${idx + 1}`} />
                    ))}
                    <a href="/gallery"><button>View All</button></a>
                </div>
            </div>
            
            <div className={Styles.lastsection}>
                <div className={Styles.feedback}>
                    <div className={Styles.feedform}>
                        <h2>Share Your Feedback</h2>
                        <input type="text" placeholder="Your Name"/>
                        <textarea type="text" placeholder="Describe Your Experience With Us" rows={10} />
                        <button type="submit">Submit</button>
                    </div>
                    <div className={Styles.feedimage}>
                        <img src="https://q0hao2iwgg.ucarecd.net/f8cf0685-26d3-4029-9224-ef5fb6a89f67/feedback.png" alt="feedback icon" />
                    </div>
                </div>
                <div className={Styles.reachout}>
                    <h2>Reach Out To Us On:</h2>
                    <p><b>Address:</b></p>
                    <br />
                    <p>dasvdsvdsvdvdvdvdsvsd</p>
                    <br />
                    <p><b>Phone:</b></p>
                    <br />
                    <p>+919079731479</p>
                    <br />
                    <p><b>Message us on Whatsapp:</b></p>
                    <a href=""><img src="https://q0hao2iwgg.ucarecd.net/96097892-3c64-4cff-9df6-034fcdaee538/whatsapp.webp" alt="whatsapp" /></a>
                </div>
                 <div className={Styles.fileupload}>
                    <h2>Have You Travelled With Us!</h2>
                    <br />
                    <p><b>Share Your Moments With Us</b></p>
                    <br />
                    <div>
                        <FileUploaderRegular
                            sourceList="local, facebook, gdrive"
                            classNameUploader="uc-light"
                            pubkey="1203ae650b6f89e1fbe2"
                            onCommonUploadSuccess={(e) =>
                                console.log(
                                    "Uploaded files URL list",
                                    e.detail.successEntries.map((entry) => entry.cdnUrl)
                                )
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;