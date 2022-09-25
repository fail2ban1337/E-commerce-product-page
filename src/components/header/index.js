import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";
import {
  CardElementAddedContainer,
  CardElementAddedRow,
  CardElementTitle,
  CartContainer,
  CartElements,
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
Header.CartElements = function HeaderCartElements({ children, ...restProps }) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const { card, setCard } = useContext(CartContext);
  const { cardActive } = card;
  return (
    <CartElements
      style={{ display: cardActive ? "block" : "none" }}
      ref={wrapperRef}
    >
      {children}
    </CartElements>
  );
};

Header.CardElementTitle = function ({ children }) {
  return <CardElementTitle>{children}</CardElementTitle>;
};

Header.CardElementAddedContainer = function ({ children }) {
  return (
    <CardElementAddedContainer>
      <CardElementAddedRow>
        <img
          className="product_image"
          src="images/image-product-1-thumbnail.jpg"
        />
        <div className="elementColumn">
          <h5>Fall Limited Edition Sneakers</h5>
          <h5>
            $125$.00 x 3 <b>$375.00</b>
          </h5>
        </div>
        <img className="dltImage" src="images/icon-delete.svg" />
      </CardElementAddedRow>
      <div className="checkout_btn">
        <a href="#">Checkout</a>
      </div>
    </CardElementAddedContainer>
  );
};
Header.UserImage = function ({ ...restProps }) {
  return <UserImage {...restProps} />;
};
