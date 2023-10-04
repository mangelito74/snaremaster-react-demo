import { useDispatch, useSelector } from "react-redux";

import ModalDialog from "../UI/ModalDialog";
import CartItem from "./CartItem";

import { cartActions } from "../../store/redux/cart-slice";

import classes from "./CartForm.module.css";

const CartForm = (props) => {
  const dispatch = useDispatch();

  const acceptButtonHandler = () => {
    props.acceptButtonOnClick();
    dispatch(cartActions.clearCart());
  };

  const cartItems = useSelector((state) => state.cartReducer.items);
  const totalAmount = useSelector((state) => state.cartReducer.totalAmount);

  return (
    <ModalDialog
      show={props.show}
      title="Your cart"
      acceptButtonText="Send order"
      acceptButtonOnClick={acceptButtonHandler}
      hasCancelButton={true}
      cancelButtonOnClick={props.cancelButtonOnClick}
      formIsValid={cartItems.length > 0}
    >
      <div className={classes.cart}>
        <ul>
          {cartItems.map((newItem) => (
            <CartItem
              key={newItem.id}
              item={{
                id: newItem.id,
                name: newItem.name,
                image: newItem.image,
                quantity: newItem.quantity,
                total: newItem.totalPrice,
                price: newItem.price,
              }}
            />
          ))}
        </ul>
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>${totalAmount.toFixed(2)}</span>
        </div>
      </div>
    </ModalDialog>
  );
};

export default CartForm;
