import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./navbar.module.css";
import logo from "../assets/images/logo(2).png";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <a href="/"><img src={logo} alt="Logo" /></a>
      <button onClick={() => setOpen(!open)} className={styles.hamburger}>
        &#9776;
      </button>
      <div className={`${styles.links} ${open ? styles.open : ""}`}>
        <Link to="/safaris">Safaris</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/about">About</Link>
        <Link to="/book">Book Now</Link>
      </div>
    </nav>
  );
}

export default Navbar;
