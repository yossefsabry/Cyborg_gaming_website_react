import './App.css'
import Header from './componenets/Header/Header'
import Footer from './componenets/Footer/Footer'
import Container from './componenets/Container/Container'
import { BrowserRouter as Router } from 'react-router-dom';
import React from "react";
import Aos from 'aos';
import { useEffect } from 'react';
import "aos/dist/aos.css"

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 })
}, [])

  return (
    <>
      <div className='App'>
        <Router>
          <Header data-aos='zoom-in' />
          <Container>
          </Container>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;