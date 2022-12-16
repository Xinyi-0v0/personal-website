import React, { useState } from 'react'
import ProjectSlide from './ProjectSlide';
import projectData from '../../data/projectData'
import './Project.css'


function Project({ isLight }) {
    const [currentId, setCurrentId] = useState(2);
    const currentProject = projectData[currentId - 1];
    const list = projectData.map(item => {
        return (<ProjectSlide
            key={item.id}
            project={item}
            current={currentId}
            className="project-img"
            setCurrentId={setCurrentId}
        />)
    });


    return (
        <div className={`project-experience ${isLight ? "ligth-mode" : "dark-mode"}`}>
            <h2 >Projects</h2>
            <div className="projects">
                <button className="btn-left" 
                    aria-label="project-switch-to-pre-one"
                    disabled={currentId === projectData.length}
                    onClick={() => setCurrentId(pre => pre + 1)}
                >
                    <span className='gg-arrow-left'></span>
                </button>
                <div className='img-contanier'>
                    {list}
                </div>
                <button className="btn-rigth"
                    aria-label="project-switch-to-next-one"
                    disabled={currentId === 1}
                    onClick={() => setCurrentId(pre => pre - 1)}
                >
                    <span className='gg-arrow-right'></span>
                </button>
                <div className='detail'>
                    <h3>{currentProject.name}</h3>
                    <p>Skill: {currentProject.tech}</p>
                    <p>Description: {currentProject.description}</p>
                </div>

            </div>
        </div>
    );
}

export default Project;