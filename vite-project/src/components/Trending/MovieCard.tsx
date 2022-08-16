import { Movie } from "./movieData"
import { BiTime } from "react-icons/bi"

const MovieCard = ({ movie }: { movie: Movie }) => {
    const { src, title, main, runtime } = movie
    return <div className="bg-txt-main rounded-md shadow-md shadow-back-main relative mt-5 overflow-hidden cursor-pointer hover:shadow-back-main hover:scale-105 transiton duration-150">
        <img src={src} className="w-full h-[370px]" />
        <div className="p-4 text-white">
            <h4>{title}</h4>
            <p>{main}</p>
        </div>
        <div className="flex justify-start items-center bg-cyan-50 rounded-md absolute top-2 left-2  p-2 min-w-[20%]">
            <BiTime />
            <p className="pl-1">{runtime}</p>
        </div>
    </div>
}

export default MovieCard