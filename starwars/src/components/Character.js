// Write your Character component here
import React from "react";
import styled from "styled-components";

const BigDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border: 0.5rem solid yellow;
  line-height: 15%;
  width: 100%;
  margin: 0%, 12.5%, 10%, 12.5%;
`;

const Pea = styled.p`
  width: 50%;
`;

const PeaUrl = styled.p`
  display: flex;
  justify-content: center;
  width: 50%;
`;

const Character = (props) => {
  const { data, key } = props;
  console.log(data);

  return data.map((bio) => (
    <BigDiv key={bio.name + bio.birth_year}>
      <Pea>Name: {bio.name}</Pea>
      <Pea>Birth Year: {bio.birth_year}</Pea>
      <Pea>Gender: {bio.gender}</Pea>
      <Pea>Hair Color: {bio.hair_color}</Pea>
      <Pea>Height: {bio.height}</Pea>
      <Pea>Mass: {bio.mass}</Pea>
      <PeaUrl>{bio.url}</PeaUrl>
    </BigDiv>
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
