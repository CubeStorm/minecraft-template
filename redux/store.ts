import { configureStore } from '@reduxjs/toolkit';

import NavReducer from '@redux/slices/NavigationSlice';
import AlertsReducer from '@redux/slices/AlertsSlice';
import VoucherModalReducer from '@redux/slices/VoucherModalSlice';
import LoginModalReducer from '@redux/slices/LoginModalSlice';


export const store = configureStore({
    reducer: {
        nav: NavReducer,
        alerts: AlertsReducer,
        voucherModal: VoucherModalReducer,
        loginModal: LoginModalReducer,
    }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;