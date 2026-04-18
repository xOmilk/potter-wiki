import { useParams, useNavigate } from "react-router-dom";
import { useMovieContext } from "../../../contexts/MovieContext/useMovieContext";
import { FeedbackMessage } from "../../../components/FeedbackMessage";
import syles from "./styles.module.css";
import { ArrowLeftIcon } from "lucide-react";

function getYoutubeEmbed(url: string) {
	// Remove possíveis barras no final
	const cleanUrl = url.trim().replace(/\/+$/, "");
	// Pega os 11 últimos caracteres
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
				tipMessage="Volte a página anterior e tente novamente"
			/>
		);
	}

	return (
		<section className={syles.content}>
			<div className={syles.resume}>
				<button
					onClick={() => navigate("/movies")}
					className={syles.backButton}
				>
					<ArrowLeftIcon />
					<span>Voltar</span>
				</button>
				<img
					className={syles.img}
					src={movie.attributes.poster}
					alt=""
				/>
				<h3>{movie.attributes.title}</h3>
				<p>ID: {movie.id}</p>
				<p>Data de Lançamento: {movie.attributes.release_date}</p>
				<p>Tempo de duração {movie.attributes.running_time}</p>
				<p>Resumo da Obra: {movie.attributes.summary}</p>
				<div className={syles.videoWrapper}>
					<iframe
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						src={getYoutubeEmbed(movie.attributes.trailer)}
					></iframe>
				</div>
			</div>
		</section>
	);
}
