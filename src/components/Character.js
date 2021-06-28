import React from 'react';
// import React, { useState } from 'react';





const charApp = (props) => {
  
    return(
      <section>
           {
            
             props.character.map((char) => (
               <article>
               <p>{char.name}  {char.birth_year}</p>
               </article>
               ))
               
           }
      </section>   
    )
  }


export default charApp;