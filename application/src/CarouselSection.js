import { Typography, Grid } from "@mui/material"; 
import VideoCard from "./VideoCard";
function CarouselSection({ title, videos }) { 
    return ( 
    <div className="carousel-section"> 
    <Typography variant="h5" gutterBottom>{title}</Typography> 
    <Grid container spacing={2}> {videos.map((video, index) => ( 
        <Grid item xs={6} sm={4} md={3} lg={2} key={index}> 
        <VideoCard video={video} />
        </Grid> ))} 
    </Grid> 
    </div> ); }

export default CarouselSection;