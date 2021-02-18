import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import "../styles/Shop/Shop.css"
import {FETCH_CATEGORIES} from "../utils/queries"

function Shop() {

    const { loading,error, data: { fetchCategories: categories } = {}} = useQuery(FETCH_CATEGORIES)

    return (
        <div className="shop">
            <h1>shop</h1>
        </div>
    )
}

export default Shop
