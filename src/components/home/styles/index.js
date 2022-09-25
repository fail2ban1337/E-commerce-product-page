import styled from "styled-components";

export const Container = styled.div`
  max-width: 1440px;
  margin: 70px auto;
`;

export const RowContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
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
      .image_product {
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: 100%;
        border-radius: 15px;
      }
      .ImageSectionRow {
        display: grid;
        grid-auto-flow: row;
        grid-template-rows: 1fr;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        justify-content: space-between;
        width: 100%;
        margin-top: 30px;
        .image_thumb {
          height: 100px;
          width: auto;
          border-radius: 15px;
        }
      }
    }
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
`;