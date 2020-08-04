import React from 'react';

import '../styles/CushionItems.css';
import Basket from '../functionality/Basket.js';

class CushionItem extends React.Component{
    handleClickCover(){
        Basket.addItem(this.props.id, this.props.cover, this.props.title + " Cover");
        window.location.reload(false);
    }
    handleClickInsert(){
        Basket.addItem(this.props.id, this.props.full, this.props.title + " Cover + Insert");
        window.location.reload(false);
    }
    render(){
        return(
            <div className="CushItem">
                <h2>{this.props.title}</h2>
                <img src={this.props.src} alt={this.props.title} />
                <p className="top">{this.props.desc} <br/>Item Id:{this.props.id}</p>
                <p><br/><b>Cover price: £{this.props.cover}</b></p>
                <button onClick={() => this.handleClickCover()}>Add to basket</button>
                <p><b>Cover + Insert price: £{this.props.full}</b></p>
                <button onClick={() => this.handleClickInsert()}>Add to basket</button>
                <a href={this.props.etsy} target="_blank" rel="noopener noreferrer">Buy on etsy</a>
            </div>
        );
    }
}

export default CushionItem;