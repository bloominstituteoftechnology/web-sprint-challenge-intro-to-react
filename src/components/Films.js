import { ContainerDiv} from './Example'
function Films(props){
    console.log(props)
  
  return (
          <ContainerDiv>           
            <h1>{props.title.name}</h1>
          </ContainerDiv>
      )
   
  }
  export default Films;