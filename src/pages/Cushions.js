import React from 'react';

import Heading from '../components/Heading';
import Bottom from '../components/Bottom';
import CushionItem from '../components/CushionItem';

import '../styles/CushionItems.css';

class Cushions extends React.Component{
    render(){
        return(
        <React.StrictMode>
            <Heading />
            <div class="itemCont">
                <CushionItem title="Monochrome Waterproof Garden Cushion" 
                id='1' 
                src='./images/cushions/BW/BWMain.jpg' 
                alt='Black and White outdoor cushion' 
                desc='A Digitally Printed Waterproof Garden Cushion in Haus of Daisy exclusive print. Made to help you create the outdoor space of your dreams, and add a touch of luxury to your outdoor seating area.The cushion covers are made from a Oxford Waterproof Polyester, which means they are water repellant and can be left outside year round. The cushion covers are made to fit cushions that are 18x18 inch (45x45cm). The covers themselves measure approximately 17x17 inches, so have a nice plump finish when the cushion is inside. The cushion cover has an envelope style fastening.
' 
                cover='14' 
                full='19'
                etsy="https://www.etsy.com/uk/listing/824891356/monochrome-waterproof-garden-cushion?ref=shop_home_active_2&frs=1"
/>
                <CushionItem title="Pink Swirl Waterproof Garden Cushion" 
                id='2' 
                src='./images/cushions/DP/DPMain.jpg' 
                alt='Dark Pink outdoor cushion' 
                desc='A Digitally Printed Waterproof Garden Cushion in Haus of Daisy exclusive print. Made to help you create the outdoor space of your dreams, and add a touch of luxury to your outdoor seating area. The cushion covers are made from a Oxford Waterproof Polyester, which means they are water repellant and can be left outside year round. The cushion covers are made to fit cushions that are 18x18 inch (45x45cm). The covers themselves measure approximately 17x17 inches, so have a nice plump finish when the cushion is inside. The cushion cover has an envelope style fastening.
' 
                cover='14' 
                full='19'
                etsy="https://www.etsy.com/uk/listing/838793935/pink-swirl-waterproof-garden-cushion?ref=shop_home_active_1&frs=1"
                />
                <CushionItem title="Pink Digitally Printed Waterproof Garden Cushion" 
                id='3' 
                src='./images/cushions/PL/PLMain.jpg' 
                alt='Light Pink outdoor cushion' 
                desc='A Digitally Printed Waterproof Garden Cushion in Haus of Daisy exclusive print. Made to help you create the outdoor space of your dreams, and add a touch of luxury to your outdoor seating area. The cushion covers are made from a Oxford Waterproof Polyester, which means they are water repellant and can be left outside year round. The cushion covers are made to fit cushions that are 18x18 inch (45x45cm). The covers themselves measure approximately 17x17 inches, so have a nice plump finish when the cushion is inside. The cushion cover has an envelope style fastening.
' 
                cover='14' 
                full='19'
                etsy="https://www.etsy.com/uk/listing/824902878/pink-digitally-printed-waterproof-garden?ref=shop_home_active_3&frs=1" 
                />
            </div>
            <Bottom />
        </React.StrictMode>);
    }
}

export default Cushions;