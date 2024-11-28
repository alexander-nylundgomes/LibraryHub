import type { LoanStore } from "@/interfaces/loan-store";
import axios from "axios";
import { defineStore } from "pinia";

export const useLoanStore = defineStore('loans', {
	state: (): LoanStore => ({
		loans: []
	}),
	getters: {
		getLoans: (store) => store.loans 
	},
	actions: {
		async fetchLoans() {
			try {
				this.loans = (await axios.get('/example-data/loans/loans.json')).data
			} catch (error) {
				return error;
			}
		}
	},
})