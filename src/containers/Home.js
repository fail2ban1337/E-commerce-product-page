import React from "react";
import { Home } from "../components";

export default function HomePage() {
  return (
    <Home>
      <Home.ImageSlider/>
      <Home.RowContainer>
        <Home.ImageSection></Home.ImageSection>
        <Home.ProductInof></Home.ProductInof>
      </Home.RowContainer>
    </Home>
  );
}
