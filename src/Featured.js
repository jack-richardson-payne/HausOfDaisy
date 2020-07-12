import React from 'react';
import './Featured.css';

class Featured extends React.Component{
    render(){
        return(
            <div>
                <img src={this.props.img}/>
                <a href={this.props.src}>See this item!</a>
                <p>{this.props.desc}</p>
                <a href={this.props.page}>See more like this!</a>
            </div>
        );
    }
}

export default Featured;