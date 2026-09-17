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
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchMovies = async () => {
			try {
				const movies = await fetchAllMovies();
				setAllMoviesData(movies);
			} finally {
				setIsLoading(false);
			}
		};
		fetchMovies();
	}, []);

	const state = {
		allMoviesData: { value: allMoviesData, setAllMoviesData },
		searchTerm: { value: searchTerm, setSearchTerm },
		dontShow: { value: dontShow, setDontShow },
		showAll: { value: showAll, setShowAll },
		wantedMovie: { value: wantedMovie, setWantedMovie },
		isLoading,
	};

	return (
		<MovieContext.Provider value={{ state }}>
			{children}
		</MovieContext.Provider>
	);
}
