import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom'
import { useContext } from "react";
import CartContext from "../../context/cartContext/CartContext";

const CartWidget = () => {
    const {cart} = useContext(CartContext)
    console.log(cart)

    return (
        <span className='flex items-center text-zinc-50' >
            <Link to={'/cart'}> <AiOutlineShoppingCart /> {cart.reduce((acc, product) => acc+ product.q ,0  )}</Link>
        </span>
    );
};

export default CartWidget;