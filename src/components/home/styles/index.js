import styled from "styled-components/macro";
import Header from "../../header";

export const Container = styled.div`
  max-width: 1440px;
  margin: 70px auto;
  /* overflow: hidden;
  position: fixed; */
`;

export const RowContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
  /* flex-wrap: wrap; */
  @media (min-width: 480px) and (max-width: 1550px) {
    margin: 0 2rem;
  }
  @media (max-width: 1210px) {
    flex-direction: column;
    padding-bottom: 2rem;
  }
`;
export const ImageSection = styled.div`
  flex-basis: 50%;
  padding: 70px;
  display: flex;
  justify-content: flex-end;
  .ImageSectionCol {
    .ImageSectionColContainer {
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      .image_product_Container {
        position: relative;
        .imageSlideNext {
      display: none;
        }
        .imageSlidePrev {
          display: none;
        }
        .image_product {
          width: auto;
          height: auto;
          max-width: 100%;
          max-height: 100%;
          border-radius: 15px;
        }
      }

      .ImageSectionRow {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-top: 30px;
      }
    }
  }
  @media (max-width: 1210px) {
    .ImageSectionCol {
      display: flex;
      justify-content: center;
      .ImageSectionColContainer {
        width: 70%;
        .ImageSectionRow {
          /* display: none; */
        }
      }
    }
  }
  @media (min-width: 768px) and (max-width: 1210px) {
    .ImageSectionCol {
      .ImageSectionColContainer {
        .image_product_Container {
          .image_product {
            width: 100%;
          }
        }
      }
    }
  }
  @media (max-width: 768px) {
    .ImageSectionCol {
      .ImageSectionColContainer {
        width: 100%;
        .image_product_Container {
          .imageSlidePrev {
          position: absolute;
          top: 45%;
          left: -25px;
          width: 50px;
          height: 50px;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          :hover {
            path {
              stroke: hsl(26, 100%, 55%);
            }
          }
          }
          .imageSlideNext {
            position: absolute;
            top: 45%;
            right: -25px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: white;
            display: flex;
            align-items: center;
            justify-content: center;
            :hover {
              path {
                stroke: hsl(26, 100%, 55%);
              }
            }
          }
        }

        .ImageSectionRow {
          display: flex;
        }
      }
    }
  }
  @media (min-width: 320px) and (max-width: 480px) {
    padding: 0;
  }
`;

export const ImageThumbContainer = styled.div`
  flex-basis: calc(80% / 4);
  height: auto;
  .image_thumb {
    max-width: 100%;
    max-height: 100%;
    border-radius: 10px;
    ${(p) => (p.active ? "border: 2px solid orange; opacity: 0.6;" : null)}
  }
`;

export const PorductInfo = styled.div`
  flex-basis: 50%;
  margin-left: 60px;
  .productSectionCol {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 40px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    svg {
      cursor: pointer;
    }
    h3 {
      font-size: 16px;
      color: ${({ theme }) => theme.orange};
    }
    h2 {
      font-size: 60px;
      font-weight: ${({ theme }) => theme.font_weight_700};
    }
    .productDesc {
      color: ${({ theme }) => theme.grayish_blue};
      display: block;
      font-size: 20px;
    }
    .price_container {
      display: flex;
      flex-direction: column;
      gap: 10px;
      .price_containerRow {
        display: flex;
        align-items: center;
        gap: 10px;
        .priceValue {
          font-size: 34px;
          color: black;
          font-weight: ${({ theme }) => theme.font_weight_700};
        }
        .discount {
          display: block;
          font-size: 20px;
          padding: 5px 10px;
          background: ${({ theme }) => theme.pale_orange};
          color: ${({ theme }) => theme.orange};
          font-weight: ${({ theme }) => theme.font_weight_700};
          border-radius: 5px;
        }
      }
      .oldPrice {
        display: block;
        text-decoration: line-through;
        color: ${({ theme }) => theme.grayish_blue};
      }
    }
    .btnRow {
      display: flex;
      gap: 15px;
      width: 100%;
      .add_product_number {
        height: 80px;
        flex-basis: 40%;
        background: ${({ theme }) => theme.light_grayish_blue};
        border-radius: 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px;
        .add_product_number_value {
          font-size: 20px;
          color: ${({ theme }) => theme.black};
        }
      }
      .add_productToCard {
        height: 80px;
        flex-basis: 60%;
        background: ${({ theme }) => theme.orange};
        border-radius: 15px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        color: ${({ theme }) => theme.white};
        font-weight: ${({ theme }) => theme.font_weight_700};
        color: white;
        .add_productToCardicon {
          fill: white;
        }
        .add_productToCardText {
          font-size: 20px;
          font-weight: ${({ theme }) => theme.font_weight_700};
        }
      }
    }
  }
  @media (max-width: 768px) {
    margin-left: 0;
    .productSectionCol {
      .btnRow {
        flex-direction: column;
        .add_product_number {
          flex-basis: auto;
          width: 100%;
        }
        .add_productToCard {
          flex-basis: auto;
          width: 100%;
        }
      }
    }
  }
  @media (min-width: 768px) and (max-width: 1210px) {
    .productDesc {
      width: 70%;
    }
  }
  @media (min-width: 320px) and (max-width: 480px) {
    margin: 1rem 1rem;
    .productSectionCol {
      h2 {
        font-size: 3rem;
      }
    }
  }
`;

export const ImageSlider = styled.div`
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  ${ImageSection} {
    flex-basis: auto;
    width: 800px;
  }
`;
