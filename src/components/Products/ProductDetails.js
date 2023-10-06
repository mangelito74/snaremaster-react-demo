import { useContext } from "react";
import { useDispatch } from "react-redux";

import Card from "../UI/Card";

import { useStore } from "../../store/custom-hooks/store";
import { cartActions } from "../../store/redux/cart-slice";
import AuthenticationContext from "../../store/context-api/authentication-context";

import classes from "./ProductDetails.module.css";

const ProductDetails = (props) => {
  const { id, name, image, description, price } = props;
  const dispatch = useStore(false)[1];
  const state = useStore()[0];
  const isFavorite = state.favoriteIds.filter((fid) => fid === id).length > 0;

  const authenticationContext = useContext(AuthenticationContext);

  const reduxDispatch = useDispatch();

  const addToCartHandler = () => {
    reduxDispatch(
      cartActions.addItemToCart({
        id,
        name,
        image,
        price,
      })
    );
  };

  const toggleFavoritesHandler = () => {
    dispatch("TOGGLE_FAVORITE", id);
  };

  const fontAwesomeFavorite = `${classes["fa-favorite"]} ${
    isFavorite ? "fa-solid" : "fa-regular"
  } fa-heart`;
  const favoriteIcon = (
    <i className={fontAwesomeFavorite} onClick={toggleFavoritesHandler}></i>
  );

  const fontAwesomeCart = `${classes["fa-cart"]} fa fa-cart-plus`;
  const cartIcon = <i className={fontAwesomeCart}></i>;

  return (
    <Card>
      <div className={classes.container}>
        <h1>{name}</h1>
        {authenticationContext.isLoggedIn && favoriteIcon}
        <div className={classes.details}>
          <img src={image} alt={name} />
          <div>
            <p>{description}</p>
            <p>
              <b>${price.toFixed(2)}</b>
            </p>
            <div className={classes.actions}>
              <button onClick={addToCartHandler}>
                <span>Add to Cart</span>
                <span>{cartIcon}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProductDetails;
