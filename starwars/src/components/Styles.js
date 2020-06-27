import styled from 'styled-components'

const Styled = styled.div`
    background: #9ACD32;
    margin: auto;
    header{
       text-align: center; 
    }
    img{
        border-radius: 10px;
    }
    .info-card{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        padding: 1rem;
        margin: 1rem;
        background: #9370DB;
        border-radius: 10px;
        width: 500px;
    }
    button{
        font-size: 2rem;
        background: #9ACD32;
        border: none;
        border-radius: 5px;
        outline: none;
    }
`
export default Styled