import React from 'react';
import './Welcome.css';

class Welcome extends React.Component{
    render(){
        return(
            <div class="Welcome">
                <table>
                    <tr><td colSpan="2"><h1>Welcome to Haus of Daisy!</h1></td></tr>
                    <tr>
                        <td valign="top" class="half"><br /><p>Welcome to Haus of Daisy! My names Alice and Haus of Daisy is a brand I have created to share my love of print and pattern. Living in Brighton, with my two cats Sushi and Kiwi, I create bold patterns and layered digital prints for your contemporary home. Follow us on @hausofdaisy on instagram for the latest updates and products!</p>
</td>
                        <td><img src='./images/example.PNG' alt="Some of my Pillows"/></td>
                    </tr>          
                </table>
            </div>
        );
    }
}

export default Welcome;