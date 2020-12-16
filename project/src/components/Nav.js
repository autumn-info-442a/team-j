import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom'; 

class Nav extends React.Component {

    healthClick() {
        document.getElementById("healthNav").classList.add("current");
        document.getElementById("ecoNav").classList.remove("current");
    };

    ecoClick() {
        document.getElementById("ecoNav").classList.add("current");
        document.getElementById("healthNav").classList.remove("current");
    };

    render() {
        return( 
            <nav className="nav_bar">
                <img src="https://i.ibb.co/QdxMM5k/covid-logo.png" alt="covid_logo"/>
                <ul className="nav_links">
                    <Link id="healthNav"  className="current" style={{color: "black"}} to='/health'>
                        <a onClick={() => this.healthClick()}>Health</a>
                    </Link>
                    <Link id="ecoNav" style={{color: "black"}} to='/economics'>
                        <a onClick={() => this.ecoClick()}>Economics</a>
                    </Link>
                </ul>
            </nav>
        );
    }
}

export default Nav;