import React from "react";
import './style.css'

import atlassian from './Images/atlassian.svg';
import canva from './Images/canva.svg';
import delo from './Images/delo.svg';
import dropbox from './Images/dropbox.svg';
import forrester from './Images/forrester.svg';
import ibm from './Images/ibm.svg';
import micro from './Images/micro.svg';
import paysafe from './Images/paysafe.svg';
import redbool from './Images/redbool.svg';
import samsung from './Images/samsung.svg';
import tik from './Images/tik tok.svg';
import ubisoft from './Images/ubisoft.svg';

export default function containerTwo() {

    return (

        <div className='container_2'>

            <div className='track'>

                <img src={atlassian} alt='atlassian' />
                <img src={canva} alt='canva' />
                <img src={delo} alt='delo' />
                <img src={dropbox} alt='dropbox' />
                <img src={forrester} alt='forrester' />
                <img src={ibm} alt='ibm' />
                <img src={micro} alt='micro' />
                <img src={paysafe} alt='paysafe' />
                <img src={redbool} alt='redbool' />
                <img src={samsung} alt='samsung' />
                <img src={tik} alt='tik' />
                <img src={ubisoft} alt='ubisoft' />

            </div>

        </div>
    )
}
