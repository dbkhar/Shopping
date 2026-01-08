import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useShoppingCart } from '../context/ShoppingContext';

export default function CartSidebar() {
  const {
    cartItems,
    isCartOpen,
    toggleCart,
    updateQuantity,
    removeFromCart,
    getCartTotal,
    clearCart,
  } = useShoppingCart();

  if (!isCartOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 animate-fadeIn"
        onClick={toggleCart}
      />

      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col animate-slideInRight">
        <div className="bg-gradient-to-r from-black to-gray-900 text-white p-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <ShoppingBag className="w-6 h-6 text-red-500" />
            <h2 className="text-2xl font-bold">Shopping Cart</h2>
          </div>
          <button
            onClick={toggleCart}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <ShoppingBag className="w-24 h-24 text-gray-300 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Your cart is empty
            </h3>
            <p className="text-gray-600 mb-6">
              Add some products to get started!
            </p>
            <button
              onClick={toggleCart}
              className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow"
                >
                  <img
                    src={item.image_url}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      ${item.price.toFixed(2)}
                    </p>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 bg-gray-200 hover:bg-red-600 hover:text-white rounded transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 bg-gray-200 hover:bg-red-600 hover:text-white rounded transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="ml-auto p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 p-6 bg-gray-50">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-semibold text-gray-900">Total:</span>
                <span className="text-3xl font-bold text-red-600">
                  ${getCartTotal().toFixed(2)}
                </span>
              </div>
              <button className="w-full bg-red-600 text-white py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform mb-3">
                Checkout
              </button>
              <button
                onClick={clearCart}
                className="w-full bg-gray-200 text-gray-700 py-3 rounded-full font-semibold hover:bg-gray-300 transition-colors"
              >
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
