// Write your Character component here

function Character(props){
    console.log("THis is props ", props)
    return (
        <div>
          <h1>{props.name}</h1>
          <p>{props.name}</p>
        </div>
    )
}
export default Character