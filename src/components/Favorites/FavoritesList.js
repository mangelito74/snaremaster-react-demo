import Card from "../UI/Card";
import FavoriteItem from "./FavoriteItem";

import classes from "./FavoritesList.module.css";

const FavoritesList = (props) => {
  const favorites = props.favorites;

  let content = <p className="placeholder">You have no favorites yet!</p>;

  if (favorites.length > 0) {
    content = (
      <ul>
        {favorites.map((favorite) => (
          <FavoriteItem
            key={favorite.id}
            id={favorite.id}
            image={favorite.image}
            name={favorite.name}
            description={favorite.description}
            price={favorite.price}
          />
        ))}
      </ul>
    );
  }

  return (
    <Card>
      <div className={classes.container}>
        <h1>Favorites</h1>
        {content}
      </div>
    </Card>
  );
};

export default FavoritesList;
