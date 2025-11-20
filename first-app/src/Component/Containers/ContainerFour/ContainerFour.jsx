import React from "react";
import "./style.css"

import Right_Arrow from "./Images/download-removebg-preview.png"
import Education from "./Images/Education.png"
import book from "./Images/book.png"
import pen from "./Images/pen.png"
import setting from "./Images/Setting.png"
import images from "./Images/688a1ed374c28519fb03fedc_cover (4).svg"

export default function ContainerFour() {

    return (

        <div className="container_4">

            <div className="parent_1">

                <div className="child_1">

                    <h1><b>Build real-world product skills, faster</b></h1>

                    <div className="grand_child_1">

                        <img src={Education} width="20px" alt="Right Arrow" />
                        <h4>Interactive courses for every role & level</h4>

                    </div>

                    <p className="para">Learn at your own pace with interactive courses and career paths. Advance your UX design or product management career with confidence.</p>

                    <div className="grand_child_2">

                        <p>Learn more</p>
                        <img src={Right_Arrow} width="20px" alt="Right Arrow" />

                    </div>

                    <div className="grand_child_3">

                        <img src={setting} width="20px" alt="Right Arrow" />
                        <p>Measure your skills. Close the gaps.</p>

                    </div>

                    <div className="grand_child_4">

                        <img src={book} width="20px" alt="Right Arrow" />
                        <p>Earn trusted certifications</p>

                    </div>

                    <div className="grand_child_5">

                        <img src={pen} width="20px" alt="Right Arrow" />
                        <p>Practice with real projects</p>

                    </div>

                </div>

                <div className="child_2">

                    <div className="grand_child_1">

                        <div className="Image">
                            <img src={images} alt="AI" />
                        </div>

                        <div className="text">
                            <h1>AI Fondamentals for Designer</h1>
                            <p>Intermediate</p>
                        </div>

                    </div>

                </div>

            </div>

            <div className="parent_2">



            </div>

        </div>
    )

}