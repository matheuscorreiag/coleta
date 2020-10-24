import { configureStore } from "@reduxjs/toolkit";

import itemsReducer from "./ducks/items";
import authReducer from "./ducks/auth";
import userTypeReducer from "./ducks/userType";

export default configureStore({
  reducer: {
    items: itemsReducer,
    auth: authReducer,
    permissions: userTypeReducer,
  },
});
