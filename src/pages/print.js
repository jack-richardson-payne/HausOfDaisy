import React from 'react';

import Heading from '../components/Heading';
import Bottom from '../components/Bottom';
import '../styles/print.css'

class Print extends React.Component{
    
    render(){
        console.log(localStorage.getItem("targetId"));
        var id = JSON.parse(localStorage.getItem("targetId")); 
        var title = JSON.parse(localStorage.getItem("targetTitle")); 
        var desc = JSON.parse(localStorage.getItem("targetDesc")); 
        var price = JSON.parse(localStorage.getItem("targetPrice"));
        var src = JSON.parse(localStorage.getItem("targetSrc"));

        return(
            <React.StrictMode>
                <Heading />
                <div className="individualPrint">
                    <div className="info">
                        <h2>{title}</h2><br/>
                        <p>{desc}</p><br/>
                        <p>£{price}</p><br/>
                        <p>Item Id:{id}</p><br/>
                    </div>
                    <img src={src} />
                </div>
                <Bottom />
            </React.StrictMode>
        );
    }
}

export default Print;