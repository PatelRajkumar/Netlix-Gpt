import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { headerOptions } from "../utils/constant";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const fetchMovies = async () => {
    const url =
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
    const options = {
      method: "GET",
      headers: headerOptions,
    };
    console.log(import.meta.env.VITE_TMDB_ACCESSTOKEN);
    const res = await fetch(url, options);
    const data = await res.json();
    dispatch(addNowPlayingMovies(data.results));
    console.log(data);
  };
  useEffect(() => {
    fetchMovies();
  }, []);

  return <div></div>;
};

export default useNowPlayingMovies;
