import React, { useState } from 'react'
import { useContext } from 'react'
import CartContext from '../../context/cartContext/CartContext'



const CartDetailItem = ({ elemento }) => {

    const [newQuantity, setNewQuantity] = useState(elemento.q)

    const {  removeItem, changeQuantity } = useContext(CartContext)

    return (
        <div>

            <p><img src={elemento.item.image} /></p>
            <p>Name:{elemento.item.name}</p>
            <p>Cantidad: {elemento.q}</p>
            <p> {elemento.item.description}</p>
            <p> new Quantity : {newQuantity}</p>
            <button onClick={() => changeQuantity(newQuantity, elemento.item.id)}> change q</button>
            <button onClick={() => removeItem(elemento.item.id)} >Eliminar</button>


        </div>
    )
}

export default CartDetailItem
