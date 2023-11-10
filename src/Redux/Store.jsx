import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import ProductReducer from "./ProductReducer";
import CategoryReducer from "./CategoryReducer";

const rootReducer = combineReducers({
  Products: ProductReducer,
  Category: CategoryReducer,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const peristedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: peristedReducer,
});

export const persistor = persistStore(store);
