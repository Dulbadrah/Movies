import { MovieTrailer } from "@/component/MovieTrailer";
import { Play, Star } from "lucide-react";

export const DetailsHomePage = ({ movies }) => {
  const imageUrl = `${process.env.NEXT_PUBLIC_TMDB_IMAGE_SERVICE_URL}/original${movies?.backdrop_path}`;
  const upComes = `${process.env.NEXT_PUBLIC_TMDB_IMAGE_SERVICE_URL}/original${movies?.poster_path}`;
  return (
    <div>
      <div className="flex flex-col ">
        <div className="flex h-full w-full justify-between p-4">
          <div>
            <div className=" text-[30px]">{movies?.title}</div>
            <div className="flex gap-2">
              <div>{movies?.release_date}</div>
              <div> {movies?.runtime}min</div>
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <Star className="text-yellow-300 fill-amber-300" />
            </div>
            <div>
              <p>{movies?.vote_average}</p>
              <p className="text-[12px]">{movies?.popularity} K</p>
            </div>
          </div>
        </div>
        <div className="flex gap-6">
          <div className=" md:w-[500px] hidden md:inline">
            <img
              src={upComes}
              alt="Image"
              className="md:h-full md:w-auto hidden md:inline object-cover"
            />
          </div>
          <div className=" relative flex flex-col justify-end">
            <img
              src={imageUrl}
              alt={"Movie Image"}
              className="h-full w-screen object-cover relative"
            />
            <div className="absolute p-4">
              <MovieTrailer movieId={movies.id} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className=" max-w-[200px] md:hidden ">
          <img
            src={upComes}
            alt=""
            className="h-auto w-auto inline object-cover"
          />
        </div>
        <div className=" p-6 space-y-6 w-full mx-auto rounded-2xl ">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {movies?.genres?.map((genre, index) => (
              <p
                key={index}
                className="border border-gray-500 rounded-full px-3 py-1 text-xs"
              >
                {genre?.name}
              </p>
            ))}
          </div>
          {/* Description */}
          <p className="text-gray-400">{movies?.overview}</p>
        </div>
      </div>
    </div>
  );
};
