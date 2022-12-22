import React,{useState, useRef} from 'react';
import { NavigationProvider } from './components/context/Navigation';
import Header from './components/Header';
import Main from './components/Main';
import Contact from './components/content/Contact';
import Footer from './components/Footer';
import Skiplink from './components/content/Skiplink';


import './App.css';


function App() {
  const [lightkMode, setLightMode] = useState(true);
  const modalRef = useRef(null);

  function openModal() {
    modalRef.current.showModal();
  }


  function changeMode() {
    setLightMode(curr => !curr);
  }

  return (
    <NavigationProvider>
    <div className={lightkMode? "app app-lightMode" : "app app-darkMode"}>
      <Skiplink />
      <Header isLight={lightkMode} changeMode={changeMode} openModal={openModal}/>
      <Main isLight={lightkMode}/>
      <Contact modalRef={modalRef} isLight={lightkMode}/>
      <Footer />
    </div>
    </NavigationProvider>
  );
}

export default App;
