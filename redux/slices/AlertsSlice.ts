import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { AlertType } from '@ctypes/features/AlertType';


export const AlertsSlice = createSlice({
    name: 'alerts',
    initialState: {
        alerts: [] as AlertType[]
    },
    reducers: {
        create: (state, action: PayloadAction<AlertType>) => {
            state.alerts = [...state.alerts, action.payload];
        },
        remove: (state, action: PayloadAction<number>) => {
            state.alerts = state.alerts.filter(alert => alert.id !== action.payload);
        }
    }
});

export const { create, remove } = AlertsSlice.actions;
export default AlertsSlice.reducer;