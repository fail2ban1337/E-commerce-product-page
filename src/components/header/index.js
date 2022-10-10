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
import { CartHandleContext } from "../../App";

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
          fillRule="evenodd"
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
  const { closeNav } = useContext(ColpseContent);

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
          fillRule="evenodd"
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
  const [cardopen, setCardopen] = useState(false);
  return (
    <CartContext.Provider value={{ cardopen, setCardopen }}>
      <CartContainer>{children}</CartContainer>
    </CartContext.Provider>
  );
};
Header.CartImage = function HeaderCartImage({ children, ...restProps }) {
  const { cardopen, setCardopen } = useContext(CartContext);
  const { cart, setCart } = useContext(CartHandleContext);
  const handlcartOpen = () => {
    setCardopen((previous) => !previous);
  };

  return (
    <CartImage onClick={() => handlcartOpen()} {...restProps}>
      {Object.keys(cart).length > 0 ? (
        <div className="cartNumber">{Object.keys(cart).length}</div>
      ) : null}
      <img src="images/icon-cart.svg" />
    </CartImage>
  );
};
export function useOutsideAlerter(ref, setFunc, checkClick, state) {
  useEffect(() => {
    /**
     * check if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        checkClick === "CartElements"
      ) {

        setFunc(false);
      }
      /**
       * check if clicked on outside sidebar of element
       */
      if (
        ref.current &&
        ref.current.contains(event.target) &&
        checkClick === "MainOpc"
      ) {
        setFunc(false);
      }
      if (ref.current == event.target &&         checkClick === "fullSlider"      )
      {
        setFunc(false);
      }
    }
    if (state) document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, state]);
}
Header.CartElements = function HeaderCartElements({ children, ...restProps }) {
  const wrapperRef = useRef(null);

  const { cardopen, setCardopen } = useContext(CartContext);
  const checkClick = "CartElements";
  useOutsideAlerter(wrapperRef, setCardopen, checkClick, cardopen);
  return (
    <CartElements
      style={{ display: cardopen ? "block" : "none" }}
      ref={wrapperRef}
    >
      {children}
    </CartElements>
  );
};

Header.CardElementTitle = function ({ children }) {
  return <CardElementTitle>{children}</CardElementTitle>;
};

Header.CardElementAddedContainer = function HeaderCardElementAddedContainer({
  children,
}) {
  const { cart, setCart } = useContext(CartHandleContext);
  return (
    <CardElementAddedContainer>
      {Object.values(cart).map((value, index) => {
        return (
          <div className="CardElementAddedRow" key={index}>
            <img className="product_image" src={value.productImg} />
            <div className="elementColumn">
              <h5>{value.productName}</h5>
              <h5>
                ${value.productPrice} x {value.prdTotal}{" "}
                <b>${(value.productPrice * value.prdTotal).toFixed(2)}</b>
              </h5>
            </div>
            <img
              className="dltImage"
              src="images/icon-delete.svg"
              onClick={() => setCart({})}
            />
          </div>
        );
      })}
      {Object.keys(cart).length !== 0 ? (
        <div className="checkout_btn">
          <a href="#">Checkout</a>
        </div>
      ) : (
        <div className="emptyCard">
          <p>Empty ,You Add New product</p>
        </div>
      )}
    </CardElementAddedContainer>
  );
};
Header.UserImage = function ({ ...restProps }) {
  return <UserImage {...restProps} />;
};

Header.MainOpc = function HeaderMainOpc({ children, ...restProps }) {
  const { closeNav, setCloseNav } = useContext(ColpseContent);
  const wrapperRef = useRef(null);
  const checkClick = "MainOpc";
  useOutsideAlerter(wrapperRef, setCloseNav, checkClick, closeNav);
  if (!closeNav) return null;
  return <MainOpc ref={wrapperRef}>{children}</MainOpc>;
};
