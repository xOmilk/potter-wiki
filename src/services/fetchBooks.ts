import { type Book, type BooksResponse, type BookResponse } from "../types/BookType";

const API_URL = "https://api.potterdb.com/v1/books";

export async function fetchAllBooks(): Promise<Book[]> {
	const response = await fetch(API_URL);
	if (!response.ok) throw new Error("Erro ao buscar livros");
	const data: BooksResponse = await response.json();
	return data.data;
}

export async function fetchBookById(id: string): Promise<Book | null> {
	const response = await fetch(`${API_URL}/${id}`);
	if (!response.ok) return null;
	const data: BookResponse = await response.json();
	return data.data ?? null;
}
