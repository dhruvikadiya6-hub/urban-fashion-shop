import React, {
  useEffect,
  useState,
} from "react";

import axios from "axios";

import {
  useParams,
  Link,
} from "react-router-dom";

function ProductDetails() {

  const { id } = useParams();

  const [product, setProduct] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    axios
      .get(
        `http://localhost:4000/api/products/${id}`
      )

      .then((res) => {

        setProduct(res.data.product);

        setLoading(false);

      })

      .catch((err) => {

        console.log(err);

        setLoading(false);

      });

  }, [id]);

  if (loading) {

    return (
      <h1>Loading Product...</h1>
    );

  }

  if (!product) {

    return (
      <h1>Product Not Found</h1>
    );

  }

  return (

    <div style={styles.container}>

      <Link to="/">
        <button style={styles.backBtn}>
          Back
        </button>
      </Link>

      <div style={styles.card}>

        <div style={styles.left}>

          <img
            src={product.image}
            alt={product.name}
            style={styles.image}
          />

        </div>

        <div style={styles.right}>

          <h1>{product.name}</h1>

          <p style={styles.category}>
            {product.category}
          </p>

          <h2 style={styles.price}>
            ₹{product.price}
          </h2>

          <p>
            ⭐ {product.rating}
          </p>

          <p>
            <strong>Brand:</strong>
            {" "}
            {product.brand}
          </p>

          <p>
            <strong>Stock:</strong>
            {" "}
            {product.stock}
          </p>

          <p style={styles.description}>
            {product.description}
          </p>

          <p>
            <strong>Sizes:</strong>
            {" "}
            {product.sizes.join(", ")}
          </p>

          <p>
            <strong>Colors:</strong>
            {" "}
            {product.colors.join(", ")}
          </p>

          <p>
            <strong>Delivery:</strong>
            {" "}
            {product.delivery}
          </p>

          <p>
            <strong>Warranty:</strong>
            {" "}
            {product.warranty}
          </p>

          <button style={styles.cartBtn}>
            Add To Cart
          </button>

        </div>

      </div>

    </div>

  );

}

const styles = {

  container: {
    padding: "40px",
    background: "#f5f5f5",
    minHeight: "100vh",
  },

  backBtn: {
    padding: "10px 20px",
    border: "none",
    background: "#111",
    color: "#fff",
    borderRadius: "8px",
    cursor: "pointer",
    marginBottom: "20px",
  },

  card: {
    display: "flex",
    flexWrap: "wrap",
    background: "#fff",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow:
      "0 5px 15px rgba(0,0,0,0.1)",
  },

  left: {
    flex: 1,
  },

  right: {
    flex: 1,
    padding: "30px",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  category: {
    color: "gray",
    marginBottom: "10px",
  },

  price: {
    color: "#e91e63",
    marginBottom: "20px",
  },

  description: {
    margin: "20px 0",
    lineHeight: "1.7",
  },

  cartBtn: {
    marginTop: "20px",
    padding: "15px 30px",
    border: "none",
    background: "#e91e63",
    color: "#fff",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "18px",
  },

};

export default ProductDetails;