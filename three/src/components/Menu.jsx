import React from 'react';
import { useCart } from '../context/CartContext';
import SlideCard from './SlideCard';

function Menu() {
  const { addToCart } = useCart();

  // Coffee & Espresso products
  const coffeeProducts = [
    {
      id: 1,
      name: "House Blend",
      description: "Our signature medium roast coffee with notes of chocolate and caramel",
      price: "₹250",
      image: "https://images.unsplash.com/photo-1518057111178-44a106bad149?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      details: "Sourced from small farms in Ethiopia and Colombia, our House Blend is carefully roasted to bring out the natural sweetness and complexity of the beans. Perfect for any time of day.",
      ingredients: "100% Arabica beans, ethically sourced",
      calories: "5 calories (black)"
    },
    {
      id: 2,
      name: "Cappuccino",
      description: "Espresso with steamed milk and a thick layer of creamy foam",
      price: "₹320",
      image: "https://images.unsplash.com/photo-1534778101976-62847782c213?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      details: "Our cappuccino features a double shot of our signature espresso topped with velvety steamed milk and a thick layer of microfoam. The perfect balance of strength and creaminess.",
      ingredients: "Espresso, steamed milk, milk foam",
      calories: "120 calories (with whole milk)"
    },
    {
      id: 3,
      name: "Mocha",
      description: "Espresso with rich chocolate and steamed milk, topped with whipped cream",
      price: "₹350",
      image: "https://images.unsplash.com/photo-1578314675229-517a77999f23?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      details: "Indulge in our luxurious mocha, combining our bold espresso with premium dark chocolate, steamed milk, and topped with fresh whipped cream. A delightful treat for chocolate lovers.",
      ingredients: "Espresso, dark chocolate, steamed milk, whipped cream",
      calories: "250 calories"
    },
    {
      id: 4,
      name: "Cold Brew",
      description: "Smooth, low-acidity coffee brewed with cold water for 12+ hours",
      price: "₹330",
      image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      details: "Our cold brew is steeped for a minimum of 12 hours in cold, filtered water. The result is an incredibly smooth, naturally sweet coffee with low acidity and a refreshing finish.",
      ingredients: "100% Arabica beans, filtered water",
      calories: "15 calories (black)"
    }
  ];

  // Pastries & Snacks products
  const pastryProducts = [
    {
      id: 5,
      name: "Cinnamon Roll",
      description: "Soft, warm roll with cinnamon swirl and cream cheese frosting",
      price: "₹240",
      image: "https://images.unsplash.com/photo-1600841867003-4d5b322f9356?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      details: "Our cinnamon rolls are baked fresh daily, featuring a soft, fluffy dough with a perfect cinnamon swirl and topped with our signature cream cheese frosting.",
      ingredients: "Flour, butter, sugar, cinnamon, cream cheese, vanilla",
      calories: "320 calories"
    },
    {
      id: 6,
      name: "Chocolate Cake",
      description: "Rich, moist chocolate cake with smooth ganache frosting",
      price: "₹260",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      details: "Our chocolate cake is made with premium cocoa and topped with a silky smooth chocolate ganache. Each bite delivers rich, intense chocolate flavor.",
      ingredients: "Flour, butter, eggs, sugar, cocoa powder, chocolate, cream",
      calories: "380 calories"
    },
    {
      id: 7,
      name: "Hamburger",
      description: "Juicy beef patty with fresh vegetables and special sauce",
      price: "₹580",
      image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      details: "Our signature hamburger features a juicy beef patty, fresh lettuce, tomato, onion, and our special sauce, all served on a toasted brioche bun.",
      ingredients: "Beef, lettuce, tomato, onion, cheese, brioche bun, special sauce",
      calories: "520 calories"
    },
    {
      id: 8,
      name: "Chocolate Cupcake",
      description: "Decadent chocolate cupcake with marshmallow frosting",
      price: "₹220",
      image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      details: "Our chocolate cupcakes are topped with fluffy marshmallow frosting and chocolate drizzle. A perfect sweet treat to accompany your coffee.",
      ingredients: "Flour, butter, sugar, eggs, cocoa powder, marshmallow, chocolate",
      calories: "290 calories"
    }
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="menu-section">
      <h2>Our Menu</h2>
      
      <div className="menu-category">
        <h3>Coffee & Espresso</h3>
        <div className="menu-card-grid">
          {coffeeProducts.map(product => (
            <SlideCard 
              key={product.id} 
              product={product} 
              onAddToCart={handleAddToCart} 
            />
          ))}
        </div>
      </div>
      
      <div className="menu-category">
        <h3>Pastries & Snacks</h3>
        <div className="menu-card-grid">
          {pastryProducts.map(product => (
            <SlideCard 
              key={product.id} 
              product={product} 
              onAddToCart={handleAddToCart} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;