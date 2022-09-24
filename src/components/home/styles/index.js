import styled from "styled-components";

export const Container = styled.div`
  max-width: 1440px;
  margin: 70px auto;
  height: 1000px;
`;

export const RowContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
`;
export const ImageSection = styled.div`
  flex-basis: 40%;
  padding: 70px;
  display: flex;
  justify-content: flex-end;

  .ImageSectionCol {
    .test {
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
        grid-column-gap: 10px;
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
  background: purple;
`;
