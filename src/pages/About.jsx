import React, { useEffect, useState } from "react";

export default function AboutPage() {
  const [shop, setShop] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const defaultShop = {
      shopName: "Urban Fashion",
      title: "Modern Fashion Collection",
      subtitle: "Stylish outfits for every mood",
      bannerImage:
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop",
      fashionImage:
        "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1200&auto=format&fit=crop",
      description:
        "Welcome to Urban Fashion, your go-to destination for the latest streetwear and luxury fashion trends.",
      mission: "Deliver bold, modern clothing with confidence and quality.",
      vision: "Empower everyone to express style through fashion.",
      services: ["Free shipping", "24/7 support", "Easy returns"],
      categories: ["Men", "Women", "Accessories", "Sale"],
      jacketImage:
        "https://images.unsplash.com/photo-1521334884684-d80222895322?q=80&w=1200&auto=format&fit=crop",
      sneakersImage:
        "https://images.unsplash.com/photo-1528701800489-20b05d48a833?q=80&w=1200&auto=format&fit=crop",
      showroomImage:
        "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1200&auto=format&fit=crop",
      owner: "Ayesha Khan",
      location: "Mumbai, India",
      email: "contact@urbanfashion.com",
      phone: "+91 98765 43210",
      website: "www.urbanfashion.com",
    };

    fetch("http://localhost:9000/api/about")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Server error ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setShop(data.shop || defaultShop);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setShop(defaultShop);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div style={styles.loading}>
        <h1>Loading Fashion Store...</h1>
      </div>
    );
  }

  if (error || !shop) {
    return (
      <div style={styles.loading}>
        <h1>{error || "Failed to load store details."}</h1>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div
        style={{
          ...styles.hero,
          backgroundImage: `url(${shop.bannerImage})`,
        }}
      >
        <div style={styles.overlay}>
          <h1 style={styles.title}>{shop.shopName}</h1>
          <h2 style={styles.subtitle}>{shop.title}</h2>
          <p style={styles.heroText}>{shop.subtitle}</p>
        </div>
      </div>

      <div style={styles.aboutSection}>
        <div style={styles.left}>
          <img
            src={shop.fashionImage}
            alt="fashion"
            style={styles.mainImage}
          />
        </div>
        <div style={styles.right}>
          <h1>About Our Store</h1>
          <p style={styles.description}>{shop.description}</p>
          <div style={styles.infoBox}>
            <h3>Mission</h3>
            <p>{shop.mission}</p>
          </div>
          <div style={styles.infoBox}>
            <h3>Vision</h3>
            <p>{shop.vision}</p>
          </div>
        </div>
      </div>

      <div style={styles.imageGrid}>
        <img
          src={shop.jacketImage}
          alt="jacket"
          style={styles.gridImage}
        />
        <img
          src={shop.sneakersImage}
          alt="sneakers"
          style={styles.gridImage}
        />
        <img
          src={shop.showroomImage}
          alt="showroom"
          style={styles.gridImage}
        />
      </div>

      <div style={styles.section}>
        <h1 style={styles.sectionTitle}>Our Services</h1>
        <div style={styles.cardContainer}>
          {shop.services.map((service, index) => (
            <div key={index} style={styles.card}>
              <h3>{service}</h3>
            </div>
          ))}
        </div>
      </div>

      <div style={styles.section}>
        <h1 style={styles.sectionTitle}>Fashion Categories</h1>
        <div style={styles.cardContainer}>
          {shop.categories.map((item, index) => (
            <div key={index} style={styles.categoryCard}>
              <h3>{item}</h3>
            </div>
          ))}
        </div>
      </div>

      <div style={styles.contactSection}>
        <h1>Contact Information</h1>
        <p>
          <strong>Owner:</strong> {shop.owner}
        </p>
        <p>
          <strong>Location:</strong> {shop.location}
        </p>
        <p>
          <strong>Email:</strong> {shop.email}
        </p>
        <p>
          <strong>Phone:</strong> {shop.phone}
        </p>
        <p>
          <strong>Website:</strong> {shop.website}
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial",
    backgroundColor: "#f5f5f5",
    color: "#222",
  },
  loading: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  hero: {
    height: "90vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.6)",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    textAlign: "center",
    padding: "20px",
  },
  title: {
    fontSize: "60px",
    marginBottom: "10px",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: "32px",
    marginBottom: "15px",
  },
  heroText: {
    fontSize: "20px",
    maxWidth: "700px",
  },
  aboutSection: {
    display: "flex",
    gap: "40px",
    padding: "60px",
    alignItems: "center",
    flexWrap: "wrap",
  },
  left: {
    flex: 1,
  },
  right: {
    flex: 1,
  },
  mainImage: {
    width: "100%",
    borderRadius: "20px",
    boxShadow: "0px 5px 20px rgba(0,0,0,0.2)",
  },
  description: {
    lineHeight: "1.8",
    fontSize: "18px",
  },
  infoBox: {
    backgroundColor: "white",
    padding: "20px",
    marginTop: "20px",
  },
  cardContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
  },
  card: {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "20px",
    boxShadow: "0px 5px 20px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  section: {
    padding: "60px 20px",
  },
  sectionTitle: {
    textAlign: "center",
    marginBottom: "30px",
  },
  categoryCard: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "20px",
    textAlign: "center",
    boxShadow: "0px 5px 20px rgba(0,0,0,0.08)",
  },
  imageGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
    padding: "40px 20px",
  },
  gridImage: {
    width: "100%",
    borderRadius: "20px",
    objectFit: "cover",
    minHeight: "300px",
  },
  contactSection: {
    padding: "60px 20px",
    backgroundColor: "#fff",
  },
};