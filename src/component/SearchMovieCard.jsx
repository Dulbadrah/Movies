import { Separator } from "@radix-ui/react-dropdown-menu";
import { ArrowBigRight, Star } from "lucide-react";
// import Link from "next/link";
import { useRouter } from "next/router";

export const SearchMovieCard = ({ movie, setSearchValue }) => {
  const { id, poster_path, release_date, vote_average, original_title } = movie;
  const upComes = `${process.env.NEXT_PUBLIC_TMDB_IMAGE_SERVICE_URL}/original/${poster_path}`;
  const routers = useRouter();
  const routerPush = () => {
    routers?.push(`/details/${movie.id}`);
    setSearchValue("");
  };
  return (
    <div>
      <div
        onClick={routerPush}
        className="bg-secondary border-1 rounded-2xl p-1 flex w-full "
      >
        <img src={upComes} className="h-[100px] w-[67px] rounded-lg" />
        <div className="flex flex-col w-[500px] gap-4 md:pl-4">
          <div className="flex flex-col gap-2 md:gap-4 w-full">
            <div className="flex flex-col">
              <p className="text-[25px]">{original_title}</p>
              <div className="flex">
                <div>
                  <Star className="text-yellow-300 fill-amber-300" />
                </div>
                <div className="flex">
                  <p>{vote_average} </p>
                  <p>/10</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="h-[auto] w-full flex pb-2"> {release_date}</div>
            <div className="w-[130px] flex">
              See More
              <p>
                <ArrowBigRight />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Separator className="w-full" />
      </div>
    </div>
  );
};
