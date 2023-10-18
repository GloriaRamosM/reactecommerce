import React from 'react'
import { Link } from 'react-router-dom'
import Item from '../Item/Item'



const ItemList = ({ data }) => {


    return (

        <>
            {
                data.map((dato) => {
                    return (


                        <Item dato={dato} key={dato.id} />


                    )
                })
            }
        </>




    )
}

export default ItemList