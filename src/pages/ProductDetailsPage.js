import { useParams, json } from "react-router-dom";

import ProductDetails from "../components/Product/ProductDetails"

import { getProduct } from "../lib/data";

const ProductDetailsPage = () => {
  const params = useParams();
  const product = getProduct(params.productId);

  if(product === null) {
    throw json(
      { message: "Could not find product ." + params.productId },
      { status: 404 }
    );
  }

  return (
    <ProductDetails
      image={product.image}
      name={product.name}
      description={product.description}
      price={product.price}
    />
  );
};

export default ProductDetailsPage;
