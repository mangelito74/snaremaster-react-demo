import { Link } from "react-router-dom";

import { useStore } from "../../store/custom-hooks/store";

import classes from "./FavoriteItem.module.css";

const FavoriteItem = (props) => {
  const { id, name, description, image, price } = props;

  const dispatch = useStore(false)[1];

  const unFavoriteHandler = () => {
    dispatch("TOGGLE_FAVORITE", id);
  };

  const addToCartHandler = () => {
    //TODO
    alert("TODO: Add to cart!");
  };

  return (
    <li className={classes.item}>
      <div className={classes["favorites-container"]}>
        <div className={classes["container"]}>
          <Link to={"/products/" + id}>
            <img src={image} alt={name} />
          </Link>
          <div className={classes.actions}>
            <button onClick={unFavoriteHandler}>Un-favorite</button>
          </div>
        </div>
        <Link to={"/products/" + id}>
          <div className={classes["container"]}>
            <h4>{name}</h4>
            <div>{description}</div>
            <b>${price.toFixed(2)}</b>
          </div>
        </Link>
      </div>
      <div className={classes.actions}>
        <button onClick={addToCartHandler}>Add to Cart</button>
      </div>
    </li>
  );
};

export default FavoriteItem;
