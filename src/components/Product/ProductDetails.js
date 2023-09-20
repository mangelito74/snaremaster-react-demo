import Card from "../UI/Card";

import classes from "./ProductDetails.module.css";

const ProductDetails = (props) => {
  const addToCartHandler = () => {
    //TODO
    alert("TODO: Add to cart!");
  };

  return (
    <Card>
      <div className={classes.details}>
        <img src={props.image} alt={props.name} />
        <div>
          <h1>{props.name}</h1>
          <p>{props.description}</p>
          <p>
            <b>${props.price.toFixed(2)}</b>
          </p>
          <div className={classes.actions}>
            <button onClick={addToCartHandler}>Add to Cart</button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProductDetails;
