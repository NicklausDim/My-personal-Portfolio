import React, { Component } from 'react';
import "./About.css";
import profilePic from "../img/Nicklaus-foto.jpeg";


class About extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">About Me</h1>
            <h4>Hey there,</h4>
            <h3>I'm Nicklaus!</h3>
            <b>I am a Full Stack Web Developer | UI/UX Designer</b>
            <br></br>
            <p>Born and raised in Greece in December of 1988, was in contact with my inner mechanic since I can remember myself! That resulted in many broken electronics at home and lots of yelling!
            </p>
            <br/>
            <p>
                Graduated from highschool on 2006 and completed my BA in Marketing-Management and foreign languages in 2012.
            </p>
            <br/>
            <p>
                I am passionate on whatever I get my hands on, a leading character by nature while paying attention that there is no I in teamwork!
            </p>
            <br/>
            <p>
                My hobbies include music, animals, tennis and table tennis, coding, and of course long walks on the beach!
            </p>
            <div className="pic-container">
                <img className="pictures img1" src={profilePic} alt="profile pic"/>
                <img className="pictures img2" src={profilePic} alt="profile pic"/>
                <img className="pictures img3" src={profilePic} alt="profile pic"/>
            </div>


            </div>
            )
        }
    }
    
    
export default About
    