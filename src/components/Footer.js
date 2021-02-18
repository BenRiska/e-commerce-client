import React from 'react'
import {Link} from "react-router-dom"
import "../styles/Footer.css"

function Footer() {
    return (
        <div className="footer">
            <div className="footer__links">
                <Link to="/error">Terms and Conditions</Link>
                <p className="footer__seperator">/</p>
                <Link to="/error">Terms of Sale</Link>
                <p className="footer__seperator">/</p>
                <Link to="/error">returns</Link>
                <p className="footer__seperator">/</p>
                <Link to="/error">privacy policy</Link>
                <p className="footer__seperator">/</p>
                <Link to="/error">cookie policy</Link>
            </div>
            <div className="footer__socials">
            <Link to="/error">Facebook</Link>
            <span className="footer__seperator">/</span>
            <Link to="/error">Instagram</Link>
            </div>
            <div className="footer__disclaimer">
                <p>© BEN'S SHOP srl - 01916310442</p>
                <img src="https://www.fru.it/site/wp-content/themes/fruit2020/img/awd_agency_logo.svg" alt="footer icon"/>
            </div>
        </div>
    )
}

export default Footer
