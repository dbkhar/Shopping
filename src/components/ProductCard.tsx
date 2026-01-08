import { ShoppingCart, Heart } from 'lucide-react';
import { useState } from 'react';
import { Product, useShoppingCart } from '../context/ShoppingContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const { addToCart } = useShoppingCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
      <div className="relative overflow-hidden aspect-square">
        <img
          src={product.image_url}
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />

        <div className="absolute top-3 right-3 z-10">
          <button
            onClick={() => setIsLiked(!isLiked)}
            className="p-2 bg-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
          >
            <Heart
              className={`w-5 h-5 ${
                isLiked ? 'fill-red-600 text-red-600' : 'text-gray-600'
              } transition-colors`}
            />
          </button>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <button
          onClick={handleAddToCart}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-12 group-hover:translate-y-0 bg-red-600 text-white px-6 py-3 rounded-full font-semibold flex items-center space-x-2 hover:bg-red-700 transition-all duration-300 shadow-lg"
        >
          <ShoppingCart className="w-5 h-5" />
          <span>Add to Cart</span>
        </button>
      </div>

      <div className="p-5">
        <div className="mb-2">
          <span className="text-xs font-semibold text-red-600 uppercase tracking-wide">
            {product.category}
          </span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-black">
            ${product.price.toFixed(2)}
          </span>
          <span className="text-sm text-gray-500">
            {product.stock > 0 ? (
              <span className="text-green-600 font-medium">In Stock</span>
            ) : (
              <span className="text-red-600 font-medium">Out of Stock</span>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}
