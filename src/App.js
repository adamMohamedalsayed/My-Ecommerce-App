
import { useState } from 'react';
import FoodList from './ProjectFolders/FoodList/FoodList';
import Header from './ProjectFolders/HeaderFolder/Header';
import MainSection from './ProjectFolders/Section1files/MainSection';
import Footer from './ProjectFolders/FooterFiles/Footer';


function App() {
  const [cartItems, setCartItems] = useState([]);
  function handleAddToCart(food) {
    setCartItems(prev => [...prev, food]);
  }
  return (
    <div className="App">
      <Header cartItems={cartItems} />
      <MainSection />
      <FoodList onAddToCart={handleAddToCart} />
      <Footer />
    </div>
  );
}

export default App;
