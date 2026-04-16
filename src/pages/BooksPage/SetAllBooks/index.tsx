import { useNavigate } from "react-router-dom";
import { FeedbackMessage } from "../../../components/FeedbackMessage";
import type { Book } from "../../../types/BookType";
import styles from "./styles.module.css";

type SetAllBooksProps = {
	books: Book[];
};

export function SetAllBooks({ books }: SetAllBooksProps) {
	const navigate = useNavigate();

	if (books.length === 0) {
		return (
			<FeedbackMessage
				titleMessage="Nenhum livro encontrado"
				tipMessage="Tente outra busca"
			/>
		);
	}

	const handleBookClick = (book: Book) => {
		navigate(`/books/${book.id}`);
	};

	return (
		<div className={styles.container}>
			<div className={styles.listOfBooks}>
				{books.map((book) => (
					<div
						key={book.id}
						className={styles.book}
						onClick={() => handleBookClick(book)}
					>
						<img
							src={book.attributes.cover}
							alt={`Capa de ${book.attributes.title}`}
							className={styles.bookCover}
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
								<strong>Lançamento:</strong>{" "}
								{new Date(
									book.attributes.release_date
								).toLocaleDateString("pt-BR")}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
