import React from 'react';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import Contects from './Components/Contects';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
     <div>
    <NavBar />
    <Home />
    <About />
    <Portfolio />
    <Projects />
    <Contects />
    <Footer />
    </div>
    <Toaster/>
    
    </>
  )
}

export default App;