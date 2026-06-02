import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const defaultProducts = [
  {
    id: 1,
    name: "Modern Jacket",
    price: "₹2499",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Stylish Hoodie",
    price: "₹1999",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Premium Fashion",
    price: "₹2999",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop",
  },
];

function ProductList() {
  const [products, setProducts] = useState(defaultProducts);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/api/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Server error ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data.products || defaultProducts);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Products could not be loaded. Showing default list.");
        setProducts(defaultProducts);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h1>Urban Shop Products</h1>

      {loading && <p>Loading products...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {products.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
              background: "#fff",
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{ width: "100%", height: "250px", objectFit: "cover" }}
            />

            <h2>{item.name}</h2>
            <p>₹ {item.price.replace("₹", "")}</p>

            <Link to={`/products/${item.id}`}>
              <button
                style={{
                  width: "100%",
                  padding: "10px 15px",
                  border: "none",
                  borderRadius: "8px",
                  background: "#111",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
