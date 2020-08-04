import React from 'react';
import '../styles/imageLinks.css';

class ImageLinks extends React.Component{
    render(){
        return(
            <div className="imageLinks">
                <div className="image" style={{backgroundImage:'url(./images/image00003.jpeg)'}}>
                    <div className="text">
                        <a href="prints">Prints</a>
                    </div>
                </div>
                <div className="image" style={{backgroundImage:'url(./images/image00004.jpeg)'}}>
                    <div className="text">
                        <a href="cushions">Cushions</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default ImageLinks;