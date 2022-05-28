import React from 'react'

import Hand from '../assets/images/hello.png'

export default function Header(props){
    return(
        <header className="container">
        <div className="hero">
            <span>Hello <img src={Hand} alt="Hello" />, my name is</span>
            <h1 className="name">Mochamad <label>Mufid</label> Abiyyu</h1>
            <h1 className="occupation">UI/UX Enthusiast</h1>
            <p>I am a computer science student who is passionate about
                <br/> user experience design</p>
        </div>
    </header>
    );
}
