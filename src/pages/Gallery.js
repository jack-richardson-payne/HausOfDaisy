import React from 'react';

import Heading from '../components/Heading';
import Bottom from '../components/Bottom';
import GalleryCont from '../components/GalleryCont';

class Gallery extends React.Component{
    render(){
        return(
        <React.StrictMode>
            <Heading />
            <GalleryCont />
            <Bottom />
        </React.StrictMode>);
    }
}

export default Gallery;