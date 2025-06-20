import React from "react"; 
 import { Card, CardHeader, CardMedia } from "@mui/material"; 
 import "./VideoCard.css";

function VideoCard({ video }) {
     const handleClick = () => { 
        // Open modal logic 
    console.log("Open modal for:", video.title); };
return ( 
<Card className="video-card" onClick={handleClick}>
    <CardHeader title={video.description} className="des"/>
     <CardMedia
component="img"
image={video.title}
alt={video.description}
height="50%"
className="video-image"
/></Card> 
); }
export default VideoCard;