import React from 'react';
import './ServiceCard.css';

const ServiceCard = (props) => {
    const {image, title, description} = props;
    return (
        <div className = "c-wrapper">
            <img src = {image} alt = {title} />
            <span>{title}</span>
            <span>{description}</span>
            <button className='c-button'>LEARN MORE</button>
        </div>
    )
}

export default ServiceCard;