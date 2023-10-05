'use client'
import Link from 'next/link';
import { FaHeart, FaShoppingCart } from 'react-icons/fa'; 


const Navbar = () => {
 
    return (
      <nav className="py-8 px-4">
        <div className="flex justify-between mx-auto max-w-screen-lg">
          <div>
            <Link className="lg:text-lg sm:text-md" href={'/'}>
            KickShare
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <FaHeart className="text-lg text-gray-300 cursor-pointer hover:text-gray-700 transition duration-300" />
  
            <FaShoppingCart className="text-lg text-gray-300 cursor-pointer hover:text-gray-700 transition duration-300" />
              <button
                className="bg-gray-500 text-white px-3 py-1  hover:bg-gray-700 transition duration-300"
              >
                Logout
              </button>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;