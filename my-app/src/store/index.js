import { configureStore } from "@reduxjs/toolkit";

import itemsReducer from "./ducks/items";
import authReducer from "./ducks/auth";

export default configureStore({
  reducer: {
    items: itemsReducer,
    auth: authReducer,
  },
});
