import type { MovieStatesModel } from "../../models/MovieStatesModel";
import type { Movie } from "../../types/MoviesTypes";

const noopSetAllMoviesData: React.Dispatch<
	React.SetStateAction<Movie[]>
> = () => {};
const noopSetSearchTerm: React.Dispatch<React.SetStateAction<string>> = () => {};

export const movieContextDefaultValue: MovieStatesModel = {
	allMoviesData: {
		value: [],
		setAllMoviesData: noopSetAllMoviesData,
	},
	searchTerm: {
		value: "",
		setSearchTerm: noopSetSearchTerm,
	},
};
