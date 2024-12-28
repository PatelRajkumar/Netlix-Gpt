import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { headerOptions } from "../utils/constant";
import { addTopRatedMovies } from "../utils/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const fetchMovies = async () => {
    const url =
      "https://api.themoviedb.org/3/movie/top_rated?page=1";
    const options = {
      method: "GET",
      headers: headerOptions,
    };
    const res = await fetch(url, options);
    const data = await res.json();
    dispatch(addTopRatedMovies(data.results));
  };
  useEffect(() => {
    fetchMovies();
  }, []);

  return <div></div>;
};

export default useTopRatedMovies;
