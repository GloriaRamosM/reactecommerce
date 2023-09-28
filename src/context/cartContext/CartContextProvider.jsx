import React, { useState } from 'react'
import CartContext from './CartContext'


const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    
    const isInCart = (id) => {
        return cart.some((e) => e.item.id == id)
    }

    const addItem = (item, q) => {
        if (isInCart(item.id)) {
            const filterArray = cart.map((element) => {
                if (element.item.id == item.id) {
                    element.q += q
                }
                return element
            })
            return setCart(filterArray)
        }
        
        setCart([
            ...cart,
            {
                item, q
            }
        ])
    };

    const removeItem = (id) => {
        const newCart = cart.filter((el) => el.item.id !== id);
        setCart(newCart)
    };

    const clear = () => {
        setCart([])
    }
    const values = {
        cart,
        addItem,
        removeItem,
        clear,
        isInCart
    }
    return (
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>

    )
}

export default CartContextProvider