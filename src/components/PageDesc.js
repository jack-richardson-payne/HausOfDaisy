import React from 'react';

import '../styles/PageDesc.css';

class PageDesc extends React.Component{
    render(){
        return(
            <div className="desc">
                <h1>{this.props.title}</h1>
                <p>{this.props.body}</p>
            </div>
        );
    }
}

export default PageDesc