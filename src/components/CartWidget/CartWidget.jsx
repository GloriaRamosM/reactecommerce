import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom'

const CartWidget = () => {
    return (
        <span className='flex items-center text-zinc-50' >
            <Link to={'/cart'}> <AiOutlineShoppingCart /> 0 </Link>
        </span>
    );
};

export default CartWidget;