import React, { Component } from 'react';
import '../App.css';

class Front extends Component {
    render(){
        function scroll() {
            const el = document.getElementById('bio');
            el.scrollIntoView({behavior: 'smooth'});
        }
        return (
            <div className={'grid-container'}>
                <div className={'row'}>
                    <div className={'col-12 front'}>
                        <h1>LEBLANC</h1>
                        <h6>THE DECEIVER</h6>
                        <button onClick={scroll} className={'btn-front'}>Check more</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Front