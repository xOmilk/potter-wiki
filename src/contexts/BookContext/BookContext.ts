import { createContext } from "react";
import type { Book } from "../../types/BookType";

export type BookContextType = {
	allBooks: {
		value: Book[];
		setAllBooks: React.Dispatch<React.SetStateAction<Book[]>>;
	};
	isLoading: boolean;
};

export const defaultBookValue: BookContextType = {
	allBooks: {
		value: [],
		setAllBooks: () => {},
	},
	isLoading: true,
};

export const BookContext = createContext(defaultBookValue);
