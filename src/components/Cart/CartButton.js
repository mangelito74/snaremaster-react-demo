import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "../UI/Button";

import { uiActions } from "../../store/redux/ui-slice";

import classes from "./CartButton.module.css";

const CartButton = () => {
  const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);

  const cartQuantity = useSelector((state) => state.cartReducer.totalQuantity);

  useEffect(() => {
    if (cartQuantity === 0) {
      return;
    }

    setButtonIsHighlighted(true);

    const timer = setTimeout(() => {
      setButtonIsHighlighted(false);
    }, 300);

    //Cleanup function
    return () => {
      clearTimeout(timer);
    };
  }, [cartQuantity]);

  const dispatch = useDispatch();

  const toggleCartHandler = () => {
    dispatch(uiActions.toggleCartIsVisible());
  };

  const buttonClasses = `${classes.button} ${
    buttonIsHighlighted ? classes.bump : ""
  }`;

  const fontAwesomeCart = `${classes["fa-cart"]} fa-solid fa-cart-shopping`;
  const cartIcon = <i className={fontAwesomeCart}></i>;

  return (
    <Button className={buttonClasses} onClick={toggleCartHandler}>
      <span>{cartIcon}</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </Button>
  );
};

export default CartButton;
