import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MoviesSearch from './components/MoviesSearch';


function App() {
  return (
    <div className="App">
      <Header title="Movie Info"></Header>
      <MoviesSearch></MoviesSearch>
      <Footer title="2021"></Footer>
    </div>
  );
}

export default App;
