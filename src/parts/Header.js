import React from 'react'
import { Link } from 'react-router-dom'

import Hand from '../assets/images/hello.png'
import illustration from '../assets/illustration/designer.svg'

export default function Header(props){
    return(
        <header className="hero container container-fluid">
        <div className="row align-items-center">
            <div className="col-lg-6">
                <span>Hello <img src={Hand} alt="hands"/>, my name is</span>
                <h1>Mochamad <label>Mufid</label> Abiyyu</h1>
                <h1><label>UI/UX</label> Enthusiast</h1>
                <p>I am a computer science student who is passionate about <br/> 
                    user experience design</p>
            </div>
            <div className="col-lg-6 text-center">
                <img src={illustration} alt="designer" className="img-fluid"/>
            </div>
        </div>
    </header>
    );
}
