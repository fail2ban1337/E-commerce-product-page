import React from "react";
import { Header } from "../components";

export default function HeaderContainer() {
  return (
    <Header>
      <Header.Logo src="images/logo.svg" />
      <Header.NavListContainer>
        <Header.NavList>
          <Header.NavListElement>
            <Header.NavListElementLink href="#">
              Collections
            </Header.NavListElementLink>
          </Header.NavListElement>
          <Header.NavListElement>
            <Header.NavListElementLink href="#">Men</Header.NavListElementLink>
          </Header.NavListElement>
          <Header.NavListElement>
            <Header.NavListElementLink href="#">
              Women
            </Header.NavListElementLink>
          </Header.NavListElement>
          <Header.NavListElement>
            <Header.NavListElementLink href="#">
              About
            </Header.NavListElementLink>
          </Header.NavListElement>
          <Header.NavListElement>
            <Header.NavListElementLink href="#">
              Contact
            </Header.NavListElementLink>
          </Header.NavListElement>
        </Header.NavList>
      </Header.NavListContainer>
    </Header>
  );
}
