import React from "react";
import "./style.css"
import BlueButtonLarge from "../Buttons/BlueBtnLarge"

export default function Footer() {

    return (

        <footer>

            <div className="MainCon">

                <div className="FContainer_1">

                    <h1>Invest in your product career with Uxcel today</h1>
                    <BlueButtonLarge blueLarge='Get Started' />

                </div>

                <div className="Fcontainer_2">

                    <div className="parent_1">

                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                        <p>Cookie Policy</p>
                        <p>License</p>

                    </div>

                    <div className="parent_2">

                        <p>© 2025 Uxcel, Inc. All rights reserved.</p>

                    </div>

                </div>

            </div>

        </footer>

    )
}