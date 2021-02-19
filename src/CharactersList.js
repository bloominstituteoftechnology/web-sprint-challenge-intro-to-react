
import React, {useState, useEffect, useMemo} from 'react';
import BASE_URL from './components/constants/index';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';
// import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import TableHeader from './components/TableHeader';
import Search from './components/Search';
import Pagination from './components/Pagination';

const Lists = styled.div`
    padding: 12px 25px 12px 25px; 
    `;

  const P = styled.p`
    font-family: 'Roboto', sans-serif;
    font-weight: 350;
    word-spacing: 3px;
    text-align: justify
  `;
  
  const Table = styled.table`
  width: 100%;
  margin-bottom: $spacer;
  color: $table-color;
  background-color: $table-bg; 
  border-spacing: 2px;
  `;

  const Thead = styled.th`
    display: table-cell;
    font-family: 'Roboto', sans-serif;
    font-weight: 350;
    word-spacing: 3px;
    text-align: left;
    padding: $table-cell-padding;
    vertical-align: top;
    border-top: $table-border-width solid $table-border-color;
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
export default function CharacterList() {
const [characters, setCharacters] = useState([]);
const [search, setSearch] = useState("");
const [sorting, setSorting] = useState({ field: "", order: "" });
const [totalItems, setTotalItems] = useState(0);
const [currentPage, setCurrentPage] = useState(1);

const ITEMS_PER_PAGE = 5;

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
    
    const charactersData = useMemo(()=> {
        let computedData = characters;
        if (search) {
            computedData = computedData.filter(character => 
            character.data.name.toLowerCase().includes(search.toLowerCase()) ||
            character.data.birth_year.toLowerCase().includes(search.toLowerCase()) ||
            character.data.gender.toLowerCase().includes(search.toLowerCase()) ||
            character.data.height.toLowerCase().includes(search.toLowerCase()) ||
            character.data.mass.toLowerCase().includes(search.toLowerCase()) ||
            character.data.eye_color.toLowerCase().includes(search.toLowerCase()) ||
            character.data.skin_color.toLowerCase().includes(search.toLowerCase()) 
        );
        }
        setTotalItems(computedData.length);
        
        return computedData.slice(
            (currentPage - 1) * ITEMS_PER_PAGE,
            (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
        );
    }, [characters, currentPage, search, sorting])
    
    return (
        <Lists>    
        { characters.map(character =>
        <>
        <Table className="table table-striped">
                        <TableHeader
                            headers={TableHeader}
                            onSorting={(field, order) =>
                                setSorting({ field, order })
                            }
                        />
                        <tbody>
                            {charactersData.map(character => (
                                <tr>
                                    <Thead scope="row" key={character.data.id}>
                                        {character.data.id}
                                    </Thead>
                                    <Tdata>{character.data.name}</Tdata>
                                    <Tdata>{character.data.birth_year}</Tdata>
                                    <Tdata>{character.data.gender}</Tdata>
                                    <Tdata>{character.data.height}</Tdata>
                                    <Tdata>{character.data.mass}</Tdata>
                                    <Tdata>{character.data.eye_color}</Tdata>
                                    <Tdata>{character.data.skin_color}</Tdata>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    </>  
        )}
    </Lists> 
    )

    /* <Lists>    
        { characters.map(character =>
        <>
      
            <Dropdown.Item text="Name: {character.data.name}" />
            <P> Birth Year: {character.data.birth_year} </P>
            <P> Gender: {character.data.gender} </P>
            <P> Height: {character.data.height}" </P>
            <P> Mass: {character.data.mass} </P>
            <P> Eye Color: {character.data.eye_color} </P>
            <P> Skin Color: {character.data.skin_color} </P>

        </>  
        )}
    </Lists> */
    /* ) */
}