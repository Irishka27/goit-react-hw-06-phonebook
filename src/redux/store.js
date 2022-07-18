import { configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'reduxjs-toolkit-persist';
import storage from 'reduxjs-toolkit-persist/lib/storage';
import contactsReducer from './phonebook/phonebook-reducers';

const persistConfig = {
    key: 'contacts',
    storage,
    blacklist: ['filter'],
  }

const persistedReducer = persistReducer(persistConfig, contactsReducer);

const middleware = [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ];

export const store = configureStore({
    reducer: {
        contacts: persistedReducer,
    },
    middleware,
    devTools: process.env.NODE_ENV === "development",
  // включаем девтулзы только во время разработки
  });
 export let persistor = persistStore(store);



