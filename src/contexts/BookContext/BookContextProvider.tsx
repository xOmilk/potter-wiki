import { useState, useEffect } from "react";
import { BookContext } from "./BookContext";
import type { Book } from "../../types/BookType";
import { fetchAllBooks } from "../../services/fetchBooks";

type BookContextProviderProps = {
	children: React.ReactNode;
};

export function BookContextProvider({
	children,
}: BookContextProviderProps) {
	const [allBooks, setAllBooks] = useState<Book[]>([]);

	useEffect(() => {
		const fetchBooks = async () => {
			try {
				const books = await fetchAllBooks();
				setAllBooks(books);
			} catch (error) {
				console.error("Erro ao carregar livros:", error);
			}
		};
		fetchBooks();
	}, []);

	const contextValue = {
		allBooks: { value: allBooks, setAllBooks },
	};

	return (
		<BookContext.Provider value={contextValue}>
			{children}
		</BookContext.Provider>
	);
}
