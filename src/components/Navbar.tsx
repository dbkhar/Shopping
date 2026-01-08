import { ShoppingCart, Menu, X, Search } from 'lucide-react';
import { useState } from 'react';
import { useShoppingCart } from '../context/ShoppingContext';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toggleCart, getCartCount } = useShoppingCart();
  const cartCount = getCartCount();

  return (
    <nav className="bg-black text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
                LUXE SHOP
              </h1>
            </div>

            <div className="hidden md:block">
              <div className="flex items-center space-x-6">
                <a
                  href="#"
                  className="hover:text-red-500 transition-colors duration-300 font-medium"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="hover:text-red-500 transition-colors duration-300 font-medium"
                >
                  Products
                </a>
                <a
                  href="#"
                  className="hover:text-red-500 transition-colors duration-300 font-medium"
                >
                  Categories
                </a>
                <a
                  href="#"
                  className="hover:text-red-500 transition-colors duration-300 font-medium"
                >
                  About
                </a>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-900 rounded-full transition-all duration-300 hover:scale-110">
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={toggleCart}
              className="relative p-2 hover:bg-gray-900 rounded-full transition-all duration-300 hover:scale-110 group"
            >
              <ShoppingCart className="w-5 h-5 group-hover:text-red-500 transition-colors" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleCart}
              className="relative p-2 hover:bg-gray-900 rounded-full transition-all duration-300"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 hover:bg-gray-900 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800 animate-slideDown">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <a
              href="#"
              className="block px-3 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300 font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300 font-medium"
            >
              Products
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300 font-medium"
            >
              Categories
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300 font-medium"
            >
              About
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
