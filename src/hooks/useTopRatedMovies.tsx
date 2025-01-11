import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { headerOptions } from "../utils/constant";
import { addTopRatedMovies } from "../utils/movieSlice";
import { top_rated_movies_url } from "../utils/axios";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const fetchMovies = async () => {
    const options = {
      method: "GET",
      headers: headerOptions,
    };
    const res = await fetch(top_rated_movies_url, options);
    const data = await res.json();
    dispatch(addTopRatedMovies(data.results));
  };
  useEffect(() => {
    fetchMovies();
  }, []);

  return <div></div>;
};

export default useTopRatedMovies;
