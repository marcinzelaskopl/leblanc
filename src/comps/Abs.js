import React, { Component } from 'react';
import '../App.css';
import ImgPassive from '../images/passive.png'
import VideoPassive from '../videos/passive.webm'
import qPassive from '../images/Q.png'
import VideoQ from '../videos/q.webm'
import E from '../images/e.png'
import VideoE from '../videos/E.webm'
import W from '../images/w.png'
import VideoW  from '../videos/w.webm'
import R from '../images/mimic.png'
import VideoR from '../videos/r.webm'


class Abs extends Component {
    render(){
        return (
            <div className={'grid-container abs'}>
                <div className={'row'}>
                    <div className={'col-12 abs-info'}>
                        <img src={ImgPassive} alt={'passive'}/>
                        <h1 id={'abs'}>Mirror Image</h1>
                        <p>When LeBlanc drops below 40% health, she becomes invisible for 1 second and creates a Mirror Image that deals no damage and lasts for up to 8 seconds. Mirror Image has a 1 minute cooldown.</p>
                    </div>
                    <div className={'col-12 vid'}>
                        <video controls={'controls'}>
                            <source src={VideoPassive}/>
                        </video>
                    </div>
                    <div className={'col-12 abs-info'}>
                        <img src={qPassive} alt={'passive'}/>
                        <h1>Sigil of Malice</h1>
                        <p>LeBlanc projects a sigil, dealing damage and marking the target for 3.5 seconds. Damaging the marked target with an ability detonates the sigil, dealing additional damage. LeBlanc projects a sigil, dealing 55/80/105/130/155 (+40% Ability Power) magic damage and marking the target for 3.5 seconds.Damaging the marked target with an ability detonates the sigil, dealing 55/80/105/130/155 (+40% Ability Power) magic damage.</p>
                    </div>
                    <div className={'col-12 vid'}>
                        <video controls={'controls'}>
                            <source src={VideoQ}/>
                        </video>
                    </div>
                    <div className={'col-12 abs-info'}>
                        <img src={W} alt={'passive'}/>
                        <h1>Distortion</h1>
                        <p>LeBlanc dashes to a location, dealing damage to enemies near her destination. For the next 4 seconds, activate Distortion again to return LeBlanc to her starting location. LeBlanc dashes to a location, dealing 85/125/165/205/245 (+60% Ability Power) magic damage to enemies near her destination.For the next 4 seconds, activate Distortion again to return LeBlanc to her starting location.</p>
                    </div>
                    <div className={'col-12 vid'}>
                        <video controls={'controls'}>
                            <source src={VideoW}/>
                        </video>
                    </div>
                    <div className={'col-12 abs-info'}>
                        <img src={E} alt={'passive'}/>
                        <h1>Ethereal Chains</h1>
                        <p>LeBlanc launches a chain that shackles the first enemy hit. If the target remains shackled for 1.5 seconds, LeBlanc roots them and deals additional damage. eBlanc launches a chain that shackles the first enemy hit, dealing 40/60/80/100/120 (+30% Ability Power) magic damage and granting True Sight of the target.If the target remains shackled for 1.5 seconds, LeBlanc roots them for 1.5 seconds and deals an additional 60/90/120/150/180 (+70% Ability Power) magic damage.</p>
                    </div>
                    <div className={'col-12 vid'}>
                        <video controls={'controls'}>
                            <source src={VideoE}/>
                        </video>
                    </div>
                    <div className={'col-12 abs-info'}>
                        <img className={'mimic'} src={R} alt={'passive'}/>
                        <h1>Mimic</h1>
                        <p>LeBlanc casts a mimicked version of one of her basic spells. LeBlanc mimics her most recent spell, casting it again.Mimicked Sigil of Malice and Ethereal Chains deal magic damage, plus magic damage from their mark and root, respectively. Mimicked Distortion deals magic damage.</p>
                    </div>
                    <div className={'col-12 vid'}>
                        <video controls={'controls'}>
                            <source src={VideoR}/>
                        </video>
                    </div>
                </div>
            </div>
        )
    }
}

export default Abs