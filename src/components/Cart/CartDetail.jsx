import React from 'react'
import { useState, useContext } from 'react'
import CartContext from '../../context/cartContext/CartContext'
import { Link } from 'react-router-dom'
import CartDetailItem from './CartDetailItem'
import "./CartDetail.css"


const CartDetail = () => {
    const [orderId, setOrderId] = useState("")

    const { cart, clear } = useContext(CartContext)






    return (
        <div className='cart_container'>
            <div className='cart_items_container'>
                {cart.length == 0 && <div className='carrito_vacio'> <img src="https://www.shoreexcursioneer.com/mobile/images/mini-empty-cart.png" alt="imagen de carrito vacio" />
                    <p> No hay productos en el carrito </p></div>}
                {
                    cart.map(el => (
                        <CartDetailItem key={el.item.id} elemento={el} />
                    ))
                }

                {cart.length > 0 && <button className='delete-all-button' onClick={() => clear()}>Limpiar el carrito</button>

                }
            </div>

            <div className='order_detail_container'>
                <div className='order_detail_info'> <p> Cantidad de elementos</p> <span> {cart.reduce((acc, el) => acc + el.q, 0)} </span></div>
                <div className='order_detail_info order_detail_total'><p>Total</p> <span>{cart.reduce((acc, el) => acc + el.item.price * el.q, 0)}</span></div>

                {cart.length > 0 && <Link className='terminar_compra_button' to={'/checkout'}>  Terminar Compra </Link>

                }

            </div>







        </div>
    )
}

export default CartDetail
