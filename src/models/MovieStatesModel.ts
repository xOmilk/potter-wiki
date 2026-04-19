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
	dontShow: {
		value: boolean;
		setDontShow: React.Dispatch<React.SetStateAction<boolean>>;
	};
	showAll: {
		value: boolean;
		setShowAll: React.Dispatch<React.SetStateAction<boolean>>;
	};
	wantedMovie: {
		value: Movie | null;
		setWantedMovie: React.Dispatch<React.SetStateAction<Movie | null>>;
	};
};
