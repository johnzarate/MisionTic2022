import { useProductToEdit } from 'context/productToEdit';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Dialog } from '@mui/material';

const ProductCard = ({ product }) => {
    const { setProductToEdit } = useProductToEdit();
    const [openDialog, setOpenDialog] = useState(false);

    return ( 
        <li className="flex flex-col bg-indigo-500 shadow-lg rounded-lg m-2 p-2">
            <img src={product.image} alt={product.name} className="w-44 h-44 m-2 shadow-md"/>
            <p className="text-center text-white">{product.name}</p>
            <p className="text-center text-white">{product.description}</p>
            <p className="text-center text-white">{product.price}</p>
            <p className="text-center text-white">{product.status}</p>
            <div className="flex justify-around mt-3">
            <Link to='/admin/products/edit'>
                <button className="shadow-md focus:scale-150" onClick={() => { setProductToEdit({name:product.name,image:product.image})}}>
                    <p><span className="material-icons hover:text-white">mode_edit</span></p>
                </button>
            </Link> 

            <button onClick={() => { setOpenDialog(true) }} className="shadow-md" >
            <p><span className="material-icons hover:text-red-500">delete</span></p>
            </button>
            <Dialog open={openDialog}>
          <div className='p-8 flex flex-col bg-blue-800'>
            <h1 className='text-gray-900 text-2xl font-bold'>
              ¿Está seguro de querer eliminar el producto?
            </h1>
            <div className='flex w-full items-center justify-center my-4'>
              <button
                className='mx-2 px-4 py-2 bg-green-500 text-white hover:bg-green-700 rounded-md shadow-md'
              >
                Sí
              </button>
              <button
                onClick={() => setOpenDialog(false)}
                className='mx-2 px-4 py-2 bg-red-500 text-white hover:bg-red-700 rounded-md shadow-md'
              >
                No
              </button>
            </div>
          </div>
        </Dialog>
            
            </div>
        </li>
    )
}

export default ProductCard
