import CartWidget from './components/CartWidget'


const Navbar = () => {

    return(
    <div>    
        <ul>
        <li>Home</li>
        <li>Productos</li>
        <li>Contacto</li>
        </ul>

        <CartWidget/>
    </div >
);
};

export default Navbar;