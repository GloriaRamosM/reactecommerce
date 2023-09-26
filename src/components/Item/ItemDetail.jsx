import React from 'react'
import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ({item}) => {
    const onAdd = (productNumber) => {
        console.log(productNumber);
    }

    return(
        <div>
        <h3>{item.name}</h3>
        <img src={item.image} />
        <p>Especie: {item.species}</p>
        <p>Genero: {item.gender}</p>
        <p>Estatus: {item.status}</p>
        <p>Para adquirir la postal, agrega al carrito</p>
        
        <ItemCount stock={20} initial={0} onAdd={onAdd} />
        
        
    </div>
    )

}

export default ItemDetail