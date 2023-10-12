import React, { useState } from 'react'
import { useContext } from 'react'
import CartContext from '../../context/cartContext/CartContext'




const CartDetailItem = ({ elemento }) => {

    const [newQuantity, setNewQuantity] = useState(elemento.q)

    const { removeItem, changeQuantity } = useContext(CartContext)



    const suma = () => {
        newQuantity < elemento.item.stock && setNewQuantity(newQuantity + 1);
    };

    const resta = () => {
        newQuantity > 0 && setNewQuantity(newQuantity - 1);
    };

    return (
        <div>

            <p><img src={elemento.item.image} /></p>
            <p>Name:{elemento.item.name}</p>
            <p>Cantidad: {elemento.q}</p>
            <p> {elemento.item.description}</p>



            <div className="flex-auto flex space-x-4">
                <button onClick={suma} className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="button">
                    +
                </button>
                <p>{newQuantity}</p>
                <button onClick={resta} className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button">
                    -
                </button>
            </div>
            <button onClick={() => changeQuantity(newQuantity, elemento.item.id)}> change q</button>
            <button onClick={() => removeItem(elemento.item.id)} >Eliminar</button>


        </div>
    )
}

export default CartDetailItem
