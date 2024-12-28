import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const { nowPlayingMovies,popularMovies, topRatedMovies,upComingMovies } = useSelector((store: any) => store.movies);
  return (
    <div className="bg-black">
      <div className="-mt-72 relative z-20">
        <MovieList title="Now Playing" movies={nowPlayingMovies} />
        <MovieList title="Popular" movies={popularMovies} />
        <MovieList title="Top Rated" movies={topRatedMovies} />
        <MovieList title="Upcoming" movies={upComingMovies} />
        {/* <MovieList title="Now Playing" movies={nowPlayingMovies}/> */}
      </div>
    </div>
  );
};

export default SecondaryContainer;
