import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {
            email: '',
            login: ''
        }
    },
    reducers: {
        signInAccount: (state, action) => {
            state.user = action.payload
        },
        logOutAccount: (state, action) => {
            state.user = {
                email: '',
                login: ''
            }
        }
    }
})

export const {signInAccount , logOutAccount} = userSlice.actions
export default userSlice.reducer