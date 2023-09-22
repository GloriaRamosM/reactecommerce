import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {
    const [item, setItem] = useState({})

    const getData = () => {
        fetch("https://rickandmortyapi.com/api/character/2")
            .then((response) => response.json())
            .then((data) => setItem(data))
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        getData()
    }, [])

    console.log(item)

    return (
        <>
            <ItemDetail item={item}/>
        </>
    )
}

export default ItemDetailContainer
