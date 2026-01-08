import { ShoppingProvider } from './context/ShoppingContext';
import Navbar from './components/Navbar';
import CartSidebar from './components/CartSidebar';
import Shop from './components/Shop';
import Footer from './components/Footer';

function App() {
  return (
    <ShoppingProvider>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Navbar />
        <Shop />
        <CartSidebar />
        <Footer />
      </div>
    </ShoppingProvider>
  );
}

export default App;
