import React from 'react';
import {Link} from 'react-router-dom';
import slikaaaa from '../nj.jpg'
import slikaaa from '../g.jpg'
function Druga() {
  return (
    <div className="App">
      <h1>Usluge</h1>
      <img className="pas" src={slikaaa}></img><br></br><br></br>
      <table border="3">
      <tr><td>Izlazak na teren</td><td>50kn</td></tr>
        <tr><td>Cijepljenje</td><td>100KN</td></tr>
        <tr><td>Sterilizacija</td><td>250kn</td></tr>
        <tr><td>Kastracija</td><td>500kn</td></tr>
        <tr><td>Pregled</td><td>70kn</td></tr>
        <tr><td>Operacija</td><td>Ovisno o zahvatu</td></tr>
        <tr><td>Uklanjane krelja ili ostalih nametnika</td><td>50kn</td></tr>

      </table>
      <br></br>
      <b>Usluge vršimo samo u ordinaciji, izlazimo na teren samo kada je rizićna situacija</b><br></br><br></br>
      <Link to='/'>na prvu</Link>
    </div>
  );
}

export default Druga;