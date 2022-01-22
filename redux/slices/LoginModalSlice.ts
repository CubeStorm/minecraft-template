import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export const LoginModalSlice = createSlice({
    name: 'loginModal',
    initialState: {
        isActive: false
    },
    reducers: {
        toggleActive: (state, action: PayloadAction<boolean>) => {
            state.isActive = action.payload;
        }
    }
});

export const { toggleActive } = LoginModalSlice.actions;
export default LoginModalSlice.reducer;