import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'

//! 1. create a store
export const store = configureStore({
    reducer: {
         counter : counterReducer
    }
})