import React from 'react';
import './Services.css';
import glasses from '../../img/glasses.png';
import heartemoji from '../../img/heartemoji.png';
import humble from '../../img/humble.png';

const Services = () =>{
    return(
        <div className = "s-wrapper">
            <div className="s-left">
                <span>Skills</span>
                <span className = "s-title">Frontend</span>
                <span className = "s-notes">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</span>
                <span className = "s-title">Backend</span>
                <span className = "s-notes">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</span>
                <button className='button s-button'>Download csv</button>
            </div>
            <div className="s-right">
                
            </div>
        </div>
    )
}

export default Services;