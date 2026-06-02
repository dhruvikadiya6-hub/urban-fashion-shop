import React, { useEffect, useState } from "react";

const defaultOrders = [
  {
    id: "ORD-001",
    customer: "Ayesha Khan",
    status: "Delivered",
    date: "2026-05-28",
    items: 3,
    total: 5499,
  },
  {
    id: "ORD-002",
    customer: "Rohit Sharma",
    status: "Pending",
    date: "2026-05-30",
    items: 2,
    total: 3198,
  },
  {
    id: "ORD-003",
    customer: "Neha Patel",
    status: "Delivered",
    date: "2026-06-01",
    items: 1,
    total: 2499,
  },
];

export default function OrdersPage() {
  const [orders, setOrders] = useState(defaultOrders);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8995/api/orders")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Server error ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data.success && Array.isArray(data.orders) && data.orders.length) {
          setOrders(data.orders);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError("Unable to load orders from the backend. Showing default orders.");
        setOrders(defaultOrders);
        setLoading(false);
      });
  }, []);

  return (
    <div style={styles.page}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>🛍 Order History</h1>
        <p style={styles.subtitle}>
          Track your latest fashion orders and delivery updates
        </p>
      </div>

      {/* Loading */}
      {loading ? (
        <h2 style={styles.loading}>Loading Orders...</h2>
      ) : (
        <>
          {error && (
            <p style={{ color: "#f87171", textAlign: "center" }}>
              {error}
            </p>
          )}
          <div style={styles.grid}>
          {orders.map((order, index) => (
            <div key={index} style={styles.card}>
              {/* Order Top */}
              <div style={styles.cardTop}>
                <div>
                  <h2 style={styles.orderId}>{order.id}</h2>
                  <p style={styles.customer}>{order.customer}</p>
                </div>

                <div
                  style={{
                    ...styles.status,
                    backgroundColor:
                      order.status === "Delivered"
                        ? "#16a34a"
                        : order.status === "Pending"
                        ? "#f59e0b"
                        : "#dc2626",
                  }}
                >
                  {order.status}
                </div>
              </div>

              {/* Order Details */}
              <div style={styles.details}>
                <div style={styles.detailBox}>
                  <p style={styles.label}>Date</p>
                  <h3>{order.date}</h3>
                </div>

                <div style={styles.detailBox}>
                  <p style={styles.label}>Items</p>
                  <h3>{order.items}</h3>
                </div>

                <div style={styles.detailBox}>
                  <p style={styles.label}>Total</p>
                  <h3>₹{order.total}</h3>
                </div>
              </div>

              {/* Button */}
              <button style={styles.button}>View Details</button>
            </div>
          ))}
        </div>
      </>
      )}
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background:
      "linear-gradient(135deg, #0f172a, #1e293b, #334155)",
    padding: "40px",
    fontFamily: "Arial",
  },

  header: {
    textAlign: "center",
    marginBottom: "40px",
  },

  title: {
    color: "white",
    fontSize: "42px",
    marginBottom: "10px",
  },

  subtitle: {
    color: "#cbd5e1",
    fontSize: "18px",
  },

  loading: {
    textAlign: "center",
    color: "white",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "25px",
  },

  card: {
    background: "white",
    borderRadius: "20px",
    padding: "25px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
    transition: "0.3s",
  },

  cardTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },

  orderId: {
    margin: 0,
    color: "#0f172a",
  },

  customer: {
    margin: "5px 0",
    color: "#64748b",
  },

  status: {
    color: "white",
    padding: "8px 14px",
    borderRadius: "20px",
    fontSize: "14px",
    fontWeight: "bold",
  },

  details: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  },

  detailBox: {
    textAlign: "center",
  },

  label: {
    color: "#64748b",
    fontSize: "14px",
    marginBottom: "5px",
  },

  button: {
    width: "100%",
    padding: "12px",
    border: "none",
    borderRadius: "10px",
    background: "#2563eb",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};