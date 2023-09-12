import CartWidget from '../CartWidget/CartWidget'


const Navbar = () => {

    return(
    <div className='flex items-center justify-between px-10 py-5 bg-slate-400'>
        <img className='w-60' src="/src/multimedia/branding/logo_light_horizontal.svg" alt="" />    
        <ul className='flex'>
        <li className='mx-5 text-zinc-50'>Home</li>
        <li className='mx-5 text-zinc-50'>Productos</li>
        <li className='mx-5 text-zinc-50'>Contacto</li>
        </ul>

        <CartWidget/>
    </div >
);
};

export default Navbar;

