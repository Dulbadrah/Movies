import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { SearchResult } from "./SearchResulr";

export const SearchInput = () => {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);
  const searchMovie = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}search/movie?query=${searchValue}&language=en-US&page=1`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
          },
        }
      );
      const movies = await response.json();
      setMovies(movies);
      //   console.log(movies);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    searchMovie();
  }, [searchValue]);
  return (
    <div className="w-[397px] h-[36px] rounded-lg border-1 relative">
      <form className="max-w-md mx-auto">
        <Input
          className={"block w-full p-2 ps-10 text-sm"}
          id="default-search"
          onChange={(event) => setSearchValue(event.target.value)}
          value={searchValue}
          type="search"
          placeholder="Search..."
          required
        />
      </form>
      <div className="pt-8">
        {movies?.results?.length > 0 && (
          <SearchResult movies={movies} setSearchValue={setSearchValue} />
        )}
      </div>
    </div>
  );
};
