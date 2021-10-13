import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';
import OptionSideBar from '../OptionSideBar';


const AdminSideBar = () => {

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

                <OptionSideBar icon="account_circle" route="/" label="Profile" mod="bottom-0"/>

            </div>


        </nav>
    )
}

export default AdminSideBar;
