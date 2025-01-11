import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { headerOptions } from "../utils/constant";
import { addPopularMovies } from "../utils/movieSlice";
import { popular_movies_url } from "../utils/axios";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const fetchMovies = async () => {
    const options = {
      method: "GET",
      headers: headerOptions,
    };
    const res = await fetch(popular_movies_url, options);
    const data = await res.json();
    dispatch(addPopularMovies(data.results));
  };
  useEffect(() => {
    fetchMovies();
  }, []);

  return <div></div>;
};

export default usePopularMovies;
