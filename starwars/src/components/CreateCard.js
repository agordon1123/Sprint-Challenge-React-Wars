import React from 'react';
import styled from 'styled-components';

const CardClass = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid black;
    background-color: #fafafa;
    border-radius: 5px;
    height: 400px;
    width: 220px;
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
            <img src="https://img.icons8.com/color/96/000000/star-wars.png"></img>
        </CardClass>
    )
}

export default CreateCard;