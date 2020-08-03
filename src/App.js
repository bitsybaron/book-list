import React from 'react';
import Books from './Components/Books';
import './Reset.css'
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';


const App = () => {
  return (
    <div>
      <Header />
      <Books />
      <Footer />
    </div>
  )
}

export default App