import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "../../../components/Container";
import { SearchDefault } from "../../../components/SearchDefault";
import { FeedbackMessage } from "../../../components/FeedbackMessage";
import { LoadingSpinner } from "../../../components/LoadingSpinner";
import { useMovieContext } from "../../../contexts/MovieContext/useMovieContext";
import styles from "./styles.module.css";

export function MovieList() {
	const { state } = useMovieContext();
	const [searchValue, setSearchValue] = useState("");
	const navigate = useNavigate();

	const filteredMovies = useMemo(() => {
		return state.allMoviesData.value.filter((movie) =>
			movie.attributes.title
				.toLowerCase()
				.includes(searchValue.toLowerCase())
		);
	}, [state.allMoviesData.value, searchValue]);

	if (state.isLoading) {
		return <LoadingSpinner text="Carregando filmes..." />;
	}

	return (
		<Container>
			<SearchDefault>
				<SearchDefault.Input
					placeholder="Digite o título do filme"
					idInputElement="SearchMovie"
					value={searchValue}
					onChange={(e) => setSearchValue(e.target.value)}
				/>
			</SearchDefault>

			{filteredMovies.length === 0 ? (
				<FeedbackMessage
					titleMessage="Nenhum filme encontrado"
					tipMessage="Tente outra busca"
				/>
			) : (
				<div className={styles.listWrapper}>
					{filteredMovies.map((movie) => (
						<div
							key={movie.id}
							className={styles.item}
							onClick={() => navigate(`/movies/${movie.id}`)}
						>
							<img
								src={movie.attributes.poster}
								alt={movie.attributes.title}
								className={styles.img}
							/>
							<div className={styles.info}>
								<h3>{movie.attributes.title}</h3>
								<p>
									<strong>Lançamento:</strong>{" "}
									{movie.attributes.release_date}
								</p>
								<p>
									<strong>Duração:</strong>{" "}
									{movie.attributes.running_time} min
								</p>
							</div>
						</div>
					))}
				</div>
			)}
		</Container>
	);
}
