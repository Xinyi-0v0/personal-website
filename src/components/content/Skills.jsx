
import React, { useState } from 'react';
import skillData from '../../data/skillsData';
import './Skills.css'

function Skills({isLight}) {
    const [skill, setSkill] = useState("Programming Languages");

    const buttons = skillData.map(item => {
        return (
            <button key={item.name} className={item.name === skill ? "button clicked" : "button"}
            onClick={()=>setSkill(item.name)}>{item.name}</button>
        );
    });

    const content = skillData.find(item => item.name === skill);

    return (
        <div className={`skillsets ${isLight? "skillSet-light" : "skillSet-dark"}`}>
             <h2 className="skillsets-title">Software Engineering Skillset</h2>
             <div className='buttons'>
                {buttons}
             </div>
            <p className='skill-content'>{content.details}</p>
        </div>);
}

export default Skills;