import React from 'react';

import Heading from '../components/Heading';
import Bottom from '../components/Bottom';
import '../styles/print.css'

class Print extends React.Component{
    
    render(){
        console.log(localStorage.getItem("targetId"));
        //var id = JSON.parse(localStorage.getItem("targetId")); 
        var title = JSON.parse(localStorage.getItem("targetTitle")); 
        var desc = JSON.parse(localStorage.getItem("targetDesc")); 
        var price = JSON.parse(localStorage.getItem("targetPrice"));
        var src = JSON.parse(localStorage.getItem("targetSrc"));
        var path = JSON.parse(localStorage.getItem("targetPath"));
        var etsy = JSON.parse(localStorage.getItem("targetEtsy"));
        return(
            <React.StrictMode>
                <Heading />
                <div className="individualPrint">
                    <div className="info">
                        <h2>{title}</h2><br/>
                        <p>{desc}</p><br/>
                        <p><b>Price: £{price}</b></p><br/>
                    </div>
                    <div className="findIt">
                        <a className="pink" href={etsy} target="_blank" rel="noopener noreferrer">Buy on etsy</a>
                        <a className="blue" href='prints'  rel="noopener noreferrer">See more prints</a>
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

export default Print;