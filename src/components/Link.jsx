import React from 'react'
import useNavigation from '../hooks/use-navigation';

function Link({path,className,tabIndex,children,openModal,setIsListShown}) {
    const {navigateTo} = useNavigation();

    function handleClick(event){
        if(event.metaKey||event.ctrlKey){
            return;
        }
        event.preventDefault();
        if (path === '/contact'){
            openModal();
            return;
        }
        navigateTo(path);
        setIsListShown(false);
    }

    return ( 
        <li className="header-nav-item" onClick={handleClick}>
                <a href={path} className={className} tabIndex={tabIndex} > {children} </a>
        </li>
     );
}

export default Link;