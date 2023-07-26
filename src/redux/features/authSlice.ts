import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type initialState = {
    value: AuthState;
}

type AuthState = {
    isAuth: boolean,
    username: string,
    uid: string,
    isMod: boolean
}

const initialState = {
    value: {
        isAuth: false,
        username: "",
        uid: "",
        isMod: false
    } as AuthState,
} as initialState;

export const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logOut: () => {
            return initialState
        },
        logIn: (state, action: PayloadAction<string>) => {
            return {
                value: {
                    isAuth: true,
                    username: action.payload,
                    uid: "abcd",
                    isMod: false
                }
            }
        },
        toggleModerator:(state)=>{
            state.value.isMod = !state.value.isMod
        }
    }
})

export const { logOut, logIn, toggleModerator } = auth.actions;
export default auth.reducer;