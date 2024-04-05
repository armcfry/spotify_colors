import React, { useEffect, useState } from 'react';
import "../css/cards.css";

async function fetchTopArtists(token: string): Promise<any> {
    const result = await fetch("https://api.spotify.com/v1/me/top/artists?limit=10", {
      method: "GET", headers: { Authorization: `Bearer ${token}` }
    });
    // console.log(result.json());
    let json = await result.json();
    return json.items;

}

function getGenres(artists) {
    // compile a list of all genres with counts
    let genres = {};
    for (let artist of artists) {
        for (let genre of artist.genres) {
            if (genre in genres) {
                genres[genre] += 1;
            } else {
                genres[genre] = 1;
            }
        }
    }
    // return top genre
    let top_genre = "";
    let top_count = 0;
    for (let genre in genres) {
        if (genres[genre] > top_count) {
            top_genre = genre;
            top_count = genres[genre];
        }
    }
    return top_genre;
}

function GenreInfo(token: string) {
    const [genre, setgenre] = useState("");

  
    useEffect(() => {
      const fetchAndSetGenreInfo = async () => {
        // const token = getAccessToken();
        if (token) {
          let artistData = await fetchTopArtists(token);
        //   console.log(genreData);
            let genres = getGenres(artistData);
            console.log(genres);
            setgenre(genres);
        }
      };
  
      fetchAndSetGenreInfo();
    }, []);
  
    //animation styles
    var flip_style = {
      backfaceVisibility: "invisible !important",
      // animate for only 2 seconds
      animation: "flip 2s ease",
      animationDuration: "1.3s"
    };
    // for genre in genres return a card with the genre name
    // and the number of artists with that genre
    return (
      <div className="main-body">
          <div className="card" style={flip_style as React.CSSProperties}>
            <div className="card-body">
              <div className="d-flex flex-column align-items-center text-center">
                <div className="mt-3">
                  <h4>{genre}</h4>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
  
  export default GenreInfo;