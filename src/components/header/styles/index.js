import styled from "styled-components/macro";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1440px;
  height: 100px;
  max-width: 1440px;
  margin: 0 auto;
  border-bottom: 1px solid ${({ theme }) => theme.light_grayish_blue};
  @media (max-width: 1478px) {
    margin: 0 2rem;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    margin: 0 1rem;
  }
`;

export const Burgger = styled.div`
  z-index: 1;
  top: 4px;
  position: relative;
  @media (min-width: 862px) {
    display: none;
  }
`;

export const Logo = styled.img``;

export const NavListContainer = styled.div`
  height: 100%;
  margin: auto 0;
  @media (max-width: 861px) {
    position: fixed;
    top: 0;
    left: 0;
    width: ${(props) => (props.open ? "240px" : "0px")};
    overflow: hidden;
    background: ${({ theme }) => theme.white};
    z-index: 3;
    transition: all 0.3s ease-in;
  }
  .test {
  }
`;

export const NavClose = styled.div`
  display: inline-block;
  margin: 2rem 0 0 2rem;
  @media (min-width: 862px) {
    display: none;
  }
`;
export const NavList = styled.ul`
  display: flex;
  gap: 50px;
  height: 100%;
  @media (max-width: 861px) {
    flex-direction: column;
    align-items: flex-start;
    margin-left: 2rem;
    margin-top: 4rem;
  }
`;
export const NavListElement = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 4px solid transparent;
  margin-bottom: -1px;

  &:hover {
    border-bottom: 4px solid ${({ theme }) => theme.orange};
  }
`;
export const NavListElementLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.dark_grayish_blue};
  font-weight: ${({ theme }) => theme.font_weight_400}; ;
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  position: relative;
  @media (min-width: 320px) and (max-width: 480px) {
    gap: 20px;
  }
`;
export const CartContainer = styled.div``;

export const CartImage = styled.img``;
export const CartElements = styled.div`
  z-index: 1;
  position: absolute;
  top: 70px;
  right: 0;
  width: 370px;
  background: ${({ theme }) => theme.white};
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  @media (min-width: 320px) and (max-width: 480px) {
    right: -15px;
    width: 295px;
  }
`;

export const CardElementTitle = styled.span`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.light_grayish_blue};
  display: block;
  padding: 25px 0 25px 25px;
  align-self: flex-start;
  font-weight: ${({ theme }) => theme.font_weight_400};
`;
export const CardElementAddedContainer = styled.div`
  margin: 15px 25px 0 25px;
  .checkout_btn {
    width: 100%;
    height: 3rem;
    margin: 25px 0;
    border-radius: 15px;
    background: ${({ theme }) => theme.orange};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.white};
    }
  }
  .emptyCard {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4rem 0;
  }
`;

export const CardElementAddedRow = styled.div`
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
`;
export const UserImage = styled.img`
  width: 60px;
  border-radius: 50%;

  &:hover {
    border: 2px solid ${({ theme }) => theme.orange};
  }
`;

export const MainOpc = styled.div`
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;
  overflow: hidden;
`;
