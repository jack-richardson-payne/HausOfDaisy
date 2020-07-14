import React from 'react';
import '../styles/Welcome.css';

class Welcome extends React.Component{
    render(){
        return(
            <div class="Welcome">
                <table>
                    <tr><td colSpan="2"><h1>Welcome to Haus of Daisy!</h1></td></tr>
                    <tr>
                        <td valign="top" class="half"><br /><p>Haus of Daisy is a new and upcoming quirky home accessories brand created by Brighton print designer, Alice Richardson-Payne. Here at Haus of Daisy, are obsessed with all things digital and contemporary. We love creating quirky printed products, with patterns built upon initial hand drawings which are layered up and then digitalised.<br /><br />Check out our works and find us on instagram @hausofdaisy to stay up to date with the our latest collections.</p>
</td>
                        <td><img src='./images/image00054.jpeg' alt="Haus Of Daisy Tags"/></td>
                    </tr>          
                </table>
            </div>
        );
    }
}

export default Welcome;