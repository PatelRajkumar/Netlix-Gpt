import { useEffect } from "react";
import Header from "../component/Header";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import VideoBackground from "../component/VideoBackground";

const Browse = () => {
  useNowPlayingMovies();
  const movies = useSelector((store: any) => store?.movies?.nowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies[0];
  const { original_title, overview, id  } = mainMovie;
  const movieId = String(id)
  return (
    <div>
      <Header />
      <div className="w-screen aspect-video text-white bg-gradient-to-r from-black absolute pt-48 px-16">
        <h1 className="text-5xl font-bold">{original_title}</h1>
        <p className="text-lg w-[25%] my-3">{overview}</p>
        <div>
          <button className="m-2 p-1 bg-white text-black border border-black text-lg w-20 rounded-md hover:bg-opacity-50">
            Play
          </button>
          <button className="m-2 p-1 bg-black text-white text-lg px-2 rounded-md">
            More Info
          </button>
        </div>
      </div>
      <VideoBackground movieId={movieId}/>
    </div>
  );
};

export default Browse;
