import React, { useEffect, useState } from 'react';

function ImageCard(cardProps) {
    const [image, setImage] = useState("");
    const [imageLoaded, setImageLoaded] = useState(false);
    console.log("rendering");
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
        setImage(cardProps.image);
      }, [cardProps.image]);
    const body = cardProps.body;

    // //animation styles
    // var flip_style = {
    //     backfaceVisibility: "invisible !important",
    //     // animate for only 2 seconds
    //     animation: "flip 2s ease",
    //     animationDuration: "1.3s"
    //     };
    
        return (
        <div className="main-body">
            {imageLoaded && (
            // <div className="card" style={flip_style as React.CSSProperties}>
                <div className="card">
                <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                    <img src={image} alt="user image" width="150"/>
                    <div className="mt-3">
                    <h4>{body}</h4>
                    </div>
                </div>
                </div>
            </div>
            )}
        </div>
        );
    } 

export default ImageCard;