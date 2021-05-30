// Write your Character component here
import {ContainerDiv, H1, P} from './Example';
function Character(props){
    return (
        <ContainerDiv>
          <H1>{props.name}</H1>
          <P>{props.name}</P>
        </ContainerDiv>
    )
}
export default Character