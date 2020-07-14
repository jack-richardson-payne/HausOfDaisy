import React from 'react';
import '../styles/imageLinks.css';

class ImageLinks extends React.Component{
    render(){
        return(
            <div class="imageLinks">
                <div class="image" style={{backgroundImage:'url(./images/image00003.jpeg)'}}>
                    <div class="text">
                        <a href="prints">Prints</a>
                    </div>
                </div>
                <div class="image" style={{backgroundImage:'url(./images/image00004.jpeg)'}}>
                    <div class="text">
                        <a href="cushions">Cushions</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default ImageLinks;