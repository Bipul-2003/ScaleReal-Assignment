import { configureStore } from '@reduxjs/toolkit'
import movieSlice from './movieSlice.js'


const store = configureStore({
    reducer: {
        movie: movieSlice
    }
})

export default store;