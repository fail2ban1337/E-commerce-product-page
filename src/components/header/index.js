import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";
import {
  CartContainer,
  CartElement,
  CartImage,
  Container,
  Logo,
  NavList,
  NavListContainer,
  NavListElement,
  NavListElementLink,
  ProfileContainer,
  UserImage,
} from "./styles";

const CartContext = createContext();

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
Header.CartContainer = function HeaderCartContainer({
  children,
  ...restProps
}) {
  const [card, setCard] = useState({
    cardActive: false,
  });
  return (
    <CartContext.Provider value={{ card, setCard }}>
      <CartContainer>{children}</CartContainer>
    </CartContext.Provider>
  );
};
Header.CartImage = function HeaderCartImage({ children, ...restProps }) {
  const { card, setCard } = useContext(CartContext);

  console.log(card);
  const handlcartOpen = () => {
    setCard((state) => ({
      ...state,
      cardActive: !state.cardActive,
    }));
  };

  return <CartImage onClick={() => handlcartOpen()} {...restProps} />;
};
function useOutsideAlerter(ref) {
  const { card, setCard } = useContext(CartContext);
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setCard((state) => ({
          ...state,
          cardActive: false,
        }));
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}
Header.CartElement = function HeaderCartElement({ children, ...restProps }) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const { card, setCard } = useContext(CartContext);
  const { cardActive } = card;
  return (
    <>{cardActive && <CartElement ref={wrapperRef}>{children}</CartElement>}</>
  );
};

Header.UserImage = function ({ ...restProps }) {
  return <UserImage {...restProps} />;
};
