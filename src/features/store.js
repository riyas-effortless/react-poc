import { configureStore } from '@reduxjs/toolkit';
import filterReducer from '../features/filterSlice';
import orgReducer from '../features/orgSlice'
// import counterReducer from '../features/counter/counterSlice'
// import cartReducer from '../features/cartSlice';

export const store = configureStore({
    reducer: {
        filter: filterReducer,
        org: orgReducer
    },
    // middleware: getDefaultMiddleware =>
    // getDefaultMiddleware({
    //   serializableCheck: false,
    // }),
})
