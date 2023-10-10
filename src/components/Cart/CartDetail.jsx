import React from 'react'
import { useState, useContext } from 'react'
import CartContext from '../../context/cartContext/CartContext'
import { addDoc,collection, getFirestore} from "firebase/firestore"
import { useNavigate } from 'react-router-dom'


const CartDetail = () => {
    const[orderId , setOrderId] = useState("")
    const { cart, removeItem, clear } = useContext(CartContext)
    console.log(cart)

    const navigate = useNavigate()

    const addToCart = () => {
        const purchase = {
            buyer: {
                id: 1,
                name: "Mariela Cejas",
                mail: "Mari@mail.com"
            },
            items: cart,
            date: new Date(),
            total: 1000
        }

        const db = getFirestore();
        const orderCollection = collection(db , "orders");

        addDoc( orderCollection, purchase)
        .then(res => navigate(`/checkout/${res.id}`))
        .catch(err => console.log(err))
        console.log(purchase)

        clear()


    };
    

    return (
        <div >
            {
                cart.map(el => (
                    <div>
                        <p><img src={el.item.image} /></p>
                        <p>Name:{el.item.name}</p>
                        <p>Stock:{el.item.stock}</p>
                        <p> {el.item.description}</p>
                        <button onClick={() => removeItem(el.item.id)} >Eliminar</button>

                    </div>
                ))
            }

            {cart.length > 0 && <button onClick={addToCart}>Crear orden </button>

            }
            {cart.length > 0 && <button onClick={() => clear()}>Limpiar el carrito</button>

            }

            {orderId && <span> orden creada : {orderId}</span>}


        </div>
    )
}

export default CartDetail
