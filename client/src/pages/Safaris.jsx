import React, { useState } from 'react';
import Styles from './safaris.module.css'
import card1 from '../assets/images/logo(4).png';

const safaridetails = [ 
    {title : "8 To 8 Safari",
    img : "https://q0hao2iwgg.ucarecd.net/4a886a46-35a1-46da-a603-0ad9028202aa/logo4.png",
    details : `Discover luxury safari experiences at Neela Safari.

                Experience the thrill of an 8 to 8 safari, where you can immerse yourself in the wild from dawn till dusk.

                Experience the thrill of an 8 to 8 safari, where you can immerse yourself in the wild from dawn till dusk.

                Experience the thrill of an 8 to 8 safari, where you can immerse yourself in the wild from dawn till dusk.

                Experience the thrill of an 8 to 8 safari, where you can immerse yourself in the wild from dawn till dusk.
            `
    }
];

function Safaris(){
    const [modalindex, setmodalindex] = useState(null);
    return(
        <div className={Styles.services}>
            <h1>Our Safaris</h1>
            <p>Discover luxury safari experiences at Neela Safari.</p>
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
            )}
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
    );
}

export default Safaris;