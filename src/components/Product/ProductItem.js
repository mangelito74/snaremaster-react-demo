import { Link } from "react-router-dom";

import Card from "../UI/Card";

import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  const { id, name, image, price } = props;

  const addToCartHandler = () => {
    //TODO
    alert("TODO: Add to Cart!");
  };

  return (
    <li>
      <Card>
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
          </div>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
