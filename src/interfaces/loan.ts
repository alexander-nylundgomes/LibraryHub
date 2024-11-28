import type { LoanStatus } from "@/enums/loan-status"
import type { Book } from "./book"

export interface Loan{
	book: Book,
	expirationDate: number
}