import ProductList from "../components/Products/ProductList";

import { products } from "../lib/data";

const ProductsPage = () => {
  return <ProductList products={products} />;
};

export default ProductsPage;
