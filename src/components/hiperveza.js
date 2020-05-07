import React from 'react';
function Probna() {
  
    return (
      <form>
        <label>
          ime:
          <input type="text" name="name" />
          </label>
          <br></br>
        <label>
        Prezime:
        <input type="text" name="name" />
        </label>
      <br></br>
        <label>
          kolika godina:
          <input type="text" name="name" />
          </label>
          <br></br>
          <label>
          ime ljubimca:
          <input type="text" name="name" />
          </label>
          <br></br>
          <br></br>
          <select>
            <option value="macka">Macka</option>
            <option value="pas">pas</option>
            <option value="konj">konj</option>
            <option value="kobila">kobila</option>
            <option value="krava">krabca</option>
          </select>
          <input type="submit" value="Submit"/>
      </form>
  );
}

export default Probna;