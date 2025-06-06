import { useEffect, useState } from "react";
import { getMoviePlay } from "../../utils/GetMoviePlay";

export const MoviePlay = () => {
  const [moviePlay, setMoviePlay] = useState([]);
  useEffect(() => {
    const getMovieById = async () => {
      try {
        const data = await getMoviePlay(movieId);
        setMoviePlay(data);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieById();
  }, [moviePlay]);
  console.log(moviePlay);

  return (
    <div>
      <button
        className="border-1 rounded bg-black text-white w-20"
        moviePlay={moviePlay}
      >
        Play
      </button>
    </div>
  );
};
