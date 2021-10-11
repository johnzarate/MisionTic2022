import ProductCard from 'components/ProductCard'
import React from 'react'

const ProductsPage = () => {

    return (
        <section className="flex flex-col items-center h-full w-full m-2">
            <h1 className="text-center font-extrabold text-lg">Products List</h1>
            
            <ul className="flex flex-wrap p-4">
                <ProductCard product={{name:"hola", image:"https://d2gdtie5ivbdow.cloudfront.net/media/user/images/sanjay_tailwind_cards.png"}}/>
                <ProductCard product={{name:"martin", image:"https://d2gdtie5ivbdow.cloudfront.net/media/user/images/sanjay_tailwind_cards.png"}}/>
            </ul>
        </section>
    )
}

export default ProductsPage

