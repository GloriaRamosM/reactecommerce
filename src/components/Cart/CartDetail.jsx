import React from 'react'
import { useState, useContext } from 'react'
import CartContext from '../../context/cartContext/CartContext'
import { addDoc,collection, getFirestore} from "firebase/firestore"
import { Link, useNavigate } from 'react-router-dom'
import CartDetailItem from './CartDetailItem'


const CartDetail = () => {
    const[orderId , setOrderId] = useState("")
    
    const { cart, clear } = useContext(CartContext)
    

    



    return (
        <div >
            {
                cart.map(el => (
                <CartDetailItem key={el.item.id} elemento={el}/>
                ))
            }

            {cart.length > 0 && <Link to={'/checkout'}>  Terminar Compra </Link>

            }
            {cart.length > 0 && <button onClick={() => clear()}>Limpiar el carrito</button>

            }

            {orderId && <span> orden creada : {orderId}</span>}


        </div>
    )
}

export default CartDetail
