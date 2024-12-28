import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { headerOptions } from "../utils/constant";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const fetchMovies = async () => {
    const url =
      "https://api.themoviedb.org/3/movie/popular?page=1";
    const options = {
      method: "GET",
      headers: headerOptions,
    };
    const res = await fetch(url, options);
    const data = await res.json();
    dispatch(addPopularMovies(data.results));
  };
  useEffect(() => {
    fetchMovies();
  }, []);

  return <div></div>;
};

export default usePopularMovies;
