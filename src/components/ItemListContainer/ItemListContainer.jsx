import { useEffect, useState } from "react";
import ItemList from '../ItemList/ItemList';
import "../ItemListContainer/ItemListContainer.css"
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";




const ItemListContainer = () => {
    const { category } = useParams()

    const [loading, setLoading] = useState(true)

    const [error, setError] = useState("")

    const [data, setData] = useState([])



    const getData = () => {
        const db = getFirestore()

        const productsRef = collection(db, "productos")

        const q = category ? query(productsRef, where("category", "==", category)) : productsRef

        getDocs(q)
            .then((snapshot) => {
                const products = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
                setData(products)
            })
            .catch((err) => {
                setError(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }



    useEffect(() => {
        getData()
    }, [category])

    return (

        <div className="list_container">
            {loading && <p> Cargando...</p>}
            {error && <p> 404 </p>}
            {!loading && <ItemList data={data} />}
        </div>
    )
}

export default ItemListContainer;

