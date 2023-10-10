import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import UserContext from '../../context/UserContext';
import { useContext } from 'react';



const Navbar = () => {

    const userData = useContext(UserContext)

    return (
        <div className='flex items-center justify-between px-10 py-5 bg-slate-400'>
            <Link to={'/'}> <img className='w-60' src="/src/multimedia/branding/logo_light_horizontal.svg " alt="" /> </Link>
            <ul className='flex'>
                <li className='mx-5 text-zinc-50'>
                    <Link to={'/'}> Home </Link>
                </li>
                <li className='mx-5 text-zinc-50'>
                    <Link to={'/items'}> Catalogo </Link>
                </li>
                <li className='mx-5 text-zinc-50'> <Link to={'/category/:Pokemon'}>Pokemon</Link>
                </li>
                <li className='mx-5 text-zinc-50'> <Link to={'/category/:Star-Wars'}>Star Wars</Link>
                </li>
                <li className='mx-5 text-zinc-50'> <Link to={'/user'}>User Profile</Link>
                </li>
            </ul>

            <CartWidget />
            <h4 className='mx-5 text-zinc-50'>    <Link to={'/user'}> Bienvenida, {userData.name}</Link> </h4>
        </div >
    );
};

export default Navbar;

