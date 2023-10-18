import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
    const [productNumber, setProductNumber] = useState(initial);
    const suma = () => {
        productNumber < stock && setProductNumber(productNumber + 1);
    };

    const resta = () => {
        productNumber > 0 && setProductNumber(productNumber - 1)
    };

    return (

        <div className="flex space-x-4  text-sm font-medium">
            <div className="flex-auto flex space-x-4">
                <button onClick={suma} className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="button">
                    +
                </button>
                <p>{productNumber}</p>
                <button onClick={resta} className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button">
                    -
                </button>
            </div>
            <button onClick={() => onAdd(productNumber)} className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">
                <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" clipRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                </svg>
            </button>
        </div>
    )


}

export default ItemCount;
