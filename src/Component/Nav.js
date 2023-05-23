import { Link } from "react-router-dom";
import { FiShoppingCart } from 'react-icons/fi';
import '../index.css'

const Nav = () => {
  return (
    <div className='h-12 bg-[#131921] text-white'>
        <ul className='flex justify-evenly items-center pt-2 text-xl'>
        <Link to="/"><li>Home</li></Link>
        <Link to="product"><li>Product</li></Link>
        <Link to="/"><li>Contact</li></Link>
        <Link to="/"><li>about</li></Link>
        <Link to="Cart"><li className="relative"><FiShoppingCart/></li> <span className={`absolute cart`}>10</span></Link>
        </ul>
    </div>
  )
}

export default Nav