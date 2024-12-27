import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { headerOptions } from "../utils/constant";
import { useEffect } from "react";

const useMovieTrailer = (movieId:string) => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;
  const options = {
    method: "GET",
    headers: headerOptions,
  };
  const dispatch = useDispatch();   
  const getMovieVideos = async () => {
    try {
      const res = await fetch(url, options);
      const data = await res.json();
      const filterData = data.results.filter(
        (video: any) => video.type === "Trailer"
      );
      const trailer = filterData?.length ? filterData[0] : data.results[0];
      dispatch(addTrailerVideo(trailer))
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
}

export default useMovieTrailer