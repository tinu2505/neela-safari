import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Styles from './home.module.css';
import Uploadwidget from "../components/Uploadwidget.jsx";
import { use } from "react";
{/*import video from '../assets/images/safari-video.mp4 
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
import leo from '../assets/images/leo.jpg';*/}


const infodata = [
    {
        title : "Maps & Direction",
        img: "https://q0hao2iwgg.ucarecd.net/a8926cd9-c55e-44b4-aff8-cc7cdec15676/maps.png",
        content: "Here are directions-You can reach Neela Safari via this route. Use Google Maps for navigation."
    },
    {
        title: "Need to Know",
        img: "https://q0hao2iwgg.ucarecd.net/956e86d5-02bc-4f3f-8607-ed267d97137c/needtoknow.png",
        content: `Carry a valid Photo ID (e.g., adhaar card, driver's license).
                Your own water bottle.
                Make sure you are dressed appropriately for the weather and terrain.
                Also your health conditions are fine.
                You are advised to follow safety guidelines provided by the safari guides.`
    },
    {
        title: "What to Pack",
        img: "https://q0hao2iwgg.ucarecd.net/a587b94f-9df8-4a54-96b1-10c781cdb08d/packing.png",
        content: `Suggested packing: 
            -lightweight clothing 
            -sun protection 
            -camera 
            -binoculars 
            -sturdy shoes.`
    },
    {
        title: "Weather",
        img: "https://q0hao2iwgg.ucarecd.net/bee43947-ba18-40a5-bfb0-5b35d2398663/weather.png",
        content: "Typical weather is warm and dry; check forecast before arrival for latest updates."
    }
];

const carddetails = [
    {
        img: "https://q0hao2iwgg.ucarecd.net/4a886a46-35a1-46da-a603-0ad9028202aa/logo4.png",
        title: "Morning Safari",
        content: "Experience the Beauty of Sunrise & Leopards in Hilly terrain of Jawai.",
        details : `Discover luxury safari experiences at Neela Safari.`,
        timing: `5AM to 8AM`,
        individuals: `Max 5 Individuals per Gypsy`,
        includes: `Includes High Tea`,
        price: `7000 INR`,
        pickup: `Pickup from Following Locations are Available: `,
        pickuplocations: `
                1. Jodhpur
                2. Udaipur
                3. Ahmedabad
                4. Mount Abu`
    },
    {
        img: "https://q0hao2iwgg.ucarecd.net/4a886a46-35a1-46da-a603-0ad9028202aa/logo4.png",
        title: "Evening Safari"  ,
        content: "Experience the Beauty of Sunset & Leopards in Hilly terrain of Jawai.",
        details : `Discover luxury safari experiences at Neela Safari.`,
        timing: `4PM to 7PM`,
        individuals: `Max 5 Individuals per Gypsy`,
        includes: `Includes High Tea`,
        price: `7000 INR`,
        pickup: `Pickup from Following Locations are Available: `,
        pickuplocations: `
                1. Jodhpur
                2. Udaipur
                3. Ahmedabad
                4. Mount Abu`
    },
    {
        img: "https://q0hao2iwgg.ucarecd.net/4a886a46-35a1-46da-a603-0ad9028202aa/logo4.png",
        title: "Full Day Safari",
        content: "Experience the Beauty of Sunrise & Sunset & Leopards in Hilly terrain of Jawai. Complete 360° experience.",
        details : `Discover luxury safari experiences at Neela Safari.`,
        timing: `5AM to 8PM`,
        individuals: `Max 5 Individuals per Gypsy`,
        includes: `Includes High Tea and Lunch`,
        price: `25000 INR`,
        pickup: `Pickup from Following Locations are Available: `,
        pickuplocations: `
                1. Jodhpur
                2. Udaipur
                3. Ahmedabad
                4. Mount Abu`
    }
];

const heroimages = [ 
    "https://res.cloudinary.com/dbjm1xcza/image/upload/v1764333589/IMG_20230917_115757_efev9g.jpg",
    "https://res.cloudinary.com/dbjm1xcza/image/upload/v1764333588/IMG_20230507_180920_pp80qa.jpg",
    "https://res.cloudinary.com/dbjm1xcza/image/upload/v1763315440/WhatsApp_Image_2025-11-06_at_10.28.16_PM_2_cwi17u.jpg",
    "https://res.cloudinary.com/dbjm1xcza/image/upload/v1763315439/WhatsApp_Image_2025-11-06_at_10.28.12_PM_hshbsc.jpg",
    
];

