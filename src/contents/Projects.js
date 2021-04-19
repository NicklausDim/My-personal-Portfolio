import React, { Component } from 'react';
import "./Projects.css";

class Projects extends Component {
    render() {
        return (
            <div className="condiv">
                <h2 className="subtopic">Here are some of my projects</h2>
                <br></br>
                <div className="projects-container">
                    <a href="https://hamburger-mini-project.herokuapp.com/" target="blank">
                        <div className="project4">
                        <p>A hamburger maker</p>
                        </div>
                    </a>
                    <a href="https://nicklausdim.github.io/Budget-version-2/" target="blank">
                        <div className="project1">
                            <p>A basic budget calculator</p>
                        </div>
                    </a>
                    <a href="https://nicklausdim.github.io/Cat-Animation-Loading-Bar/" target="blank">
                        <div className="project2">
                        <p>An animated loading cat screen</p>
                        </div>
                    </a>
                    <a href="https://nicklausdim.github.io/E-card-Creator/" target="blank">
                        <div className="project3">
                        <p>An e-card creator</p>
                        </div>
                    </a>

                </div>

            </div>
            )
        }
    }
    
export default Projects
    