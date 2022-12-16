import React from 'react';
import Project from './content/Project';
import SelfIntro from './content/SelfIntro';
import Work from './content/Work';

import './Main.css';

function Main({content, isLight}) {
    return ( 
        <main id="main" className="main">
            {content === "/home.html" && <SelfIntro isLight={isLight}/>}
            {content === "/work.html" && <Work />}
            {content === "/projects.html" && <Project isLight={isLight}/>}
        </main>
     );
}

export default Main;