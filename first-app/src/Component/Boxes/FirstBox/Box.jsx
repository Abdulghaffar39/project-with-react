import React from "react";
import './style.css'


export default function BoxOne({ image, name, Iconimage}) {

    return (

        <div className="child_1">

            <img src={image} width="100%" alt="learn" />

            <div className="grand_child_1">

                <h2>{name}</h2>
                <button><img src={Iconimage} alt="" /></button>

            </div>

        </div>

    )
}

