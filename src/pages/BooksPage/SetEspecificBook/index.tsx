import { useParams, useNavigate } from "react-router-dom";
import { useBookContext } from "../../../contexts/BookContext/useBookContext";
import { FeedbackMessage } from "../../../components/FeedbackMessage";
import styles from "./styles.module.css";

export function SetEspecificBook() {
	const { id } = useParams<{ id: string }>();
	const navigate = useNavigate();
	const { allBooks } = useBookContext();

	const book = allBooks.value.find((b) => b.id === id);

	if (!book) {
		return (
			<FeedbackMessage
				titleMessage="Livro não encontrado"
				tipMessage="Volte a página anterior e tente novamente"
			/>
		);
	}

	return (
		<section className={styles.content}>
			<button
				onClick={() => navigate("/books")}
				className={styles.backButton}
			>
				← Voltar
			</button>
			<div className={styles.resume}>
				<img
					src={book.attributes.cover}
					alt={`Capa de ${book.attributes.title}`}
					className={styles.img}
				/>
				<div className={styles.info}>
					<h3>{book.attributes.title}</h3>
					<p>
						<strong>Autor:</strong> {book.attributes.author}
					</p>
					<p>
						<strong>Páginas:</strong> {book.attributes.pages}
					</p>
					<p>
						<strong>Data de Lançamento:</strong>{" "}
						{new Date(
							book.attributes.release_date
						).toLocaleDateString("pt-BR")}
					</p>
					<p>
						<strong>Dedicatória:</strong>{" "}
						{book.attributes.dedication}
					</p>
					<p>
						<strong>Resumo:</strong> {book.attributes.summary}
					</p>
					{book.attributes.wiki && (
						<p>
							<a
								href={book.attributes.wiki}
								target="_blank"
								rel="noreferrer"
							>
								Ler no Wiki
							</a>
						</p>
					)}
				</div>
			</div>
		</section>
	);
}
