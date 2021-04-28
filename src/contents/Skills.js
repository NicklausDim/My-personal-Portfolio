
import "./Skills.css";
import bootstrapImage from "../img/BootstrapImage.svg";
import cssImage from "../img/CssImage.svg";
import figmaImage from "../img/FigmaImage.svg";
import htmlImage from "../img/HTMLImage.svg";
import jsImage from "../img/JSImage.svg";
import photoshopImage from "../img/PhotoshopImage.svg";
import reactImage from "../img/react.svg";
import sassImage from "../img/SassImage.svg";
import vsImage from "../img/VisualStudioImage.svg";
import windowsImage from "../img/WindowsImage.svg";
import React from 'react'
    
    const Skills = () => {
        const skillsIcons = [
            bootstrapImage,
            cssImage ,
            figmaImage, 
            htmlImage ,
            jsImage ,
            photoshopImage,
            reactImage,
            sassImage,
            vsImage ,
            windowsImage 

        ];
        const allSkills=skillsIcons.map(icon => <div className="grid-items" style={{backgroundImage:`url(${icon})`}}></div> )
        return (
            <div className="condiv skills">
                <h1 className="subtopic">My Skills</h1>
                <div className="grid-container">

                {allSkills}
                </div>
            </div>
        )
    }
        
    
    export default Skills
    