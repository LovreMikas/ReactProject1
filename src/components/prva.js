import React from 'react';
import {Link} from 'react-router-dom'

function Prva() {
  return (
    <div className="App">
      <table border ="1">
        <tr>
            <td>
            <Link to="/druga">pritisni zaaaaa</Link>
            </td>
            <td>
            <Link to="/hiperveza">pritisni zaaaaa</Link>
            </td>

        </tr>

      </table>
        
        
      
    </div>
  );
}

export default Prva;
