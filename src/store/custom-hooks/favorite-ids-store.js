import { initStore } from "./store";

const configureStore = () => {

  const actions = {
    TOGGLE_FAVORITE: (curState, id) => {
      const existingId = curState.favoriteIds.find((fid) => fid === id);
      if (!existingId) {
        curState.favoriteIds.push(id);
      } else {
        curState.favoriteIds = curState.favoriteIds.filter((fid) => fid !== id);
      }
      return { favoriteIds: curState.favoriteIds };
    },
  };
  initStore(actions, {
    favoriteIds: [],
  });
};

export default configureStore;
