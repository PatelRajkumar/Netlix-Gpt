import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { headerOptions } from "../utils/constant";
import { now_playing_movies_url } from "../utils/axios";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const fetchMovies = async () => {
    const options = {
      method: "GET",
      headers: headerOptions,
    };
    const res = await fetch(now_playing_movies_url, options);
    const data = await res.json();
    dispatch(addNowPlayingMovies(data.results));
  };
  useEffect(() => {
    fetchMovies();
  }, []);

  return <div></div>;
};

export default useNowPlayingMovies;
