import React from 'react';
import styled from 'styled-components';

const CardClass = styled.div`
    border: 1px solid red;
    height: 500px;
    width: 300px;
`;

const CreateCard = (props) => {
    return (
        <CardClass>
            <h3>Hello from the card</h3>
            <h4>Name: {props.character.name}</h4>
            <h4>Gender: {props.character.gender}</h4>
            <h4>Birthyear: {props.character.birthyear}</h4>
            <h4>Height: {props.character.height}</h4>
            <h4>Mass: {props.character.mass}</h4>
        </CardClass>
    )
}

export default CreateCard;