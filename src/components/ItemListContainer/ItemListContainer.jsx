import React, { useEffect, useState } from "react";
import ItemList from '../ItemList/ItemList';
import "../ItemListContainer/ItemListContainer.css"
import { useParams } from "react-router-dom";




const ItemListContainer = () => {
    const { categoryId } = useParams()
    
    const [data, setData] = useState([])

    const apiUrl = `https://rickandmortyapi.com/api/character${categoryId ? `/?status=${categoryId}` : '/'}`

    const getData = () => {
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => setData(data.results))
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        getData()
    }, [categoryId])

    return (
        <>
            <ItemList data={data} />
        </>
    )
}

export default ItemListContainer;

