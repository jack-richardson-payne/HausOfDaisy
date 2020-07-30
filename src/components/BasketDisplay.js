import React from 'react';

import '../styles/BasketPage.css';

class BasketDisplay extends React.Component{
    
    render(){
        
        var ids = JSON.parse(localStorage.getItem("basketId")); 
        var prices = JSON.parse(localStorage.getItem("basketPrice")); 
        var titles = JSON.parse(localStorage.getItem("basketTitle")); 
        
        if(ids === null){
            ids = [];
            prices = [];
            titles = [];
            total = 0;
        }
        else{
            var total = prices.reduce((accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue));
        }
        return(
            <div class="basketManager">
                <ul>
                    {ids.map(function(id){ 
                        return <li>{id}</li>
                    })}
                </ul>
                <ul>
                    {prices.map(function(price){
                        return <li>£{price}</li>
                    })}
                </ul>
                <ul>
                    {titles.map(function(title){
                        return <li>{title}</li>
                    })}
                </ul>
                <p>Subtotal: £{total}</p>
                <button>Pay Now</button>
                <button onClick={function(){
                    localStorage.clear();
                    ids = [];
                    prices = [];
                    titles = [];
                    total = 0;
                    window.location.reload(false);
                }}>Empty Basket</button>
            </div>
        );
    }
}

export default BasketDisplay;