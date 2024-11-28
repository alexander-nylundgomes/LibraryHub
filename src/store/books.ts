import type { Book } from "@/interfaces/book";
import type { BookStore } from "@/interfaces/book-store";
import type { LoanStore } from "@/interfaces/loan-store";
import axios from "axios";
import { defineStore } from "pinia";

export const useBookStore = defineStore('book', {
	state: (): BookStore => ({
		books: []
	}),
	getters: {
		getBook: (state) => {
			return (bookId: number): Book | undefined => state.books.find(book => book.id === bookId); 
		}
	},
	actions: {
		async fetchBooks() {
			try {
				this.books = (await axios.get('/example-data/books/books.json')).data
				console.log(this.books)
			} catch (error) {
				return error;
			}
		}
	},
})