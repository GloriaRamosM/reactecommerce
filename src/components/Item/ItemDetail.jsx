import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import { useState} from 'react'
import { Link } from 'react-router-dom'

const ItemDetail = ({item}) => {

const [sent, setSent]= useState(false);


    const onAdd = (productNumber) => {
        console.log(productNumber);
        setSent(true)
    }

    return(
        <div>
        <h3>{item.name}</h3>
        <img src={item.image} />
        <p>Especie: {item.species}</p>
        <p>Genero: {item.gender}</p>
        <p>Estatus: {item.status}</p>
        <p>Para adquirir la postal, agrega al carrito</p>
        
      {!sent && <ItemCount stock={20} initial={1} onAdd={onAdd} />  }
      {sent && <button>    <Link to={'/cart'}> Terminar mi compra </Link>  </button>}  
        
        
    </div>
    )

}

export default ItemDetail