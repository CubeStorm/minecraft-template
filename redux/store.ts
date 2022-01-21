import { configureStore } from '@reduxjs/toolkit';

import NavReducer from '@redux/slices/NavigationSlice';
import AlertsReducer from '@redux/slices/AlertsSlice';


export const store = configureStore({
    reducer: {
        nav: NavReducer,
        alerts: AlertsReducer,
    }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;