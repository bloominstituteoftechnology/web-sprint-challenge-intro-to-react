import React from 'react'
import styled from "styled-components";

const Details = (props) => {
    const { character } = props;

    const StyledPage = styled.div`
  background-color: ${(pr) => pr.theme.backgroundColor};
  text-align: center;
  display: ${(pr) => character.detailsOpened ? '' : 'none'};
  `;

    return (
        <StyledPage className='characterDetails'>
            <div className="characterAttr">Status:</div>
            <div className="characterAttrValue">{character.status}</div>
            <div className="characterAttr">Species:</div>
            <div className="characterAttrValue">{character.species}</div>
        </StyledPage>
    );
};

export default Details;