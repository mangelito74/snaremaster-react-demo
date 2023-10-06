import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useStore } from "../../store/custom-hooks/store";
import { cartActions } from "../../store/redux/cart-slice";

import classes from "./FavoriteItem.module.css";

const FavoriteItem = (props) => {
  const { id, name, description, image, price } = props;

  const dispatch = useStore(false)[1];

  const unFavoriteHandler = () => {
    dispatch("TOGGLE_FAVORITE", id);
  };

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

  const fontAwesomeRemove = `${classes["fa-remove"]} fa-solid fa-circle-xmark`;
  const removeIcon = <i className={fontAwesomeRemove}></i>;

  const fontAwesomeCart = `${classes["fa-cart"]} fa fa-cart-plus`;
  const cartIcon = <i className={fontAwesomeCart}></i>;

  return (
    <li>
      <div className={classes.item}>
        <div className={classes["container"]}>
          <Link to={"/products/" + id}>
            <img src={image} alt={name} />
          </Link>
        </div>
        <Link to={"/products/" + id}>
          <div className={classes["container"]}>
            <h4>{name}</h4>
            <div>{description}</div>
            <b>${price.toFixed(2)}</b>
          </div>
        </Link>
        <div className={classes.actions}>
          <div className={classes.remove} onClick={unFavoriteHandler}>
            {removeIcon}
          </div>
          <button className={classes.add} onClick={addToCartHandler}>
            <span>Add to Cart</span>
            <span>{cartIcon}</span>
          </button>
        </div>
      </div>
    </li>
  );
};

export default FavoriteItem;
