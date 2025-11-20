import './style.css';
import React from "react";
import BoxOne from '../../Boxes/FirstBox/Box';
// import BoxOne from "../../Boxes/FirstBox/Box";

import FirstImg from "./Images/1st.avif"
import SecondImg from "./Images/2nd.svg"
import ThirdImg from "./Images/3rd.avif"
import PlusIcon from "./Images/673792b688d0236dd17aec99_Right icon.svg"

export default function ContainerThree() {

    return (


        <div className='container_3'>

            <div className="parent_1">

                <div className="child_1">
                    <h1>Modern learning, built for busy product professionals</h1>
                </div>

                <div className="child_2">
                    <p>Whether you’re new or experienced, we help you build real-world skills, track your growth, and earn industry-recognized certifications.</p>
                </div>

            </div>

            <div className="parent_2">

                <BoxOne image={FirstImg} name="Designed to help you learn faster" Iconimage={PlusIcon} />
                <BoxOne image={SecondImg} name="Optimized for real career results" Iconimage={PlusIcon} />
                <BoxOne image={ThirdImg} name="Train alone or with your team" Iconimage={PlusIcon} />

            </div>


        </div>


    )
}
