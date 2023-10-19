import React from 'react'
import { useContext } from 'react'
import CartContext from '../../context/cartContext/CartContext'
import "./CartDetailItem.css"




const CartDetailItem = ({ elemento }) => {



    const { removeItem, changeQuantity } = useContext(CartContext)



    const suma = () => {
        elemento.q < elemento.item.stock && changeQuantity(elemento.q + 1, elemento.item.id);
    };

    const resta = () => {
        elemento.q > 0 && changeQuantity(elemento.q - 1, elemento.item.id);
    };

    return (
        <div className='cart_detail_item_container'>

            <div className='cart_product_detail'>
                <img src={elemento.item.image} alt="imagen de producto" />
                <div>
                    <p className='cart_product_name'> {elemento.item.name}</p>
                    <p className='cart_product_category'>{elemento.item.category}</p>
                    <span className='cart_product_price'>${elemento.item.price}</span>
                </div>
            </div>



            <div className="cart_item_count">
                <button onClick={suma} type="button">
                    +
                </button>
                <p>{elemento.q}</p>
                <button onClick={resta} type="button">
                    -
                </button>
            </div>

            <button className='delete_product_button' onClick={() => removeItem(elemento.item.id)} >Eliminar</button>


        </div>
    )
}

export default CartDetailItem
