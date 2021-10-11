import { useProductToEdit } from 'context/productToEdit'
import React, { useRef } from 'react'

const EditProductPage = () => {
    const { productToEdit, setProductToEdit } = useProductToEdit();
    const formEditProduct = useRef(null);

    const submitEdition = () => {
        setProductToEdit(null);
    }

    return (
        <section className="flex justify-center items-center w-full h-full">

            {
                productToEdit === null ? (
                    window.location.assign('/admin')
                ) : (
                    <form ref={formEditProduct} onSubmit={submitEdition} className="flex flex-col items-center p-4 bg-green-500 shadow-lg">
                        <h1>Edit Product</h1>
                        <input type="text" defaultValue={ productToEdit.name }/>
                        <input type="text" defaultValue={ productToEdit.image }/>
                        <input type="text" />
                        <button className="bg-red-700">Cancel</button>
                        <button className="bg-green-500">Edit</button>
                    </form>
                )
            }

        </section>
    )
}

export default EditProductPage
