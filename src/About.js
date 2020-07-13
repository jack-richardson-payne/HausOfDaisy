import React from 'react';

import Heading from './Heading';

import Bottom from './Bottom';

class About extends React.Component{
    render(){
        return(
        <React.StrictMode>
            <Heading />
    
            <Bottom />
        </React.StrictMode>);
    }
}

export default About;