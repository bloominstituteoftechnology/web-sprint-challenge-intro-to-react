import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import styled from 'styled-components'

const apiURL ="https://rickandmortyapi.com/api/character/?page=1"

function Gallery() {
    // const [apiPage, setApiPage] = useState()
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
                // setApiPage(data.info.pages)
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
            <h1>Rick and Morty's Friend (and Foe) Gallery</h1>
            <section>
                {galleryData.map(character => {
                return (
                    <article>
                        <img src={character.image} alt={character.name} />
                        <p>{character.name}</p>
                    </article>
                )
            })}
            </section>
            <br />
            <button style={{display: prevButton ? 'inline-block' : 'none'}} onClick={paginatePrev}>Prev</button>
            <button style={{display: nextButton ? 'inline-block' : 'none'}} onClick={paginateNext}>Next</button>
        </StyledGallery>
    )
}

const StyledGallery = styled.main`
    section {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        width: 75%;
        margin: 0 auto;
        border: 1px solid seagreen;
    }

    article {
        text-align: center;
        width: 20%;
        margin: 20px;
    }

    img {
        width: 100%;
        border-radius: 10px;
    }
    
    h1 {
        color: aquamarine;
        text-shadow: 5px 5px 10px goldenrod;
    }

    p {
        color: goldenrod;
        text-shadow: 1px 1px 5px #fff;
        word-wrap: break-word;
    }

    button {
        padding: 10px;
        border-radius: 10px;
        border: 1.5px dotted goldenrod;
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