

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

class SmokeForm extends React.Component {
  constructor(props) {
     super(props);
     this.state = {brand: ''};

     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleChange(event) {
    this.setState({brand: event.target.value});
  }

   handleSubmit(event) {
    alert('A name was submitted: ' + this.state.brand);
    event.preventDefault();
  }
  render() {
  return (
    <form onSubmit={this.handleSubmit}>
      <table border="0">
      <tr><td>Brand:</td><td><input type="text" name="brand" size="50" value={this.state.brand} onChange={this.handleChange} ></input></td></tr>
      <tr><td>Blend:</td><td><input type="text" name="blend" size="50" value={this.props.blend}></input></td></tr>
      <tr><td>Time:</td><td><input type="text" name="time" size="50" value={this.props.timenday}></input></td></tr>
      <tr><td valign="top">Note:</td><td><textarea rows="4" cols="46">{this.props.comment}</textarea></td></tr>
      <tr><td valign="top"></td><td><input type="submit" value="Log This Smoke" /></td></tr>
      </table>
    </form>
  );
  }
}

const smoke = new Smoke("Peterson","Old Dublin", "Avesome evening smoke in vintage Custom-Bilt pipe");


ReactDOM.render(
  <SmokeForm brand={smoke.brand} blend={smoke.blend} timenday={smoke.timenday} comment={smoke.comment} />,
  document.getElementById('root')
);
