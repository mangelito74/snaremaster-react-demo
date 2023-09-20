import ProductList from "../components/Product/ProductList";

import { products } from "../lib/data";

const ProductsPage = () => {
  return <ProductList products={products} />;
};

export default ProductsPage;
