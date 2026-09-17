import { useParams, useNavigate } from "react-router-dom";
import { useMovieContext } from "../../../contexts/MovieContext/useMovieContext";
import { FeedbackMessage } from "../../../components/FeedbackMessage";
import { BackButton } from "../../../components/BackButton";

import styles from "./styles.module.css";

function getYoutubeEmbed(url: string) {
	const cleanUrl = url.trim().replace(/\/+$/, "");
	const videoId = cleanUrl.slice(-11);
	return `https://www.youtube.com/embed/${videoId}`;
}

export function SetEspecificMovie() {
	const { id } = useParams<{ id: string }>();
	const navigate = useNavigate();
	const {
		state: {
			allMoviesData: { value: allMovies },
		},
	} = useMovieContext();

	const movie = allMovies.find((m) => m.id === id);

	if (!movie) {
		return (
			<FeedbackMessage
				titleMessage="Filme não encontrado"
				tipMessage="Volte à página anterior e tente novamente"
			/>
		);
	}

	return (
		<div className={styles.content}>
			<BackButton onClick={() => navigate("/movies")} />
			<div className={styles.card}>
				<div className={styles.top}>
					<img className={styles.img} src={movie.attributes.poster} alt={movie.attributes.title} />
					<div className={styles.resume}>
						<h3>{movie.attributes.title}</h3>
						<p>
							<strong>Lançamento:</strong> {movie.attributes.release_date}
						</p>
						<p>
							<strong>Duração:</strong> {movie.attributes.running_time} minutos
						</p>
						<p>
							<strong>Resumo:</strong> {movie.attributes.summary}
						</p>
					</div>
				</div>
				<div className={styles.videoWrapper}>
					<iframe
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						src={getYoutubeEmbed(movie.attributes.trailer)}
					/>
				</div>
			</div>
		</div>
	);
}
