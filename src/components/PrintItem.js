import React from 'react';

import '../styles/PrintItem.css';

class PrintItem extends React.Component{
    render(){
        return(
            <div class="printItem">
                <h2>{this.props.title}</h2>
                <img src={this.props.src} alt={this.props.title} />
                <p class="top">{this.props.desc} <br/>Item Id:{this.props.id}</p>
                <p><br/>Price: £{this.props.price} + VAT</p>
                <a href={this.props.etsy} target="_blank" rel="noopener noreferrer">Buy on etsy</a>
            </div>
        );
    }
}

export default PrintItem;