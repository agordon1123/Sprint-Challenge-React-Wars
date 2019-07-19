import React from 'react';
import CreateCard from './CreateCard';
import styled from 'styled-components';

const Flex = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const Cards = (props) => {
    return (
        <Flex>
            {props.characters.map((character, i) => (
                <CreateCard character={character} key={i} />
            ))}
        </Flex>
    )
}

export default Cards;