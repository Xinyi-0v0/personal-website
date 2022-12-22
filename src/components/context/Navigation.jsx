import {createContext, useState, useEffect} from 'react';
const NavigationContext = createContext();


function NavigationProvider({children}){
	const[currentPath, setCurrentPath] = useState(window.location.pathname);

    // when user click different button, change currentpath
    function navigateTo(path){
        window.history.pushState({}, '', path);
        console.log(path)
        setCurrentPath(path);
    }

    // listen to Forward and back clicks
    useEffect(()=>{
        const handler = () => {
            setCurrentPath(window.location.pathname);
          };
          window.addEventListener('popstate', handler);
          return () => {
            window.removeEventListener('popstate', handler);
          };
    },[]);

  
	return (<NavigationContext.Provider value={{currentPath, navigateTo}}>
		{children}
	</NavigationContext.Provider>)
}



export { NavigationProvider };
export default NavigationContext;