import React from 'react'
import TablaUsers from 'components/TablaUsers'
import 'styles/homeStyles.css';
import { Tooltip } from '@mui/material'
import { Link } from 'react-router-dom'


const Users = () => {
    return (
        
        <section className="flex flex-col h-full w-full m-2 items-center">
             <h1 className="text-center font-extrabold text-4xl my-8">Lista de Usuarios</h1>
            <form className="flex w-full justify-center mb-8">
                <input type="text" name="search" className="rounded-md focus:border-dashed focues:bg-green-100 shadow-green-200 p-3 mx-7 w-72" onInput={(e) => {

                }} placeholder="Search by id or name"/>
            </form>
            <TablaUsers></TablaUsers>
        </section>
        
    )
}

export default Users
