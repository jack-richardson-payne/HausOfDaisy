import React from 'react';

import Heading from '../components/Heading';
import Bottom from '../components/Bottom';
import BasketDisplay from '../components/BasketDisplay';



class BasketPage extends React.Component{
    render(){
        return(
        <React.StrictMode>
            <Heading />
            <BasketDisplay idArray={localStorage.getItem("basketId")} priceArray={localStorage.getItem("basketPrice")} titleArray={localStorage.getItem("basketTitle")}/>
            <Bottom />
        </React.StrictMode>);
    }
}

export default BasketPage;