const reviews = [
    {
        name: "Rahul Chudhary",
        message: "Amazing safari experience, spotted multiple leopards and the team was very professional."
    },
    {
        name: "Abhi Singh",
        message: "Beautiful landscapes, well-organised trips and very friendly staff. Highly recommended!"
    },
    {
        name: "Visvapal Singh",
        message: "A must-visit for wildlife enthusiasts. The guides were knowledgeable and made the experience unforgettable."
    },
    {
        name: "Laxman Meena",
        message: "The Jawai sunrise safari was unforgettable. Great hospitality and safe drives."
    },
];

function Home() {
    const navigate = useNavigate();
    const [openindex, setopoenindex] = useState(null);      
    const [weatherdata, setweatherdata] = useState(null);
    const [modalopen, setmodalopen] = useState(null);
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [currentslide, setcurrentslide] = useState(0);
    const [uploadedImages, setUploadedImages] = useState("");
    const [currentreview, setcurrentreview] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setcurrentslide((prev) => (prev +1) % heroimages.length);
        }, 3000);
        return () => clearInterval(interval); 
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("https://api.neelasafari.com/api/form", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, message, imageUrl: uploadedImages }),
            });
            const data = await res.json();
            if (res.ok) {
            alert("Form submitted successfully");
            setName(""); 
            setMessage("");
            } else {
            alert("Failed to submit form");
            }
        } 
        catch (err) {
            alert("Error submitting form");
        }
    };


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

    useEffect(() => {
        const interval = setInterval(() => {
            setcurrentreview((prev) => (prev + 1) % reviews.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [reviews.length]);

    return(
        <div>
            <section className={Styles.hero}>
                {/*<img src={leo} alt="heroImage" />*/}
                <div className={Styles.slideshow}>
                    {heroimages.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`Slide ${index + 1}`}
                            className={`${Styles.heroslide} ${index === currentslide ? Styles.active : ''}`}
                    />
                    ))}
                </div>
                {/*<div className={Styles.herotext}>
                    <h1>Neela Safari</h1>
                    <p>Experience beautiful sight of LEOPARDS, BIRDS & CROCODILES  of JAWAI Like Never Before!</p>
                </div>*/}
            </section>

            <div className={Styles.intro}>
                <h1>Welcome to The Neela Safari</h1>
                <p>Experience the wild like never before with Neela Safari. 
                    Our expertly guided tours offer an unforgettable journey through the heart of nature, where you can witness majestic wildlife in their natural habitat.
                    Whether you're seeking thrilling adventures or serene landscapes, Neela Safari promises an unparalleled safari experience that will leave you with lasting memories. 
                    Join us and explore the untamed beauty of the wilderness!
                </p>
            </div>

            <div className={Styles.experiences}>
                <Link to="/safaris"><h1>Experiences</h1></Link>
                {/*<div className={Styles.cards}>
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
                </div>*/}
                <div className={Styles.cards}>
                    {carddetails.map((item, idx) => (
                        <div className={Styles.card} key={item.title}>
                            <img src={item.img} alt={item.title}/>
                            <div className={Styles.cardcontent}>
                                <h2>{item.title}</h2>
                                <p>{item.content}</p>
                                <button onClick={() => setmodalopen(idx)}>Know More</button>
                            </div>
                        </div>
                    ))}

                    {modalopen != null && (
                        <div className={Styles.modaloverlay} onclick ={() => setmodalopen(null)}>
                            <div className={Styles.modal} onClick={e => e.stopPropagation()}>
                                <h3>{carddetails[modalopen].title}</h3>
                                <p>{carddetails[modalopen].details}</p>
                                
                                <p><b>Timing:</b> {carddetails[modalopen].timing}</p>
                                <p><b>Individuals:</b> {carddetails[modalopen].individuals}</p>
                                <p><b>Includes:</b> {carddetails[modalopen].includes}</p>
                                <p><b>Price:</b> {carddetails[modalopen].price}</p>
                                <p><b>Pickup:</b> {carddetails[modalopen].pickup}</p> 
                                <p><ul>
                                    {carddetails[modalopen].pickuplocations
                                    .split('\n').filter(line => line.trim() !== "")
                                    .map((line, idx) => (<li key={idx}>{line.trim()}</li> 
                                    ))}
                                </ul></p>
                                <div className={Styles.modalbuttons}>
                                    <button onClick={() => navigate("/booknow")}>Book Now</button>
                                    <button onClick={() => setmodalopen(null)}>Close</button>
                                </div>
                            </div>
                        </div>
                    )}

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
                    <div className={Styles.indexoverlay} onClick={() => setopoenindex(null)}>
                        <div className={Styles.index} onClick={e => e.stopPropagation()}>
                            <h3><b>{infodata[openindex].title}</b></h3>
                            <p>
                                <ul>
                                    {infodata[openindex].content
                                    .split('\n').filter(line => line.trim() !== "")
                                    .map((line, idx) => (<li key={idx}>{line.trim()}</li> 
                                    ))}
                                </ul>
                            </p>
                            {/* For Weather modal, show weather data */}
                            {openindex ===0 ? (
                                <div>
                                    <iframe 
                                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3614.4187514588352!2d73.14038467537715!3d25.053792377803514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDAzJzEzLjciTiA3M8KwMDgnMzQuNyJF!5e0!3m2!1sen!2sin!4v1699432680235!5m2!1sen!2sin" 
                                        width="100%"
                                        height="450"
                                        style={{ border: 0, marginBottom: '35px' }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>
                            ) : (null)}
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
                                null
                            )}
                            {/*<p>{infodata[openindex].content}</p>*/}
                            <button onClick={() => setopoenindex(null)}>Close</button>
                        </div>
                    </div>
                )}
            </div>

            <div className={Styles.gallery}>
                <h2>Gallery</h2>
                <div className={Styles.galleryrow}>
                    {/*<video width="560" height="315" controls>
                        <source src={video} type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/KGT0I42cm2o?si=yWzvce4eGh-Qt0mm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>*/}
                    <img src="https://res.cloudinary.com/dbjm1xcza/image/upload/v1763315439/WhatsApp_Image_2025-11-06_at_10.28.14_PM_2_rpgoty.jpg" alt="" />
                    <img src="https://res.cloudinary.com/dbjm1xcza/image/upload/v1763315439/WhatsApp_Image_2025-11-06_at_10.28.14_PM_1_uxcagq.jpg" alt="" />
                    <img src="https://res.cloudinary.com/dbjm1xcza/image/upload/v1763315440/WhatsApp_Image_2025-11-06_at_10.28.16_PM_1_hletfj.jpg" alt="" />
                    <Link to="/gallery"><p>&gt;</p></Link>
                </div>
            </div>
            
            <div className={Styles.lastsection}>
                <div className={Styles.feedback}>
                    <div className={Styles.feedform}>
                        <h2>Share Your Feedback</h2>
                        <form onSubmit={handleSubmit}>
                            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" required/>
                            <textarea type="text" id="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Describe Your Experience With Us" rows={10} required/>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                    <div className={Styles.fileupload}>
                        <h2>Your Responses!</h2>
                        <div className={Styles.reviewbox}>
                            <h3>Guest Reviews</h3>
                            <div className={Styles.reviewviewport}>
                                {reviews.map((rev, idx) => (
                                    <div key={idx} className={
                                        idx === currentreview 
                                        ? `${Styles.reviewitem} ${Styles.reviewitemactive}`
                                        : `${Styles.reviewitem} ${Styles.reviewitemhidden}`
                                    }>
                                        <p className={Styles.reviewmessage}>"{rev.message}"</p>
                                        <p className={Styles.reviewname}>- {rev.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <br />
                        <p><b>Share Your Moments With Us</b></p>
                        <br />
                        <div>
                            <Uploadwidget onupload={(url) => setUploadedImages((prev) => [...prev, url])} />
                                {uploadedImages && (
                                    <div style={{ marginTop: "10px" }}>
                                        <p>Uploaded Images Preview:</p>
                                        <img src={uploadedImages} alt="Uploaded" style={{ maxWidth: "100%", borderRadius: "8px" }} />
                                    </div>
                                )}
                        </div>
                    </div>
                </div>
                <div className={Styles.reachout}>
                    <h2>Reach Out To Us On:</h2>
                    <p><b>Address:</b></p>
                    <p>343V+H7, Doodni, Rajasthan 306126</p>
                    <br />
                    <p><b>Phone:</b></p>
                    <p>+919079731479</p>
                    <br />
                    <p><b>Message us on Whatsapp:</b></p>
                    <a href="https://wa.me/+918955698133?text=Hello%20I%20want%20to%20book%20a%20safari" target="_blank"><img src="https://q0hao2iwgg.ucarecd.net/96097892-3c64-4cff-9df6-034fcdaee538/whatsapp.webp" alt="whatsapp" /></a>
                </div>
                 
            </div>
        </div>
    );
}

export default Home;