import './style.css';
import React from "react";
import BlueButton from '../../Buttons/BlueBtn/index';
import WhiteBtn from '../../Buttons//WhiteBtn/index';

import star from './Images/star.svg';
import people from './Images/people.webp';

export default function containerOne() {

    return (


        <div className='container_1'>

            <div className='parent_1'>

                <h1>Learn in-demand <span>UX, PM & AI</span> skills</h1>
                <p>Bite-sized, interactive learning built for busy professionals. Advance your UX design or product management career in 5 minutes a day.</p>

                <div className='child_1'>

                    <BlueButton blue='Get Started' />
                    <WhiteBtn white='Uscel for Teams' />

                </div>

                <div className='child_2'>

                    <div className='grand_child_1'>
                        <img src={people} alt='people' className='people' />
                    </div>

                    <div className='grand_child_2'>
                        <p>Trusted by 500k+ design & product professionals</p>
                    </div>

                    <div className='grand_child_3'>
                    </div>

                    <div className='grand_child_4'>

                        <p>4.7 out of 5</p>
                        <img src={star} alt='starIcon' className='starIcon' />

                    </div>

                </div>

            </div>

        </div>
    )
}
