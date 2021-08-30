import React from 'react';




const charApp = (props) => {
  
    return(
      <section>
          <h1>Main Star Wars Characters:</h1>
           {
            props.character.map((character) => (
               <article>
               <p>Name: {character.name}  Birth Year:{character.birth_year}</p>
               </article>
               
               ))
             
            }
           <h1> Star Wars Movies:</h1>
           {
            props.movie.map((movie) => (
               <article>
               <p>Release Date:{movie.release_date}   Episode:{movie.episode_id}    {movie.title}</p>
               </article>
               
               ))
             
            }

      </section>   
    );
  }


export default charApp;