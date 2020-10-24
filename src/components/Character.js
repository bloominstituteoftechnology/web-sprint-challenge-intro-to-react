// Write your Character component here
import React, {useState} from 'react'
import styled from 'styled-components';
import Info from './Info';

const Main = styled.div`
  background: rgba(255, 255, 255, .7);
  width: 50%;
  margin: 0 auto;
  padding: 0 1rem;
  border-radius: 1rem;
  margin-bottom: 1rem;
  text-align: left;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  color: #443e3e;
  text-shadow: 1px 1px 5px #fff;
`;

const ATag = styled.a`
  color: #443e3e;
  text-shadow: 1px 1px 5px #fff;
  font-size: 2rem;
  cursor: pointer;
`;

function Character(props) {
  //state hold show boolen
  const [show, setShow] = useState(false);

  //shows info function
  const onChange = () => {
    if(show === false) {
      setShow(true);
    } else {
      setShow(false);
    }
  }

  // console.log(props.data);
  return (
  <Main>   
    <Container>
      <Title>{props.data.name}</Title>
      <ATag onClick={onChange}><i className="fas fa-caret-down"></i></ATag>
    </Container>

    {show && <Info info={props.data}/>}

  </Main>
  )
}

export default Character
