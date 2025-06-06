import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getMoreLike } from "../../utils/GetMoreLike";
import { MovieLikeLoading } from "@/component/MovieLikeLoading";
import { MovieCard } from "@/component/MovieCard";

export const MoreLikeThis = () => {
  const [moreLike, setMoreLike] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const id = router.query.movieId;

  useEffect(() => {
    const getMore = async () => {
      if (!id) return;

      setLoading(true);
      try {
        const data = await getMoreLike(id);
        setMoreLike(data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getMore();
  }, [id]);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        <p className="pl-8 text-[25px]">More Like This</p>
        <div className="md:max-w-[1204px] p-6 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {loading ? (
            <MovieLikeLoading />
          ) : (
            moreLike
              ?.slice(0, 12)
              ?.map((like) => <MovieCard key={like.id} movies={like} />)
          )}
        </div>
      </div>
    </div>
  );
};
