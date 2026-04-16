import type { Movie } from "../types/MoviesTypes";

export type MovieStatesModel = {
	allMoviesData: {
		value: Movie[];
		setAllMoviesData: React.Dispatch<React.SetStateAction<Movie[]>>;
	};
	searchTerm: {
		value: string;
		setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
	};
};
