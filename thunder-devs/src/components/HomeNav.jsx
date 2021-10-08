import React from 'react';
import Logo from "media/white_logo.png";
import 'styles/homeStyles.css';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

const HomeNav = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <header className="flex bgApp justify-between ">
            <img src={Logo} alt="Hello" className="w-24 ml-5 mt-3 mb-1" />
            <nav className="navHomeFont">
                <ul className="flex justify-between items-center mt-3">
                    <li className="m-3 hover:scale-110">
                        <button>Home</button>
                    </li>
                    <li className="m-3">
                        <button>About Us</button>
                    </li>
                    <li className="m-3 mr-5">
                        <button className=" flex items-center buttonColor p-3 rounded-lg shadow-lg " onClick={() => loginWithRedirect()}><span className="material-icons mr-2">account_circle</span>Login</button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default HomeNav;
