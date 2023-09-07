import { AiOutlineShoppingCart } from "react-icons/ai";

const CartWidget = () => {
    return (
        <span className='flex items-center text-zinc-50' >
            <AiOutlineShoppingCart /> 0
        </span>
    );
};

export default CartWidget;