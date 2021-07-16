import React, {useEffect, useState} from 'react';
import axios from "axios";
import { v4 as uuid } from "uuid";
import styled from 'styled-components';

export default function UrlList(props) {
    const { urls, title } = props;
    const [nameList, setNameList] = useState([])
    useEffect(() => {
        const getData = url => {
            axios.get(url)
                .then(response => response.data)
                .then(ApiData => setNameList([...nameList, ApiData.name]))
        }
        urls.forEach(url => getData(url));
    }, [])
    const StyledList = styled.ul`
        width: 100%;
        display: flex;
        align-items: baseline;
        justify-content: flex-start;
        h3 {
            font-size: 2rem;
        }
        li {
            font-size: 1.5rem;
            margin: 0 2rem;
        } 
    `
    return urls.length === 0 ? null : (
        <StyledList>
            <h3>{title}:</h3>
            {nameList.length > 0 ? nameList.map(name => <li key={uuid()}>{name}</li>) : <h3>loading...</h3>}
        </StyledList>
    )
}
