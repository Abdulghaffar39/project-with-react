import React from "react";
import './style.css'

export default function BlueButton({ blue }) {

    return (

        <div className='container'>
            
            <button className='blue'>
                {blue}
            </button>

        </div>

    )
}

