import { useSelector } from "react-redux"
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
    const movies = useSelector(state=>state.movies?.nowPlayingMovies)
    if(movies === null) return;
    const mainMovie = movies[0];
    const {original_title, overview,id} = mainMovie
  return (
    <div >
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground id={id}/>
    </div>
  )
}

export default MainContainer