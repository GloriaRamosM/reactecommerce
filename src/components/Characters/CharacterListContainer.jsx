import React, { useState, useEffect } from 'react'
import CharacterList from './CharactersList';

const CharacterListContainer = () => {
    const [data, setData] = useState([]);
    const getData = () => {
        fetch("https://rickandmortyapi.com/api/character")
            .then((response) => response.json())
            .then((data) => setData(data.results))
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <CharacterList characters={data} />
        </div>
    )
}

export default CharacterListContainer
