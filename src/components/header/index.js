import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";
import {
  Burgger,
  CardElementAddedContainer,
  CardElementAddedRow,
  CardElementTitle,
  CartContainer,
  CartElements,
  CartImage,
  Container,
  Logo,
  NavClose,
  NavList,
  NavListContainer,
  NavListElement,
  NavListElementLink,
  ProfileContainer,
  UserImage,
  MainOpc,
} from "./styles";

const CartContext = createContext();
const ColpseContent = createContext();

export default function Header({ children, restProps }) {
  const [closeNav, setCloseNav] = useState(false);

  return (
    <ColpseContent.Provider value={{ closeNav, setCloseNav }}>
      <Container {...restProps}>{children}</Container>
    </ColpseContent.Provider>
  );
}
Header.Burgger = function HeaderBurgger({ children, ...restProps }) {
  const { closeNav, setCloseNav } = useContext(ColpseContent);

  return (
    <Burgger>
      <svg
        onClick={() => setCloseNav((prevCount) => !prevCount)}
        width="16"
        height="15"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z"
          fill="#69707D"
          fill-rule="evenodd"
        />
      </svg>
    </Burgger>
  );
};
Header.Logo = function ({ children, ...restProps }) {
  return <Logo src="" {...restProps} />;
};
Header.NavListContainer = function HeaderNavListContainer({
  children,
  ...restProps
}) {
  const { closeNav, setCloseNav } = useContext(ColpseContent);

  return (
    <NavListContainer open={closeNav} {...restProps}>
      {children}
    </NavListContainer>
  );
};

Header.NavClose = function HeaderNavListContainer({ children, ...restProps }) {
  const { closeNav, setCloseNav } = useContext(ColpseContent);
  return (
    <NavClose onClick={() => setCloseNav((prevCount) => !prevCount)}>
      <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
          fill="#69707D"
          fill-rule="evenodd"
        />
      </svg>
    </NavClose>
  );
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

Header.MainOpc = function ({ ...restProps }) {
  return <MainOpc></MainOpc>;
};
