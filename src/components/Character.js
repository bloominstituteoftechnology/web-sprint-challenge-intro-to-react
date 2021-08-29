import React from 'react';




const charApp = (props) => {
  
    return(
      <section>
           {
            props.character.map((character) => (
               <article>
               <p>Name: {character.name}  Birth Year:{character.birth_year}</p>
               </article>
               
               ))

               
           }
      </section>   
    );
  }


export default charApp;