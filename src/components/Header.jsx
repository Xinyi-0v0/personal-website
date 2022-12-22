import React from 'react';
import menuData from '../data/navMenuData'
import './Header.css';
import Link from './Link';


function Header({ isLight, content, changeMode, openModal }) {
    const [isListShown, setIsListShown] = React.useState(false);
    const [isLargeSize, setIsLargeSize] = React.useState(window.innerWidth > 1152 ? true : false);

    // in order to monitor the width of window to determine tabIndex of menu list item
    React.useEffect(() => {
        function watchWidth() {
            if (window.innerWidth > 1152) {
                setIsLargeSize(true);
            } else {
                setIsLargeSize(false);
            }

        }
        window.addEventListener('resize', watchWidth);
    }, [])

    const list = menuData.map(item => {
        let className = 'header-nav-link';
        if(item.path === content) {className +='shown'};
        const tabIndex = isLargeSize || isListShown ? "0" : "-1";
        return (
            <Link className={className} tabIndex={tabIndex} path={item.path} openModal={openModal} setIsListShown={setIsListShown}>
                {item.name}
            </Link>
    
        );
    });

    return (
        <header className="header">
            <h1 className="header-title">Xinyi Zhang.</h1>
            <nav className="header-nav">
                {!isLargeSize && <button className="header-nav-button" aria-label="menu-switch" onClick={() => setIsListShown(curr => !curr)}>
                    <span className={`gg-menu ${isLight ? '' : 'gg-menu-dark'}`}></span>
                </button>}
                <ul className={`header-nav-list ${isLight ? 'list-light' : 'list-dark'} ${isListShown ? 'list-shown' : ''}`}>
                    {list}
                </ul>
            </nav>
            <div className="theme-toggler">
                <p className='toggler-light'>Light</p>
                <button className="toggler-switch" onClick={() => changeMode()} aria-label="toggler-switch">
                    <span className={isLight ? 'gg-toggle-on' : 'gg-toggle-off'}></span>
                </button>
                <p className='toggler-dark'>Dark</p>
            </div>
        </header>
    );
}

export default Header;