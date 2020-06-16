import React from 'react';
import './App.css';
import Prva from './components/prva';
import Header from './Header';
import Footer from './Footer';
import Druga from './components/druga';
import Hiperveza from './components/hiperveza';
import Treca from './components/treca';
import Cetvrta from './components/cetvrta';

import {Route,BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <div className="haha">
      <Header></Header>
      
      <Router>
        <Route exact path ="/" component = {Prva} ></Route>
        <Route path ="/druga" component = {Druga} ></Route>
        <Route path ="/hiperveza" component = {Hiperveza} ></Route>
        <Route path ="/treca" component = {Treca} ></Route>
        <Route path ="/cetvrta" component = {Cetvrta} ></Route>
      </Router>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
