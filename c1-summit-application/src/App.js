import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MoviesSearch from './components/MoviesSearch';

/**
 * 
 *  File        : App.js
 * 
 *  Description : This is the main js code for the web application that is dependent on it's strutures. As an overview of app makeup, Header.js 
 *                and Footer.js are independent functions and do not function off other components. However, MoviesSearch.js is dependent on  
 *                Movies.js which is then dependent on Pagination.js. 
 *
 *  Author      : Phillip Palanca 
 * 
 *  @returns    Web Application Interface 
 * 
 */

function App() {
  return (
    <div className="App">
      <Header></Header>
      <MoviesSearch></MoviesSearch>
      <Footer title="2021"></Footer>
    </div>
  );
}

export default App;
