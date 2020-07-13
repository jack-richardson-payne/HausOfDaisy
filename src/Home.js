import React from 'react';

import Heading from './Heading';
import Welcome from './Welcome';
import Featured from './Featured';
import Bottom from './Bottom';

class Home extends React.Component{
    render(){
        return(
        <React.StrictMode>
            <Heading />
            <div class="banner">
                <img src="./images/image00004.jpeg" alt="example print"></img>
            </div>
            <Welcome />
            <div class="featuredCon">
                <h1>Featured Items!</h1>
                <table>
                    <tr>
                        <td><Featured img="./images/feat.jpeg" desc="A contemporary hand drawn digital print, part of our 'Abstract' range. Developed from a collage of buildings made out of scrap metal, I was particularly inspired by nuts and bolts creating the circular shapes. This later developed into the layered industrial looking pattern today.
        Designed and created by HAUS OF DAISY. Printed on high quality A3 paper ready to be framed. The perfect addition to any home." page="./prints.html"/></td>
                        <td><Featured img="./images/image00309.jpeg" desc="A contemporary hand drawn digital print, part of our 'Abstract' range on one of our outdoor waterproof cushions. Designed and created by HAUS OF DAISY. The perfect addition to any home or garden." page="./pillows.html"/></td>
                    </tr>
                </table>
            </div>
            <Bottom />
        </React.StrictMode>);
    }
}

export default Home;