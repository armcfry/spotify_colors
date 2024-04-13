import React, { useEffect, useState } from 'react';
import "../css/cards.css";
import * as ColorUtility from "../components/color_data.tsx";

async function fetchTopArtists(token: string): Promise<any> {
    const result = await fetch("https://api.spotify.com/v1/me/top/artists?limit=10", {
      method: "GET", headers: { Authorization: `Bearer ${token}` }
    });
    // console.log(result.json());
    let json = await result.json();
    return json.items;

}

function getTopGenre(artists): Array<any> {
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
    console.log(genres);
    
    const masterList = ColorUtility.masterGenreList;
    // TODO: add a way to combine similar genres
    // for each genre, check if it contains any of the genres in the master list
    // if it is, increase counts for all applicable genres

    
    console.log(genres);
    // return top genre
    let top_genre = "";
    let top_count = 0;
    for (let genre in genres) {
        if (genres[genre] > top_count) {
            top_genre = genre;
            top_count = genres[genre];
        }
    }
    // console.log(top_genre);
    let top_color = ColorUtility.getGenreColor(top_genre, (15 % 10));
    return [top_genre, top_color];
}

function GenreInfo(token: string) {
    const [genre, setGenre] = useState("");
    const [color, setColor] = useState("");

  
    useEffect(() => {
      const fetchAndSetGenreInfo = async () => {
        if (token) {
          let artistData = await fetchTopArtists(token);
            let topGenreInfo = getTopGenre(artistData);
            // console.log(topGenreInfo[0]);
            setGenre(topGenreInfo[0]);
            setColor(topGenreInfo[1]);
            
        }
      };
  
      fetchAndSetGenreInfo();
    }, []);
  
    //animation styles
    var flip_style = {
      backfaceVisibility: "invisible !important",
      // animate for only 2 seconds
      animation: "flip 2s ease",
      animationDuration: "1s"
    };

    flip_style["backgroundColor"] = color;
    
    return (
      <div className="main-body">
          <div className="card-2x" style={flip_style as React.CSSProperties}>
            <div className="card-body" >
              <div className="d-flex flex-column align-items-center text-center">
                <div className="mt-3">
                  <h4>{genre}</h4>
                  <h4>{color}</h4>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
  
  export default GenreInfo;