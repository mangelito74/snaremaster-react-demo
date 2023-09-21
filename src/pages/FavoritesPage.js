import { products } from "../lib/data";
import { useStore } from "../store/custom-hooks/store";

import FavoritesList from "../components/Favorites/FavoritesList";

const FavoritesPage = () => {
  const state = useStore()[0];
  const favorites = products.filter(
    (product) => state.favoriteIds.indexOf(product.id) >= 0
  );

  return <FavoritesList favorites={favorites} />;
};

export default FavoritesPage;
