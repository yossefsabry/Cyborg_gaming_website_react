import { useState } from 'react';
import './App.css'
import Header from './componenets/Header/Header'
import Footer from './componenets/Footer/Footer'
import Container from './componenets/Container/Container'
import { BrowserRouter as Router } from 'react-router-dom';


function App() {

  return (
    <>
      <div className='App'>
        <Router>
          <Header />
            <Container>
            </Container>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;