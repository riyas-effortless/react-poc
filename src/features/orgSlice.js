import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = 'https://course-api.com/react-tours-project'
export const getOrg = createAsyncThunk('getorg/course-api', () => {
    return fetch(url)
        .then((resp) => resp.json())
        .catch((err) => console.log(err))
})

const initialState = { isLoading: true, org: null }
const orgSlice = createSlice({
    name: 'org',
    initialState,
    extraReducers: {
        [getOrg.pending]: (state) => {
            state.isLoading = true
        },
        [getOrg.fulfilled]: (state, { payload }) => {
            state.isLoading = false
            state.org = payload[0].id
        },
        [getOrg.rejected]: (state) => {
            state.isLoading = true
        }
    },
    reducers: {
        changeOrg: (state, { payload }) => {
            state.org = payload
        }
    }
})


export const { changeOrg } = orgSlice.actions;
export default orgSlice.reducer;