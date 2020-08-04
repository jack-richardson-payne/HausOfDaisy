import React from 'react';

import '../styles/Error.css';

class ErrorCont extends React.Component{
    render(){
        return(
            <div className="error">
                <h1>Oops! Something has gone wrong!</h1>
                <img src='./images/misc/broken.htm' alt="Error page" />
                <p>Return to the home page and if the problem persists contact jack.richardson-payne@outlook.com</p>
            </div>
        );
    }
}

export default ErrorCont;