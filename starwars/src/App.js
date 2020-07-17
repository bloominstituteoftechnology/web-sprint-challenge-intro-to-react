import React, { useState,useEffect } from 'react';
import './App.css';
import axios from 'axios'
import PokemonCard from '../src/components/PokemonCard'
import { Container, FormGroup, Input } from 'reactstrap'
// import Loops from '../src/components/loops'

const App = () => {

  const [cards, setCards] = useState([]);

  const BASE_URL = 'https://api.pokemontcg.io/v1/cards'

  useEffect(() => {
    axios.get(BASE_URL)
      .then(response => {
        setCards(response.data.cards);
        console.log('Response: ', response.data.cards)
      })
      .catch(error => {
        console.log('axios error: ', error);
      })
  }, [])



  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

// Get cards on a specific page / pageSize
// pokemon.card.where({ page: 50, pageSize: 500})
// .then(cards => {
//     console.log(cards[0].name)
// })

// const searchByName = (data) => {
//   console.log(data) /* This should not work, but it does. Data isn't defined, remember? */
//   return (<h2>{data}</h2>) // This breaks the render
// }

//    ATTEMPT AT FILTER RESULTS
//   const opt1 = document.querySelector('#common')
//   const opt2 = document.querySelector('#uncommon')
//   const opt3 = document.querySelector('#rare')


// const onInputChange = () => {
//   if(opt1.value === 'common') {
//     const rarity = 'Common'
//   } else if(opt2.value === 'uncommon') {
//     const rarity = 'Uncommon'
//   } else if(opt3.value === 'rare') {
//     const rarity = 'Rare'
//   } else {
//     const rarity = 'Rare Halo EX'
//   }
// }

return ( // data is not defined here, so IMPOSSIBLE to return any retrieved data
    <Container fluid="sm" className="cardContainer">

    <h1 style={{textAlign:"center", padding:"8px", background:"rgba(0,112,0,0.8"}}>&lArr; Pokemon Cards in My Deck &rArr;</h1>

{/* Search Form for Stretch */}
      {/* <FormGroup>
      <Input type="select" name="select" id="exampleSelect">
          <option id="common" value="common">Common</option>
          <option id="uncommon" value="uncommon">Uncommon</option>
          <option id="rare" value="rare">Rare</option>
          <option id="rare2" value="rare2">Rare Halo EX</option>
        </Input>
      </FormGroup> */}

    {
        cards.map(card => {
          return (
            <PokemonCard key={card.id} card={card}></PokemonCard>
                )
              })
            }
    </Container>
);

}

export default App;