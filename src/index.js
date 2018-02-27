

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

      var d = new Date(),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;

      var datestring = [year, month, day].join('-');


     this.state = {brand: 'Peterson', blend: 'Old Dublin', timenday: datestring, comment: 'Your average good smoke'};

     this.brandChange = this.brandChange.bind(this);
     this.blendChange = this.blendChange.bind(this);
     this.timendayChange = this.timendayChange.bind(this);
     this.commentChange = this.commentChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
   }



   brandChange(event) {
    this.setState({brand: event.target.value});
    }

  blendChange(event) {
   this.setState({blend: event.target.value});
   }

   timendayChange(event) {
    this.setState({timenday: event.target.value});

  }

  commentChange(event) {
   this.setState({comment: event.target.value});
 }




   handleSubmit(event) {
    alert('Something changed!: ' + this.state.brand  + this.state.blend  + this.state.timenday  + this.state.comment);
    event.preventDefault();
  }
  render() {
  return (
    <form onSubmit={this.handleSubmit}>
      <table border="0">
      <tr><td>Brand:</td><td><input type="text" name="brand" size="50" value={this.state.brand} onChange={this.brandChange} ></input></td></tr>
      <tr><td>Blend:</td><td><input type="text" name="blend" size="50" value={this.state.blend} onChange={this.blendChange}></input></td></tr>
      <tr><td>Date:</td><td><input type="date" name="time" size="50" value={this.state.timenday} onChange={this.timendayChange}></input></td></tr>
      <tr><td valign="top">Note:</td><td><textarea rows="4" cols="46" onChange={this.commentChange}>{this.state.comment}</textarea></td></tr>
      <tr><td valign="top"></td><td><input type="submit" value="Log This Smoke" /></td></tr>
      </table>
    </form>
  );
  }
}

//const smoke = new Smoke("Peterson","Old Dublin", "Avesome evening smoke in vintage Custom-Bilt pipe");


ReactDOM.render(
  <SmokeForm />,
  document.getElementById('root')
);
