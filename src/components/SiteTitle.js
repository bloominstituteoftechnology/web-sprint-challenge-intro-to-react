import React from 'react';
import style from 'styled-components'


const SiteTitle = (props) => {
    const{siteTitle} = props;



    return(
        <StyledSiteTitle> 
            <h1> {siteTitle} </h1>
        </StyledSiteTitle>
    )
};

const StyledSiteTitle = style.div`
@import url('https://fonts.googleapis.com/css2?family=Syne+Tactile&display=swap');
font-family: Syne Tactile, cursive;
`

export default SiteTitle;