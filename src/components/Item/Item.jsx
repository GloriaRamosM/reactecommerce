import React from 'react'
import { Link } from 'react-router-dom'
import './item.css'

const Item = ({ dato }) => {
    return (


        <div className="card_container">
            <img src={dato.image} alt="card.img" />
            <h3>{dato.name}</h3>
            <span>${dato.price}</span>
            <Link className='buttonVerMas' to={`/item/${dato.id}`}>Ver mas</Link>
        </div>

    )
}

export default Item
