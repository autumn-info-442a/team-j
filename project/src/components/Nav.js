import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom'; 
// import './App.css'; 
    function Nav() {

        const navStyle = {
            color: 'white'
        }

        return( 
            <nav>
                <h3>logo</h3>
                <ul className="nav-Links">
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