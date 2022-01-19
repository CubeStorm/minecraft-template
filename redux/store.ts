import { configureStore } from '@reduxjs/toolkit';
import NavReducer from '@redux/slices/NavigationSlice';

export const store = configureStore({
    reducer: {
        nav: NavReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;