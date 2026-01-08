import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { Product } from '../context/ShoppingContext';

export default function Shop() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const sampleProducts: Product[] = [
      {
        id: '1',
        name: 'Premium Wireless Headphones',
        description: 'High-quality audio with noise cancellation and 30-hour battery life',
        price: 299.99,
        image_url: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Electronics',
        stock: 15
      },
      {
        id: '2',
        name: 'Smart Watch Pro',
        description: 'Advanced fitness tracking, heart rate monitor, and GPS navigation',
        price: 399.99,
        image_url: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Electronics',
        stock: 20
      },
      {
        id: '3',
        name: 'Designer Sunglasses',
        description: 'UV protection with polarized lenses and modern style',
        price: 189.99,
        image_url: 'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Fashion',
        stock: 30
      },
      {
        id: '4',
        name: 'Leather Backpack',
        description: 'Genuine leather with laptop compartment and multiple pockets',
        price: 149.99,
        image_url: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Fashion',
        stock: 12
      },
      {
        id: '5',
        name: 'Portable Speaker',
        description: 'Waterproof Bluetooth speaker with 360-degree sound',
        price: 129.99,
        image_url: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Electronics',
        stock: 25
      },
      {
        id: '6',
        name: 'Running Shoes',
        description: 'Lightweight and breathable with superior cushioning',
        price: 119.99,
        image_url: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Sports',
        stock: 18
      },
      {
        id: '7',
        name: 'Coffee Maker Pro',
        description: 'Programmable coffee maker with thermal carafe',
        price: 89.99,
        image_url: 'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Home',
        stock: 10
      },
      {
        id: '8',
        name: 'Yoga Mat Premium',
        description: 'Non-slip eco-friendly yoga mat with carrying strap',
        price: 49.99,
        image_url: 'https://images.pexels.com/photos/3775566/pexels-photo-3775566.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Sports',
        stock: 40
      }
    ];

    setTimeout(() => {
      setProducts(sampleProducts);
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="relative bg-gradient-to-r from-black via-red-950 to-black text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-800 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-slideUp">
            Discover Amazing Products
          </h1>
          <p className="text-xl text-gray-300 animate-slideUp delay-200">
            Shop the latest trends with exclusive deals
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-xl overflow-hidden shadow-lg animate-pulse"
              >
                <div className="aspect-square bg-gray-300" />
                <div className="p-5 space-y-3">
                  <div className="h-4 bg-gray-300 rounded w-1/4" />
                  <div className="h-6 bg-gray-300 rounded w-3/4" />
                  <div className="h-4 bg-gray-300 rounded w-full" />
                  <div className="h-8 bg-gray-300 rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
