import { MovieCard } from "@/component/MovieCard";
import { AllGenres } from "../../component/Allgenres";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { genreMovieById } from "../../../utils/GenreMovieById";
import { GeneralidLoading } from "@/component/GeneralidLoading";

const Page = () => {
  const [genreMovies, setGenreMovie] = useState([]);
  const router = useRouter();
  const genreIds = router.query.genreIds;
  const [Loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const getGenreMovie = async () => {
      const data = await genreMovieById(genreIds);

      setGenreMovie(data.results);
    };
    setLoading(false);
    getGenreMovie();
  }, [genreIds]);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-10 justify-center p-6 max-w-[1440px]">
        <div className="flex flex-col gap-6">
          <h1 className="font-black text-[30px]">Search filter</h1>
          <div className="flex flex-col gap-2">
            <h1 className="font-black text-[20px]">Genres</h1>
            <h1 className="hidden xl:flex md:flex">
              See List of movies by genre
            </h1>
          </div>
        </div>
        <div className="xl:flex xl:justify-between xl:max-w-[1907px] xl:gap-30">
          <div>
            <AllGenres />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 xl:max-w-[907px] gap-6">
            {genreMovies?.map((genre) => (
              <MovieCard movies={genre} />
            ))}
            {Loading && <GeneralidLoading />}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
