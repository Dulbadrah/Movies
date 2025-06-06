import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getMovieteam } from "../../utils/GetMovieteam";
import { TeamId } from "./TeamId";
import { TeamLoading } from "@/component/TeamLoading";

export const MovieTeam = () => {
  const [loading, setLoading] = useState(false);
  const [movieTeam, setMovieTeam] = useState(null);
  const router = useRouter();
  const team = router.query.movieId;

  useEffect(() => {
    const getMovie = async () => {
      if (!team) return;

      setLoading(true);
      try {
        const data = await getMovieteam(team);
        setMovieTeam(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getMovie();
  }, [team]);

  const directors = movieTeam?.crew?.filter(
    (person) => person.known_for_department === "Directing"
  );

  const writers = movieTeam?.crew?.filter(
    (person) => person.known_for_department === "Writing"
  );

  const stars = movieTeam?.cast?.filter(
    (person) => person.known_for_department === "Acting"
  );

  return (
    <div>
      {loading ? (
        <TeamLoading />
      ) : (
        <TeamId directors={directors} writers={writers} stars={stars} />
      )}
    </div>
  );
};
