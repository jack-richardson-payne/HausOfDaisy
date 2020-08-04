import React from 'react';

import '../styles/PrintItem.css';
import Basket from '../functionality/Basket.js';

class PrintItem extends React.Component{
    handleClick() {
        Basket.addItem(this.props.id, this.props.price, this.props.title);
        window.location.reload(false);
    }
    render(){
        return(
            <div className="printItem">
                <h2>{this.props.title}</h2>
                <img src={this.props.src} alt={this.props.title} />
                <p className="top">{this.props.desc} <br/>Item Id:{this.props.id}</p>
                <p><br/><b>Price: £{this.props.price}</b></p>
                <button onClick={() => this.handleClick()}>Add to basket</button>
                <a href={this.props.etsy} target="_blank" rel="noopener noreferrer">Buy on etsy</a>
                
            </div>
        );
    }
}

export default PrintItem;