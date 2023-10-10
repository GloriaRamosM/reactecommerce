import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from "firebase/firestore"


const ItemDetailContainer = () => {

    const { itemId } = useParams();

    const [item, setItem] = useState(null)



    useEffect(() => {
        const db = getFirestore();

        const itemRef = doc(db, "productos", itemId)

        getDoc(itemRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    setItem({...snapshot.data(), id: itemId})
                }
            })

            .catch((err) => console.log(err))

    }, [])

    return (
        <>
            {item && <ItemDetail item={item} />}
        </>

    )
}

export default ItemDetailContainer
