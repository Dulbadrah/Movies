import { Button } from "@/components/ui/button";

import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import { getMovieTrailer } from "../../utils/getMovieTrailer";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Play } from "lucide-react";

export const MovieTrailer = ({ movieId }) => {
  // console.log(movieId);
  const [trailer, setTrailer] = useState([]);
  useEffect(() => {
    const getMovieTrailerById = async () => {
      if (!movieId) return;
      try {
        const data = await getMovieTrailer(movieId);
        setTrailer(data?.results);
      } catch (error) {
        console.error("Failed to fetch movie trailer", error);
      }
    };
    getMovieTrailerById();
  }, [movieId]);
  const MovieTrailer = trailer?.find(
    (vidio) => (vidio.name = "Official Trailer")
  );
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          {" "}
          <Play />
          Trailer
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[991px]">
        <YouTube
          videoId={MovieTrailer?.key}
          opts={{
            height: "561",
            width: "100%",
            playerVars: {
              autoplay: 1,
            },
          }}
        />
      </DialogContent>
    </Dialog>
  );
};
