import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./navbar.module.css";
{/*import logo from "../assets/images/logo(2).png";*/}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <a href="/"><h2>THE NEELA SAFARI</h2>{/*<img src="https://q0hao2iwgg.ucarecd.net/c1e6d524-2091-4f10-b423-b0f1f2122032/neelajawaisafari.png" alt="Logo" />*/}</a>
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
