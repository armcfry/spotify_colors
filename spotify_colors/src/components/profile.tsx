import React, { useEffect, useState } from 'react';
import "../css/cards.css";

async function fetchProfile(token: string): Promise<any> {
    const result = await fetch("https://api.spotify.com/v1/me", {
      method: "GET", headers: { Authorization: `Bearer ${token}` }
    });
  
    return await result.json();
}

function Profile(token: string) {
    const [id, setId] = useState("");
    const [image, setImage] = useState("");
    const [imageLoaded, setImageLoaded] = useState(false);
  
    // Image onLoad handler
    const handleImageLoad = () => {
    //   console.log("Image loaded");
      setImageLoaded(true);
    };
  
    // Preload the image
    useEffect(() => {
      const img = new Image();
      img.src = image;
      img.onload = handleImageLoad;
    }, [image]);
  
    useEffect(() => {
      const fetchAndSetProfile = async () => {
        // const token = getAccessToken();
        if (token) {
          let profile = await fetchProfile(token);
          console.log(profile);
          setId(profile.id);
          setImage(profile.images[1].url);
        }
      };
  
      fetchAndSetProfile();
    }, []);
  
    //animation styles
    var flip_style = {
      backfaceVisibility: "invisible !important",
      // animate for only 2 seconds
      animation: "flip 2s ease",
      animationDuration: "1.3s"
    };
  
    return (
      <div className="main-body">
        {imageLoaded && (
          <div className="card" style={flip_style as React.CSSProperties}>
            <div className="card-body">
              <div className="d-flex flex-column align-items-center text-center">
                <img src={image} alt="user image" width="150"/>
                <div className="mt-3">
                  <h4>{id}</h4>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
  
  export default Profile;