import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import { useState , useContext} from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../context/cartContext/CartContext';

const ItemDetail = ({item}) => {

const [sent, setSent]= useState(false);

const {addItem} = useContext(CartContext)

    const onAdd = (q) => {
        addItem(item, q);
        setSent(true)
    }

    return(
        <div>
        <h3>{item.name}</h3>
        <p>Category: {item.category}</p>
        <p>Stock: {item.stock}</p>
        <p>Precio: {item.price}</p>
        <p>Para adquirir la postal, agrega al carrito</p>
        
      {!sent && <ItemCount stock={20} initial={1} onAdd={onAdd} />  }
      {sent && <button>    <Link to={'/cart'}> Terminar mi compra </Link>  </button>}  
        
        
    </div>
    )

}

export default ItemDetail