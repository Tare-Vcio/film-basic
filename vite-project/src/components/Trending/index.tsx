import { moviesData } from "./movieData"
import  MovieCard from "./MovieCard"

const Index = () => {
    return (
        <>
            <h3 className="border-b border-back-sub font-s text-txt-main pb-2">Trending</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
                {moviesData.map((movie, index) =>
                    <MovieCard key={index} movie={movie} />
                )}
            </div>
            <div className="flex justify-center">
                <button className="btn hover:scale-125 transition ease-out duration-300">Load more</button>
            </div>
        </>
    )
}

export default Index