import React from 'react'

const ItemList = ({ product }) => {
    return (
        <div>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <p>{product.stock}</p>
        </div>
    )
}

export default ItemList