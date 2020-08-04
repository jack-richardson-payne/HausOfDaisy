import React from 'react';

import '../styles/BasketPage.css';
import Basket from '../functionality/Basket.js';

class BasketDisplay extends React.Component{
    render(){
        
        var ids = JSON.parse(localStorage.getItem("basketId")); 
        var prices = JSON.parse(localStorage.getItem("basketPrice")); 
        var titles = JSON.parse(localStorage.getItem("basketTitle")); 
        var basketArray = [];
        var total; 
        if(ids === null){
            ids = [];
            prices = [];
            titles = [];
            basketArray = [];
            total = 0;
        }
        else{
            if(prices.length > 0){
                total = prices.reduce((accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue));
            }
            
            for(var i = 0; i < ids.length; i++){
                var row = [];
                row.push(ids[i]);
                row.push(prices[i]);
                row.push(titles[i]);
                basketArray.push(row);
            }
        }
        if(basketArray.length > 0 ){
            return(
                <div class="basketManager">
                    <table>
                        <thead>
                        <tr>
                            <th className="bottom">Id</th>
                            <th className="bottom">Product</th>
                            <th className="bottom">Price</th>
                            <th className="bottom">Remove</th>
                        </tr>
                        </thead>
                        <tbody>
                        {basketArray.map(function(tableRow){
                            return <tr>
                                <td>{tableRow[0]}</td>
                                <td>{tableRow[2]}</td>
                                <td>£{tableRow[1]}</td>
                                <td className="del"><button onClick={function(){
                                    if(basketArray.length > 1){
                                        Basket.removeItem(tableRow[0]);
                                    }
                                    else{
                                        localStorage.clear();
                                        ids = [];
                                        prices = [];
                                        titles = [];
                                        basketArray = [];
                                        total = 0;
                                    }
                                    window.location.reload(false);
                                }}><img src="./images/misc/delete.png" alt="Delete" /></button></td>
                            </tr>
                        })}
                        <tr>
                            <td className="top"></td>
                            <td className="right top">Subtotal:</td>
                            <td className="top">£{total}</td>
                            <td className="top"></td>
                        </tr>
                        </tbody>
                    </table>
                    <button  className="butt">Pay Now</button>
                    <button className="butt red"onClick={function(){
                        localStorage.clear();
                        ids = [];
                        prices = [];
                        titles = [];
                        basketArray = [];
                        total = 0;
                        window.location.reload(false);
                    }}>Empty Basket</button>
                </div>
            );
        }
        else {
            return(
                <div className="empty">
                    <h1>Basket Empty</h1>
                    <img src="./images/misc/error.svg" alt="Basket empty" />
                    <p>Add items to the basket and return here to checkout.</p>
                </div>
            );
        }
    }
}

export default BasketDisplay;