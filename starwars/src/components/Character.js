// Write your Character component here
const Character = Props => {

    return (null);
};

Axios
    .get('https://swapi.dev/')
    .then((res) => {
        console.log('This be the Starwars API response: ', res);
    })
    .catch((err) => {
        console.log('This be the mf error... ', err);
    })

export default Character;