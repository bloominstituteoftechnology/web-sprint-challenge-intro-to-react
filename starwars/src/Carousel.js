import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import Characters from './Characters.js'
import { UncontrolledCarousel } from 'reactstrap';

function MyCarousel() {
    const [charOneName, setOneName] = useState('');
    const [charOneLoc, setOneLoc] = useState('');
    const [charOneUrl, setOneUrl] = useState('');
    const [charTwoName, setTwoName] = useState('');
    const [charTwoLoc, setTwoLoc] = useState('');
    const [charTwoUrl, setTwoUrl] = useState('');
    const [charThreeName, setThreeName] = useState('');
    const [charThreeLoc, setThreeLoc] = useState('');
    const [charThreeUrl, setThreeUrl] = useState('');
    //carousel components

//get character one
    useEffect(() => {
        axios
        .get('https://rickandmortyapi.com/api/character/1')
        .then(response => {
            console.log(response.data.image)
            setOneName(response.data.name);
            setOneLoc(response.data.location.name);
            setOneUrl(response.data.image);
        })
        .catch(err => {
            console.log(err);
          });
    },[]);
//get character two
useEffect(() => {
    axios
    .get('https://rickandmortyapi.com/api/character/2')
    .then(response => {
        console.log(response.data)
        setTwoName(response.data.name);
        setTwoLoc(response.data.location.name);
        setTwoUrl(response.data.image);
    })
    .catch(err => {
        console.log(err);
      });
},[]);
//get character three
useEffect(() => {
    axios
    .get('https://rickandmortyapi.com/api/character/3')
    .then(response => {
        console.log(response.data)
        setThreeName(response.data.name);
        setThreeLoc(response.data.location.name);
        setThreeUrl(response.data.image);
    })
    .catch(err => {
        console.log(err);
      });
},[]);
const items = [
    {
        src: charOneUrl,
        altText: charOneName,
        caption: `${charOneName} WANTED DEAD OR ALIVE`,
        header: `${charOneName}`,
      key: '1'
    },
    {
        src: charTwoUrl,
        altText: charTwoName,
        caption: `${charTwoName} WANTED DEAD OR ALIVE`,
        header: `${charTwoName}`,
      key: '2'
    },
    {
      src: charThreeUrl,
      altText: charThreeName,
      caption: `${charThreeName} WANTED DEAD OR ALIVE`,
      header: `${charThreeName}`,
      key: '3'
    }
  ];
    return(
        <div>
             <UncontrolledCarousel items={items} />
        </div>
    )
}

export default MyCarousel;