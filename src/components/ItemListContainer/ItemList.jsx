import React from 'react'
import ItemCount from '../ItemCount/ItemCount';

const ItemList = ({ data }) => {
    //const onAdd = (productNumber) => {
    //console.log(productNumber);


    return (

        <>
            {
                data.map((dato) => (
                    <div className="flex font-sans w-52">
                        <div className="flex-none w-48 relative">
                            <img src={dato.image} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                        </div>
                        <div className="flex-auto p-6">
                            <div className="flex flex-wrap">
                                <h1 className="flex-auto text-lg font-semibold text-slate-900">
                                    {dato.name}
                                </h1>
                                <div className="text-lg font-semibold text-slate-500">
                                    Genero: {dato.gender}
                                </div>
                                <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2 py-7">
                                    <p> ID : {dato.id}  </p>
                                </div>
                            </div>
                            <button class="rounded-full ...">Ver detalles</button>

                        </div>
                    </div>
                ))
            }
        </>




    )
}

export default ItemList