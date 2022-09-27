import styled from "styled-components";

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
`;

export const Logo = styled.img``;

export const NavListContainer = styled.div`
  height: 100%;
  margin: auto 0;
  @media (max-width: 861px) {
    position: fixed;
    left: 0;
    top: 0;
    width: 300px;
    background: ${({ theme }) => theme.white};
  }
  .test {
    background: red;
  }
`;

export const NavClose = styled.div`
  display: block;
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
`;
export const CartContainer = styled.div``;

export const CartImage = styled.img``;
export const CartElements = styled.div`
  position: absolute;
  top: 70px;
  right: 0;
  width: 370px;
  background: ${({ theme }) => theme.white};
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
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
    height: 70px;
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
