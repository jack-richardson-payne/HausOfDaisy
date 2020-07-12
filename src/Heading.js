import React from 'react';
import './Heading.css';

class Heading extends React.Component{
  render(){
    return (
      <div class="Heading">
        <a class="MLeft" href="index.html">Home</a>
        <a class="BLeft" href="about.html">About</a>
        <img class="logo" src='./images/logo.PNG' alt="Haus Of Daisy"/>
        <a href="pillows.html">Pillows</a>
        <a class="BLeft" href="prints.html">Prints</a>
        <div class="instaLink MRight">
          <p>Check out these links!</p>
          <a href="https://www.instagram.com/hausofdaisy/">
            <img src='./images/insta.png' alt="Instagram Link"/>
          </a>
          <a href="https://www.etsy.com/uk/shop/HAUSOFDAISY?">
            <img src='./images/etsy.png' alt="Etsy Link"/>
          </a>
        </div>
      </div>
    );
  }
}
export default Heading;

//<img src={require('./images/logo.PNG')} alt="Haus Of Daisy"/>