import { useDispatch } from "react-redux";

import { cartActions } from "../../store/redux/cart-slice";

import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const { id, name, image, quantity, total, price } = props.item;

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const addItemHandler = () => {
    dispatch(cartActions.addItemToCart({
      id,
      name,
      price
    }));
  };

  return (
    <li className={classes.item}>
      <h2>{name}</h2>
      <div className={classes.container}>
        <img src={image} alt={name} />
        <div className={classes.quantity}>
          x <span>{quantity}</span> à
          <span className={classes.itemprice}>&nbsp;${price.toFixed(2)}</span>
          <div className={classes.actions}>
            <button onClick={removeItemHandler}>-</button>
            <button onClick={addItemHandler}>+</button>
          </div>
        </div>
      </div>
      <div className={classes.price}>${total.toFixed(2)}</div>
    </li>
  );
};

export default CartItem;
