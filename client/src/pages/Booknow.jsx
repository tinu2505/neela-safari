import Styles from './booknow.module.css';

function Booknow() {
    return(
        <div className={Styles.booknow}>
            <h1>Book Now</h1>
            <h3>To Book Safari:</h3>
                <div className={Styles.options}>
                    <div className={Styles.call}>
                        <img src="https://g9xx1jeksl.ucarecd.net/d840b8d7-3842-4838-8ace-9b2b2cd6ab5c/call.jpg" alt="call" />
                        <p>Call Us:- +919079731479</p>
                    </div>
                    <div className={Styles.whatsapp}>
                        <a href="https://wa.me/+918955698133?text=Hello%20I%20want%20to%20book%20a%20safari" target="_blank"><img src="https://g9xx1jeksl.ucarecd.net/9f2fdb17-84cd-4068-bc4c-30534133b107/whatsapp.webp" alt="whatsapp" /></a>
                        <p>WhatsApp Us:- +918955698133</p>
                    </div>
                </div>
        </div>
    );
}

export default Booknow;