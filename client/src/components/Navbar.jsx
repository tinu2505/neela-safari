import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./navbar.module.css";
{/*import logo from "../assets/images/logo(2).png";*/}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <a href="/"><img src="https://q0hao2iwgg.ucarecd.net/8d119331-fadd-4652-a47c-1bc84135b0d5/logo2.png" alt="Logo" /></a>
      <button onClick={() => setOpen(!open)} className={styles.hamburger}>
        &#9776;
      </button>
      <div className={`${styles.links} ${open ? styles.open : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/safaris">Safaris</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/about">About</Link>
        <Link to="/booknow">Book Now</Link>
      </div>
    </nav>
  );
}

export default Navbar;
