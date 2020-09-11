import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import styled from 'styled-components'

const apiURL ="https://rickandmortyapi.com/api/character/?page="

function Gallery() {
    const [apiPage, setApiPage] = useState('')
    const [prevButton, setPrevButton] = useState('')
    const [nextButton, setNextButton] = useState('')
    const [galleryData, setGalleryData] = useState([])
    
    

    const paginatePrev = () => {
        if (setPrevButton !== null) {
            fetchGallery(apiPage - 1)
        }
    }

    const paginateNext = () => {
        if (setNextButton !== null) {
            fetchGallery(apiPage + 1)
        }
    }

    const fetchGallery = (page) => {
        Axios
            .get(apiURL + page)
            .then(({ data }) => {
                setApiPage(data.pages)
                setPrevButton(data.info.prev)
                setNextButton(data.info.next)
                setGalleryData(data.results)
            })
            .catch(function (error) {
                console.log(error)
            })
    }
    useEffect(() => {
        fetchGallery(2)
    }, [])

    return(
        <StyledGallery>
            <div>{galleryData.map(character => {
                return (
                    <>
                    <p>{character.name}</p>
                    <img src={character.image} alt={character.name} width="100px"/>
                    </>
                )
            })}</div>
            <button style={{display: prevButton ? 'inline-block' : 'none'}} onClick={paginatePrev}>Prev</button>
            <button style={{display: nextButton ? 'inline-block' : 'none'}}onClick={paginateNext}>Next</button>
        </StyledGallery>
    )
}

const StyledGallery = styled.main`
    div {
        color: seagreen;
        width: 100px;
        height: 100px;  

    }
`

export default Gallery