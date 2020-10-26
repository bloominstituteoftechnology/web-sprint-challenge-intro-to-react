import React, {useState} from 'react';
import styled from 'styled-components';

const RangeSelection = ({range, setRange}) => {
    const [input, setInput] = useState([...range]);

    const handleInput = (evt, key) => {
        let tmp = [...input];
        tmp[key] = Number(evt.target.value);
        setInput(tmp);
    };

    const updateRange = () => {
        if (input[0] <= input[1]) setRange(input);
        else console.log("Not a valid range");
    };

    return (
        <div>
            <InputBox type="number" min="1" max="1050" value={input[0] || null} onChange={evt => {handleInput(evt, 0)}} />
            <span>-</span>
            <InputBox type="number" min="1" max="1050" value={input[1] || null} onChange={evt => {handleInput(evt, 1)}} />
            <Button onClick={updateRange}>Get Pokemon</Button>
        </div>
    );
};

const InputBox = styled.input`

`;

const Button = styled.button`

`;

export default RangeSelection;
