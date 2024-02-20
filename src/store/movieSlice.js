import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    movies: [],
    searchResult: [],
    searchQuery: null,
    loading: true

}

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        fetchedData: (state, action) => {       //This reducer helps to load the movies data initialy
            state.loading = true
            state.movies = action.payload
            state.searchResult = action.payload
            state.loading = false
            // console.log(state.movies)
        },
        sortByEpisode: (state, action) => {     //This reducer is used to sort the movie episods in accending order by its episodeId
            state.movies = state.searchResult?.sort((a, b) => a.episode_id - b.episode_id)
        },
        sortByYear: (state, action) => {        //This reducer is used to sort the movie episods in decending or latest to old order by its year of release
            state.movies = state.searchResult?.sort((a, b) => b.release_date.split("-")[0] - a.release_date.split("-")[0])
        },
        searchMovie: (state, action) => {       //This reducer is used to search the movie by searchQuery 
            // console.log("Serch Movie")
            state.searchQuery = action.payload
            // console.log(state.searchQuery)
            state.searchResult = state.movies.filter((movie) => movie['title'].toLowerCase().includes(state.searchQuery))
        }
    }
})

export const { fetchedData, sortByEpisode, sortByYear, searchMovie } = movieSlice.actions
export default movieSlice.reducer;