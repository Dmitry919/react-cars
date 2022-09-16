import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import styles from "./navBar.module.css";
import logo from '../../images/logo2.png'

const NavBar = () => {
    
    const [nav, setNav] = useState(false)
    console.log(nav)
    console.log(styles)
    return (
        <div className={styles.navbar}>
            <img className={styles.img_logo} src={logo} alt="/" />
            <nav>
                <ul className={nav ? [styles.menu, styles.active].join(' ') : [styles.menu]}>
                    <li>
                        <a href="/">Learn More</a>
                    </li>
                    <li>
                        <a href="/">Log in</a>
                    </li>
                    <li>
                        <a href="/">Sign up</a>
                    </li>
                    <li>
                        <AiOutlineSearch size={25} style={{marginTop: '6px'}} />
                    </li>
                    <li>
                        <AiOutlineUser size={25} style={{marginTop: '6px'}} />
                    </li>
                </ul>
            </nav>
            <div onClick={() => setNav(!nav)} className={styles.car_btn}>
                {nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/>}
            </div>
        </div>
    );
};

export default NavBar;
