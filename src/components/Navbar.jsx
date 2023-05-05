import { useState } from "react";
import style from "../Styles/Navbar.module.scss"
import { Link } from "react-router-dom";
function Navbar({ children }) {
    const [open, setOpen] = useState(false);
    return (
        <nav className={style.navbar}>
            <h1>{children}</h1>
            <div className={style.menu} onClick={() => { setOpen(!open) }} >
                <div></div>
                <div></div>
                <div></div>
            </div>
            {open && (
                <div className={style.dropdown}>
                    <li><Link to="/home" onClick={() => setOpen(false)}>home</Link></li>
                    <li><Link to="/courts" onClick={() => setOpen(false)}>courts</Link></li>
                    <li><Link to="/members" onClick={() => setOpen(false)}>members</Link></li>
                    <li><Link to="/myaccount" onClick={() => setOpen(false)}>my account</Link></li>
                    <li><Link to="/" onClick={() => setOpen(false)}>log out</Link></li>
                </div>
            )}
        </nav>);
}

export default Navbar;




