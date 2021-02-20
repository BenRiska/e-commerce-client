import React from 'react'
import "../../styles/Shop/ProductFilter.css"
import { useMutation } from '@apollo/react-hooks';
import {FILTER_BY_CATEGORY, FETCH_PRODUCTS} from "../../utils/queries"

function ProductFilter({categories}) {

    const [filterByCategory] = useMutation(FILTER_BY_CATEGORY, {
        update(proxy, result){
            proxy.writeQuery({
                query: FETCH_PRODUCTS,
                data: {fetchProducts: result.data.filterByCategory}
            })
        },
        onError(err) {
            alert(err)
          },
    })


    

    return (
        <div className="productFilter">
            <ul>
                {categories?.map(({name, id}) => 
                <li
                 onClick={() => filterByCategory({variables: {categoryId: id}})}
                 key={id}>
                     {name}
                </li>)}
            </ul>
        </div>
    )
}

export default ProductFilter
