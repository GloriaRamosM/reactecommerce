import React, { useEffect, useState } from "react";
import ItemList from '../ItemList/ItemList';
import "../ItemListContainer/ItemListContainer.css"
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs } from "firebase/firestore";




const ItemListContainer = () => {
    const { categoryId } = useParams()

    const [loading, setLoading] = useState(true)
    
    const [error, setError] = useState("")

    const [data, setData] = useState([])



    const getData = () => {
        const db = getFirestore()

        const productsRef = collection(db, "productos")

        getDocs(productsRef)
        .then((snapshot) => {
            const products = snapshot.docs.map((doc) => ({...doc.data(), id: doc.id}))
            setData(products)
        })
        .catch((err) => {
            setError(err)
        })
        .finally(() => {
            setLoading(false)
        })
    }
    console.log(error)


    useEffect(() => {
        getData()
    }, [categoryId])

    return (

        <div className="flex flex-row flex-wrap space-x-32 space-y-32">
            {loading && <p> Cargando...</p>}
            {error && <p> 404 </p>}
            {!loading && <ItemList data={data} />}
        </div>
    )
}

export default ItemListContainer;

