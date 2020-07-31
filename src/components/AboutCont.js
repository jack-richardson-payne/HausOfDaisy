import React from 'react';
import '../styles/AboutCont.css';
import '../styles/Welcome.css';

class AboutCont extends React.Component{
    render(){
        return(
            <div class="about">
                <table >
                    <tbody>
                    <tr>
                    <td rowSpan="2"><img src="./images/kittens.PNG" alt="Meet Sushi Kiwi"/></td>
                        <td class="middle pad"><h1>About Haus of Daisy</h1></td>
                        <td rowSpan="2"><img src="./images/alice.PNG" alt="Me :)"/></td>
                    </tr>
                    <tr>
                        <td class="middle pad"><p>Hi, my name is Alice Richardson-Payne, and I am a digital print designer who lives in Sunny Brighton with my cats Sushi and Kiwi. I studied Printed Textiles and Surface Pattern Design at Leeds Art University, and have since developed Haus of Daisy to share my love of bold and quirky patterns with the world.<br /><br />Find me on instagram @hausofdaisy to stay up to date with all our latest products and giveaways!</p>
</td>
                    </tr>
                    </tbody>
                </table>
                
            </div>
        );
    }
}

export default AboutCont;