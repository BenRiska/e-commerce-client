import React, {useContext} from 'react'
import "../../styles/Cart/CartSummary.css"
import { AuthContext } from '../../context/auth';
import {Link} from "react-router-dom"

function CartSummary() {

    const {cart} = useContext(AuthContext)

    const calculateTotal = () => {

        let total = 0;

        cart?.products?.forEach(element => {
           total += parseFloat(element.price)
        });

        return total.toString()
    }

    return (
        <div className="cartSummary">
            <h1>Cart Totals</h1>
            <div className="cartSummary__row">
                <h2>Subtotal</h2>
                <p>
                    £{calculateTotal()}
                </p>
            </div>
            <div className="cartSummary__row">
                <h2>Shipping</h2>
                <p>
                    <span>Free Shipping</span>
                    <span>Shipping to FERMO</span>
                </p>
            </div>
            <div className="cartSummary__row">
                <h2>Total</h2>
                <p>
                    £{calculateTotal()}
                </p>
            </div>
            <Link to="/checkout">PROCEED TO CHECKOUT</Link>
        </div>
    )
}

export default CartSummary
