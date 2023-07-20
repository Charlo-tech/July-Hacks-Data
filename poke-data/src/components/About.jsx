import React from 'react';
import Header from './Header';

const About = () => {
    return (
        <>
            <Header />
        <div className="about-container">
        <h1 className="about-title">About</h1>
        <p className="about-text">This is a project created by <a href="charlesruita.netlify.com">Charles</a> for the <a href="https://angelhack.com/">AngelHack</a> hackathon. The goal of this project is to visualize data from the <a href="https://pokeapi.co/">PokeAPI</a> using <a href="https://d3js.org/">D3.js</a> and <a href="https://reactjs.org/">React.js</a>.</p>
        </div>
        </>
        );
}

export default About;