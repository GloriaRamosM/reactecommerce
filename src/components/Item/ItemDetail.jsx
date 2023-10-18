import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../context/cartContext/CartContext';
import "./ItemDetail.css"

const ItemDetail = ({ item }) => {

    const [sent, setSent] = useState(false);

    const { addItem } = useContext(CartContext)

    const onAdd = (q) => {
        addItem(item, q);
        setSent(true)
    }

    return (
        <div className='item_container'>
            <div className='detail-img'><img src={item.image} alt='imagenProduct' /></div>
            <div className='item_content'>

                <div className='item_content_text'>
                    <h3>{item.name}</h3>


                    <div className='item_info'>
                        <div> <p> Precio </p> <span className='item_info_price'> ${item.price}</span></div>
                        <div> <p> Stock </p> <span> {item.stock}</span></div>
                    </div>
                    <div className='item_description'> <h6> Description </h6> <span></span> <p>{item.description}</p> </div>


                </div>



                {!sent && <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />}
                {sent && <Link className='cart_button' to={'/cart'}> Ir al carrito </Link>}
            </div>

        </div>
    )

}

export default ItemDetail