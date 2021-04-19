import React, { Component } from 'react';
import Social from '../components/Social';
import "./Contact.css";
class Contact extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">Contact Me</h1>
            <h3>Email  : Nikolas.Dimitriadis@hotmail.com  </h3>
            <h3>Instagram   :  @Call_Me_Nicklaus </h3>
            <a href="mailto:nikolas.dimitriadis@hotmail.com?Subject=Query Request">
                <button class="glow-on-hover" type="button">Why dont you send me an Email?</button>
            </a>
            <Social />
            </div>
            )
        }
    }
    
    export default Contact
    