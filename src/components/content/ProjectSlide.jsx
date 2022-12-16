import React,{useRef}from 'react';
import './Project.css'
import './ProjectSilde.css'

function ProjectSlide({className,current,project,setCurrentId}) {
    const modalRef = useRef(null);
    className +=` project${project.id}`;
    if (project.id === current) {
        className +=" curr";
    } else if ( project.id - current === 1) {
        className +=" afterCurr afterHidden";
    } else if ( current - project.id === 1) {
        className +=" preCurr preHidden";
    } else if (current > project.id) {
        className +=" hidden preHidden"
    } else {
        className +=" hidden afterHidden" 
    }

    function openModal(event) {
        if(project.id === current){
            modalRef.current.showModal()
        } else {
            setCurrentId(project.id);
        }
       
    }

    return (
        <>
            <div key={project.id} className={className}>
                <img onClick={(event) => openModal(event) } src={project.img} alt={project.alt} />
               
            </div>
            <dialog className="modal" ref={modalRef}>
                <div className='content'>
                <img className="large" src={project.img} alt={project.alt} />
                <button className="modal-cancel" onClick={() => modalRef.current.close()}>Cancel</button>
                </div>
                
            </dialog>
        </>
    );
}

export default ProjectSlide;