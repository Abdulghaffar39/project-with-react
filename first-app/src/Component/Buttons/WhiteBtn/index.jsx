import React from "react";
import './style.css'

export default function WhiteBtn({ white }) {

    return (

        <div className='container'>
            
            <button className='white'>
                {white}
            </button>

        </div>

    )
}

