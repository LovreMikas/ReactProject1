import React from 'react';
import {Link} from 'react-router-dom';
import slikaa from '../hh.jpg'

function Druga() {
  return (
    <div className="App">
      <a href="https://www.mojkvart.hr/Split/Gripe/Veterinarska-ambulanta-veterinarska-ljekarna/VPPilic"><img src={slikaa} className="jas"></img></a>
      <p>Moderna i novo opremljena ambulanta koja u potpunosti zadovoljava sve zahtjeve pacijenata i struke.<br></br>
       Brza i pouzdana obrada internih bolesti, detaljna dijagnostika (ultrazvuk, rendgen, EKG, CT)<br></br> i laboratorijske
        pretrage bolesti uz minimalan stres pacijenata, savjetovalište u prevenciji nastupa <br></br>bolesti, oftamologija, usluga hitne intervencije i dežurni veterinar, te stručno osoblje.</p>
        <a href="https://www.mojkvart.hr/Split/Gripe/Veterinarska-ambulanta-veterinarska-ljekarna/VPPilic">Kontakt</a><br></br><Link to="/treca">Cijenik i usluge</Link><br></br><br></br>
      <Link to='/'>početna</Link>
    </div>
  );
}

export default Druga;