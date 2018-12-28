import React from 'react';
import ReactDOM from 'react-dom';

const div = document.createElement('div');
div.setAttribute('id', 'app');
document.body.appendChild(div);

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('app'),
);

console.log('hello');
