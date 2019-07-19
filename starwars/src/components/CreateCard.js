import React from 'react';
import styled from 'styled-components';

const CardClass = styled.div`
    border: 2px solid black;
    background-color: #fafafa;
    border-radius: 5px;
    height: 500px;
    width: 300px;
    margin: 20px;
`;

const CardTitle = styled.h3`
    font-size: 26px;
`;

const CreateCard = (props) => {
    return (
        <CardClass>
            <CardTitle>{props.character.name}</CardTitle>
            <p>Gender: {props.character.gender}</p>
            <p>Birthyear: {props.character.birth_year}</p>
            <p>Height: {props.character.height}</p>
            <p>Mass: {props.character.mass}</p>
        </CardClass>
    )
}

export default CreateCard;