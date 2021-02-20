import React from 'react'
import "../styles/Landing/Landing.css"
import {Link} from "react-router-dom"
import Newsletter from '../components/Landing/Newsletter'

function Landing() {
    return (
        <div className="landing">
            <div className="landing__banner">
                <div className="banner__item">
                    <div>
                        <img src="https://www.fru.it/site/wp-content/themes/fruit2020/img/shop_feb2021.jpg" alt="banner content"/>
                        <div className="banner__overlay">
                            <h2>SHOP</h2>
                            <p>New Collection & Must Have</p>
                            <Link to="/shop">Shop Now</Link>
                        </div>
                    </div>
                </div>
                <div className="banner__item">
                    <div>
                        <img src="https://www.fru.it/site/wp-content/themes/fruit2020/img/sale_feb2021.jpg" alt="banner content"/>
                        <div className="banner__overlay">
                            <h2>SALE</h2>
                            <p>Up to 50% off</p>
                            <Link to="/shop">Shop Now</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="landing__slogan">
                <p>CHARM, HISTORY AND RESEARCH: BEN'S SHOP EMBODIES THE INCOMPARABLE VALUE OF MADE IN LONDON, THROUGH DESIGN AND CREATION OF A WIDE CHOICE OF SHOES FOR DAILY USE.</p>
                <Link to="/">READ MORE</Link>
            </div>
        </div>
    )
}

export default Landing
