import React from 'react';

import Heading from '../components/Heading';
import Bottom from '../components/Bottom';
import '../styles/print.css'

class Cushion extends React.Component{
    
    render(){
        console.log(localStorage.getItem("targetIdCush"));
        //var id = JSON.parse(localStorage.getItem("targetIdCush")); 
        var title = JSON.parse(localStorage.getItem("targetTitleCush")); 
        var desc = JSON.parse(localStorage.getItem("targetDescCush")); 
        var price1 = JSON.parse(localStorage.getItem("targetPrice1Cush"));
        var price2 = JSON.parse(localStorage.getItem("targetPrice2Cush"));
        var src = JSON.parse(localStorage.getItem("targetSrcCush"));
        var path = JSON.parse(localStorage.getItem("targetPathCush"));
        var etsy = JSON.parse(localStorage.getItem("targetEtsyCush"));
        return(
            <React.StrictMode>
                <Heading />
                <div className="individualPrint">
                    <div className="info">
                        <h2>{title}</h2><br/>
                        <p>{desc}</p><br/>
                        <p><b>Cover price: £{price1}</b></p><br/>
                        <p><b>Cover + Insert price: £{price2}</b></p><br/>
                    </div>
                    <div className="findIt">
                        <a className="pink" href={etsy} target="_blank" rel="noopener noreferrer">Buy on etsy</a>
                        <a className="blue" href='cushions'  rel="noopener noreferrer">See more cushions</a>
                    </div>
                    <div className="photos">
                        <img className="pad" src={src} alt={title}/>
                        <img src={path + "image2.jpg"} alt={title + "2"}/>
                    </div>
                </div>
                <Bottom />
            </React.StrictMode>
        );
    }
}

export default Cushion;