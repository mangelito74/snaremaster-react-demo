import { useContext } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import Card from "../UI/Card";

import { useStore } from "../../store/custom-hooks/store";
import { cartActions } from "../../store/redux/cart-slice";
import AuthenticationContext from "../../store/context-api/authentication-context";

import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  const { id, name, image, price } = props;
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

  return (
    <li>
      <Card hover="true">
        <div className={classes["items-container"]}>
          <Link to={"/products/" + id} className={classes.link}>
            <div className={classes.image}>
              <img src={image} alt={name} />
            </div>
            <h3>{name}</h3>
            <div>
              <b>Price: ${price.toFixed(2)}</b>
            </div>
          </Link>
          <div className={classes.actions}>
            <button onClick={addToCartHandler}>Add to Cart</button>
            {authenticationContext.isLoggedIn && (
              <button
                className={isFavorite ? classes.favorite : null}
                onClick={toggleFavoritesHandler}
              >
                {isFavorite ? "Un-Favorite" : "Add to Favorites"}
              </button>
            )}
          </div>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
