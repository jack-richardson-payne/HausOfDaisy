import React from 'react';
import '../styles/Heading.css';

class Heading extends React.Component{
  getItems(){
    var idArray = JSON.parse(localStorage.getItem("basketId"));
    if(idArray != null){
      return idArray.length;
    }
    
  }
  render(){
    return (
      <div className="Heading">
        <a className="MLeft" href="index" onClick={function(){
          localStorage.getItem("basketId");
          localStorage.getItem("basketPrice"); 
          localStorage.getItem("basketTitle");}}>Home</a>
        <a class="BLeft" href="about"  onClick={function(){
          localStorage.getItem("basketId");
          localStorage.getItem("basketPrice"); 
          localStorage.getItem("basketTitle");}}>About</a>
        <a class="BLeft" href="gallery"  onClick={function(){
          localStorage.getItem("basketId");
          localStorage.getItem("basketPrice"); 
          localStorage.getItem("basketTitle");}}>Gallery</a>
        <img class="logo" src='./images/logo.PNG' alt="Haus Of Daisy"/>
        <a href="cushions"  onClick={function(){
          localStorage.getItem("basketId");
          localStorage.getItem("basketPrice"); 
          localStorage.getItem("basketTitle");}}>Cushions</a>
        <a class="BLeft" href="prints"  onClick={function(){
          localStorage.getItem("basketId");
          localStorage.getItem("basketPrice"); 
          localStorage.getItem("basketTitle");}}>Prints</a>
      <div class="BLeft small">
        <a class="BLeft small" href="basket"  onClick={function(){
          localStorage.getItem("basketId");
          localStorage.getItem("basketPrice"); 
          localStorage.getItem("basketTitle");}}><img src="./images/misc/basket.png" alt="Basket" />
          {this.getItems()}</a>
      </div>
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