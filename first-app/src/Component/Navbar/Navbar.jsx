import React from 'react';
import './style.css'
import logo from './Images/logo.svg';

export default function Navbar() {

    return (

        <header className='App-header'>

            <div className='App-parent_1'>

                <img src={logo} className='App-logo' alt='logo' />

            </div>

            <div className='App-parent_2'>

                <ul>
                    <li>Product</li>
                    <li>Community</li>
                    <li>Resources</li>
                    <li>Pricing</li>
                    <li>For Teams</li>
                </ul>

            </div>

            <div className='App-parent_3'>

                <button className='App-login'>Log In</button>
                <button className='App-get'>Get started</button>

            </div>

        </header>
    )

}

