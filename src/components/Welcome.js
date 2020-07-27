import React from 'react';
import '../styles/Welcome.css';
import InstagramEmbed from 'react-instagram-embed';

class Welcome extends React.Component{
    render(){
        return(
            <div class="Welcome">
                <table>
                    <tr>
                        <td><h1>Welcome to Haus of Daisy!</h1></td>
                        <td rowSpan='2' valign='top'>
                        <InstagramEmbed
                        url='https://www.instagram.com/p/CCvQpJAHLcW/'
                        maxWidth={320}
                        hideCaption={true}
                        containerTagName='div'
                        protocol=''
                        injectScript
                        onLoading={() => {}}
                        onSuccess={() => {}}
                        onAfterRender={() => {}}
                        onFailure={() => {}}
                        />
                        </td>
                    </tr>
                    <tr>
                        <td valign="top" class="half">
                            <p>Haus of Daisy is a new and upcoming quirky home accessories brand created by Brighton print designer, Alice Richardson-Payne. Here at Haus of Daisy, are obsessed with all things digital and contemporary. We love creating quirky printed products, with patterns built upon initial hand drawings which are layered up and then digitalised.<br /><br />Check out our works and find us on instagram @hausofdaisy to stay up to date with the our latest collections.</p>
                        </td>
                    </tr>          
                </table>
            </div>
        );
    }
}

export default Welcome;

// <td rowSpan='2' valign='top'><img src='./images/cushions/mixed13.jpg' alt="Haus Of Daisy Tags"/></td>