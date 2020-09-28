import { configureStore } from "@reduxjs/toolkit";

import itemsReducer from "./ducks/items";

export default configureStore({
  reducer: {
    items: itemsReducer,
  },
});
