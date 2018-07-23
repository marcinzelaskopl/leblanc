import React, { Component } from 'react';
import '../App.css';

class Bio extends Component {
    render(){
        return (
            <div id={'bio'} className={'grid-container bio'}>
                <div className={'row'}>
                    <div className={'col-12'}>
                        <div className={'avatar'}></div>
                        <div className={'quote'}>
                            <h3>“A rose cannot grow in darkness. It dies, and the darkness grows…”</h3>
                            <h3>~ Leblanc</h3>
                        </div>
                        <div className={'bio-short'}>
                            <p>Mysterious even to other members of the Black Rose cabal, LeBlanc is but one of many names for a pale woman who has manipulated people and events since the earliest days of Noxus. Using her magic to mirror herself, the sorceress can appear to anyone, anywhere, and even be in many places at once. Always plotting just out of sight, LeBlanc’s true motives are as inscrutable as her shifting identity.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Bio