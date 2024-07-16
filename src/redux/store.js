import { configureStore } from "@reduxjs/toolkit";
import DataReducer from "./features/dataSlice";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

// Persist yapılandırma nesnesi
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

// Reducer'ları birleştirme
const rootReducer = combineReducers({
  data: DataReducer,
});

// Persist edilen reducer'ı oluşturma
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Redux store'u yapılandırma ve export etme
const store = configureStore({
  reducer: persistedReducer,
});

// Persistor'u oluşturma ve export etme
const persistor = persistStore(store);

export { store, persistor };
