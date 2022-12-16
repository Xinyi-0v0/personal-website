import React from 'react';
import workData from '../../data/workData';
import './Work.css'


function Work() {
    const work = workData.map(item => {
        return (
            <div key={item.id} className={`experience-detail detail-${item.id}`}>
                <img src={item.img} alt={item.alt} />
                <h3 className='work-postion'>{item.position}</h3>
                <p className='work-company'>{item.company}</p>
                <ul className='work-description'>
                    <li>{item.description1}</li>
                    <li>{item.description2}</li>
                </ul>
            </div>

        );
    });
    return ( 
    <div className='work-experience'>
        <h2 className="content-title">
            Work Experience
        </h2>
        {work}
    </div> );
}

export default Work;