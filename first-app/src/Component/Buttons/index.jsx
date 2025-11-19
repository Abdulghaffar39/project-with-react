import React from "react";
import './style.css'

export default function BlueButton({ blue, white }) {

    return (

        <>

            <button className="blue">
                {blue}
            </button>

            <button className="white">
                {white}
            </button>

        </>
    )
}

