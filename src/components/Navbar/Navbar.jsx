import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import "./Navbar.css"




const Navbar = () => {



    return (
        <div className='flex items-center justify-between px-10 py-7 bg-slate-500'>
            <Link to={'/'}> <img className='w-60' src="/src/multimedia/branding/logo_light_horizontal.svg " alt="" /> </Link>
            <ul className='flex'>
                <li className='mx-7 text-zinc-50 textNavbar'>
                    <Link to={'/'}> Home </Link>
                </li>
                <li className='mx-7 text-zinc-50 textNavbar'>
                    <Link to={'/items'}> Catalogo </Link>
                </li>
                <li className='mx-7 text-zinc-50 textNavbar'> <Link to={'/items/Pokemon'}>Pokemon</Link>
                </li>
                <li className='mx-7 text-zinc-50 textNavbar'> <Link to={'/items/Star-Wars'}>Star Wars</Link>
                </li>
                <li className='mx-7 text-zinc-50 textNavbar'> <Link to={'/items/Hogwarts'}>Harry Potter</Link>
                </li>

            </ul>

            <CartWidget />

        </div >
    );
};

export default Navbar;

