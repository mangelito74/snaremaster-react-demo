import { initStore } from "./store";

const configureStore = () => {
  const storedUserFavoriteIds = localStorage.getItem("favoriteIds");
  let favoriteIds = [];
  if (storedUserFavoriteIds !== null) {
    // .filter(e => e) removes empty items
    favoriteIds = storedUserFavoriteIds.split(",").filter(e => e);
  }

  const actions = {
    TOGGLE_FAVORITE: (curState, id) => {
      const existingId = curState.favoriteIds.find((fid) => fid === id);
      if (!existingId) {
        curState.favoriteIds.push(id);
      } else {
        curState.favoriteIds = curState.favoriteIds.filter((fid) => fid !== id);
      }

      localStorage.setItem("favoriteIds", curState.favoriteIds);

      return { favoriteIds: curState.favoriteIds };
    },
  };
  initStore(actions, {
    favoriteIds: favoriteIds,
  });
};

export default configureStore;
