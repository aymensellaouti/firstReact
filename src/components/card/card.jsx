import React from 'react';
import './card.css';

const Card = (props) => {
    return (
    <div className='card-container'>
        <img 
            src={`https://picsum.photos/id/${props.user.id}/200/300`} 
            alt={props.user.name}/>
        <h1>{props.user.name}</h1>
    </div>);
};

export default Card;