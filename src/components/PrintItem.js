import React from 'react';

import '../styles/PrintItem.css';
import Basket from '../functionality/Basket.js';
import Print from '../pages/print';

class PrintItem extends React.Component{
    handleClick() {
        Basket.addItem(this.props.id, this.props.price, this.props.title);
        window.location.reload(false);
    }
    getItems(){
        localStorage.setItem("targetId", JSON.stringify(this.props.id));
        localStorage.setItem("targetTitle", JSON.stringify(this.props.title));
        localStorage.setItem("targetDesc", JSON.stringify(this.props.desc));
        localStorage.setItem("targetPrice", JSON.stringify(this.props.price));
        localStorage.setItem("targetSrc", JSON.stringify(this.props.src));

        localStorage.getItem("targetId");
        localStorage.getItem("targetTitle"); 
        localStorage.getItem("targetDesc");
        localStorage.getItem("targetPrice"); 
        localStorage.getItem("targetSrc");
        window.location.href = 'Print'
    }
    render(){
        return(
            <div className="printItem">
                <h2>{this.props.title}</h2>
                <div  className="imagewrapperprint">
                <img src={this.props.src} alt={this.props.title} />
                <p href="Prints" onClick={() => this.getItems()}>{this.props.desc} <br/>Item Id:{this.props.id}</p>
                </div>
                <p className="price"><br/><b>Price: £{this.props.price}</b></p>
                <button onClick={() => this.handleClick()}>Add to basket</button>
                <a href={this.props.etsy} target="_blank" rel="noopener noreferrer">Buy on etsy</a>
                
            </div>
        );
    }
}

export default PrintItem;