import { SearchMovieCard } from "./SearchMovieCard";

export const SearchResult = ({ movies, setSearchValue }) => {
  console.log(movies);
  return (
    <div className="absolute flex flex-col z-99 rounded-lg p-3 gap-4 bg-background">
      {movies &&
        movies?.results
          ?.slice(0, 4)
          ?.map((movie) => (
            <SearchMovieCard movie={movie} setSearchValue={setSearchValue} />
          ))}
    </div>
  );
};
