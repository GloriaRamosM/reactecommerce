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
        <div className="flex flex-row flex-wrap space-x-32 space-y-32">
            <ItemList data={data}  />
        </div>
    )
}

export default ItemListContainer;

