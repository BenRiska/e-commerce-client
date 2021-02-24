import React, {useState, useContext} from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks';
import {useParams} from 'react-router-dom';
import {FETCH_PRODUCT, ADD_PRODUCT} from "../utils/queries"
import "../styles/Product/Product.css"
import { AuthContext } from '../context/auth';

function Product(props) {

    const { setCart, cart } = useContext(AuthContext);

    const [size, setSize] = useState(null)

    const {id} = useParams()

    const { loading,error, data: { fetchProduct: product } = {}} = useQuery(FETCH_PRODUCT, {variables: {id}})

    const [addProduct] = useMutation(ADD_PRODUCT, {
        update(_,{data: {addProduct: newCart}}){
            setCart(newCart)
            props.history.push("/cart")
        },
        onError(err){console.log(err)}
    })

    const executeAddProduct = (product) => {
        if(size){
            if(cart){
                addProduct({variables: {
                    productId: product.id, 
                    cartId: cart.id, 
                    size,
                    quantity: 1
                }})
            } else{
                console.log(product.id)
                addProduct({variables: {
                    productId: product.id,
                    cartId: "",
                    size,
                    quantity: 1
                }})
            }
        } else {
            alert("Please select a size first.")
        }
    }

    // const addItem = (newItem) => {
    //     if(size){
    //         newItem.size = size
    //         addToCart(newItem)
    //     } else{
    //         alert("Please select a size first.")
    //     }
    // }

    return (
        <div className="product">
            <div className="product__images">
                {product?.images.map(image => 
                <img key={image + Math.random()} src={image} alt="product"/>
                )}
            </div>
            <div className="product__info">
                    <div className="product__description">
                        <span>Home / SHOP / {product?.name}</span>
                        <h2>{product?.name}</h2>
                        <p>{product?.description}</p>
                    </div>
                    <div className="product__select">
                        <div className="select__column">
                            <ul className="select__sizes">
                                {product?.sizes.map(i => 
                                <li style={{backgroundColor: size === i ?"black" : "initial", color: size === i ? "white": "black"}} onClick={() => setSize(i)} key={i}>{i}</li>
                                )}
                            </ul>
                            <p className="select__price">{product?.price}</p>
                        </div>
                        <button 
                        onClick={(e) => {
                            e.preventDefault()
                            executeAddProduct(product)
                        }}
                        className="select__button">Add to cart</button>
                    </div>
            </div>
            <div className="product__disclaimer">
                <p>UK: SHIPPING FREE WITHIN 48H.</p>
                <p>YOU CAN RETURN THE PRODUCTS PURCHASED WITHIN 14 DAYS FROM DELIVERY. FOR MORE INFORMATION PLEASE VISIT THE PAGE</p>
                <p>CUSTOMER SERVICE H24 INFO@BENS.SHOP</p>
            </div>
        </div>
    )
}

export default Product
