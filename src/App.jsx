import React,{useState, useRef} from 'react';

import Header from './components/Header';
import Main from './components/Main';
import Contact from './components/content/Contact';
import Footer from './components/Footer';
import Skiplink from './components/content/Skiplink';


import './App.css';


function App() {
  const [lightkMode, setLightMode] = useState(true);
  const [mainContent, setMainContent] = useState("/home.html");
  const modalRef = useRef(null);

  function changeContent( event, path ) {
    event.preventDefault();
    if (path === "/contact.html") {
        modalRef.current.showModal();
    } else {
      setMainContent(path);
    }
  }

  function changeMode() {
    setLightMode(curr => !curr);
  }

  return (
    <div className={lightkMode? "app app-lightMode" : "app app-darkMode"}>
      <Skiplink />
      <Header isLight={lightkMode} content={mainContent} changeMode={changeMode} changeContent={changeContent}/>
      <Main isLight={lightkMode} content={mainContent} />
      <Contact modalRef={modalRef} isLight={lightkMode}/>
      <Footer />
    </div>
  );
}

export default App;
