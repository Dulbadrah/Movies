import { useRouter } from "next/router";
import { parseAsArrayOf, parseAsInteger, useQueryState } from "nuqs";
import { useEffect, useState } from "react";

export const AllGenres = () => {
  const router = useRouter();
  const [genres, setGenres] = useState([]);

  const [genreIds, setGenreIds] = useQueryState(
    "genreIds",
    parseAsArrayOf(parseAsInteger).withDefault([])
  );
  const getMovieGenres = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}genre/movie/list?language=en`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
          },
        }
      );

      const movies = await response.json();
      setGenres(movies);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovieGenres();
  }, []);

  const genreSelect = (id, name) => {
    const newGenreIds = genreIds.includes(id)
      ? genreIds.filter((t) => t !== id)
      : [...genreIds, id];
    setGenreIds(newGenreIds);

    router.push(`/genre/genre?genreIds=${newGenreIds}&name=${name}`);
  };

  return (
    <div className="grid grid-cols-3 gap-4 md:gap-9">
      {genres?.genres?.map((genre) => {
        // console.log(genreIds);
        const isSelected = genreIds?.includes(genre.id);

        return (
          <div
            className={`text-foreground dark:text-black text-[12px] font-bold h-8 flex justify-center items-center rounded-md border-1 ${
              isSelected ? "bg-blue-300" : "bg-white"
            }`}
            onClick={() => genreSelect(genre.id, genre.name)}
          >
            {genre.name}
          </div>
        );
      })}
    </div>
  );
};
