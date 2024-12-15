import { useEffect } from "react";
import Header from "../component/Header";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const Browse = () => {
  useNowPlayingMovies()
  return (
    <div>
      <Header />
      Browse
    </div>
  );
};

export default Browse;
