import { useContext } from "react";

import Card from "../UI/Card";

import { useStore } from "../../store/custom-hooks/store";
import AuthenticationContext from "../../store/context-api/authentication-context";

import classes from "./ProductDetails.module.css";

const ProductDetails = (props) => {
  const dispatch = useStore(false)[1];
  const state = useStore()[0];
  const isFavorite =
    state.favoriteIds.filter((fid) => fid === props.id).length > 0;

  const authenticationContext = useContext(AuthenticationContext);

  const addToCartHandler = () => {
    //TODO
    alert("TODO: Add to cart!");
  };

  const toggleFavoritesHandler = () => {
    dispatch("TOGGLE_FAVORITE", props.id);
  };

  return (
    <Card>
      <h1>{props.name}</h1>
      <div className={classes.details}>
        <img src={props.image} alt={props.name} />
        <div>
          <p>{props.description}</p>
          <p>
            <b>${props.price.toFixed(2)}</b>
          </p>
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
      </div>
    </Card>
  );
};

export default ProductDetails;
