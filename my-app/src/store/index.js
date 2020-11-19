import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import itemsReducer from "./ducks/items";
import authReducer from "./ducks/auth";
import userTypeReducer from "./ducks/userType";
import usersReducer from "./ducks/users";

const persistConfig = {
  key: "root",
  storage: storage,
};

const rootReducer = combineReducers({
  items: itemsReducer,
  auth: authReducer,
  permissions: userTypeReducer,
  users: usersReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));

const persistor = persistStore(store);

export { store, persistor };
