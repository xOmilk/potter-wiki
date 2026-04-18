import { useNavigate } from "react-router-dom";
import { FeedbackMessage } from "../../../components/FeedbackMessage";
import type { Movie } from "../../../types/MoviesTypes";
import styles from "./styles.module.css";

type SetAllMoviesProps = {
	movies: Movie[];
};

export function SetAllMovies({ movies }: SetAllMoviesProps) {
	const navigate = useNavigate();

	if (movies.length === 0) {
		return (
			<FeedbackMessage
				titleMessage="Nenhum filme encontrado"
				tipMessage="Tente outra busca"
			/>
		);
	}

	const handleMovieClick = (movie: Movie) => {
		navigate(`/movies/${movie.id}`);
	};

	return (
		<div className={styles.container}>
			<div className={styles.listOfMovies}>
				{movies.map((element) => (
					<div
						key={element.id}
						className={styles.movie}
						onClick={() => handleMovieClick(element)}
					>
						<img
							src={element.attributes.poster}
							alt="Poster Imagem"
							title="Poster Imagem"
						/>
						<h3>{element.attributes.title}</h3>
						<p>{element.id}</p>
					</div>
				))}
			</div>
		</div>
	);
}
