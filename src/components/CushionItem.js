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
    getItems(){
        localStorage.setItem("targetIdCush", JSON.stringify(this.props.id));
        localStorage.setItem("targetTitleCush", JSON.stringify(this.props.title));
        localStorage.setItem("targetDescCush", JSON.stringify(this.props.desc));
        localStorage.setItem("targetPrice1Cush", JSON.stringify(this.props.cover));
        localStorage.setItem("targetPrice2Cush", JSON.stringify(this.props.full));
        localStorage.setItem("targetSrcCush", JSON.stringify(this.props.src));
        localStorage.setItem("targetPathCush", JSON.stringify(this.props.path));
        localStorage.setItem("targetEtsyCush", JSON.stringify(this.props.etsy));

        localStorage.getItem("targetIdCush");
        localStorage.getItem("targetTitleCush"); 
        localStorage.getItem("targetDescCush");
        localStorage.getItem("targetPrice1Cush"); 
        localStorage.getItem("targetPrice2Cush"); 
        localStorage.getItem("targetSrcCush");
       
        localStorage.getItem("targetEtsyCush");
        window.location.href = 'Cushion'
    }
    render(){
        return(
            <div className="CushItem">
                <h2>{this.props.title}</h2>
                <div  className="imagewrapper">
                <img src={this.props.src} alt={this.props.title} />
                <p href="Cushion" onClick={() => this.getItems()}>{this.props.desc} <br/>Item Id:{this.props.id}</p>
                </div>
                <p className="price"><br/><b>Cover price: £{this.props.cover}</b></p>         
                <p className="price"><b>Cover + Insert price: £{this.props.full}</b></p>           
                <a href={this.props.etsy} target="_blank" rel="noopener noreferrer">Buy on etsy</a>
            </div>
        );
    }
}

export default CushionItem;

// <button onClick={() => this.handleClickCover()}>Add to basket</button>
// <button onClick={() => this.handleClickInsert()}>Add to basket</button>