
import styled from 'styled-components';
export const  ContainerDiv= styled.div`
padding: 5%;

`;

export const H1 = styled.li`
list-style-type: none;
color: white;
background-color: black;
font-size: 28px;
width: 300px;
transition: width 2s;
&:hover{
    background-color: rgb(169,141,110);
    color: red;
    font-size: 30px;
    opacity: 1;
    /* width: 350px; */
}
`;
