import { useDispatch } from "react-redux"
import { API_OPTIONS, TMDB_URL } from "../utlis/constants"
import { addNowPlayinMovies } from "../utlis/movieSlice"
import { useEffect } from "react"


const useNowPlayingMovies = async() => {
    const dispatch = useDispatch()
    const response = await fetch(TMDB_URL,API_OPTIONS)
    const data = await response.json()
    dispatch(addNowPlayinMovies(data?.results))
}



export default useNowPlayingMovies