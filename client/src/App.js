import "./App.css";
import React from "react";
import image from "./assets/media/images/BalintPhoto.jpg";

export default function App() {
  return (
    <div className='App'>
      <h1>ME REACT APP HELLO</h1>
      <img src={image} alt='Balint'></img>
    </div>
  );
}
