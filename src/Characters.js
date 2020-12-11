


export default function Characters (props){

 const {rickAndMort,SetRickAndMort} =Props

 console.log(rickAndMort)


 return (
    <div className="Character-Container">
      
  );{rickAndMort.map((character,index) => {
        return (
          <character key={character.id} characterStatus={character.status} characterName={character.name} characterSpecies ={character.species} characterurl = {Charcterurl} />
        );
      })}
    </div>
 
 
     










}