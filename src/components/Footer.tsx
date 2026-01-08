import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
  const [isScrollingUp, setIsScrollingUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScroll = () => {
    setIsScrollingUp(window.scrollY > 300);
  };

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', handleScroll);
  }

  return (
    <>
      <footer className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-600/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse delay-1000" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-6 animate-fadeInUp">
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent mb-2">
                  LUXE SHOP
                </h2>
                <p className="text-gray-400">Premium products with exceptional quality and style.</p>
              </div>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-red-600/20 border border-red-600/50 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group"
                >
                  <Facebook className="w-5 h-5 group-hover:text-white" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-red-600/20 border border-red-600/50 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group"
                >
                  <Twitter className="w-5 h-5 group-hover:text-white" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-red-600/20 border border-red-600/50 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group"
                >
                  <Instagram className="w-5 h-5 group-hover:text-white" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-red-600/20 border border-red-600/50 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group"
                >
                  <Linkedin className="w-5 h-5 group-hover:text-white" />
                </a>
              </div>
            </div>

            <div className="space-y-4 animate-fadeInUp" style={{ animationDelay: '100ms' }}>
              <h3 className="text-lg font-bold text-red-500">Shop</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-red-500 transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <span className="w-0 group-hover:w-4 transition-all duration-300 h-0.5 bg-red-600" />
                    <span>All Products</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-red-500 transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <span className="w-0 group-hover:w-4 transition-all duration-300 h-0.5 bg-red-600" />
                    <span>Electronics</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-red-500 transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <span className="w-0 group-hover:w-4 transition-all duration-300 h-0.5 bg-red-600" />
                    <span>Fashion</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-red-500 transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <span className="w-0 group-hover:w-4 transition-all duration-300 h-0.5 bg-red-600" />
                    <span>Sale</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4 animate-fadeInUp" style={{ animationDelay: '200ms' }}>
              <h3 className="text-lg font-bold text-red-500">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-red-500 transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <span className="w-0 group-hover:w-4 transition-all duration-300 h-0.5 bg-red-600" />
                    <span>Contact Us</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-red-500 transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <span className="w-0 group-hover:w-4 transition-all duration-300 h-0.5 bg-red-600" />
                    <span>FAQ</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-red-500 transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <span className="w-0 group-hover:w-4 transition-all duration-300 h-0.5 bg-red-600" />
                    <span>Shipping Info</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-red-500 transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <span className="w-0 group-hover:w-4 transition-all duration-300 h-0.5 bg-red-600" />
                    <span>Returns</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4 animate-fadeInUp" style={{ animationDelay: '300ms' }}>
              <h3 className="text-lg font-bold text-red-500">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-400 hover:text-red-500 transition-colors group cursor-pointer">
                  <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400 hover:text-red-500 transition-colors group cursor-pointer">
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>support@luxeshop.com</span>
                </div>
                <div className="flex items-start space-x-3 text-gray-400 hover:text-red-500 transition-colors group cursor-pointer">
                  <MapPin className="w-5 h-5 mt-0.5 group-hover:translate-y-1 transition-transform" />
                  <span>123 Fashion Ave, New York, NY 10001</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 pb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              <div className="text-gray-400 text-sm animate-fadeInUp" style={{ animationDelay: '400ms' }}>
                <p>&copy; 2024 Luxe Shop. All rights reserved.</p>
              </div>
              <div className="flex flex-wrap justify-start md:justify-end gap-4 text-sm animate-fadeInUp" style={{ animationDelay: '400ms' }}>
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center hover:scale-110 hover:-translate-y-1 z-40 ${
          isScrollingUp ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <ArrowUp className="w-6 h-6 animate-bounce" />
      </button>
    </>
  );
}
