import React, {useContext} from 'react'
import "../styles/Cart/Cart.css"
import { AuthContext } from '../context/auth';

function Cart() {

    const {cart} = useContext(AuthContext)

    console.log(cart)

    return (
        <div className="cart">
            <table>
                <thead className="table-header">
                    <tr>
                        <th></th>
                        <th></th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(item => 
                    <tr>
                        <td className="row-remove">remove</td>
                        <td className="row-image"><img src={item.images[0]} alt="product"/></td>
                        <td className="row-name">{item.name}</td>
                        <td className="row-price">{item.price}</td>
                        <td className="row-quantity">quantity</td>
                        <td className="row-subtotal">{item.price}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}

export default Cart
