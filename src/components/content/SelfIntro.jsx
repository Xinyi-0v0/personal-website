import React from 'react'
import xinyi from '../../assets/xinyi.PNG'
import Skills from './Skills';

import './SelfIntro.css'


function SelfIntro({isLight}) {
    return (
        <div className="about">
            <div className="self-introduction">
                <img className="self-introduction-img" src={xinyi} alt="a girl with white dress in disney land" />
                <h2 className='self-introduction-title'>I'm Xinyi, a Graduate Student studying at Northeastern University, majoring in Information Systems.</h2>
                <div className="self-introduction-summary">
                    <p>I've spent the past 1+ years working across different areas of software development: including font-end and back-end. I'm experienced in building and deploying full-stack solutions.</p>
                    <p>Before studying at NEU, I worked as a user researcher and a product operational specialist for 3 years.
                        During my previous job, I've been working on improving user experience by leveraging data analysis and multiple sources of user feedback to identify user experience problems and working with engineers to solve problems.</p>
                </div>
            </div>
            <Skills isLight={isLight}/>
        </div>
    );
}

export default SelfIntro;