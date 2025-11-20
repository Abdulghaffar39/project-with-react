import React from 'react';
import './style.css'
import logo from './Images/logo.svg';
import BlueButton from '../Buttons/BlueBtn/index';
import TransparentBtn from '../Buttons/TransparentBtn/index';

export default function Header() {


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

                <TransparentBtn Transparent='Log In'/>
                <BlueButton blue='Get started'/>

            </div>

        </header>
    )

}

