

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Smoke {
  constructor(brand,blend,comment) {
    this.brand = brand;
    this.blend = blend;
    this.timenday = new Date();
    this.comment = comment
  }

  showSmoke() {
    alert(this.brand + ' ' + this.blend)
  }
}



const smoke = new Smoke("Peterson","Old Dublin", "Avesome evening smoke in vintage Custom-Bilt pipe");

const element = (
  <form>
    <table border="0">
    <tr><td>Brand:</td><td><input type="text" name="brand" size="40" value={smoke.brand}></input></td></tr>
    <tr><td>Blend:</td><td><input type="text" name="blend" size="40" value={smoke.blend}></input></td></tr>
    <tr><td>Time:</td><td><input type="text" name="time" size="40" value={smoke.timenday}></input></td></tr>
    <tr><td valign="top">Note:</td><td><textarea rows="4" cols="39">{smoke.comment}</textarea></td></tr>
    </table>
  </form>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
