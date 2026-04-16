import { useContext } from "react";
import { BookContext } from "./BookContext";

export function useBookContext() {
	const context = useContext(BookContext);

	if (!context) {
		throw new Error(
			"useBookContext deve ser utilizado dentro de BookContextProvider"
		);
	}

	return context;
}
