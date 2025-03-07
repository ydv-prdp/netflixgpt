import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utlis/constants"
import { addNowPlayingTrailer } from "../utlis/movieSlice"
import { useEffect } from "react"

export const getMovieTrailer = async(id)=>{
    const dispatch = useDispatch()
    const getResponse = async(id)=>{
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,API_OPTIONS)
        const data = await response.json()
        const trailer = data.results.filter(movie=>movie.name.includes('Official Trailer'))
        dispatch(addNowPlayingTrailer(trailer))
    }
    useEffect(()=>{
        getResponse(id)
    },[])
}