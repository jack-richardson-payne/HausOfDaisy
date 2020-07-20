import React from 'react';
import '../styles/PrintBanner.css';

class PrintBanner extends React.Component{
    render(){
        return(
            <div class="banner">
                <img src={this.props.src} alt="Print Banner"/>
            </div>
        );
    }
}

export default PrintBanner;