import React from 'react';
import Carousel from 'nuka-carousel';
import skin1 from '../images/skin1.jpg'
import skin2 from '../images/skin2.jpg'
import skin3 from '../images/skin3.jpg'
import skin4 from '../images/skin4.jpg'
import skin5 from '../images/skin5.jpg'
import skin6 from '../images/skin6.jpg'
import '../App.css';

export default class Skins extends React.Component {
    render() {
        return (
            <div id={'skins'} className={'skins'}>
            <Carousel>
                <img src={skin1} />
                <img src={skin2} />
                <img src={skin3} />
                <img src={skin4} />
                <img src={skin5} />
                <img src={skin6} />
            </Carousel>
            </div>
        );
    }
}