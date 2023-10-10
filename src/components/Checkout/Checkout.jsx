import { doc, getFirestore, updateDoc } from 'firebase/firestore'
import React from 'react'
import { useParams } from 'react-router-dom'

const Checkout = () => {
   const {orderId} = useParams()

   const updateOrder =() =>{
    const db = getFirestore();

    const orderDoc = doc( db , "orders", orderId );

    updateDoc()
   }
  return (
    <div>
      Gracias por tu compra. {orderId}
    </div>
  )
}

export default Checkout
