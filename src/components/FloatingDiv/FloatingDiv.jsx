import React from 'react';
import "./FloatingDiv.css"

const FloatingDiv = ({image, text1, text2})=>{
    return(
        <div className = "f-wrapper">
            <img src = {image} alt = {image}/>
                <span>{text1}
                <br/>
                {text2}</span>
        </div>
    )
}

export default FloatingDiv;