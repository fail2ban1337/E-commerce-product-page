import React from "react";
import { Container, ImageSection, PorductInfo, RowContainer } from "./styles";

export default function Home({ children, ...restProps }) {
  return <Container>{children}</Container>;
}

Home.RowContainer = function ({ children, ...restProps }) {
  return <RowContainer>{children}</RowContainer>;
};

Home.ImageSection = function ({ children, ...restProps }) {
  return (
    <ImageSection>
      <div className="ImageSectionCol">
        <div className="test">
          <img className="image_product" src="images/image-product-1.jpg" />
          <div className="ImageSectionRow">
            <img
              className="image_thumb"
              src="images/image-product-1-thumbnail.jpg"
            />
            <img
              className="image_thumb"
              src="images/image-product-2-thumbnail.jpg"
            />{" "}
            <img
              className="image_thumb"
              src="images/image-product-3-thumbnail.jpg"
            />{" "}
            <img
              className="image_thumb"
              src="images/image-product-4-thumbnail.jpg"
            />
          </div>
        </div>
      </div>
    </ImageSection>
  );
};

Home.ProductInof = function ({ children }) {
  return <PorductInfo>{children}</PorductInfo>;
};
