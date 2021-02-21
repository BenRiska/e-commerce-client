import React from 'react'
import "../styles/Checkout/Checkout.css"
import {Link} from "react-router-dom"

function Checkout() {
    return (
        <div className="checkout">
            <div>
                <p>Returning customer? <Link>Click here to login</Link></p>
            </div>
            <form>
                <h2>Billing Details</h2>
                <label>First Name <span>*</span></label>
                <input type="text"/>
                <label>Last Name <span>*</span></label>
                <input type="text"/>
                <label>Country / Region <span>*</span></label>
                <select>
                    <option value="earth">Earth</option>
                </select>
                <label>Street Address <span>*</span></label>
                <input type="text"/>
                <label>Postcode / ZIP <span>*</span></label>
                <input type="text"/>
                <label>Town / City <span>*</span></label>
                <input type="text"/>
                <label>Phone <span>*</span></label>
                <input type="number"/>
                <label>Email <span>*</span></label>
                <input type="email"/>
                <label>Order Notes <span>*</span></label>
                <input type="text"/>
                <div className="checkout__payment-select">

                </div>
                <button>PROCEED TO PAYPAL</button>
            </form>
        </div>
    )
}

export default Checkout
