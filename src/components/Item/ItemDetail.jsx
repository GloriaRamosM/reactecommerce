import React from 'react'


const ItemDetail = ({item}) => {
    return(
        <div>
        <h3>{item.name}</h3>
        <img src={item.image} />
        <p>Especie: {item.species}</p>
        <p>Genero: {item.gender}</p>
        <p>Estatus: {item.status}</p>
        <p>Para adquirir la postal, agrega al carrito</p>
        
    </div>
    )

}

export default ItemDetail