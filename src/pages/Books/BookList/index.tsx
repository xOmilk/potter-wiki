import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "../../../components/Container";
import { SearchDefault } from "../../../components/SearchDefault";
import { FeedbackMessage } from "../../../components/FeedbackMessage";
import { LoadingSpinner } from "../../../components/LoadingSpinner";
import { useBookContext } from "../../../contexts/BookContext/useBookContext";
import styles from "./styles.module.css";

export function BookList() {
	const [searchValue, setSearchValue] = useState("");
	const { allBooks, isLoading } = useBookContext();
	const navigate = useNavigate();

	const filteredBooks = useMemo(() => {
		return allBooks.value.filter((book) => {
			const title = book.attributes.title.toLowerCase();
			const author = book.attributes.author.toLowerCase();
			const search = searchValue.toLowerCase();
			return title.includes(search) || author.includes(search);
		});
	}, [allBooks.value, searchValue]);

	if (isLoading) {
		return <LoadingSpinner text="Carregando livros..." />;
	}

	return (
		<Container>
			<SearchDefault>
				<SearchDefault.Input
					placeholder="Digite o título do livro"
					idInputElement="SearchBooks"
					value={searchValue}
					onChange={(e) => setSearchValue(e.target.value)}
				/>
			</SearchDefault>

			{filteredBooks.length === 0 ? (
				<FeedbackMessage
					titleMessage="Nenhum livro encontrado"
					tipMessage="Tente outra busca"
				/>
			) : (
				<div className={styles.listWrapper}>
					{filteredBooks.map((book) => (
						<div
							key={book.id}
							className={styles.item}
							onClick={() => navigate(`/books/${book.id}`)}
						>
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
									<strong>Lançamento:</strong>{" "}
									{new Date(
										book.attributes.release_date
									).toLocaleDateString("pt-BR")}
								</p>
							</div>
						</div>
					))}
				</div>
			)}
		</Container>
	);
}
