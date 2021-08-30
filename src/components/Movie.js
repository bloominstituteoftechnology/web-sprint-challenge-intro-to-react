import React from 'react';




const movieApp = (props) => {
  
    return(
      <section>
           {
               <article>
               <p>Release Date:{props.movie.release_date}   Episode:{props.movie.episode_id}    {props.movie.title}</p>
               </article>
               
             
            }

      </section>   
    );
  }


export default movieApp;