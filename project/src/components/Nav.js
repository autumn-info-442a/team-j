import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom'; 
// import './App.css'; 
    function Nav() {

        const navStyle = {
            color: 'black'
        }

        return( 
            <nav className="nav_bar">
                <img src="https://i.ibb.co/QdxMM5k/covid-logo.png" alt="covid_logo"/>
                <ul className="nav_links">
                    <Link style={navStyle} to='/health'>
                        <li>Health </li>
                    </Link>
                    <Link style={navStyle} to='/economics'>
                        <li>Economics</li>
                    </Link>
                </ul>
            </nav>
        );
    }

export default Nav;