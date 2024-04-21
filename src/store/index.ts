import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import storage from "redux-persist/lib/storage";
import hardSet from "redux-persist/lib/stateReconciler/hardSet";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
	key: "root",
	storage,
	stateReconciler: hardSet as any,
};

const persistedReducer = persistReducer(persistConfig, counterReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: [thunk],
});

//数据持久化存储
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
