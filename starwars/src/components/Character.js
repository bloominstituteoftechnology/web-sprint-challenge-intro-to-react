// Write your Character component here
import React from "react";

const Character = (props) => {
  const { data } = props;
  console.log({ ...data });
  console.log({ data });

  return <div>{}</div>;
};

export default Character;

// const Character = (props) => {
//     let charFunc = (props) => {
//         const { data } = props;
//         const chars = { ...data, results: data.results };
//         return chars;
//     };

// return (
// <div></div>;
// )
// }

// export default Character;

// const dataResults = data.results;
//   return dataResults.map((bio) => (
//     <div>
//       <p>{data.results.bio}</p>
//       <p>{data.results.bio}</p>
//       <p>{data.results.bio}</p>
//       <p>{data.results.bio}</p>
//       <p>{data.results.bio}</p>
//       <p>{data.results.bio}</p>
//       <p>{data.results.bio}</p>
//       <p>{data.results.bio}</p>
//       <p>{data.results.bio}</p>
//     </div>
//   ));
