import React from 'react';
import './card.css';

function Card( {title, text, img, link} ){
    return(
        <div className='card'>
            <p className='card-title'>    { title }</p>
            <p className='card-text'>     { text }</p>
            <img className='card-img' alt="" src={ img }></img>
            <a className='card-link' href={ link }>Clique aqui...</a>
        </div>
    );
}

export default Card;