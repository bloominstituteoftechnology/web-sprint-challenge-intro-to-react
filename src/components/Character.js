
import React, {useState, useEffect} from 'react';
import BASE_URL from './constants/';
import axios from 'axios';
import styled from 'styled-components';
import TableHeader from './TableHeader';


  
  const Table = styled.table`
  width: 100%;
  margin-bottom: $spacer;
  color: $table-color;
  background-color: white; 
  border-spacing: 2px;
  `;

 
  const Tdata = styled.td`
    display: table-cell;
    font-family: 'Roboto', sans-serif;
    font-weight: 350;
    word-spacing: 3px;
    text-align: left;
    padding: .75rem;
    vertical-align: top;
    border-top: 1px solid #dee2e6;
  `;
export default function Character() {
const [characters, setCharacters] = useState([]);


const people = 'people/';

const string1 = (`${BASE_URL}${people}1`);
const string2 = (`${BASE_URL}${people}2`);
const string3 = (`${BASE_URL}${people}3`);
const string4 = (`${BASE_URL}${people}4`);
const string5 = (`${BASE_URL}${people}5`);
const string6 = (`${BASE_URL}${people}6`);

const stringArray = [string1, string2, string3, 
    string4, string5, string6];

    useEffect(() => {
    axios.all(stringArray.map(each => axios.get(each)))
    .then(axios.spread(function(...res){
        setCharacters(res)
    }))
    .catch((err) => {
          console.log(err);
        });
    }, []);
   console.log(characters)
    return (  
        <Table className="table table-striped">
                { <TableHeader
                    headers={TableHeader}
                /> }  
            { characters.map(character =>
            <>
            <tbody>
                <tr>
                    <Tdata>{character.data.name}</Tdata>
                    <Tdata>{character.data.birth_year}</Tdata>
                    <Tdata>{character.data.gender}</Tdata>
                    <Tdata>{character.data.height}</Tdata>
                    <Tdata>{character.data.mass}</Tdata>
                    <Tdata>{character.data.eye_color}</Tdata>
                    <Tdata>{character.data.skin_color}</Tdata>
                </tr>
            
            </tbody>
    </>
     )}
    </Table>  
       
    )

   
}