import React, {useContext} from 'react'
import "../styles/Checkout/Checkout.css"
import {Link} from "react-router-dom"
import { AuthContext } from '../context/auth';
import { useMutation } from '@apollo/react-hooks';
import {CREATE_ORDER} from "../utils/queries"

function Checkout(props) {

    const {user, cart} = useContext(AuthContext)

    const calculateTotal = () => {

        let total = 0;

        cart.forEach(element => {
            console.log(element.price)
           total += parseFloat(element.price)
        });

        return total.toString()
    }

    const [createOrder] = useMutation(CREATE_ORDER, {
        update(
          _,
          {
            data: { createOrder: orderData }
          }
        ) {
          props.history.push(`/order/${orderData.id}`);
        },
        onError(err) {
          console.log(err)
        },
        variables: {cartInput: {paypalId: Math.random() * 1000, cartItems: cart}}
      });

    return (
        <div className="checkout">
            {!user && <div className="checkout__login-prompt">
                <p>Returning customer? <Link to="/login">Click here to login</Link></p>
            </div>}
            <form className="checkout__form">
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
                <label>Order Notes</label>
                <input type="text"/>
                <div className="checkout__payment-summary">
                    <h2>Your Order</h2>
                    <div className="summary__header">
                        <p>Product</p>
                        <p>Subtotal</p>
                    </div>
                    {cart.map(item => 
                    <div key={item.id}>
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                    </div>)}
                    <div>
                        <p>Subtotal</p>
                        <p>£{calculateTotal()}</p>
                    </div>
                    <div>
                        <p>Shipping</p>
                        <p>Free</p>
                    </div>
                    <div>
                        <p>Total</p>
                        <p>£{calculateTotal()}</p>
                    </div>
                </div>
                <div className="checkout__payment-select">

                </div>
                <div className="checkout__payment-confirm">
                    <div>
                        <p>I have read and agree to the website terms and conditions *</p>
                    </div>
                    <button onClick={(e) => {
                        e.preventDefault()
                        createOrder()
                        }}>PROCEED TO PAYPAL</button>
                </div>
            </form>
        </div>
    )
}

export default Checkout
