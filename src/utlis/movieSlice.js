import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovies:null,
        nowPlayingTrailer:null
    },
    reducers:{
        addNowPlayinMovies:(state, action)=>{
            state.nowPlayingMovies =action.payload
        },
        addNowPlayingTrailer:(state,action)=>{
            state.nowPlayingTrailer= action.payload
        }
        
    }
})
export const {addNowPlayinMovies,addNowPlayingTrailer} = movieSlice.actions
export default movieSlice.reducer