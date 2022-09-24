import React from "react";
import {
  CartImage,
  Container,
  Logo,
  NavList,
  NavListContainer,
  NavListElement,
  NavListElementLink,
  ProfileContainer,
} from "./styles";

export default function Header({ children, restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
Header.Logo = function ({ children, ...restProps }) {
  return <Logo src="" {...restProps} />;
};
Header.NavListContainer = function ({ children, ...restProps }) {
  return <NavListContainer {...restProps}>{children}</NavListContainer>;
};

Header.NavList = function ({ children, ...restProps }) {
  return <NavList {...restProps}>{children}</NavList>;
};
Header.NavListElement = function ({ children, ...restProps }) {
  return <NavListElement>{children}</NavListElement>;
};
Header.NavListElementLink = function ({ children, ...restProps }) {
  return <NavListElementLink {...restProps}>{children}</NavListElementLink>;
};
Header.ProfileContainer = function ({ children, ...restProps }) {
  return <ProfileContainer {...restProps}>{children}</ProfileContainer>;
};
Header.CartImage = function ({ ...restProps }) {
  return <CartImage {...restProps} />;
};
