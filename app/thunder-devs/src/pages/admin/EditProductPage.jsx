import { useProductToEdit } from 'context/productToEdit'
import React, { useRef, useState } from 'react'
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditProductPage = () => {
    const { productToEdit, setProductToEdit } = useProductToEdit();
    const [redirectToAdmin, setRedirectToAdmin] = useState(false);
    const formEditProduct = useRef(null);

    const submitEdition = (e) => {
        e.preventDefault();
        setTimeout(() => { setProductToEdit(null) }, 2500);
        toast.success('Edit successfully !!!');

    }

    return (
        <section className="flex justify-center items-center w-full h-full">

            {
                (productToEdit === null || redirectToAdmin) ? (
                    < Redirect to='/admin'/>
                ) : (
                    <form ref={formEditProduct} onSubmit={submitEdition} className="flex flex-col items-center p-4 bg-green-500 shadow-lg">
                        <h1>Edit Product</h1>
                        <input type="text" defaultValue={productToEdit.name} required />
                        <input maxLength="50" type="text" defaultValue={productToEdit.image} />
                        <input type="text" />
                        <button type="button" className="bg-red-700" onClick={() => { setRedirectToAdmin(!redirectToAdmin) }}>Cancel</button>
                        <button type="submit" className="bg-green-500">Edit</button>
                    </form>
                )
            }

        </section>
    )
}

export default EditProductPage
