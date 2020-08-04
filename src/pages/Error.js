import React from 'react';

import Heading from '../components/Heading';
import ErrorCont from '../components/ErrorCont';
import Bottom from '../components/Bottom';

class Error extends React.Component{
    render(){
        return(
        <React.StrictMode>
            <Heading />
            <ErrorCont />
            <Bottom />
        </React.StrictMode>);
    }
}

export default Error;