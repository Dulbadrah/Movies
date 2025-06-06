import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { GetMovieByid } from "../../../utils/GetMovieById";
import { DetailsHomePage } from "../../component/DetailsHomePage";
import { MoreLikeThis } from "../../component/MoreLikeThis";
import { MovieTeam } from "../../component/MovieTeam";
import { MovieDetailsLoading } from "@/component/MovieDetailsLoading";
import { MoviePlay } from "@/component/MoviePlay";

export default function Page() {
  const router = useRouter();
  const movieId = router.query.movieId;
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    if (!movieId) return;
    const getMovie = async () => {
      const data = await GetMovieByid(movieId);
      setMovie(data);
    };
    setLoading(false);
    getMovie();
  }, [movieId]);
  return (
    <div className=" flex flex-col items-center">
      <div className="md:max-w-[1648px] flex flex-col gap-6">
        <DetailsHomePage movies={movie} />
        {loading && <MovieDetailsLoading />}
        <MovieTeam />
        <MoviePlay />
        <MoreLikeThis />
      </div>
    </div>
  );
}
