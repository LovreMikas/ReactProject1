import React from 'react';
import {Link} from 'react-router-dom';
import je from '../ho.PNG'
import jee from '../aa.PNG'
function Druga() {
  return (
    <div className="App">
      <a href="https://www.google.com/maps/place/Veterinarska+ambulanta+PILIC/@43.50769,16.4501434,17z/data=!4m5!3m4!1s0x13355e034dacbc39:0x2cef585f0e41089f!8m2!3d43.5076161!4d16.4521551"><img className="da" src={je}>
        </img></a><a href="https://www.google.com/maps/dir/43.5110928,16.4644353/Veterinarska+ambulanta+PILIC+Ulica+Matice+hrvatske+10/@43.5096557,16.4552855,16z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x13355e034dacbc39:0x2cef585f0e41089f!2m2!1d16.4521551!2d43.5076161">
          <img className="da" src={jee}></img></a>
      <br></br><br></br>
      Prva slika je lokacija ordinacije a druga slika je put od GOGSS do ordinacije , klikom na sliku možete jasnije vidjeti lokaciju ;).<br></br><br></br>
      <Link to='/'>na prvu</Link>
    </div>
  );
}

export default Druga;