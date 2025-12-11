import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./navbar.module.css";
{/*import logo from "../assets/images/logo(2).png";*/}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <Link to="/"><img src="https://g9xx1jeksl.ucarecd.net/b0d84ab9-31ee-45eb-81a5-525c8f5bc184/neelasafari.png" alt="logo" /></Link>
      <button onClick={() => setOpen(!open)} className={styles.hamburger}>
        &#9776;
      </button>
      <div className={`${styles.links} ${open ? styles.open : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/safaris" onClick={() => setOpen(false)}>Safaris</Link>
        <Link to="/gallery" onClick={() => setOpen(false)}>Gallery</Link>
        <Link to="/about" onClick={() => setOpen(false)}>About</Link>
        <Link to="/booknow" onClick={() => setOpen(false)}>Book Now</Link>
      </div>
    </nav>
  );
}

export default Navbar;
