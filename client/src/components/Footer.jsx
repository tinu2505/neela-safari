import { Link } from "react-router-dom";
import styles from "./footer.module.css";
import insta from "../assets/images/insta.png";
import fb from "../assets/images/fb.png";

function Footer(){
    return(
        <footer className={styles.footer}>
            <div className={styles.links}>
                <p>Quick Links:</p>
                <Link to="/termsconditions">Terms & Conditions</Link>
                <Link to="/privacypolicy">Privacy Policy</Link>
            </div>
            <div className={styles.socials}>
                <p>Follow us on:</p>
                <div>
                    <a href="instagram" target="_blank"><img src={insta} alt="insta" /></a>
                    <a href="facebook" target="_blank"><img src={fb} alt="fb" /></a>
                </div>
            </div>
            <p>© {new Date().getFullYear()} NEELA SAFARI. All rights reserved.</p>
        </footer>
    );
}

export default Footer;