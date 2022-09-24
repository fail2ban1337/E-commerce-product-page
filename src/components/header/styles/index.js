import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1440px;
  height: 100px;
  max-width: 1440px;
  margin: 0 auto;
`;

export const Logo = styled.img``;

export const NavListContainer = styled.div``;
export const NavList = styled.ul`
  display: flex;
  gap: 50px;
`;
export const NavListElement = styled.li`
  list-style: none;
`;
export const NavListElementLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.dark_grayish_blue};
  font-weight: ${({ theme }) => theme.font_white_400}; ;
`;

export const ProfileContainer = styled.div``;
export const CartImage = styled.div``;
export const UserImage = styled.div``;
