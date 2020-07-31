import React from 'react';
import '../styles/Bottom.css';

class Bottom extends React.Component{
    render(){
        return(
            <div class="footer">
                <table>
                    <thead>
                    <tr>
                        <th>Customer Service</th>
                        <th>Meet us</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><a href="FAQ">FAQ's</a></td>
                        <td><a href="about">About us</a></td> 
                    </tr>
                    <tr>
                        <td><a href="delivery">Delivery Info</a></td>
                        <td><a href="contact">Contact us</a></td>
                    </tr>
                    <tr>
                        <td><a href="product">Product Info</a></td>
                        <td><a href="made">How it's made</a></td>
                    </tr>
                    </tbody>
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