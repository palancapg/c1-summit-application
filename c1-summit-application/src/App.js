import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MoviesInfo from './components/MoviesInfo';

function App() {
  return (
    <div className="App">
      <Header title="Movie Info"></Header>
      <MoviesInfo></MoviesInfo>
      <Footer title="2021"></Footer>
    </div>
  );
}

export default App;
