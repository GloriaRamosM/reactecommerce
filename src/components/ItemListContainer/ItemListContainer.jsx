import React, { useEffect, useState } from "react";
import ItemList from './ItemList';
import "../ItemListContainer/ItemListContainer.css";




const ItemListContainer = () => {
    const [data, setData] = useState([])

    const getData = () => {
        fetch("https://rickandmortyapi.com/api/character")
            .then((response) => response.json())
            .then((data) => setData(data.results))
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        getData()
    }, [])

    console.log(data)

    return (
        <>
            <ItemList data={data} />
        </>
    )
}

export default ItemListContainer;

