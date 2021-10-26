import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';
import OptionSideBar from '../OptionSideBar';
import { useAuth0 } from '@auth0/auth0-react';



const AdminSideBar = () => {
    const {logout} = useAuth0();

    return (
        <nav className="hidden lg:flex lg:w-72 border border-gray-300 h-full flex-col bg-gray-200 p-2">

            <Link to='/admin'>
                <Logo />
            </Link> 

            <div className="flex flex-col w-full">

                <OptionSideBar icon="point_of_sale" route="/admin" label="Sales" />

                <OptionSideBar icon="inventory_2" route="/admin/products" label="Products" />

                <OptionSideBar icon="people" route="/dd" label="Users" />

                <OptionSideBar icon="account_circle" route="/dd" label="Profile" />

                <button
                className={`p-1 mb-2 bg-green-500 hover:bg-green-300 hover:scale-150 flex w-full items-center text-white rounded-lg shadow-lg `}
            onClick={logout}>
                <p className="flex items-center m-2 text-center">
                    <span className="material-icons mr-5">
                    </span> Cerrar Sesión
                </p>
            </button>

            </div>


        </nav>
    )
}

export default AdminSideBar;
