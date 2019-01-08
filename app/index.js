import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import IndexApp from './containers';

const div = document.createElement('div');
div.setAttribute('id', 'app');
document.body.appendChild(div);

const mountNode = document.getElementById('app');

render(
  <AppContainer>
    <IndexApp />
  </AppContainer>,
  mountNode,
);
