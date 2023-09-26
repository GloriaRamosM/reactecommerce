import React from 'react'
import { Link } from 'react-router-dom'
import Item from '../Item/Item'



const ItemList = ({ data }) => {


    return (

        <>
            {
                data.map((dato , index) => {
                    return (
                        <div key={index}>
                            <Item dato={dato} key={dato.id}/>
                        </div>
                    )
                })
            }
        </>




    )
}

export default ItemList