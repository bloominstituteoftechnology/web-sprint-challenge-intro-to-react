import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import styled from 'styled-components'

const apiURL ="https://rickandmortyapi.com/api/character/?page=1"

function Gallery() {
    const [apiPage, setApiPage] = useState()
    const [prevButton, setPrevButton] = useState('')
    const [nextButton, setNextButton] = useState('')
    const [galleryData, setGalleryData] = useState([])
    
    

    const paginatePrev = () => {
        if (prevButton !== null) {
            fetchGallery(prevButton)
        }
    }

    const paginateNext = () => {
        if (nextButton !== null) {
            fetchGallery(nextButton)
        }
    }

    const fetchGallery = (url) => {
        Axios   
            .get(url)
            .then(({ data }) => {
                setApiPage(data.info.pages)
                setPrevButton(data.info.prev)
                setNextButton(data.info.next)
                setGalleryData(data.results)
            })
            .catch(function (error) {
                console.log(error)
            })
    }
    useEffect(() => {
        fetchGallery(apiURL)
    }, [])

    return(
        <StyledGallery>
            <div>{galleryData.map(character => {
                return (
                    <>
                    <img src={character.image} alt={character.name} width="75px" />
                    <p>{character.name}</p>
                    </>
                )
            })}</div>
            <br />
            <button style={{display: prevButton ? 'inline-block' : 'none'}} onClick={paginatePrev}>Prev</button>
            <button style={{display: nextButton ? 'inline-block' : 'none'}}onClick={paginateNext}>Next</button>
        </StyledGallery>
    )
}

const StyledGallery = styled.main`
    div {
        color: seagreen;
        /* width: 100px; */
        height: 100px;  
        display: flex;
        justify-content: space-around;
        flex-direction: row;
        flex-wrap: wrap;
        align-content: stretch;
    }

    button {
        padding: 10px;
        border-radius: 10px;
        border: 1px solid gray;
        width: 100px;
        font-family: 'Grandstander', cursive;
        color: black;
        font-size: 20px;
        background-color: mediumturquoise;
        text-shadow: 1px 1px 5px #fff;
        &:hover {
            background-color: mediumaquamarine;
            color: white;
            text-shadow: 1px 1px 5px #fff;
            cursor: pointer;
        }
        &:focus {
            border: gray;
            outline: none;
        }
        &:active {
            border: gray;
            outline: none;
        }
`

export default Gallery