import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1440px;
  height: 100px;
  max-width: 1440px;
  margin: 0 auto;
  border-bottom: 1px solid ${({ theme }) => theme.dark_grayish_blue};
`;

export const Logo = styled.img``;

export const NavListContainer = styled.div`
  height: 100%;
  margin: auto 0;
`;
export const NavList = styled.ul`
  display: flex;
  gap: 50px;
  height: 100%;
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
export const CartElement = styled.div`
  position: absolute;
  top: 70px;
  right: 0;
  width: 350px;
  height: 250px;
  background: ${({ theme }) => theme.white};
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 10px;
`;
export const UserImage = styled.img`
  width: 60px;
  border-radius: 50%;

  &:hover {
    border: 2px solid ${({ theme }) => theme.orange};
  }
`;
