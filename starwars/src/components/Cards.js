import React from 'react';
import CreateCard from './CreateCard';


const Cards = (props) => {
    return (
        <div>
            {props.characters.map((character, i) => (
                <CreateCard character={character} key={i} />
            ))}
        </div>
    )
}

export default Cards;