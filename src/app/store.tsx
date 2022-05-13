import { combineReducers, configureStore } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
import formReducer from "./form";

const appReducer = combineReducers({
  form: formReducer
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['form']
}

const persistedReducer = persistReducer(persistConfig, appReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => 
    getDefaultMiddleware({
      serializableCheck:false,
    })
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

function rootReducer(persistConfig: { key: string; storage: import("@react-native-async-storage/async-storage").AsyncStorageStatic; whitelist: string[]; }, rootReducer: any) {
  throw new Error('Function not implemented.');
}
