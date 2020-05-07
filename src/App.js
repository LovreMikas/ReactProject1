import React from 'react';
import './App.css';
import Prva from './components/prva';
import Header from './Header';
import Footer from './Footer';
import Druga from './components/druga';
import Hiperveza from './components/hiperveza';
import{Route,BrowserRouter as Mljac}from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Header></Header>
     
      <Mljac>
        
        <Route exact path ="/" component = {Prva} ></Route>
        <Route path ="/druga" component = {Druga} ></Route>
        <Route path ="/hiperveza" component = {Hiperveza} ></Route>
      </Mljac>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
