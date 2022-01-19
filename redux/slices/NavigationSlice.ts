import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export const NavigationSlice = createSlice({
    name: 'nav',
    initialState: {
        isActive: false
    },
    reducers: {
        toggleActive: (state, action: PayloadAction<boolean>) => {
            state.isActive = action.payload
        }
    }
});

export const { toggleActive } = NavigationSlice.actions;
export default NavigationSlice.reducer;