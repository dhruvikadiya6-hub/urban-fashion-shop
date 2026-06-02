import React from "react";
import "./UrbanFashionHome.css";
import Navbar from "../components/Navbar";


export default function Home() {
  const products = [
    {
      name: "Modern Jacket",
      price: "₹2499",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Stylish Hoodie",
      price: "₹1999",
      image:
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Premium Fashion",
      price: "₹2999",
      image:
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <div>
      <Navbar />

      <div className="home-container">

        {/* Hero */}
        <div className="hero">
          <div className="hero-content">
            <h1>Urban Fashion</h1>
            <p>Modern Fashion Collection For Everyone</p>
          </div>
        </div>

        {/* Menu */}
        <div className="home-menu">
          <h2>Shop by Menu</h2>
          <div className="menu-items">
            <span className="menu-item">New Arrivals</span>
            <span className="menu-item">Men</span>
            <span className="menu-item">Women</span>
            <span className="menu-item">Accessories</span>
            <span className="menu-item">Sale</span>
          </div>
        </div>

        {/* Products */}
        <div className="products">
        <h2>Trending Collections</h2>

        <div className="product-grid">
          {products.map((item, index) => (
            <div className="card" key={index}>
              <img src={item.image} alt={item.name} />

              <div className="card-content">
                <h3>{item.name}</h3>
                <p className="price">{item.price}</p>

                <button className="btn">Buy Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  );
}