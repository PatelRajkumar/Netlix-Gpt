import React from "react";
import { IMG_CDN } from "../../utils/constant";

type MovieListProps = {
  title: string;
  movies: any;
};
const MovieList = ({ title, movies }: MovieListProps) => {
  console.log(title, movies);
  return (
    <div className="p-6 bg-transparent text-white">
      <h1 className="text-2xl">{title}</h1>
      <div className="flex overflow-x-scroll hide-scrollbar">
        <div className="flex">
          {movies?.map((movie: any) => (
            <div key={movie?.id} className="w-48 pr-4">
              <img src={IMG_CDN + movie?.poster_path} alt="poster" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
