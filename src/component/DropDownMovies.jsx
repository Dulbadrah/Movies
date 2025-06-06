import { MovieCard } from "@/component/MovieCard";

export const DropDownMovies = ({ genreIds }) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {genreIds?.map((genre) => (
        <MovieCard key={genre.id} movies={genre} />
      ))}
    </div>
  );
};
