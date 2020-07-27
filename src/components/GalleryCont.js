import React from 'react';

import '../styles/GalleryCont.css';

class GalleryCont extends React.Component{
    render(){
        return(
        <div class="Gallery">
            <h1>Haus of Daisy gallery</h1>
            <table>
                <tr>
                    <td rowSpan='2'width='30%'align='center'>
                        <img src='./images/other/Gallery/example.png' alt='Customer Display' width='85%' height='auto'/>
                    </td>
                    <td width='40%' >
                        <img src='./images/other/Gallery/image00098.jpeg' alt='Customer Display' height='auto' width='75%'/>
                    </td>
                    <td rowSpan='2'width='30%' align='center' >
                        <img src='./images/other/Gallery/image00063.jpeg' alt='Customer Display' width='110%' height='auto'/>
                    </td>
                </tr>
                <tr>
                    <td width='40%' align='center' >
                        <img src='./images/other/Gallery/land1.png' alt='Customer Display' height='auto' width='70%' />
                    </td>
                </tr>
                <tr>
                    <td width="33%" align='center'>
                        <img src='./images/other/Gallery/image00002.jpeg' alt='Customer Display' height='auto' width='90%' />
                    </td>
                    <td width="33%" align='center'>
                        <img src='./images/other/Gallery/image00058.jpeg' alt='Customer Display' height='auto' width='70%' />
                    </td>
                    <td width="33%" align='center'>
                        <img src='./images/other/Gallery/image00067.jpeg' alt='Customer Display' height='auto' width='100%' />
                    </td>
                </tr>
            </table>
        </div>);
    }
}

export default GalleryCont;