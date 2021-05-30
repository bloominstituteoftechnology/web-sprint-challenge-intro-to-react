// Write your Character component here
import {ContainerDiv, H1} from './Example';
function Character(props){
  
return (
        <ContainerDiv>
          <H1>{props.name}</H1>
          <p>{props.name}</p>
        </ContainerDiv>
    )
 
}
export default Character