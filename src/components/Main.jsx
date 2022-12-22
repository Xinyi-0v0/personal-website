import React from 'react';
import Project from './content/Project';
import SelfIntro from './content/SelfIntro';
import Work from './content/Work';
import Route from './Route';
import './Main.css';

function Main({isLight}) {
    return ( 
        <main id="main" className="main">
            <Route path={'/'}>
                <SelfIntro isLight={isLight}/>
            </Route>
            <Route path={'/work'}>
                <Work />
            </Route>
            <Route path={'/projects'}>
                <Project isLight={isLight}/>
            </Route>
        </main>
     );
}

export default Main;