import { Link } from "react-router-dom";
import styles from "./footer.module.css";
{/*import insta from "../assets/images/insta.png";
import fb from "../assets/images/fb.png";*/}

function Footer(){
    return(
        <footer className={styles.footer}>
            <div className={styles.links}>
                <p>Quick Links:</p>
                <Link to="/termsconditions">Terms & Conditions</Link>
                <Link to="/privacypolicy">Privacy Policy</Link>
            </div>
            <div className={styles.socials}>
                <p>Reach Out On:</p>
                <div>
                    <a href="https://www.instagram.com/neela_safari/" target="_blank"><img src="https://g9xx1jeksl.ucarecd.net/1c2788e2-833f-4d39-9ccd-ea73967fc4b9/insta.png" alt="insta" /></a>
                </div>
            </div>
            <p>© {new Date().getFullYear()} NEELA SAFARI. All rights reserved.</p>
        </footer>
    );
}

export default Footer;