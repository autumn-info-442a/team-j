import React, {useState} from 'react';
import '../App.css';
import { Link } from 'react-router-dom'; 
// import './App.css'; 
    function Nav() {

        const navStyle = {
            color: 'black'
        }

        const [isOpen, setIsOpen]=useState(false);
        const [isOpen2, setIsOpen2]=useState(false);
        const onClickHeader=()=> {
            setIsOpen(!isOpen)
        }
        const onClickHeader2=()=> {
            setIsOpen2(!isOpen2)
        };

        return( 
            <nav className="nav_bar">
                <img src="https://i.ibb.co/QdxMM5k/covid-logo.png" alt="covid_logo"/>
                <ul className="nav_links">
                    <Link style={navStyle} to='/health'>
                        <li onClick={onClickHeader} onClick={onClickHeader2} className={`${isOpen ? 'button' :''}`}>Health </li>
                    </Link>
                    <Link style={navStyle} to='/economics'>
                        <li onClick={onClickHeader2} onClick={onClickHeader} className={`${isOpen2 ? 'button' :''}`}>Economics</li>
                    </Link>
                </ul>
            </nav>
        );
    }

export default Nav;