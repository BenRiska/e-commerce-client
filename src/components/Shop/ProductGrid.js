import React from 'react'
import "../../styles/Shop/ProductGrid.css"
import {useHistory} from "react-router-dom"

function ProductGrid({products}) {

    const history = useHistory()
    return (
        <div className="productGrid">
            {products?.map(({id, name, price, sizes, images}) => (
            <div onClick={() => history.push(`/item/${id}`)} className="productCard" key={id}>
                <div className="productCard__header">
                    <h3>{name}</h3>
                    <ul>
                        {sizes.map(size => <li key={size}>{size}</li>)}
                    </ul>
                </div>
                <div className="productCard__image">
                    <img src={images[0]} alt="product"/>
                    <img src={images[1]} alt="product"/>
                </div>
                <div className="productCard__price">
                    <p>£{price}</p>
                </div>
            </div>
            ))}
        </div>
    )
}

export default ProductGrid
