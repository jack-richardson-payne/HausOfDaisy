import React from 'react';

import Heading from '../components/Heading';
import Welcome from '../components/Welcome';
import Featured from '../components/Featured';
import ImageLinks from '../components/ImageLinks';
import Bottom from '../components/Bottom';


class Home extends React.Component{
    render(){
        // console.log(localStorage.getItem("basketId"));
        // console.log(localStorage.getItem("basketPrice"));
        // console.log(localStorage.getItem("basketTitle"));
        
        return(
        <React.StrictMode>
            <Heading />
            <div class="bannermain">
                <img src="./images/black_and_white_cushion.jpg" alt="example print"></img>
            </div>
            <Welcome />
            <ImageLinks />
            <div class="featuredCon">
                <h1>Featured Items</h1>
                <table>
                    <tbody>
                    <tr>
                        <td><Featured img="./images/prints/BlueAbstract/main.jpg"
                        src="https://www.etsy.com/uk/listing/801171724/blue-abstract-digitally-printed-wall-art?ref=shop_home_active_10&frs=1"
                        title="Blue Abstract Digitally Printed Wall Art - A3 Print" 
                        desc="A contemporary hand drawn digital print, part of our 'Abstract' range. Developed from a collage of buildings made out of scrap metal, I was particularly inspired by nuts and bolts creating the circular shapes. This later developed into the layered industrial looking pattern today. Height: 42 Centimetres; Width: 29.7 Centimetres.
                        " 
                        page="prints"/></td>
                        <td><Featured img="./images/cushions/DP/DPMain.jpg"
                        src="https://www.etsy.com/uk/listing/838793935/pink-swirl-waterproof-garden-cushion?ref=shop_home_active_1&frs=1
                        " 
                        title="Pink Digitally Printed Waterproof Garden Cushion" 
                        desc="A Digitally Printed Waterproof Garden Cushion in Haus of Daisy exclusive print. Made to help you create the outdoor space of your dreams, and add a touch of luxury to your outdoor seating area. The cushion covers are made from a Oxford Waterproof Polyester, which means they are water repellant and can be left outside year round. The cushion covers are made to fit cushions that are 18x18 inch (45x45cm). The covers themselves measure approximately 17x17 inches, so have a nice plump finish when the cushion is inside. The cushion cover has an envelope style fastening.
                        " 
                        page="cushions"/></td>
                    </tr>
                    </tbody>
                </table>
            </div>
            
            <Bottom />
        </React.StrictMode>);
    }
}

export default Home;