import React, { useEffect, useState } from "react";
import "./Profile.css";

function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3455/api/profile")
      .then((res) => res.json())
      .then((data) => setProfile(data))
      .catch((err) => console.log(err));
  }, []);

  if (!profile) {
    return <h2 className="loading">Loading...</h2>;
  }

  return (
    <div className="profile-container">
      {/* Cover */}
      <div
        className="cover"
        style={{
          backgroundImage: `url(${profile.coverImage})`,
        }}
      >
        <div className="overlay"></div>
      </div>

      {/* Profile Info */}
      <div className="profile-info">
        <img
          src={profile.logo}
          alt={profile.brand}
          className="profile-logo"
        />

        <h1>{profile.brand}</h1>
        <p className="tagline">{profile.tagline}</p>

        <div className="stats">
          <div>
            <h3>{profile.followers}</h3>
            <span>Followers</span>
          </div>

          <div>
            <h3>{profile.collections}</h3>
            <span>Collections</span>
          </div>

          <div>
            <h3>{profile.location}</h3>
            <span>Location</span>
          </div>
        </div>

        <div className="owner">
          <h3>Owner</h3>
          <p>{profile.owner}</p>
        </div>

        <p className="description">{profile.description}</p>
      </div>

      {/* Gallery */}
      <div className="gallery-section">
        <h2>Fashion Gallery</h2>

        <div className="gallery">
          {profile.images.map((img, index) => (
            <div key={index} className="gallery-card">
              <img src={img} alt={`fashion-${index}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;