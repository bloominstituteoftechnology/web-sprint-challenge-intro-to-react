import React from "react";


// Write your Character component here
// const Character = (props) => {
    // const [name, setName] = useState()
    // const [gender, setGender] = useState()
    // const [birthYear, setBirthYear] = useState()
    // const [mass, setMass] = useState()
    // const [height, setHeight] = useState()
    // const [skinColor, setSkinColor] = useState()
    // const [eyeColor, setEyeColor] = useState()
    // const [hairColor, setHairColor] = useState()

  
    // useEffect(() => {
    //   axios.get(`https://swapi.dev/api/people`)
    //   .then(info => {
    //     setName(info.data.name);
    //     setGender(info.data.gender);
    //     setBirthYear(info.data.birth_year); 
    //     setHeight(info.data.height);
    //     setSkinColor(info.data.skin_color);
    //     setEyeColor(info.data.eye_color);
    //     setHairColor(info.data.hair_color);
  
                    // })    
                    // }, [])


const Character = (props) => {
    const { char } = props; 
                    return (
                        <div>
                          <h1>{char.name}</h1>
                          <p>Gender: {char.gender}</p>
                          <p>Birth Year: {char.birth_year}</p>
                          <p>Height: {char.height}</p>
                          <p>Skin Color: {char.skin_color}</p>
                          <p>Eye Color: {char.eye_color}</p>
                          <p>Hair Color: {char.hair_color}</p>
                          </div>
                      );
                    };

export default Character;