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
        return(
            <div class="basketManager">
                <table>
                    <thead>
                    <tr>
                        <th class="bottom">Id</th>
                        <th class="bottom">Product</th>
                        <th class="bottom">Price</th>
                        <th class="bottom">Remove</th>
                    </tr>
                    </thead>
                    <tbody>
                    {basketArray.map(function(tableRow){
                        return <tr>
                            <td>{tableRow[0]}</td>
                            <td>{tableRow[2]}</td>
                            <td>£{tableRow[1]}</td>
                            <td class="del"><button onClick={function(){
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
                        <td class="top"></td>
                        <td class="right top">Subtotal:</td>
                        <td class="top">£{total}</td>
                        <td class="top"></td>
                    </tr>
                    </tbody>
                </table>
                <button  class="butt">Pay Now</button>
                <button class="butt red"onClick={function(){
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
}

export default BasketDisplay;