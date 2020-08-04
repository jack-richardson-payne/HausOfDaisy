import React from 'react';
import '../styles/PrintBanner.css';

class CushBanner extends React.Component{
    render(){
        return(
            <div className="banner">
                <img src={this.props.src} alt="Cushions banner"/>
            </div>
        );
    }
}

export default CushBanner;