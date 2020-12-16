import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom'; 

class Nav extends React.Component {
    render() {
        return( 
            <nav className="nav_bar">
                <img src="https://i.ibb.co/QdxMM5k/covid-logo.png" alt="covid_logo"/>
                <ul className="nav_links">
                    <Link id="healthNav" style={{color: "black"}} to='/health'>
                        <a>Health</a>
                    </Link>
                    <Link id="ecoNav" style={{color: "black"}} to='/economics'>
                        <a>Economics</a>
                    </Link>
                </ul>
            </nav>
        );
    }
}

export default Nav;