import React from 'react'
import "../../styles/Shop/ProductFilter.css"

function ProductFilter({categories, setSelectedCategory}) {
    return (
        <div className="productFilter">
            <ul>
                {categories?.map(({name, id}) => 
                <li
                 onClick={() => setSelectedCategory(name)}
                 key={id}>
                     {name}
                </li>)}
            </ul>
        </div>
    )
}

export default ProductFilter
