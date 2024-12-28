import React, { useEffect } from "react";
import { headerOptions } from "../../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../../utils/movieSlice";
import useMovieTrailer from "../../hooks/useMovieTrailer";

type VideoBackgroundProps = {
  movieId: string;
};
const VideoBackground = ({ movieId }: VideoBackgroundProps) => {
  const { trailerVideo } = useSelector((store: any) => store.movies);
  useMovieTrailer(movieId);
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?si=-r-58Lk2XZS0hmrE&autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
