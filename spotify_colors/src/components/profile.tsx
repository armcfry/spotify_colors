import React, { useEffect, useState } from 'react';
import "../css/cards.css";
import ImageCard from './image_card.tsx';

async function fetchProfile(token: string): Promise<any> {
    const result = await fetch("https://api.spotify.com/v1/me", {
      method: "GET", headers: { Authorization: `Bearer ${token}` }
    });
  
    return await result.json();
}

function Profile(token: string) {
    const [profile, setProfile] = useState(false);
    const [image, setImage] = useState("");
    const [body, setBody] = useState("");
    useEffect(() => {
      const fetchProfileInfo = async () => {
        // const token = getAccessToken();
        if (token) {
            let profile = await fetchProfile(token);
            setBody(profile.id);
            setImage(profile.images[1].url);
            setProfile(true);
          }
      };
  
      fetchProfileInfo();
    }, []);
    return (
      <div>
        {profile && (
            <ImageCard image={image} body={body}/>
        )}   
      </div>
    );
  }
  
  export default Profile;