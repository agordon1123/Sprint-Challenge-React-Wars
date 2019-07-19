import React from 'react';

const CreateCard = (props) => {
    return (
        <div>
            <h3>Hello from the card</h3>
            <h4>{props.resultState}</h4>
        </div>
    )
}

export default CreateCard;