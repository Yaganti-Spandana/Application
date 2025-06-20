import React from "react"; 
import Header from "./Header"; 
import CarouselSection from "./CarouselSection"; 
import VideoModal from "./VideoModel"; 
import videoData from "./Videos.json"; 
import "./App.css";

function App() {
  return (
    <div className="App"> 
    <Header></Header> 
    <CarouselSection title="Continue Watching" videos={videoData.continueWatching}></CarouselSection>
    <CarouselSection title="Trending" videos={videoData.trending}></CarouselSection>
    <CarouselSection title="Thriller" videos={videoData.thriller}></CarouselSection>
    <CarouselSection title="Genres" videos={videoData.genres}></CarouselSection>
    {/* Add more CarouselSections if needed */} 
    <VideoModal /> </div> 
    ); 
}

export default App;