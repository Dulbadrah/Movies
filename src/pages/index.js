import { MovieCaruosel } from "@/component/MovieCaruosel";
import { MovieCardsView } from "@/component/MovieCardsView";
import { useEffect, useState } from "react";
import { HomePageLoading } from "@/component/HomePageLoading";
import { MovieLoading } from "@/component/MovieLoading";

export default function Home() {
  const [NowPLayingMovie, setNowPlayingMovie] = useState([]);
  const [upComingMovies, setUpcomingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  // carousel
  const [loading, setLoading] = useState(false);
  const getNowPlayingMovies = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/movie/now_playing?language=en-US&page=1`,

        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
          },
        }
      );
      const movies = await response.json();
      setNowPlayingMovie(movies.results);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
  //

  // upcoming
  const [uploading, setUploading] = useState(false);
  const getupComingMovies = async () => {
    setUploading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/movie/upcoming?language=en-US&page=1`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
          },
        }
      );
      const movies = await response.json();
      setUpcomingMovies(movies.results);
    } catch (error) {
      console.log(error);
    }
    setUploading(false);
  };
  useEffect(() => {
    getupComingMovies();
  }, []);
  //

  // Popular
  const [poploading, setPoploading] = useState(false);
  const getPopularMovies = async () => {
    setPoploading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/movie/popular?language=en-US&page=1`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
          },
        }
      );
      const movies = await response.json();
      setPopularMovies(movies.results);
    } catch (error) {
      console.log(error);
    }
    setPoploading(false);
  };
  useEffect(() => {
    getPopularMovies();
  }, []);
  //

  // TopRated
  const [toploading, setToploading] = useState(false);
  const getTopRatedMovies = async () => {
    setToploading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/movie/top_rated?language=en-US&page=1`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
          },
        }
      );
      const movies = await response.json();
      setTopRatedMovies(movies.results);
    } catch (error) {
      console.log(error);
    }
    setToploading(false);
  };
  useEffect(() => {
    getTopRatedMovies();
  }, []);
  //

  return (
    <div className="flex flex-col gap-8">
      {loading && <HomePageLoading />}
      <MovieCaruosel NowPLayingMovie={NowPLayingMovie} />
      {uploading && <MovieLoading />}
      {poploading && <MovieLoading />}
      {toploading && <MovieLoading />}

      <MovieCardsView
        upComingMovies={upComingMovies}
        popularMovies={popularMovies}
        topRatedMovies={topRatedMovies}
      />
    </div>
  );
}
