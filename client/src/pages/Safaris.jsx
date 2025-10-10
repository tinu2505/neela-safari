import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Styles from './safaris.module.css'
{/*import card1 from '../assets/images/logo(4).png';*/}

const safaridetails = [ 
    {title : "Morning Safari",
    img : "https://q0hao2iwgg.ucarecd.net/4a886a46-35a1-46da-a603-0ad9028202aa/logo4.png",
    content: "Experience the Beauty of Sunrise & Leopards in Hilly terrain of Jawai.",
    details : `Discover luxury safari experiences at Neela Safari.

                Experience the thrill of an 8 to 8 safari, where you can immerse yourself in the wild from dawn till dusk.
                Experience the thrill of an 8 to 8 safari, where you can immerse yourself in the wild from dawn till dusk.
                Experience the thrill of an 8 to 8 safari, where you can immerse yourself in the wild from dawn till dusk.
                Experience the thrill of an 8 to 8 safari, where you can immerse yourself in the wild from dawn till dusk.
            `
    },
    {title : "Evening Safari",
    img : "https://q0hao2iwgg.ucarecd.net/c9eece5a-e81f-473d-af19-56b68e03b4e0/logo3.png",
    content: "Experience the Beauty of Sunset & Leopards in Hilly terrain of Jawai.",
    details : `Discover luxury safari experiences at Neela Safari.  
                
                Experience the thrill of an 8 to 8 safari, where you can immerse yourself in the wild from dawn till dusk.
                Experience the thrill of an 8 to 8 safari, where you can immerse yourself in the wild from dawn till dusk.      
                Experience the thrill of an 8 to 8 safari, where you can immerse yourself in the wild from dawn till dusk.
                Experience the thrill of an 8 to 8 safari, where you can immerse yourself in the wild from dawn till dusk.
            `
    },
    {title : "Full Day Safari",
    img : "https://q0hao2iwgg.ucarecd.net/a8926cd9-c55e-44b4-aff8-cc7cdec15676/maps.png",
    content: "Experience the Beauty of Sunrise & Sunset & Leopards in Hilly terrain of Jawai.",
    details : `Discover luxury safari experiences at Neela Safari.  
                Experience the thrill of an 8 to 8 safari, where you can immerse yourself in the wild from dawn till dusk.
                Experience the thrill of an 8 to 8 safari, where you can immerse yourself in the wild from dawn till dusk.
                Experience the thrill of an 8 to 8 safari, where you can immerse yourself in the wild from dawn till dusk.
                Experience the thrill of an 8 to 8 safari, where you can immerse yourself in the wild from dawn till dusk.
            `
    },
    {title : "Night Safari",
    img : "https://q0hao2iwgg.ucarecd.net/96097892-3c64-4cff-9df6-034fcdaee538/whatsapp.webp",
    content: "Experience the thrill of a Night Safari in the wild of Jawai.",
    details : `Discover luxury safari experiences at Neela Safari.
        
                Experience the thrill of an 8 to 8 safari, where you can immerse yourself in the wild from dawn till dusk.
                Experience the thrill of an 8 to 8 safari, where you can immerse yourself in the wild from dawn till dusk.
                Experience the thrill of an 8 to 8 safari, where you can immerse yourself in the wild from dawn till dusk.          
                Experience the thrill of an 8 to 8 safari, where you can immerse yourself in the wild from dawn till dusk.
            `
    },

];

function Safaris(){
    const [modalopen, setmodalopen] = useState(null);
    const navigate = useNavigate();
    return(
        <div className={Styles.services}>
            <h1>Our Safaris</h1>
            <p>Discover luxury safari experiences at Neela Safari.</p>
            <div className={Styles.cards}>
                {safaridetails.map((item, idx) => (
                    <div className={Styles.card} key={item.title}>
                        <img src={item.img} alt={item.title} />
                        <div className={Styles.cardcontent}>
                            <h2>{item.title}</h2>
                            <p>{item.content}</p>
                            <button onClick={() => setmodalopen(idx)}>Know More</button>
                        </div>
                    </div>
                ))}

                {modalopen != null && (
                    <div className={Styles.modaloverlay} onClick={() => setmodalopen(null)}>
                        <div className={Styles.modal} onClick={e => e.stopPropagation()}>
                            <h3>{safaridetails[modalopen].title}</h3>
                            <ul>
                                {safaridetails[modalopen].details
                                .split('\n').filter(line => line.trim() !== "")
                                .map((line, idx) => (<li key={idx}>{line.trim()}</li> 
                                ))}
                            </ul>
                            <div className={Styles.modalbuttons}>
                                <button onClick={() => {navigate('/booknow')}}>Book Now</button>
                                <button onClick={() => setmodalopen(null)}>Close</button>
                            </div>
                        </div>
                    </div>
                )}

            {/*</div>
            <div className={Styles.cards}>
                {safaridetails.map((safari, idx) => (
                    <div className={Styles.card} key={safari.title}>
                        <img src={safari.img} alt={safari.title}/>
                        <h2>{safari.title}</h2>
                        <p>{safari.details.slice(0, 80) + "..."}</p>
                        <button onClick={() => setmodalindex(idx)}>Book Now</button>
                    </div>
                ))}
            </div>
            {modalindex != null && (
                <div className={Styles.modaloverlay} onClick={() => setmodalindex(null)}>
                    <div className={Styles.modal} onClick={e => e.stopPropagation()}>
                        <img src={safaridetails[modalindex].img} alt={safaridetails[modalindex].title} style={{width : "100%", borderRadius: "8px", marginBottom: "10px"}} />
                        <h2>{safaridetails[modalindex].title}</h2>
                        <p style={{whiteSpace: "pre-line"}}>{safaridetails[modalindex].details}</p>
                        <button style={{marginTop: "18px"}}>Book Now</button>
                        <button onClick={() => setmodalindex(null)} style={{marginTop: "10px", background: "#ba8b48"}}>Close</button>
                    </div>
                </div>
            )}*/}
                {/*<div className={Styles.card}>
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
                        <img src={card1} alt="card1"/>
                    <div className={Styles.cardcontent}>
                        <h2>8 to 8 Safari</h2>
                        <p>Experience the thrill of an 8 to 8 safari, 
                            where you can immerse yourself in the wild from dawn till dusk.
                        </p>
                        <button>Book Now</button>
                    </div>
                </div>*/}
            </div>

        </div>
    );
}

export default Safaris;