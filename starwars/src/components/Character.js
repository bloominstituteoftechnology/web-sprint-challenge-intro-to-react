// Write your Character component here
import React from "react";

const Character = (props) => {
  const { data, key } = props;
  console.log(data);

  return data.map((bio) => (
    <ul key={bio.name + bio.birth_year}>
      <li>{bio.name}</li>
      <li>{bio.birth_year}</li>
      <li>{bio.gender}</li>
      <li>{bio.hair_color}</li>
      <li>{bio.height}</li>
      <li>{bio.mass}</li>
      <li>{bio.url}</li>
    </ul>
  ));
};

export default Character;

// data.map((bio) => {
//     return (
//       <div>
//         <p key={bio.name}>{bio.name}</p>
//         <p>{bio.height}</p>
//       </div>
//     );
//   });
// };

// export default Character;
//   let mappedData = arrayed.map((datas) => {
//     <div>
//       <p>{datas.name}</p>
//       <p>{datas.height}</p>
//       <p>{datas.mass}</p>
//     </div>;
//     console.log(mappedData);
//     return mappedData;
//   });
//   return mappedData;

//   //   let mappedData = data.map((traits) => {
//   //     return <p>{traits.name}</p>;
//   //   });
//   //   return mappedData;
// let arrayed = Object.keys(data).map((bio) => (
// console.log(arrayed);
// return arrayed;
