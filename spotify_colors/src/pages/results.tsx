import React, { useEffect, useState } from 'react';
import "../css/cards.css";
import "./results.css";
import Profile from '../components/profile.tsx';
import GenreInfo from '../components/genre_info.tsx';

// get access token from local storage
function getAccessToken() {
  const token: string = window.localStorage.getItem('access_token') || '';
  return token;
}

function Results() {
  useEffect(() => {
    // Get the current URL
    const url = new URL(window.location.href);
    // Remove the code parameter from the query string
    url.searchParams.delete('code');
    // Replace the current URL with the modified one
    window.history.replaceState({}, '', url.toString());
  }, []);

  let token = getAccessToken();

  return (
    <div className="grid-container">
      <div className="grid-item">{Profile(token)}</div>
      <div className="grid-item-large">{GenreInfo(token)}</div>
    </div> 
  );
}

export default Results;