import React from 'react';

import '../styles/CushionItems.css';

class CushionItem extends React.Component{
    render(){
        return(
            <div class="CushItem">
                <h2>{this.props.title}</h2>
                <img src={this.props.src} alt={this.props.alt} />
                <p class="top">{this.props.desc} <br/>Item Id:{this.props.id}</p>
                <p><br/>Cover price: £{this.props.cover} + VAT</p>
                <p>Cover + Insert price: £{this.props.full} + VAT</p>
            </div>
        );
    }
}

export default CushionItem;