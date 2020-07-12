import React from 'react';
import './Welcome.css';

class Welcome extends React.Component{
    render(){
        return(
            <div class="Welcome">
                <table>
                    <tr><td colSpan="2"><h1>Welcome to Haus of Daisy!</h1></td></tr>
                    <tr>
                        <td valign="top" class="half"><br /><p>I am a designer who creates outdoor pillows and original prints please feel free to browse and use the contact page if you wish to buy! Thank you for visiting the page.</p>
</td>
                        <td><img src={require('./images/example.PNG')} alt="Some of my Pillows"/></td>
                    </tr>          
                </table>
            </div>
        );
    }
}

export default Welcome;