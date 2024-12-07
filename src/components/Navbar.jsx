import React from 'react'
import logo from '../assets/react.svg';
export default function Navbar(){
    return (
        <header>
            <nav>
                <img src={logo} alt="logo" />
                <span>ReactFacts</span>
            </nav>
        </header>
    )
}