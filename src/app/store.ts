import { configureStore } from '@reduxjs/toolkit';
import { postAPI } from '../features/post/PostService';


export const store = configureStore({
    reducer: {
        [postAPI.reducerPath]: postAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(postAPI.middleware)
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch