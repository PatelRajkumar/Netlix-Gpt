import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { headerOptions } from "../utils/constant";
import { addTopRatedMovies, addUpComingMovies } from "../utils/movieSlice";
import { upcoming_movies_url } from "../utils/axios";

const useUpComingMovies = () => {
  const dispatch = useDispatch();
  const fetchMovies = async () => {
    const options = {
      method: "GET",
      headers: headerOptions,
    };
    const res = await fetch(upcoming_movies_url
      , options);
    const data = await res.json();
    dispatch(addUpComingMovies(data.results));
  };
  useEffect(() => {
    fetchMovies();
  }, []);

  return <div></div>;
};

export default useUpComingMovies;
