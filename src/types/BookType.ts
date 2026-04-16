export type BookAttributes = {
	id: string;
	title: string;
	author: string;
	pages: number;
	release_date: string;
	summary: string;
	dedication: string;
	cover: string;
	wiki: string;
};

export type Book = {
	id: string;
	attributes: BookAttributes;
};

export type BooksResponse = {
	data: Book[];
};

export type BookResponse = {
	data: Book;
};
