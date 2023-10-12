import { doc, getFirestore, updateDoc, addDoc, collection, writeBatch } from 'firebase/firestore'
import React, { useState } from 'react'
import { useContext } from 'react'
import CartContext from '../../context/cartContext/CartContext'



const Checkout = () => {

    const [orderId, setOrderId] = useState(null)
    const { cart, clear } = useContext(CartContext)
    const [order, setOrder] = useState(null)




    const FinalizarCompra = async (event) => {
        event.preventDefault()


        const formData = new FormData(event.target)
        const user = Object.fromEntries(formData)


        const purchase = {
            buyer: user,
            items: cart,
            date: new Date(),
            total: cart.reduce((acc, element) => acc + (element.item.price * element.q), 0)
        }


        try {
            const db = getFirestore();
            const orderCollection = collection(db, "orders");

            const res = await addDoc(orderCollection, purchase)
            
            const batch = writeBatch(db)
            purchase.items.forEach(element => {
                let document = doc(db, "productos", element.item.id)
                batch.update(document, { stock: element.item.stock - element.q })
            });

            await batch.commit()

            setOrder({ ...purchase, id: res.id })
        } catch (error) {
            console.log(error)
        }

        // addDoc(orderCollection, purchase)
        //     .then(res => {
        //         const batch = writeBatch(db)
        //         purchase.items.forEach(element => {
        //             let document = doc(db, "productos", element.item.id)
        //             batch.update(document, { stock: element.item.stock - element.q })
        //         });
        //         batch.commit()
        //             .then(_ => setOrder({ ...purchase, id: res.id }))
        //             .catch(err => console.log(err))
        //     })
        //     .catch(err => console.log(err))

        clear()


    };



    const updateOrder = () => {
        const db = getFirestore();

        const orderDoc = doc(db, "orders", orderId);

        updateDoc()
    }


    return (

        <>  {order ? <div>
            {order.buyer.name}  Gracias por tu compra. {order.id} y el total fue {order.total}
        </div> : <form onSubmit={FinalizarCompra} className='flex flex-col items-end w-80 ms-5'>  <div className="mt-10 flex flex-col w-full">


            <div className=" w-full">
                <label className="block text-sm font-medium leading-6 text-gray-900">Nombre</label>
                <div className="mt-2 w-full">
                    <input name="name" type="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
            </div>

            <div className="w-full">
                <label className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                <div className="mt-2">
                    <input name="email" type="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
            </div>
        </div>


            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" className="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
                <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Finalizar Compra</button>
            </div>

        </form>}




        </>


    )
}

export default Checkout
