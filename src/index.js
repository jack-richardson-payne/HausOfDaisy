import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Heading.css';
import Heading from './Heading';
import Welcome from './Welcome';

ReactDOM.render(
  <React.StrictMode>
    <Heading />
    <Welcome />
  </React.StrictMode>,
  document.getElementById('root')
);

