import React from 'react';
import '../styles/Featured.css';

class Featured extends React.Component{
    render(){
        return(
            <div class='featItem'>
                <h2>{this.props.title}</h2>
                <img src={this.props.img} alt="Featured Item"/>
                <a href={this.props.src} class="topBord">See this item!</a>
                <p>{this.props.desc}</p>
                <a href={this.props.page}>See more like this!</a>
            </div>
        );
    }
}

export default Featured;