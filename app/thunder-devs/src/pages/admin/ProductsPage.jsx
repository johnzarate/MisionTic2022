import ProductCard from 'components/ProductCard'
import React from 'react'
import { Link } from 'react-router-dom'

const ProductsPage = () => {

    return (
        <section className="flex flex-col items-center h-full w-full m-2">
            <h1 className="text-center font-extrabold text-lg">Products List</h1>
            <Link to="/admin/products/create">
            <button className="bg-green-400 material-icons"><span class="material-icons-outlined">
add_circle
</span></button>
            </Link>
            <ul className="flex flex-wrap p-4">
                <ProductCard product={{name:"hola", image:"https://d2gdtie5ivbdow.cloudfront.net/media/user/images/sanjay_tailwind_cards.png"}}/>
                <ProductCard product={{name:"martin", image:"https://d2gdtie5ivbdow.cloudfront.net/media/user/images/sanjay_tailwind_cards.png"}}/>
            </ul>
        </section>
    )
}

export default ProductsPage

