import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Contact.css";

function Contact() {
  const defaultContact = {
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop",
    shopName: "Urban Fashion",
    title: "Contact Our Fashion Store",
    description:
      "Reach out for support, styling advice, or questions about our collection.",
    email: "support@urbanfashion.com",
    phone: "+91 98765 43210",
    address: "123 Fashion Street, Mumbai",
  };

  const [contact, setContact] = useState(defaultContact);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:7000/api/contact")
      .then((res) => {
        setContact(res.data || defaultContact);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Unable to load contact details, showing default information.");
        setContact(defaultContact);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="contact-page">
        <div className="contact-loading">
          <h1>Loading contact details...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-page">
      {error && (
        <div className="contact-error">
          <p>{error}</p>
        </div>
      )}

      {/* HERO IMAGE */}

      <div className="contact-image">
        <img src={contact.image} alt="fashion" />
      </div>

      {/* CONTENT */}

      <div className="contact-content">

        <h1>{contact.shopName}</h1>

        <h2>{contact.title}</h2>

        <p>{contact.description}</p>

        <div className="contact-box">

          <div className="card">
            <h3>Email</h3>
            <p>{contact.email}</p>
          </div>

          <div className="card">
            <h3>Phone</h3>
            <p>{contact.phone}</p>
          </div>

          <div className="card">
            <h3>Address</h3>
            <p>{contact.address}</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Contact;