import React from 'react';

import Heading from '../components/Heading';
import AboutCont from '../components/AboutCont';
import Bottom from '../components/Bottom';

class About extends React.Component{
    render(){
        return(
        <React.StrictMode>
            <Heading />
            <AboutCont />
            <Bottom />
        </React.StrictMode>);
    }
}

export default About;