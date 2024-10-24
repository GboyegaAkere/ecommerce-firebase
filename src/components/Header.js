import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          <a href="/">MyShop</a>
        </div>

        {/* Search Input */}
        <div className="w-full max-w-lg mx-4 hidden md:block">
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Search for products..."
          />
        </div>

        {/* Cart and Authentication Links */}
        <div className="flex items-center space-x-6">
          {/* Cart Icon */}
          <a href="/cart" className="text-xl text-gray-700 hover:text-blue-600 relative">
            <FaShoppingCart />
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-2">3</span>
          </a>

          {/* Register and Login */}
          <div className="space-x-4">
            <a href="/register" className="text-gray-700 hover:text-blue-600">
              Register
            </a>
            <a href="/login" className="text-gray-700 hover:text-blue-600">
              Login
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Search Input */}
      <div className="w-full px-4 py-2 block md:hidden">
        <input
          type="text"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Search for products..."
        />
      </div>
    </header>
  );
};

export default Header;
