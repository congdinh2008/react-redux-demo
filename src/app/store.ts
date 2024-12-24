import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers/root.reducer";
import { localStorageHelper } from "../helpers/local-storage.helper";

const persistedState = localStorageHelper.loadState();

const store = configureStore({
    reducer: rootReducer,
    preloadedState: persistedState
});

store.subscribe(() => {
    localStorageHelper.saveState(store);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;