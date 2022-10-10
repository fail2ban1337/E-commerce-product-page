import React, { useContext, useState, createContext } from "react";
import {
  Container,
  ImageSection,
  PorductInfo,
  ImageThumbContainer,
  RowContainer,
  ImageSlider,
} from "./styles";
import { CartHandleContext } from "../../App";
const ImageSliderFullContext = createContext();
export default function Home({ children, ...restProps }) {
  const [oepnCheck, setOpenCheck] = useState(false);
  return (
    <ImageSliderFullContext.Provider value={{ oepnCheck, setOpenCheck }}>
      <Container>{children}</Container>
    </ImageSliderFullContext.Provider>
  );
}

Home.RowContainer = function ({ children, ...restProps }) {
  return <RowContainer>{children}</RowContainer>;
};

Home.ImageSection = function HomeImageSection({ children, ...restProps }) {
  const { oepnCheck, setOpenCheck } = useContext(ImageSliderFullContext);
  console.log("opencheck", oepnCheck);
  const [chosenImage, setChosenImage] = useState({
    imagesrc: "./images/image-product-1.jpg",
  });
  const [styleImage, setStyleImage] = useState(0);
  const images = {
    iamge1: {
      thumbnail: "./images/image-product-1-thumbnail.jpg",
      imagesrc: "./images/image-product-1.jpg",
    },
    iamge2: {
      thumbnail: "./images/image-product-2-thumbnail.jpg",
      imagesrc: "./images/image-product-2.jpg",
    },
    iamge3: {
      thumbnail: "./images/image-product-3-thumbnail.jpg",
      imagesrc: "./images/image-product-3.jpg",
    },
    iamge4: {
      thumbnail: "./images/image-product-4-thumbnail.jpg",
      imagesrc: "./images/image-product-4.jpg",
    },
  };

  const HandleSliderNextButtons = () => {
    if (styleImage == 3) {
      setStyleImage(0);
      setChosenImage(Object.values(images)[0]);
    } else {
      setChosenImage(Object.values(images)[styleImage + 1]);
      setStyleImage((prevValue) => prevValue + 1);
    }
  };
  const HandleSliderPrevButtons = () => {
    if (styleImage == 0) {
      setStyleImage(3);
      setChosenImage(Object.values(images)[3]);
    } else {
      setChosenImage(Object.values(images)[styleImage - 1]);
      setStyleImage((prevValue) => prevValue - 1);
    }
  };

  const HandleChangeImage = (value, index) => {
    setStyleImage(index++);
    setChosenImage(value);
  };

  const handleClick = () => {
    setOpenCheck(true);
  };
  return (
    <ImageSection>
      <div className="ImageSectionCol">
        {children}
        <div className="ImageSectionColContainer">
          <div className="image_product_Container">
            <div
              className="imageSlidePrev"
              onClick={() => HandleSliderPrevButtons()}
            >
              <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11 1 3 9l8 8"
                  stroke="#1D2026"
                  strokeWidth="3"
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>
            </div>
            <img
              onClick={(e) => handleClick(e)}
              className="image_product"
              src={chosenImage.imagesrc}
            />

            <div
              className="imageSlideNext"
              onClick={() => HandleSliderNextButtons()}
            >
              <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m2 1 8 8-8 8"
                  stroke="#1D2026"
                  strokeWidth="3"
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="ImageSectionRow">
            {Object.values(images).map((value, index) => {
              return (
                <ImageThumbContainer
                  // element={styleImage}
                  active={index == styleImage ? true : false}
                  key={index}
                  onClick={() => HandleChangeImage(value, index)}
                >
                  <img className="image_thumb" src={value.thumbnail} />
                </ImageThumbContainer>
              );
            })}
          </div>
        </div>
      </div>
    </ImageSection>
  );
};

Home.ProductInof = function HomeProductInof({ ...restProps }) {
  const { cart, setCart } = useContext(CartHandleContext);
  const productData = {
    productCat: "NEAKER COMPANY",
    productName: "Fall Limited Edition Sneakers",
    productDesc: `Thes low-profile sneakers are your perfect casual wear companion,
    Feautring a durable rubber outer solde, they'll withstand the
    everything the weather can offer.`,
    productImg: "images/image-product-1-thumbnail.jpg",
    productOldPrice: 250.0,
    productPrice: 125.0,
  };

  const [prdTotal, SetProdTotal] = useState(0);

  const HandleAddToCart = (e) => {
    e.preventDefault();
    if (prdTotal > 0) {
      setCart({
        products: { ...productData, prdTotal },
      });
    }
  };

  return (
    <PorductInfo>
      <div className="productSectionCol">
        <h3>{productData.productCat}</h3>
        <h2>{productData.productName}</h2>
        <span className="productDesc">{productData.productDesc}</span>
        <div className="price_container">
          <div className="price_containerRow">
            <span className="priceValue">${productData.productPrice}</span>
            <span className="discount">50%</span>
          </div>
          <span className="oldPrice">${productData.productOldPrice}</span>
        </div>
        <div className="btnRow">
          <div className="add_product_number">
            <svg
              width="12"
              height="4"
              xmlns="http://www.w3.org/2000/svg"
              link="http://www.w3.org/1999/xlink"
              onClick={() =>
                SetProdTotal((prevValue) => (prevValue > 0 ? prevValue - 1 : 0))
              }
            >
              <defs>
                <path
                  d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
                  id="a"
                />
              </defs>
              <use fill="#FF7E1B" fillRule="nonzero" href="#a" />
            </svg>
            <span className="add_product_number_value">{prdTotal}</span>
            <svg
              width="12"
              height="12"
              xmlns="http://www.w3.org/2000/svg"
              link="http://www.w3.org/1999/xlink"
              onClick={() => SetProdTotal((prevValue) => prevValue + 1)}
            >
              <defs>
                <path
                  d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
                  id="b"
                />
              </defs>
              <use fill="#FF7E1B" fillRule="nonzero" href="#b" />
            </svg>
          </div>
          <div
            className="add_productToCard"
            onClick={(e) => HandleAddToCart(e)}
          >
            <svg className="add_productToCardicon" width="22" height="20">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="#fff"
                fillRule="nonzero"
              />
            </svg>
            <span className="add_productToCardText">Add to cart</span>
          </div>
        </div>
      </div>
    </PorductInfo>
  );
};

Home.ImageSlider = function HomeImageSlider({ children, ...restProps }) {
  const { oepnCheck, setOpenCheck } = useContext(ImageSliderFullContext);
  console.log("last", oepnCheck);
  return (
    <>
      <ImageSlider active={oepnCheck} {...restProps}>
        <Home.ImageSection>
          <div className="closeButton" onClick={() => setOpenCheck(false)}>
            <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                fill="#69707D"
                fillRule="evenodd"
              />
            </svg>
          </div>
        </Home.ImageSection>
      </ImageSlider>
    </>
  );
};
