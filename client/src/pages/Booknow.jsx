import Styles from './booknow.module.css';

function Booknow() {
    return(
        <div className={Styles.booknow}>
            <h1>Book Now</h1>
            <h3>To Book Safari:</h3>
                <div className={Styles.options}>
                    <div className={Styles.call}>
                        <img src="https://q0hao2iwgg.ucarecd.net/ac550ffe-b7f8-44d5-bdf7-ee2ef362ca6c/call.jpg" alt="call" />
                        <p>Call Us:- +919079731479</p>
                    </div>
                    <div className={Styles.whatsapp}>
                        <a href="https://wa.me/+918955698133?text=Hello%20I%20want%20to%20book%20a%20safari" target="_blank"><img src="https://q0hao2iwgg.ucarecd.net/a1fa153c-5d32-4359-9c51-4bfe485f160d/whatsapp.webp" alt="whatsapp" /></a>
                        <p>WhatsApp Us:- +918955698133</p>
                    </div>
                </div>
        </div>
    );
}

export default Booknow;