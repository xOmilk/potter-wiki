import type { MovieStatesModel } from "../../models/MovieStatesModel";
import type { Movie } from "../../types/MoviesTypes";

const noopSetAllMoviesData: React.Dispatch<
	React.SetStateAction<Movie[]>
> = () => {};
const noopSetSearchTerm: React.Dispatch<React.SetStateAction<string>> = () => {};
const noopSetDontShow: React.Dispatch<React.SetStateAction<boolean>> = () => {};
const noopSetShowAll: React.Dispatch<React.SetStateAction<boolean>> = () => {};
const noopSetWantedMovie: React.Dispatch<React.SetStateAction<Movie | null>> = () => {};

export const movieContextDefaultValue: MovieStatesModel = {
	allMoviesData: {
		value: [],
		setAllMoviesData: noopSetAllMoviesData,
	},
	searchTerm: {
		value: "",
		setSearchTerm: noopSetSearchTerm,
	},
	dontShow: {
		value: false,
		setDontShow: noopSetDontShow,
	},
	showAll: {
		value: true,
		setShowAll: noopSetShowAll,
	},
	wantedMovie: {
		value: null,
		setWantedMovie: noopSetWantedMovie,
	},
};
