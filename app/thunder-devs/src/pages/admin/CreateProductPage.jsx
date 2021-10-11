import React, { useRef, useState } from 'react'
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

const CreateProductPage = () => {
    const formEditProduct = useRef(null);
    const [redirectToAdmin, setRedirectToAdmin] = useState(false);

    const submitEdition = (e) => {
        e.preventDefault();
        toast.success('Create successfully !!!');

    }

    return (
        redirectToAdmin ? (
            < Redirect to='/admin' />
        ) : (
            <section className="flex justify-center items-center w-full h-full">
                <form ref={formEditProduct} onSubmit={submitEdition} className="flex flex-col items-center p-4 bg-green-500 shadow-lg">
                    <h1>Edit Product</h1>
                    <input type="text" required />
                    <input maxLength="50" type="text" />
                    <input type="text" />
                    <button className="bg-red-700" onClick={() => { setRedirectToAdmin(!redirectToAdmin) }}>Cancel</button>
                    <button type="submit" className="bg-green-500">Edit</button>
                </form >
            </section >
        )

    )
}

export default CreateProductPage
