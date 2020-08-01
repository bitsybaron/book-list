import React from 'react';
import Books from './Components/Books';
import './Reset.css'
import './App.css';
import Header from './Components/Header';


const App = () => {
  return (
    <div>
      <Header />
      <Books />
    </div>
  )
}

export default App