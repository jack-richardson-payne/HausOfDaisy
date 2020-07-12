import React from 'react';
import './Heading.css';

class Heading extends React.Component{
  render(){
    return (
      <div class="Heading">
        <a class="MLeft" href="index.html">Home</a>
        <a href="about.html">About</a>
        <img src={require('./images/logo.PNG')} alt="Haus Of Daisy"/>
        <a href="pillows.html">Pillows</a>
        <a href="prints.html">Prints</a>
      </div>
    );
  }
}
export default Heading;

//<img src={require('./images/logo.PNG')} alt="Haus Of Daisy"/>