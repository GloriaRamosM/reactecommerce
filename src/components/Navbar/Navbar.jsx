import CartWidget from './components/CartWidget'


const Navbar = () => {

    return(
    <div className='flex items-center justify-between px-10 py-5 bg-neutral-300'>
        <img className='w-20' src="/src/multimedia/branding/isotype.svg" alt="" />    
        <ul className='flex'>
        <li className='mx-5'>Home</li>
        <li className='mx-5'>Productos</li>
        <li className='mx-5'>Contacto</li>
        </ul>

        <CartWidget/>
    </div >
);
};

export default Navbar;

