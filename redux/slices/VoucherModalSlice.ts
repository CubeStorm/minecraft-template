import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export const VoucherModalSlice = createSlice({
    name: 'voucherModal',
    initialState: {
        isActive: false
    },
    reducers: {
        toggleActive: (state, action: PayloadAction<boolean>) => {
            state.isActive = action.payload;
        }
    }
});

export const { toggleActive } = VoucherModalSlice.actions;
export default VoucherModalSlice.reducer;