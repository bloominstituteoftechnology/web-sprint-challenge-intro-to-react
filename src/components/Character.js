// Write your Character component here
// const App = () => {
//     const [name, setName] = useState()
//     const [gender, setGender] = useState()
//     const [birthYear, setBirthYear] = useState()
//     const [mass, setMass] = useState()
//     const [height, setHeight] = useState()
//     const [skinColor, setSkinColor] = useState()
//     const [eyeColor, setEyeColor] = useState()
//     const [hairColor, setHairColor] = useState()

  
//     useEffect(() => {
//       axios.get(`https://swapi.dev/api/people`)
//       .then(info => {
//         setName(info.data.name);
//         setGender(info.data.gender);
//         setBirthYear(info.data.birth_year); 
//         setHeight(info.data.height);
//         setSkinColor(info.data.skin_color);
//         setEyeColor(info.data.eye_color);
//         setHairColor(info.data.hair_color);
  
//         console.log(info)
//                     })    
//                     }, [])