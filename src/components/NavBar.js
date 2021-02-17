import React, {useState} from 'react'
import "../styles/NavBar.css"
import SearchIcon from '@material-ui/icons/Search'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

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
        console.log("hit")
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
                <p>Home</p>
            </div>
            <ul>
                <li>Shop</li>
                <li>Sale</li>
                <li>Contact</li>
                <li>Brand</li>
                <li>Video</li>
                <li>Events</li>
                <li>Agents</li>
                <li>Stores</li>
                <li>Contact</li>
            </ul>
            <div className="dropdown__column">
                <div className="column__container">
                <span>Facebook</span>
                <span>Instagram</span>
                </div>
            </div>
        </div>
        <div className="navbar">
            <div className="navbar__left">
                <a className="navbar__logo" href="/">Bens Store</a>
                <nav>
                    <ul className="navbar__left-items">
                        <li>Shop</li>
                        <li>Sale</li>
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
                        <li>Brand</li>
                        <li>Contact</li>
                    </ul>
                </nav>
                <nav>
                    <ul className="shopping__menu">
                        <li><SearchIcon/></li>
                        <li><ExitToAppIcon/></li>
                        <li><ShoppingBasketIcon/></li>
                    </ul>
                </nav>
            </div>
        </div>
        </>
    )
}

export default NavBar
