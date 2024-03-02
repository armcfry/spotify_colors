import React, { useEffect, useState } from 'react';

// get access token from loacl storage
function getAccessToken() {
  const token = window.localStorage.getItem('access_token');
  console.log(`getting token: ${token}`);
  return token;
}

async function fetchProfile(token: string): Promise<any> {
  const result = await fetch("https://api.spotify.com/v1/me", {
      method: "GET", headers: { Authorization: `Bearer ${token}` }
  });

  return await result.json();
}

function Redirect() {
  const [id, setId] = useState("");

  useEffect(() => {
    const fetchAndSetProfile = async () => {
      const token = getAccessToken();
      if (token) {
        let profile = await fetchProfile(token);
        console.log(profile);
        setId(profile.id);
      }
    };

    fetchAndSetProfile();
  }, []);

  return (
    <div>
      <h1>Logged into Spotify as user:</h1>
      <h2>{id}</h2>
    </div>
  );
}

export default Redirect;