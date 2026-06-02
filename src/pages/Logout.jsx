import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");

    const timer = setTimeout(() => {
      navigate("/login");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  const handleLoginRedirect = () => {
    navigate("/logout");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>✅ Logged Out</h1>

        <p style={styles.message}>
          You have successfully logged out of your account.
        </p>

        <div style={styles.userInfo}>
          <h2>Session expired</h2>
          <p>
            For security, your local authentication data has been cleared.
          </p>
        </div>

        <button style={styles.button} onClick={handleLoginRedirect}>
          Go to Login
        </button>
      </div>
    </div>
  );
}

const styles = {

  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f6f8",
    fontFamily: "Arial, sans-serif",
  },

  card: {
    background: "#fff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow:
      "0 4px 10px rgba(0,0,0,0.1)",
    width: "400px",
    textAlign: "center",
  },

  title: {
    color: "#28a745",
    marginBottom: "10px",
  },

  message: {
    fontSize: "18px",
    marginBottom: "20px",
  },

  userInfo: {
    textAlign: "left",
    marginTop: "20px",
  },

  status: {
    color: "red",
    fontWeight: "bold",
  },

};

export default Logout;