import { combineReducers } from 'redux';
import posts from './posts';
// import storageSession from 'redux-persist/lib/storage/session';
// import persistReducer from 'redux-persist/es/persistReducer';
// import { configureStore } from '@reduxjs/toolkit';

//config 작성
// const persistConfig = {
//     key: 'root',
//     storage: storageSession,
//     whitelist: ['posts'],
// };

const rootReducer = combineReducers({
    posts,
});

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//     reducer: {
//         rootReducer: persistedReducer,
//     },
// });
export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
