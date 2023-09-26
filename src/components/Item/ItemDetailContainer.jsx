import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {

    const { itemId } = useParams();
    const [item, setItem] = useState({})

    const getData = () => {
        fetch(`https://rickandmortyapi.com/api/character/${itemId}`)
            .then((response) => response.json())
            .then((data) => setItem(data))
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        getData()
    }, [])

    

    return (
        <>
            <ItemDetail item={item}/>
        </>
    )
}

export default ItemDetailContainer
