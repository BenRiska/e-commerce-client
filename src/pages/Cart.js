import React, {useContext} from 'react'
import "../styles/Cart/Cart.css"
import { AuthContext } from '../context/auth';
import CloseIcon from '@material-ui/icons/Close';
import CartSummary from '../components/Cart/CartSummary';
import {useMutation } from '@apollo/react-hooks';
import {DELETE_CART_PRODUCT} from "../utils/queries"


function Cart() {

    const {cart, removeFromCart} = useContext(AuthContext)

    const [deleteCartProduct] = useMutation(DELETE_CART_PRODUCT, {
        update(_,{data: {deleteCartProduct: cart}}){
            removeFromCart(cart)
        },
        onError(err){console.log(err)}
    })

    const executeDeleteCartProduct = (product) => {
        deleteCartProduct({variables: {cartId: cart.id, productId: product.id}})
    }

    return (
        <div className="cart">
            <table>
                <thead className="table-header">
                    <tr>
                        <th></th>
                        <th></th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Size</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {cart?.products?.map(item => 
                    <tr key={item.id + Math.random() * 100}>
                        <td className="row-remove"><CloseIcon 
                        onClick={() => executeDeleteCartProduct(item)} className="deleteBtn" style={{color: "red"}}/></td>
                        <td className="row-image"><img src={item.images[0]} alt="product"/></td>
                        <td className="row-name">{item.name}</td>
                        <td className="row-price">£{item.price}</td>
                        <td className="row-Size">{item.size}</td>
                        <td className="row-subtotal">£{item.price}</td>
                    </tr>)}
                </tbody>
            </table>
            <CartSummary/>
        </div>
    )
}

export default Cart
