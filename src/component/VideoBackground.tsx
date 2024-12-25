import React, { useEffect } from "react";
import { headerOptions } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const VideoBackground = () => {
  const dispatch = useDispatch();   
  const {trailerVideo} = useSelector((store:any)=>store.movies)
  const url = "https://api.themoviedb.org/3/movie/845781/videos?language=en-US";
  const options = {
    method: "GET",
    headers: headerOptions,
  };
  const getMovieVideos = async () => {
    try {
      const res = await fetch(url, options);
      const data = await res.json();
      const filterData = data.results.filter(
        (video: any) => video.type === "Trailer"
      );
      console.log("Filterdata: ", filterData);
      const trailer = filterData?.length ? filterData[0] : data.results[0];
      console.log("Trailer: " + trailer.key);
      dispatch(addTrailerVideo(trailer))
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${trailerVideo.key}?si=-r-58Lk2XZS0hmrE`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
