import { createSlice } from "@reduxjs/toolkit";
const date = new Date().getDate()
const month = new Date().getMonth() + 1
const year = new Date().getFullYear()
const initialState = { start_date: [month,date,year], end_date: [month,date,year] }
const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        changeStartDate: (state, action) => {
            state.start_date = action.payload
        },
        changeEndDate: (state, { payload }) => {
            state.end_date = payload
        }
    }
})

export const { changeEndDate, changeStartDate } = filterSlice.actions;
export default filterSlice.reducer;