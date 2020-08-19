import React from 'react';
import '../styles/Featured.css';

class Featured extends React.Component{
    getItems(){
        window.location.href = this.props.page;
    }
    render(){
        return(
            <div className='featItem'>
                <h2>{this.props.title}</h2>
                <img src={this.props.img} alt="Featured Item"/>
                <p onClick={() => this.getItems()}>{this.props.desc}</p>
                <a className="purple" href={this.props.src} >Buy on Etsy!</a>
                <a className="blue" href={this.props.page}>See more like this!</a>
            </div>
        );
    }
}

export default Featured;