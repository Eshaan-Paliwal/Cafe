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
      image: "/hanvin-cheong-XaaT7S3oYd4-unsplash.jpg",
      details: "Sourced from small farms in Ethiopia and Colombia, our House Blend is carefully roasted to bring out the natural sweetness and complexity of the beans. Perfect for any time of day.",
      ingredients: "100% Arabica beans, ethically sourced",
      calories: "5 calories (black)"
    },
    {
      id: 2,
      name: "Cappuccino",
      description: "Espresso with steamed milk and a thick layer of creamy foam",
      price: "₹320",
      image: "/j-torres-Huq29oTUOmI-unsplash.jpg",
      details: "Our cappuccino features a double shot of our signature espresso topped with velvety steamed milk and a thick layer of microfoam. The perfect balance of strength and creaminess.",
      ingredients: "Espresso, steamed milk, milk foam",
      calories: "120 calories (with whole milk)"
    },
    {
      id: 3,
      name: "Mocha",
      description: "Espresso with rich chocolate and steamed milk, topped with whipped cream",
      price: "₹350",
      image: "/mustafa-fatemi-Iy63wBayBhQ-unsplash.jpg",
      details: "Indulge in our luxurious mocha, combining our bold espresso with premium dark chocolate, steamed milk, and topped with fresh whipped cream. A delightful treat for chocolate lovers.",
      ingredients: "Espresso, dark chocolate, steamed milk, whipped cream",
      calories: "250 calories"
    },
    {
      id: 4,
      name: "Cold Brew",
      description: "Smooth, low-acidity coffee brewed with cold water for 12+ hours",
      price: "₹330",
      image: "/takafumi-yamashita-TvceFePJuaE-unsplash.jpg",
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
      image: "/carissa-gan-LdfLThHJB7c-unsplash.jpg",
      details: "Our cinnamon rolls are baked fresh daily, featuring a soft, fluffy dough with a perfect cinnamon swirl and topped with our signature cream cheese frosting.",
      ingredients: "Flour, butter, sugar, cinnamon, cream cheese, vanilla",
      calories: "320 calories"
    },
    {
      id: 6,
      name: "Chocolate Cake",
      description: "Rich, moist chocolate cake with smooth ganache frosting",
      price: "₹260",
      image: "/sam-moghadam-yxZSAjyToP4-unsplash.jpg",
      details: "Our chocolate cake is made with premium cocoa and topped with a silky smooth chocolate ganache. Each bite delivers rich, intense chocolate flavor.",
      ingredients: "Flour, butter, eggs, sugar, cocoa powder, chocolate, cream",
      calories: "380 calories"
    },
    {
      id: 7,
      name: "Hamburger",
      description: "Juicy beef patty with fresh vegetables and special sauce",
      price: "₹580",
      image: "/lia-den-z4sge-mh2gM-unsplash.jpg",
      details: "Our signature hamburger features a juicy beef patty, fresh lettuce, tomato, onion, and our special sauce, all served on a toasted brioche bun.",
      ingredients: "Beef, lettuce, tomato, onion, cheese, brioche bun, special sauce",
      calories: "520 calories"
    },
    {
      id: 8,
      name: "Chocolate Cupcake",
      description: "Decadent chocolate cupcake with marshmallow frosting",
      price: "₹220",
      image: "/goodeats-yqr-MGskjWZDdhg-unsplash.jpg",
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