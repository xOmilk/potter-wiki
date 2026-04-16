import { useMemo, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { Container } from "../../components/Container";
import { SetAllMovies } from "./SetAllMovies";
import { SearchDefault } from "../../components/SearchDefault";
import { useMovieContext } from "../../contexts/MovieContext/useMovieContext";

MoviesComponents.SetAllMovies = SetAllMovies;

export function MoviesComponents() {
	const { state } = useMovieContext();
	const [searchValue, setSearchValue] = useState("");
	const { id } = useParams();

	function onChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
		const text = e.target.value;
		setSearchValue(text);
	}

	const filteredMovies = useMemo(() => {
		return state.allMoviesData.value.filter((movie) => {
			return movie.attributes.title
				.toLowerCase()
				.includes(searchValue.toLowerCase());
		});
	}, [state.allMoviesData.value, searchValue]);

	// If a movie ID is in the URL, show the nested route (detail view)
	if (id) {
		return <Outlet />;
	}

	// Otherwise show the list view
	return (
		<div>
			<Container>
				<SearchDefault>
					<SearchDefault.Input
						placeholder="Digite o título do filme"
						idInputElement="SearchMovie"
						value={searchValue}
						onChange={onChangeInput}
					/>
				</SearchDefault>
			</Container>
			<Container>
				<MoviesComponents.SetAllMovies movies={filteredMovies} />
			</Container>
		</div>
	);
}

export function Movies() {
	return <MoviesComponents />;
}
