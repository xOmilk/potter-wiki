import { useMemo, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { Container } from "../../components/Container";
import { SearchDefault } from "../../components/SearchDefault";
import { SetAllBooks } from "./SetAllBooks";
import { useBookContext } from "../../contexts/BookContext/useBookContext";

function BooksComponents() {
	const [searchValue, setSearchValue] = useState("");
	const { id } = useParams();

	const { allBooks } = useBookContext();

	function onChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
		const text = e.target.value;
		setSearchValue(text);
	}

	const filteredBooks = useMemo(() => {
		return allBooks.value.filter((book) => {
			const title = book.attributes.title.toLowerCase();
			const author = book.attributes.author.toLowerCase();
			const search = searchValue.toLowerCase();
			return title.includes(search) || author.includes(search);
		});
	}, [allBooks.value, searchValue]);

	// If a book ID is in the URL, show the nested route (detail view)
	if (id) {
		return <Outlet />;
	}

	// Otherwise show the list view
	return (
		<Container>
			<SearchDefault>
				<SearchDefault.Input
					placeholder="Digite o título do livro"
					idInputElement="SearchBooks"
					value={searchValue}
					onChange={onChangeInput}
				/>
			</SearchDefault>

			<SetAllBooks books={filteredBooks} />
		</Container>
	);
}

export function BooksPage() {
	return <BooksComponents />;
}
