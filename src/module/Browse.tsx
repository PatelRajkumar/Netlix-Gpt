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
  const { original_title, overview, id } = mainMovie;
  console.log("movies inside browse ", movies[0]);
  
  return (
    <div>
      <Header />
      <VideoBackground/>
      <div className="pt-48 px-16">
        <h1 className="text-5xl font-bold">{original_title}</h1>
        <p className="text-lg w-[40%] my-3">{overview}</p>
        <div>
          <button className="m-2 p-1 bg-gray-400 text-white border border-black text-lg w-20 bg-opacity-50 rounded-md">
            Play
          </button>
          <button className="m-2 p-1 bg-black text-white text-lg px-2 bg-opacity-50 rounded-md">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Browse;
