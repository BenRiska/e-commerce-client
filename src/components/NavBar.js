import React, {useState} from 'react'
import "../styles/NavBar.css"
import SearchIcon from '@material-ui/icons/Search'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from "react-router-dom"

function NavBar() {

    const [navState, setNavState] = useState(false)

    const openNav = () => {
        const nav = document.querySelector(".dropdown__navbar");
        const line1 = document.querySelector(".line-1");
        const line2 = document.querySelector(".line-2");
        const line3 = document.querySelector(".line-3");
        nav.style.animation = "0.3s ease-in-out 0s 1 normal forwards running dropdown-container-appear"
        line1.style.animation = "0.5s cubic-bezier(0.25, 0.8, 0.25, 1) 0s 1 normal forwards running hamburger-line-1"
        line2.style.animation = "0.5s cubic-bezier(0.25, 0.8, 0.25, 1) 0s 1 normal forwards running hamburger-line-2"
        line3.style.animation = "0.5s cubic-bezier(0.25, 0.8, 0.25, 1) 0s 1 normal forwards running hamburger-line-3"
        setNavState(true)
    }

    const closeNav = () => {
        const nav = document.querySelector(".dropdown__navbar");
        const line1 = document.querySelector(".line-1");
        const line2 = document.querySelector(".line-2");
        const line3 = document.querySelector(".line-3");
        nav.style.animation = "1s cubic-bezier(0.25, 0.8, 0.25, 1) 0s 1 normal forwards running dropdown-container-disappear"
        line1.style.animation = "0.5s cubic-bezier(0.25, 0.8, 0.25, 1) 0s 1 normal forwards running hamburger-line-1-reverse"
        line2.style.animation = "0.5s cubic-bezier(0.25, 0.8, 0.25, 1) 0s 1 normal forwards running humberger-line-2-reverse"
        line3.style.animation = "0.5s cubic-bezier(0.25, 0.8, 0.25, 1) 0s 1 normal forwards running hamburger-line-3-reverse"
        setNavState(false)
    }

    return (
        <>
        <div className="dropdown__navbar">
            <div className="dropdown__column">
                <Link onClick={closeNav} to="/">Home</Link>
            </div>
            <ul>
                <li><Link onClick={closeNav} to="/shop">Shop</Link></li>
                <li><Link style={{color: "#cb0000"}} onClick={closeNav} to="/shop">Sale</Link></li>
                <li><Link onClick={closeNav} to="/cart">Cart</Link></li>
                <li><Link onClick={closeNav} to="/error">Brand</Link></li>
                <li><Link onClick={closeNav} to="/error">Video</Link></li>
                <li><Link onClick={closeNav} to="/error">Events</Link></li>
                <li><Link onClick={closeNav} to="/error">Agents</Link></li>
                <li><Link onClick={closeNav} to="/error">Stores</Link></li>
                <li><Link onClick={closeNav} to="/error">Contact</Link></li>
            </ul>
            <div className="dropdown__column">
                <div className="column__container">
                <Link onClick={closeNav} to="/error">Facebook</Link>
                <Link onClick={closeNav} to="/error">Instagram</Link>
                </div>
            </div>
        </div>
        <div className="navbar">
            <div className="navbar__left">
                <Link className="navbar__logo" to="/">Bens Store</Link>
                <nav>
                    <ul className="navbar__left-items">
                        <li><Link to="/shop">Shop</Link></li>
                        <li><Link to="/shop">Sale</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="navbar__middle">
                <div 
                className="navbar__hamburger"
                onClick={() => {
                    navState ? closeNav() : openNav()
                }}
                >
                    <span className="line-1"></span>
                    <span className="line-2"></span>
                    <span className="line-3"></span>
                </div>
            </div>
            <div className="navbar__right">
                <nav>
                    <ul className="navbar__right-items">
                        <li><Link to="/error">Brand</Link></li>
                        <li><Link to="/error">Contact</Link></li>
                    </ul>
                </nav>
                <nav>
                    <ul className="shopping__menu">
                        <li><Link to="/error"><SearchIcon/></Link></li>
                        <li><Link to="/error"><ExitToAppIcon/></Link></li>
                        <li><Link to="/cart"><ShoppingBasketIcon/></Link></li>
                    </ul>
                </nav>
            </div>
        </div>
        </>
    )
}

export default NavBar
