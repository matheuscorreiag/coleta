import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
/* import { configureStore } from "@reduxjs/toolkit"; */
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import itemsReducer from "./ducks/items";
import authReducer from "./ducks/auth";
import userTypeReducer from "./ducks/userType";

const persistConfig = {
  key: "root",
  storage: storage,
};

const rootReducer = combineReducers({
  items: itemsReducer,
  auth: authReducer,
  permissions: userTypeReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));

const persistor = persistStore(store);

export { store, persistor };

/*
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
*/
