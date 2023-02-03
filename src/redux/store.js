import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice"; //taking counterSlice as counterReducer

const store = configureStore({
    reducer : {
        counter: counterReducer,
    }
})

export default store;