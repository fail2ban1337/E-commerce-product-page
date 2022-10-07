import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@300;500;600;700;800;900&display=swap');
* {
    *, *:after , *:before {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "Kumbh Sans",sans-serif;
    }
    body {
        background: ${({ theme }) => theme.white};
    }
  .CardElementAddedRow {
  display: flex;
  align-items: center;
  gap: 15px;
  .product_image {
    width: 50px;
    border-radius: 5px;
  }
  .elementColumn {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 8px;
    align-self: flex-start;

    h5 {
      font-weight: ${({ theme }) => theme.font_weight_400};
      color: ${({ theme }) => theme.dark_grayish_blue};
      font-size: 16px;
      b {
        color: ${({ theme }) => theme.black};
      }
    }
  }
  .dltImage {
    cursor: pointer;
  }
    }
}
`;
export const rootTheme = {
  very_vark_blue: "hsl(220, 13%, 13%)",
  dark_grayish_blue: "hsl(219, 9%, 45%)",
  grayish_blue: "hsl(220, 14%, 75%)",
  light_grayish_blue: "hsl(223, 64%, 98%)",
  white: "hsl(0, 0%, 100%)",
  black: "hsl(0, 0%, 0%)",
  lightbox_background: "hsl(0, 0%, 0%, .75)",
  font_weight_400: "400",
  font_weight_700: "700",
  orange: "hsl(26, 100%, 55%)",
  pale_orange: "hsl(25, 100%, 94%)",
};
