import React from 'react'
import ItemCount from '../ItemCount/ItemCount';

const ItemList = ({ product }) => {
    const onAdd = (productNumber) => {
        console.log(productNumber);
    }

    return (
        <div className="flex font-sans w-52">
            <div className="flex-none w-48 relative">
                <img src={product.img} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="flex-auto p-6">
                <div className="flex flex-wrap">
                    <h1 className="flex-auto text-lg font-semibold text-slate-900">
                        {product.name}
                    </h1>
                    <div className="text-lg font-semibold text-slate-500">
                        $ {product.price}
                    </div>
                    <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2 py-7">
                        <p> Stock : {product.stock} </p>
                    </div>
                </div>
                <ItemCount stock={product.stock} initial={0} onAdd={onAdd} />

                <p className="text-sm text-slate-700">
                    Free shipping
                </p>
            </div>
        </div>




        //  <div>
        //   <p>{product.name}</p>
        //   <p>{product.price}</p>
        //  <p>{product.stock}</p>
        // </div>
    )
}

export default ItemList