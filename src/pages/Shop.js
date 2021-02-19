import React, {useState} from 'react'
import { useQuery } from '@apollo/react-hooks';
import "../styles/Shop/Shop.css"
import {FETCH_CATEGORIES, FETCH_PRODUCTS} from "../utils/queries"
import ProductFilter from '../components/Shop/ProductFilter';
import ProductGrid from '../components/Shop/ProductGrid';

function Shop() {

    const [selectedCategory, setSelectedCategory] = useState(null)

    const {data: { fetchCategories: categories } = {}} = useQuery(FETCH_CATEGORIES)

    const { loading,error, data: { fetchProducts: products } = {}} = useQuery(FETCH_PRODUCTS)

    console.log(products)

    return (
        <div className="shop">
            <ProductFilter categories={categories} setSelectedCategory={setSelectedCategory}/>
            <ProductGrid products={products}/>
        </div>
    )
}

export default Shop
