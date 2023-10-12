import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from "firebase/firestore"


const ItemDetailContainer = () => {

    const { itemId } = useParams();

    const [item, setItem] = useState(null)


    const getProduct = async () => {

        try {

            const db = getFirestore();

            const itemRef = doc(db, "productos", itemId)

            const snapshot = await getDoc(itemRef)
            if (snapshot.exists()) {
                setItem({ ...snapshot.data(), id: itemId })
            }

        } catch (error) {
            console.log(error)
        }





    }


    useEffect(() => {

        getProduct()

    }, [])

    return (
        <>
            {item && <ItemDetail item={item} />}
        </>

    )
}

export default ItemDetailContainer
