import { useState, useEffect } from "react";
import { MovieContext } from "./MovieContext";
import type { Movie } from "../../types/MoviesTypes";
import { fetchAllMovies } from "../../services/fetchMovies";

type MovieContextProviderProps = {
	children: React.ReactNode;
};

export function MovieContextProvider({ children }: MovieContextProviderProps) {
	const [allMoviesData, setAllMoviesData] = useState<Movie[]>([]);
	const [searchTerm, setSearchTerm] = useState<string>("");
	const [dontShow, setDontShow] = useState<boolean>(false);
	const [showAll, setShowAll] = useState<boolean>(true);
	const [wantedMovie, setWantedMovie] = useState<Movie | null>(null);

	// Fetch all movies on mount
	useEffect(() => {
		const fetchMovies = async () => {
			const movies = await fetchAllMovies();
			setAllMoviesData(movies);
		};
		fetchMovies();
	}, []);

	const state = {
		allMoviesData: { value: allMoviesData, setAllMoviesData },
		searchTerm: { value: searchTerm, setSearchTerm },
		dontShow: { value: dontShow, setDontShow },
		showAll: { value: showAll, setShowAll },
		wantedMovie: { value: wantedMovie, setWantedMovie },
	};

	return (
		<MovieContext.Provider value={{ state }}>
			{children}
		</MovieContext.Provider>
	);
}
