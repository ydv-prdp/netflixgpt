
const VideoTitle = ({title, overview}) => {
  return (
    <div className="pt-50 px-22 w-screen aspect-video bg-gradient-to-r from-black absolute  mx-auto z-[2] text-white">
        <h1 className="text-6xl font-bold">{title}</h1>
        <p className="py-6 text-lg w-1/4">{overview}</p>
        <div className="flex gap-2">
            <button className="cursor-pointer py-2 px-8 bg-white text-black rounded-lg hover:opacity-50">Play</button>
            <button className="cursor-pointer py-2 px-4 bg-gray-600 text-white">More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle