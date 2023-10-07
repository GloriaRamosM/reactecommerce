import React from 'react'
import { Link } from 'react-router-dom'
import '../Item/item.css'

const Item = ({ dato }) => {
    return (


        <div className="flex font-sans w-52">
            <div className="flex-none w-48 relative">
                <img src={dato.image} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="flex-auto p-6">
                <div className="flex flex-wrap">
                    <h1 className="flex-auto text-lg font-semibold text-slate-900">
                        {dato.name}
                    </h1>
                   
                    <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2 py-7">
                        <p> Categoria: <span>{dato.category} </span> </p>
                    </div>
                    <div className="text-lg font-semibold text-slate-500">
                    Stock: {dato.stock}
                    </div>
                </div>
                <button className="rounded-full ...  botoncolor">  <Link to={`/item/${dato.id}`}> Ver detalle</Link> </button>

            </div>
        </div>

    )
}

export default Item
