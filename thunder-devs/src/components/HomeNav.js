import React, {Component} from 'react';
import '../styles/navbar.css';

class HomeNav extends Component{
    render(){
        return(
            <header >
                <nav className="headerHome">
                    <li>
                        <img src="http://www.jamesrobertwatson.com/images16/thunderwheaton.jpg" alt="Hello"></img>
                    </li>
                    <li>
                        <a href="https://google.com">Nosotros</a>
                    </li>
                </nav>
            </header>
        )
    }
}

export default HomeNav;