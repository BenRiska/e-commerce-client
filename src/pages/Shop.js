import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import "../styles/Shop/Shop.css"
import {FETCH_CATEGORIES, FETCH_PRODUCTS} from "../utils/queries"
import ProductFilter from '../components/Shop/ProductFilter';
import ProductGrid from '../components/Shop/ProductGrid';

function Shop() {

    const {data: { fetchCategories: categories } = {}} = useQuery(FETCH_CATEGORIES)

    const { loading,error, data: { fetchProducts: products } = {}} = useQuery(FETCH_PRODUCTS, {variables: {categoryId: undefined}})

    return (
        <div className="shop">
            <ProductFilter categories={categories}/>
            <ProductGrid products={products}/>
        </div>
    )
}

export default Shop
