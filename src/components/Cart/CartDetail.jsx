import React from 'react'
import {useContext} from 'react'
import CartContext from '../../context/cartContext/CartContext'


const CartDetail = () => {
    const { cart , removeItem , clear } = useContext(CartContext)
    console.log(cart)

    return (
        <div >
            {
                cart.map(el => (
                    <div>
                        <p><img src={el.item.image} /></p>
                        <p>ID:{el.item.id}</p>
                        <p>Name:{el.item.name}</p>
                        <p>Status:{el.item.status}</p>
                        <p>Genero: {el.item.gender}</p>
                        <button onClick={() => removeItem(el.item.id)} >Eliminar</button>

                    </div>
                ))
            }

            <button onClick={() => clear()}>Limpiar el carrito</button>
        </div>
    )
}

export default CartDetail
