import { useSelector } from "react-redux"
import { getMovieTrailer} from "../hooks/useCurrentMovieTrailer"

const VideoBackground = ({id}) => {
    getMovieTrailer(id)
    const trailer = useSelector(state=>state.movies.nowPlayingTrailer)
    console.log(trailer)

  return (
    <div className="absolute top-0 w-full z-[1]">
        <iframe className="w-screen aspect-video" src="https://www.youtube.com/embed/rUSdnuOLebE?autoplay=1" frameborder="0" allowfullscreen></iframe>
    </div>
  )
}

export default VideoBackground