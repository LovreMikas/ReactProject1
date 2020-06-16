import React from 'react';
import {Link} from 'react-router-dom'
import slika from '../b.jpg'

function Prva() {
  return (
    <div className="ne">
      <img src={slika}></img>
      <p>Naša veterinarska ordinacija poznata je po stručnom osoblju koji će vas najbolje savjetovati i prepoznati što nije uredu sa vašim ljubimcem,<br></br> isto tako kod nas uvijek možete obaviti pregled vašeg ljubimca te ga cijepiti</p><br></br>
      <table >
      <tbody>
        <tr>
        
            <td>
            <Link to="/druga">Daljnje usluge</Link>
            </td>
            <td></td>
            <td>
            <Link to="/hiperveza">Kupnja ljubimca</Link>
            </td>

        </tr>
        </tbody>
      </table>
        
        
      
    </div>
  );
}

export default Prva;
