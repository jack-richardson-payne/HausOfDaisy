import React from 'react';
import '../styles/Heading.css';

class Heading extends React.Component{
  render(){
    return (
      <div class="Heading">
        <a class="MLeft" href="index">Home</a>
        <a class="BLeft" href="about">About</a>
        <a class="BLeft" href="gallery">Gallery</a>
        <img class="logo" src='./images/logo.PNG' alt="Haus Of Daisy"/>
        <a href="cushions">Cushions</a>
        <a class="BLeft" href="prints">Prints</a>
        <div class="instaLink MRight">
          <p>Check out these links!</p>
          <a href="https://www.instagram.com/hausofdaisy/" target="_blank" rel="noopener noreferrer">
            <img src='./images/insta.png' alt="Instagram Link"/>
          </a>
          <a href="https://www.etsy.com/uk/shop/HAUSOFDAISY?" target="_blank" rel="noopener noreferrer">
            <img src='./images/etsy.png' alt="Etsy Link"/>
          </a>
        </div>
      </div>
    );
  }
}
export default Heading;

//<img src={require('./images/logo.PNG')} alt="Haus Of Daisy"/>