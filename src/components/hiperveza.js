import React, { Component } from "react";
import {Link} from 'react-router-dom';

export class Probna extends Component{ 
  state={
    Ime:'Vaše ime',
    Prezime:'Vaše prezime',
    Mail:'Vaš mail',
    Imelj:'Ime ljubimca',

  }
  onSubmit= e =>{e.preventDefault(); alert("naruđba sa uspješno zaprimljena"); console.log("Uspješno naruceno", this.state.ime);}
  render()
  
{
  return(
  <div>
    <h1 >Uz ljubimca dobivate ogrlicu sa imenom{this.state.ime}</h1>
  <form> 
    <input placeholder='Vaše ime' vlaue={this.state.Ime} onChange={e=>this.setState({Ime: e.target.vlaue})}></input>
    <input placeholder='Vaše prezime' vlaue={this.state.Prezime} onChange={e=>this.setState({Prezime: e.target.vlaue})}></input> <br></br>
    <input placeholder='Vaš mail' vlaue={this.state.Mail} onChange={e=>this.setState({Mail: e.target.vlaue})}></input><br></br>
    <input placeholder='Ime Ljubimca' vlaue={this.state.Imelj} onChange={e=>this.setState({Imelj: e.target.vlaue})}></input><br></br>
    <select name="polje"> 
   <option value="1">Pas</option>
   <option value="2">Mačka</option>
   <option value="3">Ptica</option>
   ...
</select> 
<br></br>
<br></br>
    <button onClick={ e => this.onSubmit(e)}>Potvrdi</button><br></br> <br></br>
  
  
  </form>
  <p>Po naručenog ljubimca morate doći u ordinaciju gdje ćemo se dogovoriti za cijenu i savjetovati vas. </p>
  <Link to='/cetvrta'>Možete nas pronači</Link>
  <br></br><br></br><br></br>
  <Link to='/'>početna</Link>

  </div>
  );
} 
}

export default Probna;