

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function formatFirstname(user) {
  return user.firstName;
}

function formatLastname(user) {
  return user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <form>
   First Name: <input type="text" name="firstname" value={formatFirstname(user)}></input>
   <br /> <br />
   Last Name: <input type="text" name="lastname" value={formatLastname(user)}></input>
  </form>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
