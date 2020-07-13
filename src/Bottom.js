import React from 'react';
import './Bottom.css';

class Bottom extends React.Component{
    render(){
        return(
            <div class="footer">
                <table>
                    <tr>
                        <th>Customer Service</th>
                        <th>Meet us</th>
                    </tr>
                    <tr>
                        <td><a href="FAQ.html">FAQ's</a></td>
                        <td><a href="about.html">About us</a></td> 
                    </tr>
                    <tr>
                        <td><a href="delivery.html">Delivery Info</a></td>
                        <td><a href="contact.html">Contact us</a></td>
                    </tr>
                    <tr>
                        <td><a href="product.html">Product Info</a></td>
                        <td><a href="made.html">How it's made</a></td>
                    </tr>
                </table>
                <div class="creator">
                    <p>Website created by Jack Richardson-Payne</p>
                    <a href="https://www.linkedin.com/in/jack-richardson-payne-5a58991b0/" target="_blank" rel="noopener noreferrer">See my linkedin!</a>
                </div>
            </div>
        );
    }
}

export default Bottom;